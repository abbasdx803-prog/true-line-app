// ============================================================
// OTP Module — Send, Verify, Resend OTP Codes
// متخصص فقط للتعامل مع الأكواد والتحقق
// ============================================================

const SUPABASE_URL = 'https://qdmindnmvwsrnbclzrxz.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkbWluZG5tdndzaI4d60d48OH0.dJzGFMUgaTrLzxih67UPI8yLZWu236Eu5VDNuN-9DRQ';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ============================================================
// 1️⃣ إرسال رمز OTP جديد
// ============================================================

async function sendOTP(email) {
  try {
    console.log('📧 [OTP] جاري إرسال رمز جديد لـ:', email);
    
    // توليد رمز 6 أرقام
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    console.log('🎲 [OTP] الرمز الجديد:', otpCode);
    
    // صلاحية 10 دقائق
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
    console.log('⏰ [OTP] صلاحية حتى:', expiresAt.toISOString());
    
    // 1) حفظ الرمز بـ Supabase
    console.log('💾 [OTP] جاري الحفظ بـ Supabase...');
    const { data: insertData, error: insertError } = await supabaseClient
      .from('otp')
      .insert({
        email: email,
        code: otpCode,
        expires_at: expiresAt.toISOString(),
        verified: false
      });
    
    if (insertError) {
      console.error('❌ [OTP] فشل الحفظ:', insertError);
      throw insertError;
    }
    console.log('✅ [OTP] تم الحفظ بنجاح');
    
    // 2) إرسال البريد عبر Netlify Function
    console.log('📬 [OTP] جاري إرسال البريد...');
    const emailResponse = await fetch('/.netlify/functions/sendOTP', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, otpCode: otpCode })
    });
    
    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      console.error('❌ [OTP] فشل إرسال البريد:', errorData);
      throw new Error(errorData.error);
    }
    
    console.log('✅ [OTP] تم إرسال البريد بنجاح');
    alert(`✅ تم إرسال الرمز إلى:\n${email}\n\n⏰ صالح لمدة 10 دقائق`);
    
    return { success: true, code: otpCode };
  } catch (error) {
    console.error('❌ [OTP] خطأ عام:', error);
    alert('❌ خطأ: ' + error.message);
    return { success: false, error: error.message };
  }
}

// ============================================================
// 2️⃣ التحقق من رمز OTP
// ============================================================

async function verifyOTP(email, code) {
  try {
    console.log('🔍 [OTP] جاري التحقق من الرمز:', code);
    console.log('📧 [OTP] البريد:', email);
    
    // 1) جلب أحدث OTP لهاي البريد
    console.log('📡 [OTP] جاري البحث بـ Supabase...');
    const { data: otpRecords, error: fetchError } = await supabaseClient
      .from('otp')
      .select('*')
      .eq('email', email)
      .eq('verified', false)
      .order('created_at', { ascending: false })
      .limit(1);
    
    if (fetchError) {
      console.error('❌ [OTP] خطأ البحث:', fetchError);
      throw fetchError;
    }
    
    if (!otpRecords || otpRecords.length === 0) {
      console.error('❌ [OTP] ما فيه أكواد للبريد هاد');
      throw new Error('لم يتم العثور على رمز تحقق');
    }
    
    const otpRecord = otpRecords[0];
    console.log('📋 [OTP] البيانات من Database:', {
      id: otpRecord.id,
      code: otpRecord.code,
      expires_at: otpRecord.expires_at,
      verified: otpRecord.verified,
      created_at: otpRecord.created_at
    });
    
    // 2) التحقق من الصلاحية
    if (!otpRecord.expires_at) {
      console.error('❌ [OTP] expires_at ناقصة — رمز قديم');
      throw new Error('الرمز قديم جداً — طلب رمز جديد');
    }
    
    const expiresAt = new Date(otpRecord.expires_at);
    const now = new Date();
    const secondsLeft = (expiresAt - now) / 1000;
    
    console.log('📅 [OTP] الآن:', now.toISOString());
    console.log('📅 [OTP] انتهاء الصلاحية:', expiresAt.toISOString());
    console.log('⏱️  [OTP] الوقت المتبقي (ثانية):', Math.round(secondsLeft));
    
    if (now > expiresAt) {
      console.error('❌ [OTP] انتهت الصلاحية!');
      throw new Error('انتهت صلاحية الرمز - طلب رمز جديد');
    }
    
    // 3) التحقق من صحة الرمز
    console.log('🔐 [OTP] التحقق من الرمز...');
    console.log('   المدخل:', code);
    console.log('   المتوقع:', otpRecord.code);
    
    if (otpRecord.code !== code) {
      console.error('❌ [OTP] الرمز غير صحيح!');
      throw new Error('الرمز غير صحيح');
    }
    
    console.log('✅ [OTP] الرمز صحيح!');
    
    // 4) تحديث الـ OTP ليصبح مستخدماً
    console.log('🔄 [OTP] جاري تحديث الحالة...');
    const { error: updateError } = await supabaseClient
      .from('otp')
      .update({ verified: true })
      .eq('id', otpRecord.id);
    
    if (updateError) {
      console.error('❌ [OTP] خطأ التحديث:', updateError);
      throw updateError;
    }
    
    console.log('✅ [OTP] تم تحديث الحالة بنجاح');
    console.log('✅ [OTP] تم التحقق من البريد بنجاح!');
    
    return { success: true };
  } catch (error) {
    console.error('❌ [OTP] فشل التحقق:', error.message);
    return { success: false, error: error.message };
  }
}

// ============================================================
// 3️⃣ إعادة إرسال الرمز
// ============================================================

async function resendOTP(email) {
  try {
    console.log('🔄 [OTP] جاري إعادة الإرسال لـ:', email);
    
    // حذف الأكواد القديمة (اختياري)
    await supabaseClient
      .from('otp')
      .delete()
      .eq('email', email)
      .eq('verified', false);
    
    console.log('🗑️  [OTP] تم حذف الأكواد القديمة');
    
    // إرسال رمز جديد
    return await sendOTP(email);
  } catch (error) {
    console.error('❌ [OTP] خطأ إعادة الإرسال:', error);
    return { success: false, error: error.message };
  }
}

// ============================================================
// Export to Global Scope
// ============================================================

window.sendOTP = sendOTP;
window.verifyOTP = verifyOTP;
window.resendOTP = resendOTP;

console.log('✅ OTP Module Loaded Successfully');

// ============================================================
// True LINE — Configuration & Supabase Integration
// ✅ جديد 100% — بدون مشاكل OTP expires_at
// ============================================================

const SUPABASE_URL = 'https://qdmindnmvwsrnbclzrxz.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkbWluZG5tdndzaI4d60d48OH0.dJzGFMUgaTrLzxih67UPI8yLZWu236Eu5VDNuN-9DRQ';
const ADMIN_EMAIL = 'abbasdx803@gmail.com';

let currentLanguage = 'ar';

// ✅ Supabase Client (استخدام رسمي من Supabase JS SDK)
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ============================================================
// Auth Functions — Supabase Authentication
// ============================================================

async function signUpUser(email, password) {
  try {
    const { data, error } = await supabaseClient.auth.signUp({
      email: email,
      password: password
    });
    
    if (error) throw error;
    return { user: data.user, error: null };
  } catch (error) {
    console.error('❌ Sign Up Error:', error.message);
    return { user: null, error: error };
  }
}

async function signInUser(email, password) {
  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password
    });
    
    if (error) throw error;
    return { user: data.user, session: data.session, error: null };
  } catch (error) {
    console.error('❌ Sign In Error:', error.message);
    return { user: null, session: null, error: error };
  }
}

async function signOutUser() {
  try {
    const { error } = await supabaseClient.auth.signOut();
    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error('❌ Sign Out Error:', error.message);
    return { error: error };
  }
}

async function getCurrentAuthUser() {
  try {
    const { data: { user }, error } = await supabaseClient.auth.getUser();
    if (error) throw error;
    return user;
  } catch (error) {
    console.error('❌ Get User Error:', error.message);
    return null;
  }
}

// ============================================================
// OTP Functions — Proper expires_at Handling
// ============================================================

async function sendOTP(email) {
  try {
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    
    console.log('📧 جاري حفظ OTP في Supabase...');
    
    // ✅ حساب صلاحية 10 دقائق بـ UTC
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);
    
    // ✅ استخدام supabaseClient.from() — أقوى من supabaseCall
    const { data: otpData, error: otpError } = await supabaseClient
      .from('otp')
      .insert({
        email: email,
        code: otpCode,
        expires_at: expiresAt.toISOString(),
        verified: false
      });
    
    if (otpError) throw new Error('فشل حفظ OTP: ' + otpError.message);
    
    console.log('✅ تم حفظ OTP في Supabase');
    console.log('⏰ صلاحية الرمز:', expiresAt.toISOString());
    
    // ✅ إرسال البريد عبر Netlify Function
    console.log('📧 جاري إرسال البريد...');
    
    const emailResponse = await fetch('/.netlify/functions/sendOTP', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, otpCode: otpCode })
    });
    
    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      throw new Error(`فشل إرسال البريد: ${errorData.error}`);
    }
    
    console.log('✅ تم إرسال البريد بنجاح');
    alert(`✅ تم إرسال رمز التحقق إلى:\n${email}\n\n⏰ صالح لمدة 10 دقائق`);
    
    return { success: true, code: otpCode };
  } catch (error) {
    console.error('❌ خطأ في OTP:', error);
    alert('❌ خطأ: ' + error.message);
    return { success: false, error: error.message };
  }
}

async function verifyOTP(email, code) {
  try {
    console.log('🔍 جاري التحقق من OTP...');
    
    // ✅ البحث عن أحدث OTP بـ supabaseClient (ليس supabaseCall)
    const { data: otpRecords, error: searchError } = await supabaseClient
      .from('otp')
      .select('*')
      .eq('email', email)
      .eq('verified', false)
      .order('created_at', { ascending: false })
      .limit(1);
    
    if (searchError || !otpRecords || otpRecords.length === 0) {
      throw new Error('لم يتم العثور على رمز تحقق');
    }
    
    const otpRecord = otpRecords[0];
    
    console.log('🔍 OTP Record:', otpRecord);
    
    // ✅ التحقق من expires_at بشكل صحيح
    if (!otpRecord.expires_at) {
      console.error('❌ expires_at مفقودة');
      throw new Error('الرمز قديم — طلب رمز جديد');
    }
    
    const expiresAt = new Date(otpRecord.expires_at);
    const now = new Date();
    const diffSeconds = (expiresAt - now) / 1000;
    
    console.log('📅 الآن:', now.toISOString());
    console.log('📅 انتهاء الصلاحية:', expiresAt.toISOString());
    console.log('⏱️ الفارق (ثواني):', diffSeconds);
    
    if (now > expiresAt) {
      console.error('❌ الرمز انتهت صلاحيته!');
      throw new Error('انتهت صلاحية الرمز - طلب رمز جديد');
    }
    
    // ✅ التحقق من صحة الرمز
    if (otpRecord.code !== code) {
      throw new Error('الرمز غير صحيح');
    }
    
    // ✅ تحديث الـ OTP ليصبح مستخدماً
    const { error: updateError } = await supabaseClient
      .from('otp')
      .update({ verified: true })
      .eq('id', otpRecord.id);
    
    if (updateError) throw updateError;
    
    console.log('✅ تم التحقق من البريد بنجاح');
    return { success: true };
  } catch (error) {
    console.error('❌ خطأ في التحقق:', error);
    return { success: false, error: error.message };
  }
}

// ============================================================
// Profile Management
// ============================================================

async function saveUserToSupabase(userId, userData) {
  try {
    const { error } = await supabaseClient
      .from('profiles')
      .upsert({
        id: userId,
        full_name: userData.fullName || '',
        phone: userData.phone || '',
        company: userData.company || '',
        country: userData.country || '',
        city: userData.city || '',
        description: userData.description || '',
        avatar_url: userData.avatarUrl || ''
      });
    
    if (error) throw error;
    console.log('✅ تم حفظ البروفايل');
    return { success: true };
  } catch (error) {
    console.error('❌ خطأ حفظ البروفايل:', error);
    return { success: false, error: error.message };
  }
}

async function loadUserFromSupabase(userId) {
  try {
    const { data: profile, error } = await supabaseClient
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (error) throw error;
    return { success: true, profile: profile };
  } catch (error) {
    console.error('❌ خطأ تحميل البروفايل:', error);
    return { success: false, profile: null };
  }
}

async function isCurrentUserAdmin() {
  try {
    const user = await getCurrentAuthUser();
    if (!user) return false;
    
    const { data: profile, error } = await supabaseClient
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();
    
    if (error) throw error;
    return profile?.role === 'admin';
  } catch (error) {
    console.error('❌ خطأ فحص الأدمن:', error);
    return false;
  }
}

// ============================================================
// Export Functions (للـ Global Scope)
// ============================================================

window.signUpUser = signUpUser;
window.signInUser = signInUser;
window.signOutUser = signOutUser;
window.getCurrentAuthUser = getCurrentAuthUser;
window.sendOTP = sendOTP;
window.verifyOTP = verifyOTP;
window.saveUserToSupabase = saveUserToSupabase;
window.loadUserFromSupabase = loadUserFromSupabase;
window.isCurrentUserAdmin = isCurrentUserAdmin;

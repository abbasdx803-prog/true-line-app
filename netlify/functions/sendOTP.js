/* ============================================================
   True LINE — إرسال رمز التحقق عبر MailerSend
   ------------------------------------------------------------
   🔒 التوكن لم يعد داخل الكود.
   يُقرأ من متغيرات بيئة Netlify:
   Site configuration → Environment variables → MAILERSEND_TOKEN
   ============================================================ */

const FROM_EMAIL = 'noreply@test-r6ke4n10d1egon12.mlsender.net'; // ليس سراً — يمكن بقاؤه هنا
const FROM_NAME  = 'True LINE';

exports.handler = async (event) => {
  console.log('📧 Netlify Function triggered');

  try {
    // 🔒 قراءة التوكن من متغيرات البيئة
    const MAILERSEND_TOKEN = process.env.MAILERSEND_TOKEN;

    if (!MAILERSEND_TOKEN) {
      console.error('❌ المتغير MAILERSEND_TOKEN غير معرّف في Netlify');
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: 'إعدادات الخادم ناقصة',
          details: 'MAILERSEND_TOKEN غير موجود في متغيرات بيئة Netlify'
        })
      };
    }

    const data = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    const { email, otpCode } = data || {};

    if (!email || !otpCode) {
      throw new Error('البريد أو الرمز مفقود');
    }

    console.log('إرسال إلى:', email);

    const response = await fetch('https://api.mailersend.com/v1/email', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MAILERSEND_TOKEN}`,
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify({
        from: { email: FROM_EMAIL, name: FROM_NAME },
        to: [{ email: email }],
        subject: 'رمز التحقق من True LINE',
        text: `رمز التحقق الخاص بك: ${otpCode} — صالح لمدة 10 دقائق`,
        html: `
<div style="direction:rtl;text-align:right;font-family:Tahoma,Arial,sans-serif;background:#f5f5f5;padding:24px;">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;padding:32px;">
    <h2 style="color:#E5121C;margin:0 0 16px;">مرحباً بك في True LINE</h2>
    <p style="color:#333;font-size:15px;margin:0 0 24px;">
      استخدم الرمز التالي لتأكيد بريدك الإلكتروني:
    </p>
    <div style="background:#faf3f3;border:2px solid #E5121C;border-radius:10px;padding:22px;text-align:center;margin:0 0 24px;">
      <div style="font-size:12px;color:#888;margin-bottom:8px;">رمز التحقق</div>
      <div style="font-size:38px;font-weight:bold;color:#E5121C;letter-spacing:8px;font-family:'Courier New',monospace;">${otpCode}</div>
    </div>
    <p style="color:#666;font-size:14px;margin:0 0 24px;">⏰ الرمز صالح لمدة 10 دقائق فقط</p>
    <hr style="border:none;border-top:1px solid #eee;margin:0 0 16px;">
    <p style="color:#aaa;font-size:12px;margin:0;">
      إذا لم تطلب هذا الرمز، تجاهل هذه الرسالة.<br>
      فريق True LINE Motion Graphics Studio
    </p>
  </div>
</div>`
      })
    });

    console.log('MailerSend status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('MailerSend error body:', errorText);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: `MailerSend ${response.status}`,
          details: errorText
        })
      };
    }

    console.log('✅ تم الإرسال بنجاح');
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };

  } catch (error) {
    console.error('❌ خطأ:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};

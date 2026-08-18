exports.handler = async (event) => {
  try {
    const { email, otpCode } = JSON.parse(event.body);

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer re_QWjVoVbo_DssKrLtQZrwoPQK42WKDtyyX',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'abbasdx803@gmail.com',
        to: email,
        subject: 'رمز التحقق من True LINE',
        html: `
          <div style="font-family: 'Arial', sans-serif; direction: rtl; text-align: right; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
            <div style="background-color: white; border-radius: 10px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #E5121C; margin-bottom: 20px;">مرحبا بك في True LINE</h2>
              <p style="color: #333; font-size: 16px; margin-bottom: 20px;">شكراً لك على إنشاء حساب جديد. استخدم الرمز أدناه:</p>
              <div style="background-color: #f0f0f0; border: 2px solid #E5121C; border-radius: 8px; padding: 20px; text-align: center; margin: 30px 0;">
                <p style="margin: 0; font-size: 36px; font-weight: bold; color: #E5121C; letter-spacing: 5px;">${otpCode}</p>
              </div>
              <p style="color: #666; font-size: 14px;">⏰ صالح لمدة 10 دقائق فقط</p>
            </div>
          </div>
        `
      })
    });

    if (!response.ok) {
      throw new Error('فشل إرسال البريد');
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
exports.handler = async (event, context) => {
  console.log('📧 Netlify Function triggered');
  console.log('Event body:', event.body);
  try {
    let data;

    if (typeof event.body === 'string') {
      data = JSON.parse(event.body);
    } else {
      data = event.body;
    }
    const { email, otpCode } = data;
    if (!email || !otpCode) {
      throw new Error('Missing email or otpCode');
    }
    console.log('Sending email to:', email);
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer re_Sv7uxwX1_4tVwN9gmaR6koKmFdHzEv6y7',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'abbasdx803@gmail.com',
        to: email,
        subject: 'رمز التحقق من True LINE',
        html: `<div style="direction:rtl;text-align:right;font-family:Arial;padding:20px;">
          <h2 style="color:#E5121C;">مرحبا بك في True LINE</h2>
          <p>رمز التحقق:</p>
          <div style="background:#f0f0f0;border:2px solid #E5121C;padding:20px;text-align:center;">
            <p style="font-size:36px;font-weight:bold;color:#E5121C;letter-spacing:5px;">${otpCode}</p>
          </div>
          <p>صالح لمدة 10 دقائق</p>
        </div>`
      })
    });
    console.log('Resend response:', response.status);
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Resend error:', errorText);
      throw new Error('Resend API error: ' + response.status);
    }
    const result = await response.json();
    console.log('✅ Email sent successfully');
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, messageId: result.id })
    };
  } catch (error) {
    console.error('❌ Error:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};

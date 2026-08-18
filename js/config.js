/* ===== True LINE — الإعدادات و Supabase و البريد ===== */
  // إعدادات Supabase
  const SUPABASE_URL = 'https://qdmindnmvwsrnbclzrxz.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkbWluZG5tdndzcm5iY2x6cnh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY4NzQyODgsImV4cCI6MjEwMjQ1MDI4OH0.dJzGFMUgaTrLzxih67UPI8yLZWu236Eu5VDNuN-9DRQ';

  // ⭐ عميل Supabase الرسمي (SDK) — يُستخدم للمصادقة (auth) بحيث تصير كلمات
  // المرور مُشفّرة (hashed) من طرف Supabase نفسه، وليست نصاً صريحاً بجدول عادي.
  // يعتمد على مكتبة supabase-js المضافة بـ index.html قبل هذا الملف.
  const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  /* ============================================================
     🔐 دوال المصادقة الآمنة (Supabase Auth)
     تستبدل النظام القديم الذي كان يخزّن الباسورد كنص صريح
     بجدول users ويقارنه يدوياً بالفرونت إند.
     ============================================================ */

  // تسجيل مستخدم جديد — Supabase يتكفّل بتشفير كلمة المرور
  async function signUpUser(email, password) {
    const { data, error } = await supabaseClient.auth.signUp({ email, password });
    if (error) return { success: false, error: error.message };
    return { success: true, user: data.user, session: data.session };
  }

  // تسجيل الدخول — التحقق من كلمة المرور يصير بالكامل على سيرفر Supabase
  async function signInUser(email, password) {
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) return { success: false, error: error.message };
    return { success: true, user: data.user, session: data.session };
  }

  // تسجيل الخروج — يمسح الجلسة الحقيقية (JWT) من Supabase
  async function signOutUser() {
    const { error } = await supabaseClient.auth.signOut();
    return { success: !error, error: error ? error.message : null };
  }

  // إرسال رابط استرجاع كلمة المرور عبر بريد Supabase الرسمي
  // (بديل آمن لتحديث الباسورد مباشرة بدون تحقق من الهوية)
  async function requestPasswordReset(email) {
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + window.location.pathname
    });
    return { success: !error, error: error ? error.message : null };
  }

  // تحديث كلمة المرور — يُستخدم فقط بعد أن يفتح المستخدم رابط الاسترجاع
  // (بهذه اللحظة يملك جلسة recovery صالحة من Supabase تثبت هويته)
  async function updateUserPassword(newPassword) {
    const { error } = await supabaseClient.auth.updateUser({ password: newPassword });
    return { success: !error, error: error ? error.message : null };
  }

  // ⭐ عندما يفتح المستخدم رابط استرجاع كلمة المرور من بريده، Supabase
  // يرجّعه للموقع بحالة PASSWORD_RECOVERY — هون نعرضله شاشة كلمة مرور جديدة
  supabaseClient.auth.onAuthStateChange((event) => {
    if (event === 'PASSWORD_RECOVERY') {
      if (typeof showScreen === 'function') {
        showScreen('screen-set-new-password');
      }
    }
  });

  // إرجاع المستخدم الحالي من الجلسة الحقيقية (وليس من localStorage فقط)
  async function getCurrentAuthUser() {
    const { data, error } = await supabaseClient.auth.getUser();
    if (error || !data.user) return null;
    return data.user;
  }

  // فحص صلاحية الأدمن من جدول profiles (محمي بـ RLS) — وليس من localStorage
  // مهم: هذا يمنع فقط من إظهار عناصر الواجهة. الحماية الفعلية تصير عبر
  // RLS Policy على السيرفر تتحقق من نفس العمود role باستخدام auth.uid().
  async function isCurrentUserAdmin() {
    const user = await getCurrentAuthUser();
    if (!user) return false;
    const { data, error } = await supabaseClient
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();
    if (error || !data) return false;
    return data.role === 'admin';
  }

  // دالة عامة للاتصال بـ Supabase REST API
  async function supabaseCall(method, table, data = null, filters = null) {
    try {
      let url = `${SUPABASE_URL}/rest/v1/${table}`;

      const options = {
        method: method,
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        }
      };

      // بناء الـ URL مع الفلاتر
      if (method === 'GET') {
        const queryParams = [];
        // إضافة limit افتراضي لجلب جميع البيانات
        queryParams.push('limit=1000');

        if (filters) {
          for (const [key, value] of Object.entries(filters)) {
            if (key === 'order') {
              queryParams.push(`order=${value}`);
            } else {
              queryParams.push(`${key}=${encodeURIComponent(value)}`);
            }
          }
        }
        if (queryParams.length > 0) {
          url += '?' + queryParams.join('&');
        }
      }

      if (method === 'POST' || method === 'PATCH') {
        options.body = JSON.stringify(data);
        console.log('📦 Body:', data);
        // إضافة الفلاتر للـ PATCH
        if (method === 'PATCH' && filters) {
          const queryParams = [];
          for (const [key, value] of Object.entries(filters)) {
            queryParams.push(`${key}=${encodeURIComponent(value)}`);
          }
          if (queryParams.length > 0) {
            url += '?' + queryParams.join('&');
          }
        }
      }

      // إضافة الفلاتر للـ DELETE
      if (method === 'DELETE' && filters) {
        const queryParams = [];
        for (const [key, value] of Object.entries(filters)) {
          queryParams.push(`${key}=${encodeURIComponent(value)}`);
        }
        if (queryParams.length > 0) {
          url += '?' + queryParams.join('&');
        }
      }

      console.log('📤 Supabase Request:', method, url);
      console.log('🔑 Headers:', options.headers);
      if (method === 'DELETE') {
        console.log('🗑️ DELETE Request - URL:', url);
        console.log('🗑️ DELETE Request - Filters:', filters);
      }

      const response = await fetch(url, options);

      console.log('📊 Response Status:', response.status, response.statusText);
      if (method === 'DELETE') {
        console.log('🗑️ DELETE Response Status:', response.status);
      }

      if (!response.ok) {
        const errorData = await response.text();
        console.error('❌ Supabase Response Error:', response.status, errorData);
        throw new Error(`HTTP ${response.status}: ${errorData}`);
      }

      const result = await response.json();
      console.log('✅ Supabase Response:', result);
      console.log('💾 البيانات المحفوظة:', result);
      return { data: result, error: null };
    } catch (error) {
      console.error('❌ Supabase Error:', error);
      return { data: null, error: error.message };
    }
  }

  console.log('✅ Supabase REST API جاهز');

  // 🎥 إعدادات رفع الفيديوهات والصور
  const BUCKET_NAME = 'true line';
  const ADMIN_EMAIL = 'abbasdx803@gmail.com';

  // Cloudinary Configuration للصور
  const CLOUDINARY_CLOUD_NAME = 'lddc7v8k';

  // Google Apps Script URL لإرسال البريد
  const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyjMl2lP2cmUETvt5pDIaQP72MCZaWOxIpqN1wZJ2f4hPL3IC1DH3jRUPtU9peJRlv1lA/exec';

  // دالة إرسال OTP عبر Resend API
  async function sendOTP(email) {
    try {
      // توليد رمز عشوائي 6 أرقام
      const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

      console.log('📧 جاري حفظ OTP في Supabase...');

      // ⭐ حساب وقت انتهاء الصلاحية (10 دقائق من الآن)
      const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

      // ⭐ استخدام supabaseClient بدل supabaseCall (أقوى وأدق)
      const { data: otpData, error: otpError } = await supabaseClient
        .from('otp')
        .insert({
          email: email,
          code: otpCode,
          expires_at: expiresAt.toISOString()
        });

      if (otpError) throw new Error('فشل في حفظ OTP: ' + otpError);

      console.log('✅ تم حفظ OTP في Supabase');

      // ⭐ إرسال OTP عبر Netlify Function (بدون CORS مشاكل)
      console.log('📧 جاري إرسال البريد عبر Netlify Function...');

      const emailResponse = await fetch('/.netlify/functions/sendOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          otpCode: otpCode
        })
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json();
        console.error('🔍 تفاصيل الخطأ الكاملة من MailerSend:', errorData);
        console.error('🔍 details:', errorData.details);
        throw new Error(`فشل إرسال البريد: ${errorData.error || 'خطأ غير معروف'} — ${errorData.details || ''}`);
      }

      const emailData = await emailResponse.json();
      console.log('✅ تم إرسال البريد بنجاح:', emailData);

      // عرض رسالة نجاح
      alert(`✅ تم إرسال رمز التحقق إلى:\n${email}\n\n⏰ صالح لمدة 10 دقائق`);

      console.log('✅ تم إرسال OTP إلى:', email, '| الرمز:', otpCode);
      return { success: true, code: otpCode };
    } catch (error) {
      console.error('❌ خطأ في إرسال OTP:', error);
      alert('❌ خطأ في إرسال البريد (جرّب لاحقاً أو تواصل معنا)');
      return { success: false, error: error.message };
    }
  }

  // 🎥 دالة رفع الفيديو
  async function uploadVideo(file, videoTitle, videoDesc) {
    // ⭐ الفحص هلأ عبر جدول profiles المحمي بـ RLS، وليس عبر localStorage
    // (localStorage يقدر أي زائر يعدّله من Developer Console)
    const isAdmin = await isCurrentUserAdmin();
    if (!isAdmin) {
      alert('❌ فقط الأدمن يستطيع رفع الفيديوهات');
      return false;
    }

    try {
      const fileName = Date.now() + '_' + file.name;
      const response = await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET_NAME}/${fileName}`, {
        method: 'POST',
        headers: {
          'authorization': `Bearer ${SUPABASE_KEY}`,
          'x-upsert': 'false'
        },
        body: file
      });

      if (!response.ok) throw new Error('فشل رفع الفيديو');

      const videoUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/${fileName}`;

      const { data, error } = await supabaseCall('POST', 'videos', {
        user_id: localStorage.getItem('userId'),
        title: videoTitle,
        url: videoUrl,
        description: videoDesc
      });

      if (error) throw new Error(error);

      alert('✅ تم رفع الفيديو بنجاح!');
      return true;
    } catch (error) {
      console.error('❌ خطأ:', error);
      alert('❌ خطأ في رفع الفيديو: ' + error.message);
      return false;
    }
  }

  // 🎬 دالة عرض جميع الفيديوهات
  async function loadAllVideos() {
    try {
      console.log('📹 بدء تحميل الفيديوهات...');
      const { data, error } = await supabaseCall('GET', 'videos');

      console.log('📊 البيانات المستقبلة:', data);
      console.log('❌ الخطأ:', error);

      if (error) throw new Error(error);

      
    // Extract video thumbnail
    function extractVideoThumbnail(videoUrl, canvasId) {
      const video = document.createElement('video');
      video.crossOrigin = 'anonymous';
      video.src = videoUrl;
      video.currentTime = 1;
      
      video.onloadedmetadata = function() {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        video.oncanplay = function() {
          ctx.drawImage(video, 0, 0);
          canvas.style.display = 'block';
          video.pause();
        };
      };
    }


    const videosContainer = document.getElementById('videosContainer');
      console.log('🎯 Container موجود؟', videosContainer);
      if (!videosContainer) {
        console.error('❌ لم أجد videosContainer!');
        return;
      }

      videosContainer.innerHTML = '';
      console.log('✅ تم تنظيف Container');

      if (!data || data.length === 0) {
        videosContainer.innerHTML = `
          <div style="text-align: center; padding: 80px 20px; color: #999;">
            <div style="font-size: 64px; margin-bottom: 15px;">🎬</div>
            <p style="font-size: 20px; margin: 0; font-weight: 500;">لا توجد فيديوهات حتى الآن</p>
            <p style="font-size: 14px; color: #bbb; margin-top: 10px;">ابدأ بإضافة أول فيديو لعرضه هنا</p>
          </div>
        `;
        return;
      }

      const currentUser = localStorage.getItem('currentUser');
      console.log('👤 المستخدم الحالي:', currentUser);
      console.log('📹 عدد الفيديوهات:', data.length);

      // إنشء grid layout احترافي - 3 أعمدة
      videosContainer.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 30px;
        padding: 20px;
        max-width: 1400px;
        margin: 0 auto;
      `;
      console.log('🎨 تم تطبيق أسلوب Grid');

      data.forEach((video, index) => {
        console.log(`📺 إضافة فيديو #${index + 1}:`, video.title);
        const videoCard = document.createElement('div');
        videoCard.style.cssText = `
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideInUp 0.6s ease-out;
          animation-delay: ${index * 0.08}s;
        `;

        // استخدام CSS animations بدلاً من JavaScript للأداء الأفضل
        videoCard.classList.add('hover-lift');

        videoCard.addEventListener('mouseenter', () => {
          const overlay = videoCard.querySelector('[data-overlay]');
          if (overlay) {
            overlay.style.opacity = '1';
            overlay.style.transition = 'opacity 0.3s ease';
          }
        });

        videoCard.addEventListener('mouseleave', () => {
          const overlay = videoCard.querySelector('[data-overlay]');
          if (overlay) {
            overlay.style.opacity = '0';
          }
        });

        const deleteBtn = currentUser === ADMIN_EMAIL ? `
          <div style="margin-top: 12px;">
            <button class="delete-btn" onclick="event.stopPropagation(); deleteVideo('${video.title}')" style="
              background: linear-gradient(135deg, #E5121C 0%, #ff6b75 100%);
              color: white;
              border: none;
              padding: 10px 16px;
              border-radius: 8px;
              cursor: pointer;
              font-weight: 600;
              width: 100%;
              font-size: 13px;
              box-shadow: 0 4px 12px rgba(229, 18, 28, 0.2);
            ">
              🗑️ حذف الفيديو
            </button>
          </div>
        ` : '';

        videoCard.innerHTML = `
          <div data-video-player style="
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
            height: 100%;
            display: flex;
            flex-direction: column;
            cursor: pointer;
          " onclick="openLightbox('${video.url}', 'video')">
            <!-- Thumbnail Container -->
            <div id="thumb-${index}" style="
              position: relative;
              width: 100%;
              padding-bottom: 56.25%;
              background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
              overflow: hidden;
            ">
              <canvas id="canvas-${index}" style="position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; display:none;"></canvas>

              <!-- Dark Overlay -->
              <div data-overlay style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.4);
                opacity: 0;
                transition: opacity 0.3s ease;
              "></div>

              <!-- Play Button -->
              <div class="play-btn" style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 70px;
                height: 70px;
                background: rgba(255, 255, 255, 0.95);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
                cursor: pointer;
              ">
                <span style="
                  font-size: 32px;
                  color: #E5121C;
                  margin-left: 4px;
                  font-weight: bold;
                ">▶</span>
              </div>
            </div>

            <!-- Content -->
            <div style="
              padding: 18px;
              flex: 1;
              display: flex;
              flex-direction: column;
            ">
              <h3 style="
                margin: 0 0 10px 0;
                color: #1a1a2e;
                font-size: 16px;
                font-weight: 700;
                line-height: 1.4;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              ">${video.title}</h3>

              <p style="
                margin: 0 0 12px 0;
                color: #666;
                font-size: 13px;
                line-height: 1.5;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                min-height: 26px;
              ">${video.description || '📝'}</p>


              ${deleteBtn}
            </div>
          </div>
        `;

        videosContainer.appendChild(videoCard);
        extractVideoThumbnail(video.url, 'canvas-${index}');
        console.log('✅ تم إضافة الفيديو إلى Container');
      });

      console.log('📊 عدد العناصر في Container:', videosContainer.children.length);
      console.log('🎯 Container HTML:', videosContainer.innerHTML.substring(0, 200));

      // إضافة الـ animations
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          #videosContainer {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) !important;
            gap: 20px !important;
          }
        }
      `;
      if (!document.querySelector('style[data-videos-animation]')) {
        style.setAttribute('data-videos-animation', 'true');
        document.head.appendChild(style);
      }

    } catch (error) {
      console.error('❌ خطأ في تحميل الفيديوهات:', error);
    }
  }

  // 🖼️ دالة تحميل جميع الصور
  async function loadAllImages() {
    try {
      console.log('📷 بدء تحميل الصور...');
      const { data, error } = await supabaseCall('GET', 'images');

      if (error) throw new Error(error);

      const imagesContainer = document.getElementById('imagesContainer');
      if (!imagesContainer) {
        console.error('❌ لم أجد imagesContainer!');
        return;
      }

      imagesContainer.innerHTML = '';

      if (!data || data.length === 0) {
        imagesContainer.innerHTML = `
          <div style="text-align: center; padding: 80px 20px; color: #999;">
            <div style="font-size: 64px; margin-bottom: 15px;">🖼️</div>
            <p style="font-size: 20px; margin: 0; font-weight: 500;">لا توجد صور حتى الآن</p>
            <p style="font-size: 14px; color: #bbb; margin-top: 10px;">ابدأ بإضافة أول صورة لعرضها هنا</p>
          </div>
        `;
        return;
      }

      const currentUser = localStorage.getItem('currentUser');

      imagesContainer.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 30px;
        padding: 20px;
        max-width: 1400px;
        margin: 0 auto;
      `;

      data.forEach((image, index) => {
        const imageCard = document.createElement('div');
        imageCard.style.cssText = `
          cursor: pointer;
          animation: slideInUp 0.6s ease-out;
          animation-delay: ${index * 0.08}s;
        `;

        // استخدام CSS animations بدلاً من JavaScript للأداء الأفضل
        imageCard.classList.add('image-card-hover');

        const deleteBtn = currentUser === image.user_id ? `
          <div style="margin-top: 12px;">
            <button onclick="event.stopPropagation(); deleteImage('${image.id}')" style="
              background: linear-gradient(135deg, #E5121C 0%, #ff6b75 100%);
              color: white;
              border: none;
              padding: 10px 16px;
              border-radius: 8px;
              cursor: pointer;
              font-weight: 600;
              width: 100%;
              font-size: 13px;
              transition: all 0.3s ease;
            ">
              🗑️ حذف
            </button>
          </div>
        ` : '';

        imageCard.innerHTML = `
          <div onclick="openLightbox('${image.url}', 'image')" style="
            background: white;
            border-radius: 16px;
            overflow: hidden;
            cursor: pointer;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
            height: 100%;
            display: flex;
            flex-direction: column;
          ">
            <div style="
              position: relative;
              width: 100%;
              padding-bottom: 100%;
              background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
              overflow: hidden;
            ">
              <img src="${image.url}" style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
              " />
            </div>

            <div style="
              padding: 18px;
              flex: 1;
              display: flex;
              flex-direction: column;
            ">
              <h3 style="
                margin: 0 0 10px 0;
                color: #1a1a2e;
                font-size: 16px;
                font-weight: 700;
                line-height: 1.4;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
              ">${image.title}</h3>

              <p style="
                margin: 0 0 12px 0;
                color: #666;
                font-size: 13px;
                line-height: 1.5;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                min-height: 26px;
              ">${image.description || '📷'}</p>

              ${deleteBtn}
            </div>
          </div>
        `;

        imagesContainer.appendChild(imageCard);
      });

    } catch (error) {
      console.error('❌ خطأ في تحميل الصور:', error);
    }
  }

  // 📸 دالة رفع صورة
  async function uploadImage() {
    const currentUser = localStorage.getItem('currentUser');

    // تحقق من أن المستخدم هو المسؤول
    if (currentUser !== ADMIN_EMAIL) {
      alert('❌ فقط المسؤول يمكنه رفع الصور');
      return;
    }

    const titleInput = document.getElementById('imageTitle');
    const descriptionInput = document.getElementById('imageDescription');
    const fileInput = document.getElementById('imageUpload');

    const title = titleInput?.value || '';
    const description = descriptionInput?.value || '';
    const file = fileInput?.files[0];

    if (!title.trim()) {
      alert('يرجى إدخال عنوان للصورة');
      return;
    }

    if (!file) {
      alert('يرجى اختيار صورة');
      return;
    }

    if (file.size > 5242880) {
      alert('حجم الصورة يجب أن يكون أقل من 5MB');
      return;
    }

    try {
      const statusDiv = document.getElementById('imageUploadStatus');
      const statusText = document.getElementById('imageUploadText');
      statusDiv.style.display = 'block';
      statusText.textContent = '⏳ جاري رفع الصورة...';

      // رفع إلى Cloudinary
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'unsigned_preset');
      formData.append('cloud_name', CLOUDINARY_CLOUD_NAME);
      formData.append('folder', 'true-line-images');

      const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('فشل رفع الصورة');
      }

      const result = await response.json();
      const imageUrl = result.secure_url;

      // حفظ في Supabase
      const { error: uploadError } = await supabaseCall('POST', 'images', {
        user_id: currentUser,
        title: title,
        url: imageUrl,
        description: description
      });

      if (uploadError) throw new Error(uploadError);

      statusText.textContent = '✅ تم رفع الصورة بنجاح';
      setTimeout(() => {
        statusDiv.style.display = 'none';
        titleInput.value = '';
        descriptionInput.value = '';
        fileInput.value = '';
        loadAllImages();
      }, 2000);

    } catch (error) {
      console.error('❌ خطأ في رفع الصورة:', error);
      const statusText = document.getElementById('imageUploadText');
      statusText.textContent = '❌ خطأ: ' + error.message;
    }
  }

  // 🗑️ دالة حذف صورة
  async function deleteImage(imageId) {
    if (!confirm('هل تريد حذف هذه الصورة؟')) return;

    try {
      const { error } = await supabaseCall('DELETE', 'images', null, {
        id: `eq.${imageId}`
      });

      if (error) throw new Error(error);

      alert('✅ تم حذف الصورة');
      loadAllImages();
    } catch (error) {
      console.error('❌ خطأ في حذف الصورة:', error);
      alert('حدث خطأ: ' + error.message);
    }
  }

  // 🗑️ دالة حذف الفيديو
  async function deleteVideo(videoTitle) {
    console.log('🗑️ بدء عملية الحذف للفيديو:', videoTitle);

    const isAdmin = await isCurrentUserAdmin();
    if (!isAdmin) {
      alert('❌ فقط الأدمن يستطيع حذف الفيديوهات');
      return;
    }

    if (!confirm('هل متأكد من حذف هذا الفيديو؟')) {
      return;
    }

    try {
      console.log('🗑️ محاولة حذف الفيديو:', videoTitle);

      // ⭐ الحذف عبر supabaseClient (يرسل JWT المستخدم الحقيقي، وليس مفتاح
      // anon المشترك)، حتى تقدر RLS Policy تتحقق فعلياً من هوية المستخدم
      const { data: result, error: deleteError } = await supabaseClient
        .from('videos')
        .delete()
        .eq('title', videoTitle)
        .select();

      if (deleteError) {
        console.error('❌ خطأ الحذف:', deleteError);
        throw new Error('فشل الحذف من قاعدة البيانات: ' + deleteError.message);
      }

      console.log('✅ تم الحذف بنجاح:', result);

      alert('✅ تم حذف الفيديو بنجاح!');

      // إعادة تحميل الفيديوهات
      setTimeout(() => {
        loadAllVideos();
      }, 500);

    } catch (error) {
      console.error('❌ خطأ:', error);
      alert('❌ خطأ في حذف الفيديو:\n' + error.message);
    }
  }

  // دالة التحقق من OTP
  async function verifyOTP(email, code) {
    try {
      // البحث عن OTP في قاعدة البيانات
      const { data: otpRecords, error: searchError } = await supabaseCall('GET', 'otp', null, {
        email: `eq.${email}`,
        verified: 'eq.false',
        order: 'created_at.desc'
      });

      if (searchError || !otpRecords || otpRecords.length === 0) {
        throw new Error('لم يتم العثور على رمز تحقق');
      }

      const otpRecord = otpRecords[0];
      
      // ⭐ تصحيح: فحص صلاحية الرمز بشكل صحيح
      console.log('🔍 OTP Record:', otpRecord);
      console.log('⏰ expires_at من database:', otpRecord.expires_at);
      
      if (!otpRecord.expires_at) {
        console.warn('⚠️ expires_at ناقصة — الرمز قديم بدون صلاحية');
        throw new Error('انتهت صلاحية الرمز - طلب رمز جديد');
      }

      const expiresAt = new Date(otpRecord.expires_at);
      const now = new Date();
      
      console.log('📅 الآن:', now.toISOString());
      console.log('📅 انتهاء الصلاحية:', expiresAt.toISOString());
      console.log('⏱️ الفارق (ثواني):', (expiresAt - now) / 1000);
      
      if (now > expiresAt) {
        console.error('❌ الرمز انتهت صلاحيته!');
        throw new Error('انتهت صلاحية الرمز - طلب رمز جديد');
      }

      // التحقق من الرمز
      if (otpRecord.code !== code) {
        throw new Error('الرمز غير صحيح');
      }

      // تحديث الـ OTP ليصبح مستخدماً
      await supabaseCall('PATCH', 'otp',
        { verified: true },
        { id: `eq.${otpRecord.id}` }
      );

      console.log('✅ تم التحقق من البريد بنجاح');
      return { success: true };
    } catch (error) {
      console.error('❌ خطأ في التحقق:', error);
      return { success: false, error: error.message };
    }
  }

  // دالة حفظ بيانات البروفايل في جدول profiles (منفصل تماماً عن نظام
  // المصادقة/الباسورد الذي يديره Supabase Auth بجدول auth.users الداخلي)
  async function saveUserToSupabase(email, fullName, phone, company, country, bio) {
    try {
      const userId = localStorage.getItem('userId');

      const { data, error } = await supabaseClient
        .from('profiles')
        .update({
          email: email,
          full_name: fullName,
          phone: phone,
          company: company,
          country: country,
          bio: bio
        })
        .eq('id', userId)
        .select();

      if (error) throw error;
      console.log('☁️ تم حفظ بيانات المستخدم على Supabase:', data);
      return true;
    } catch (error) {
      console.error('❌ خطأ في حفظ البيانات:', error);
      return false;
    }
  }

  // دالة تحميل بيانات البروفايل من جدول profiles
  async function loadUserFromSupabase(email) {
    try {
      const { data, error } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('email', email);

      if (error) throw error;

      if (data && data.length > 0) {
        const userData = data[0];
        console.log('☁️ تم تحميل بيانات المستخدم من Supabase:', userData);
        localStorage.setItem('userName', userData.full_name || '');
        localStorage.setItem('userPhone', userData.phone || '');
        localStorage.setItem('userCompany', userData.company || '');
        localStorage.setItem('userCountry', userData.country || '');
        localStorage.setItem('userBio', userData.bio || '');
        localStorage.setItem('userAvatar', userData.avatar_url || '');
        return userData;
      }
      return null;
    } catch (error) {
      console.error('❌ خطأ في تحميل البيانات:', error);
      return null;
    }
  }

  // حفظ الفيديو في Supabase
  async function saveVideoToCloud(videoTitle, videoURL, videoDesc) {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert('يرجى تسجيل الدخول أولاً');
      return false;
    }

    try {
      const { data, error } = await supabaseCall('POST', 'videos', {
        user_id: userId,
        title: videoTitle,
        url: videoURL,
        description: videoDesc
      });

      if (error) throw error;
      console.log('☁️ تم حفظ الفيديو على Supabase:', data);
      return true;
    } catch (error) {
      console.error('❌ خطأ في حفظ الفيديو:', error);
      return false;
    }
  }

  // تحميل جميع فيديوهات المستخدم من Supabase
  async function loadVideosFromCloud() {
    const userId = localStorage.getItem('userId');
    if (!userId) return [];

    try {
      const { data, error } = await supabaseCall('GET', 'videos', null, {
        user_id: `eq.${userId}`,
        order: 'created_at.desc'
      });

      if (error) throw error;
      console.log('☁️ تم تحميل الفيديوهات من السحابة:', data);
      return data || [];
    } catch (error) {
      console.error('❌ خطأ في تحميل الفيديوهات:', error);
      return [];
    }
  }

  // حفظ المحفظة (Portfolio) في Supabase
  async function savePortfolioToCloud(name, description) {
    const userId = localStorage.getItem('userId');
    if (!userId) return false;

    try {
      const { data, error } = await supabaseCall('POST', 'portfolio', {
        user_id: userId,
        name: name,
        description: description
      });

      if (error) throw error;
      console.log('☁️ تم حفظ المشروع على Supabase:', data);
      return true;
    } catch (error) {
      console.error('❌ خطأ في حفظ المشروع:', error);
      return false;
    }
  }

  // تحميل المحفظة من Supabase
  async function loadPortfolioFromCloud() {
    const userId = localStorage.getItem('userId');
    if (!userId) return [];

    try {
      const { data, error } = await supabaseCall('GET', 'portfolio', null, {
        user_id: `eq.${userId}`,
        order: 'created_at.desc'
      });

      if (error) throw error;
      console.log('☁️ تم تحميل المحفظة من السحابة:', data);
      return data || [];
    } catch (error) {
      console.error('❌ خطأ في تحميل المحفظة:', error);
      return [];
    }
  }

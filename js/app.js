/* ===== True LINE — منطق التطبيق الرئيسي ===== */
    const translations = {
      ar: {
        home: '🏠 الصفحة الرئيسية',
        stats: '📊 الإحصائيات',
        featured: '🏆 الأعمال المتميزة',
        team: '👥 الفريق',
        plans: '💼 الباقات',
        cart: '🛒 السلة',
        contact: '✉️ تواصل معنا',
        settings: '⚙️ الاعدادات',
        profile: '👤 معلوماتي',
        help: '❓ بحاجة الى مساعدة؟',
        basicPlan: 'الباقة الأساسية',
        advancedPlan: 'الباقة المتقدمة',
        professionalPlan: 'الباقة الاحترافية',
        perMonth: 'شهري',
        videos: 'فيديوهات',
        project1: 'مشروع 1',
        project2: 'مشروع 2',
        project3: 'مشروع 3',
        portfolio: 'بعض من أعمالنا',
        designs: 'تصاميم صور',
        support24: 'دعم فني 24/7',
        updates: 'تحديثات مستمرة',
        bestChoice: 'الأفضل',
        welcome: 'استوديو الموشن جرافك',
        welcomeDesc: 'حول أفكارك إلى حركة سينمائية مذهلة مع فريقنا المتخصص',
        startNow: 'ابدأ الآن',
        chooseplan: 'اختر الباقة المناسبة',
        flexiblePlans: 'خطط مرنة لكل احتياجاتك',
        select: 'اختيار',
        registerTitle: 'إنشاء حساب',
        registerSubtitle: 'انضم إلى استوديو TRUE LINE اليوم',
        email: 'البريد الإلكتروني',
        password: 'كلمة المرور',
        createAccount: 'إنشاء الحساب',
        haveAccount: 'لديك حساب بالفعل؟',
        loginTitle: 'مرحباً بعودتك',
        loginSubtitle: 'تسجيل الدخول إلى حسابك',
        loginBtn: 'دخول',
        noAccount: 'ليس لديك حساب؟',
        whyChoose: 'لماذا اختيار TRUE LINE؟',
        whyDesc: 'نحن نقدم حلولاً موشن جرافك احترافية لتحويل رؤيتك إلى واقع بصري مذهل. فريقنا متخصص في إنشاء محتوى عالي الجودة يترك تأثيراً دائماً.',
        discoverMore: 'اكتشف المزيد',
        teamTitle: 'فريق من المحترفين',
        teamDesc: 'يتكون فريقنا من خبراء متخصصين في الموشن جرافك والتصميم السينمائي. كل مشروع يتم إنجازه بعناية فائقة واهتمام بأدق التفاصيل لضمان تسليم محتوى يفوق التوقعات.',
        next: 'التالي',
        portfolioDesc: 'تصاميم وحركات احترافية',
        pricesAndPlans: 'الباقات والأسعار',
        back: 'العودة',
        colorLabel: 'اللون الأساسي',
        resetColor: 'استرجاع',
        lightMode: '☀️ الوضع الفاتح',
        personalInfo: 'معلوماتي',
        username: 'اسم المستخدم',
        profilePicture: 'صورة البروفايل',
        save: 'حفظ',
        needHelp: 'بحاجة إلى مساعدة؟',
        helpDesc: 'نحن هنا لمساعدتك 24/7',
        faq: 'أسئلة شائعة',
        faqQ1: 'كيف أختار الباقة المناسبة؟',
        faqA1: 'اختر الباقة التي تناسب احتياجاتك. يمكنك ترقيتها في أي وقت.',
        faqQ2: 'هل يمكنني تغيير الباقة لاحقاً؟',
        faqA2: 'نعم، يمكنك تحديث أو تغيير باقتك في أي وقت من الإعدادات.',
        contactUs: 'تواصل معنا مباشرة',
        contactDesc: 'نحن متاحون لمساعدتك والإجابة على جميع استفساراتك',
        callNow: 'اتصل بنا الآن',
        sendMessage: 'إرسال',
        typeMessage: 'اكتب رسالتك...',
        confirmation: 'تأكيد',
        perYear: 'سنوي',
        monthlyText: 'شهري',
        ourServices: 'خدماتنا المتخصصة',
        servicesDesc: 'نقدم مجموعة شاملة من الخدمات الاحترافية',
        motionGraphics: 'موشن جرافكس',
        motionDesc: 'حركات احترافية وتأثيرات بصرية مذهلة',
        videoDesign: 'تصميم فيديو',
        videoDesignDesc: 'محتوى بصري متقن وجذاب للعلامات التجارية',
        graphics3D: 'رسوميات 3D',
        graphics3DDesc: 'محتوى ثلاثي الأبعاد عالي الجودة واحترافي',
        videoProduction: 'إنتاج فيديو',
        videoProdDesc: 'تصوير واخراج احترافي للمشاريع',
        professionalEditing: 'تعديل احترافي',
        editingDesc: 'معالجة احترافية للفيديوهات والمحتوى',
        marketingVideo: 'فيديو تسويقي',
        marketingDesc: 'فيديوهات تسويقية فعّالة لزيادة المبيعات',
        whyUsTitle: 'لماذا نحن؟',
        whyUsDesc: 'مميزات تجعلنا الخيار الأفضل',
        deepExperience: 'خبرة عميقة',
        deepExpDesc: 'أكثر من 8 سنوات من الخبرة العملية في مجال الموشن جرافكس',
        highQuality: 'جودة عالية',
        highQualityDesc: 'معايير عالية جداً في الإنتاج والتسليم لكل مشروع',
        fastDelivery: 'تسليم سريع',
        fastDeliveryDesc: 'نسلم مشاريعك في الوقت المحدد دون التضحية بالجودة',
        competitivePrice: 'أسعار منافسة',
        competitivePriceDesc: 'أفضل الأسعار في السوق مع أعلى جودة',
        support247: 'دعم 24/7',
        support247Desc: 'فريق دعم متاح على مدار الساعة لمساعدتك',
        freeRevisions: 'تعديلات مجانية',
        freeRevisionsDesc: 'تعديلات غير محدودة حتى تصل للرضا التام',
        workProcess: 'عملية العمل معنا',
        processStepsDesc: 'خطوات سهلة وواضحة',
        consultation: 'الاستشارة',
        consultationDesc: 'تحدث معنا عن رؤيتك واحتياجاتك',
        design: 'التصميم',
        designDesc: 'ننشئ تصميم احترافي لموافقتك',
        production: 'الإنتاج',
        productionDesc: 'ننتج محتوى عالي الجودة',
        delivery: 'التسليم',
        deliveryDesc: 'تسليم المشروع في الوقت المحدد',
        testimonials: 'آراء عملائنا',
        testimonialsDesc: 'ماذا يقول عملاؤنا عننا؟',
        testimonial1: 'الاستوديو احترافي جداً، النتيجة فاقت التوقعات. أنصح بهم بشدة!',
        testimonial1Author: 'أحمد سالم - صاحب شركة',
        testimonial2: 'سرعة التسليم والجودة المميزة جعلتني عميل دائم لهم.',
        testimonial2Author: 'فاطمة محمد - مديرة تسويق',
        testimonial3: 'فريق احترافي ومبدع، كل مشروع يظهر الاهتمام بالتفاصيل.',
        testimonial3Author: 'علي عبدالله - مصمم جرافيك',
        achievements: 'إنجازاتنا',
        projectsCompleted: 'مشروع منجز بنجاح',
        happyClients: 'عميل راضٍ ومسرور',
        yearsExperience: 'سنوات خبرة متخصصة',
        satisfactionRate: 'معدل رضا العملاء',
        specialOffers: 'عروض خاصة وميزات',
        offersDesc: 'احصل على أفضل القيمة مقابل استثمارك',
        satisfactionGuarantee: 'ضمان الرضا',
        guaranteeDesc: 'رضاك هو أولويتنا - ندعم كل مشروع بضمان كامل',
        continuousSupport: 'دعم مستمر',
        supportDesc: 'نساعدك بعد التسليم لضمان نجاح مشروعك',
        continuousUpdates: 'تحديثات مستمرة',
        updatesDesc: 'نتابع أحدث التقنيات والاتجاهات الحديثة',
        readyToStart: 'جاهز للبدء؟',
        startCTA: 'انضم إلى مئات العملاء الراضين واترك انطباعك الأول!',
        startNowCTA: 'ابدأ مشروعك الآن',
      },
      en: {
        home: '🏠 Home',
        stats: '📊 Statistics',
        featured: '🏆 Featured Works',
        team: '👥 Team',
        plans: '💼 Plans',
        cart: '🛒 Cart',
        contact: '✉️ Contact Us',
        settings: '⚙️ Settings',
        profile: '👤 Profile',
        help: '❓ Need Help?',
        basicPlan: 'Basic Plan',
        advancedPlan: 'Advanced Plan',
        professionalPlan: 'Professional Plan',
        perMonth: 'per year',
        videos: 'videos',
        project1: 'Project 1',
        project2: 'Project 2',
        project3: 'Project 3',
        portfolio: 'Our Portfolio',
        designs: 'design templates',
        support24: 'Professional Support',
        updates: 'Continuous Updates',
        bestChoice: 'MOST POPULAR',
        welcome: 'Motion Graphics Studio',
        welcomeDesc: 'Transform your ideas into stunning cinematic motion with our expert team',
        startNow: 'Get Started',
        chooseplan: 'Choose Your Plan',
        flexiblePlans: 'Flexible plans for every need',
        select: 'Choose',
        registerTitle: 'Create Account',
        registerSubtitle: 'Join TRUE LINE Studio today',
        email: 'Email Address',
        password: 'Password',
        createAccount: 'Create Account',
        haveAccount: 'Already have an account?',
        loginTitle: 'Welcome Back',
        loginSubtitle: 'Sign in to your account',
        loginBtn: 'Sign In',
        noAccount: 'Don\'t have an account?',
        whyChoose: 'Why Choose TRUE LINE?',
        whyDesc: 'We provide professional motion graphics solutions to transform your vision into stunning visuals. Our team specializes in creating high-quality content that makes a lasting impact.',
        discoverMore: 'Discover More',
        teamTitle: 'Expert Team',
        teamDesc: 'Our team consists of specialists in motion graphics and cinematic design. Every project is executed with meticulous care and attention to detail to deliver outstanding results.',
        next: 'Next',
        portfolioDesc: 'Professional designs and animations',
        pricesAndPlans: 'Plans & Pricing',
        back: 'Back',
        colorLabel: 'Primary Color',
        resetColor: 'Reset',
        lightMode: '☀️ Light Mode',
        personalInfo: 'My Profile',
        username: 'Full Name',
        profilePicture: 'Profile Picture',
        save: 'Save',
        needHelp: 'Need Help?',
        helpDesc: 'We\'re here to help you 24/7',
        faq: 'Frequently Asked Questions',
        faqQ1: 'How do I choose the right plan?',
        faqA1: 'Choose the plan that suits your needs. You can upgrade anytime.',
        faqQ2: 'Can I change my plan later?',
        faqA2: 'Yes, you can update or change your plan anytime from settings.',
        contactUs: 'Contact Us Directly',
        contactDesc: 'We\'re available to help and answer all your questions',
        callNow: 'Call Now',
        sendMessage: 'Send',
        typeMessage: 'Type your message...',
        confirmation: 'Confirmation',
        perYear: 'per year',
        monthlyText: 'monthly',
        ourServices: 'Our Services',
        servicesDesc: 'We offer a comprehensive range of professional services',
        motionGraphics: 'Motion Graphics',
        motionDesc: 'Professional animations and stunning visual effects',
        videoDesign: 'Video Design',
        videoDesignDesc: 'Professional and attractive visual content for brands',
        graphics3D: '3D Graphics',
        graphics3DDesc: 'High-quality and professional 3D content',
        videoProduction: 'Video Production',
        videoProdDesc: 'Professional filming and directing for projects',
        professionalEditing: 'Professional Editing',
        editingDesc: 'Professional processing of videos and content',
        marketingVideo: 'Marketing Video',
        marketingDesc: 'Effective marketing videos to increase sales',
        whyUsTitle: 'Why Us?',
        whyUsDesc: 'Features that make us the best choice',
        deepExperience: 'Deep Experience',
        deepExpDesc: 'More than 8 years of practical experience in motion graphics',
        highQuality: 'High Quality',
        highQualityDesc: 'Very high standards in production and delivery of every project',
        fastDelivery: 'Fast Delivery',
        fastDeliveryDesc: 'We deliver your projects on time without sacrificing quality',
        competitivePrice: 'Competitive Prices',
        competitivePriceDesc: 'Best prices in the market with the highest quality',
        support247: '24/7 Support',
        support247Desc: 'Support team available around the clock to help you',
        freeRevisions: 'Free Revisions',
        freeRevisionsDesc: 'Unlimited revisions until you reach complete satisfaction',
        workProcess: 'Our Work Process',
        processStepsDesc: 'Easy and clear steps',
        consultation: 'Consultation',
        consultationDesc: 'Tell us about your vision and needs',
        design: 'Design',
        designDesc: 'We create a professional design for your approval',
        production: 'Production',
        productionDesc: 'We produce high-quality content',
        delivery: 'Delivery',
        deliveryDesc: 'Project delivery on the specified date',
        testimonials: 'Client Testimonials',
        testimonialsDesc: 'What our clients say about us?',
        testimonial1: 'The studio is very professional, the results exceeded expectations. I highly recommend them!',
        testimonial1Author: 'Ahmed Salem - Business Owner',
        testimonial2: 'Fast delivery and excellent quality made me a permanent client.',
        testimonial2Author: 'Fatima Muhammad - Marketing Manager',
        testimonial3: 'Professional and creative team, every project shows attention to detail.',
        testimonial3Author: 'Ali Abdullah - Graphic Designer',
        achievements: 'Our Achievements',
        projectsCompleted: 'Projects Completed Successfully',
        happyClients: 'Happy and Satisfied Clients',
        yearsExperience: 'Years of Specialized Experience',
        satisfactionRate: 'Client Satisfaction Rate',
        specialOffers: 'Special Offers & Features',
        offersDesc: 'Get the best value for your investment',
        satisfactionGuarantee: 'Satisfaction Guarantee',
        guaranteeDesc: 'Your satisfaction is our priority - we support every project with full guarantee',
        continuousSupport: 'Continuous Support',
        supportDesc: 'We help you after delivery to ensure your project success',
        continuousUpdates: 'Continuous Updates',
        updatesDesc: 'We follow the latest technologies and modern trends',
        readyToStart: 'Ready to Start?',
        startCTA: 'Join hundreds of satisfied clients and make your first impression!',
        startNowCTA: 'Start Your Project Now',
      }
    };

    let currentLanguage = 'ar';
    let cart = [];
    let discountPercent = 0;
    const t = (key) => translations[currentLanguage][key] || key;

    const getPlans = () => [
      { name: t('basicPlan'), price: '$300', features: currentLanguage === 'ar' ? '3 فيديوهات<br>6 تصاميم صور' : '3 videos<br>6 design templates', popular: false, videos: 3, designs: 6, rating: 4 },
      { name: t('advancedPlan'), price: '$500', features: currentLanguage === 'ar' ? '6 فيديوهات<br>10 تصاميم صور' : '6 videos<br>10 design templates', popular: true, videos: 6, designs: 10, rating: 5 },
      { name: t('professionalPlan'), price: '$700', features: currentLanguage === 'ar' ? '10 فيديوهات<br>15 تصميم صور' : '10 videos<br>15 design templates', popular: false, videos: 10, designs: 15, rating: 5 },
    ];

    const getStats = () => [
      { number: '250+', label: currentLanguage === 'ar' ? 'مشروع منجز' : 'Projects Completed' },
      { number: '150+', label: currentLanguage === 'ar' ? 'عميل راضٍ' : 'Happy Clients' },
      { number: '8+', label: currentLanguage === 'ar' ? 'سنوات خبرة' : 'Years Experience' },
    ];

    const getFeaturedWorks = () => [
      { title: currentLanguage === 'ar' ? 'تصميم ديناميكي' : 'Dynamic Design', desc: currentLanguage === 'ar' ? 'حركات احترافية وتأثيرات بصرية رائعة' : 'Professional animations and stunning visuals', icon: '🎬', tag: currentLanguage === 'ar' ? 'موشن' : 'Motion' },
      { title: currentLanguage === 'ar' ? 'رسوميات 3D' : '3D Graphics', desc: currentLanguage === 'ar' ? 'محتوى ثلاثي الأبعاد عالي الجودة' : 'High-quality 3D content', icon: '🎨', tag: currentLanguage === 'ar' ? 'تصميم' : 'Design' },
      { title: currentLanguage === 'ar' ? 'فيديو تسويقي' : 'Marketing Video', desc: currentLanguage === 'ar' ? 'فيديوهات احترافية للتسويق' : 'Professional marketing videos', icon: '📹', tag: currentLanguage === 'ar' ? 'موشن' : 'Motion' },
      { title: currentLanguage === 'ar' ? 'الرسوم المتحركة' : 'Animation', desc: currentLanguage === 'ar' ? 'رسوم متحركة بتفاصيل دقيقة' : 'Detailed animated content', icon: '✨', tag: currentLanguage === 'ar' ? 'تصميم' : 'Design' },
      { title: currentLanguage === 'ar' ? 'محتوى تفاعلي' : 'Interactive Content', desc: currentLanguage === 'ar' ? 'تجارب بصرية تفاعلية' : 'Interactive visual experiences', icon: '🎯', tag: currentLanguage === 'ar' ? 'موشن' : 'Motion' },
      { title: currentLanguage === 'ar' ? 'عرض شامل' : 'Full Presentation', desc: currentLanguage === 'ar' ? 'عروض احترافية وجذابة' : 'Professional engaging presentations', icon: '🎪', tag: currentLanguage === 'ar' ? 'تصميم' : 'Design' },
    ];

    // دالة معالجة رفع الفيديو
    async function handleUploadVideo() {
      const fileInput = document.getElementById('videoFile');
      const videoTitle = document.getElementById('videoTitle').value;
      const videoDesc = document.getElementById('videoDesc').value;

      if (!videoTitle) {
        alert('❌ يرجى إدخال عنوان الفيديو');
        return;
      }

      if (!fileInput.files || fileInput.files.length === 0) {
        alert('❌ يرجى اختيار ملف فيديو');
        return;
      }

      const file = fileInput.files[0];
      const isSuccess = await uploadVideo(file, videoTitle, videoDesc);

      if (isSuccess) {
        document.getElementById('videoTitle').value = '';
        document.getElementById('videoDesc').value = '';
        fileInput.value = '';
        setTimeout(() => {
          showScreen('screen-view-videos');
          loadAllVideos();
        }, 1000);
      }
    }

    const getTeamMembers = () => [
      { name: currentLanguage === 'ar' ? 'أحمد محمود' : 'Ahmed Mahmoud', role: currentLanguage === 'ar' ? 'مدير المشروع' : 'Project Manager', emoji: '👨‍💼' },
      { name: currentLanguage === 'ar' ? 'فاطمة علي' : 'Fatima Ali', role: currentLanguage === 'ar' ? 'مصممة جرافيك' : 'Graphic Designer', emoji: '👩‍🎨' },
      { name: currentLanguage === 'ar' ? 'محمد سالم' : 'Mohammad Salam', role: currentLanguage === 'ar' ? 'منتج فيديو' : 'Video Producer', emoji: '👨‍🎬' },
      { name: currentLanguage === 'ar' ? 'ليليا يحيى' : 'Laila Yahya', role: currentLanguage === 'ar' ? 'مطورة ويب' : 'Web Developer', emoji: '👩‍💻' },
      { name: currentLanguage === 'ar' ? 'عمر خالد' : 'Omar Khaled', role: currentLanguage === 'ar' ? 'فنان 3D' : '3D Artist', emoji: '👨‍🎓' },
      { name: currentLanguage === 'ar' ? 'رنا محمد' : 'Rana Mohammad', role: currentLanguage === 'ar' ? 'خبيرة تسويق' : 'Marketing Expert', emoji: '👩‍💼' },
    ];

    // Auto Close Welcome Message
    function closeWelcome() {
      const welcomeOverlay = document.getElementById('welcomeOverlay');
      if (welcomeOverlay) {
        welcomeOverlay.style.animation = 'fadeOut 1s ease-out forwards';
        setTimeout(() => {
          welcomeOverlay.style.display = 'none';
          // Show intro screen with login and register buttons
          showScreen('screen-intro');
        }, 1000);
      }
    }

    // Auto trigger welcome close after 5 seconds
    setTimeout(() => {
      closeWelcome();
    }, 5000);

    function showScreen(id) {
      // Screens that don't require login and don't show topbar
      const publicScreens = ['screen-intro', 'screen-register', 'screen-login', 'screen-reset-password', 'screen-verify-email', 'screen-details', 'screen-confirm', 'screen-complete-profile', 'screen-tour'];

      // Check if user is logged in
      const isLoggedIn = localStorage.getItem('currentUser') !== null;

      // If trying to access protected screen without login, redirect to login
      if (!publicScreens.includes(id) && !isLoggedIn) {
        showScreen('screen-login');
        return;
      }

      document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      window.scrollTo(0, 0);

      // إظهار/إخفاء الـ Topbar
      const topbar = document.getElementById('topbar');
      if (publicScreens.includes(id)) {
        topbar.style.display = 'none';
      } else {
        topbar.style.display = 'flex';
      }

      // ملء البريد الإلكتروني تلقائياً إذا كان هناك بريد مخزن
      if (id === 'screen-login') {
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        if (rememberedEmail) {
          document.getElementById('loginEmail').value = rememberedEmail;
          document.getElementById('rememberEmail').checked = true;
        }
      }

      // تحميل بيانات البروفايل عند فتح شاشة المعلومات
      if (id === 'screen-profile') {
        loadUserProfile();
      }

      // تحميل التقييمات عند فتح شاشة التقييم
      if (id === 'screen-review') {
        loadReviews();
      }

      // تحميل الفيديوهات والصور عند فتح شاشة الفيديوهات
      if (id === 'screen-view-videos') {
        loadAllVideos();
        loadAllImages();
      }

      // تحديث رؤية قسم رفع الفيديوهات عند فتح الإعدادات
      if (id === 'screen-settings') {
        if (typeof updateUploadSection === 'function') {
          updateUploadSection();
        }
      }
    }

    async function handleRegister() {
      const email = document.getElementById('regEmail').value;
      const password = document.getElementById('regPassword').value;

      if (!email || !password) {
        alert(currentLanguage === 'ar' ? 'يرجى ملء جميع الحقول' : 'Please fill all fields');
        return;
      }

      try {
        // التحقق من أن البريد غير مسجل مسبقاً
        const { data: existingUsers, error: checkError } = await supabaseCall('GET', 'users', null, {
          email: `eq.${email}`
        });

        if (existingUsers && existingUsers.length > 0) {
          throw new Error(currentLanguage === 'ar' ? 'هذا البريد مسجل مسبقاً' : 'This email is already registered');
        }

        // ⭐ تغيير: حفظ البيانات مؤقتاً فقط - بدون إنشاء في Supabase الآن
        // سيتم الإنشاء فقط بعد نجاح التحقق من OTP
        localStorage.setItem('tempEmail', email);
        localStorage.setItem('tempPassword', password);
        console.log('📝 تم حفظ البيانات مؤقتاً - في انتظار التحقق من البريد');

        // إرسال OTP
        const otpResult = await sendOTP(email);

        // ⭐ لا نوقف التسجيل عند فشل البريد — ننتقل لشاشة التحقق
        // حيث يوجد زر "تخطي والمتابعة الآن" الذي ينشئ الحساب مباشرة.
        if (!otpResult.success) {
          console.warn('⚠️ فشل إرسال البريد — المتابعة لشاشة التحقق:', otpResult.error);
          alert(currentLanguage === 'ar'
            ? '⚠️ تعذّر إرسال رمز التحقق حالياً.\n\nاضغط "⏭️ تخطي والمتابعة الآن" في الشاشة التالية لإنشاء حسابك.'
            : '⚠️ Could not send the verification code.\n\nUse "Skip and continue" on the next screen to create your account.');
        } else {
          alert(currentLanguage === 'ar' ? '📧 تم إرسال رمز التحقق إلى بريدك الإلكتروني' : '📧 Verification code sent to your email');
        }

        document.getElementById('regEmail').value = '';
        document.getElementById('regPassword').value = '';

        // الانتقال إلى شاشة التحقق من البريد
        setTimeout(() => {
          document.getElementById('verifyEmailDisplay').textContent = email;
          showScreen('screen-verify-email');
        }, 500);

      } catch (error) {
        console.error('Registration Error:', error);
        alert(currentLanguage === 'ar' ? 'خطأ: ' + error.message : 'Error: ' + error.message);
      }
    }

    async function handleLogin() {
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      const rememberEmail = document.getElementById('rememberEmail').checked;

      if (!email || !password) {
        alert(currentLanguage === 'ar' ? 'يرجى ملء جميع الحقول' : 'Please fill all fields');
        return;
      }

      try {
        // التحقق من بيانات المستخدم من Supabase
        const { data: users, error: fetchError } = await supabaseCall('GET', 'users', null, {
          email: `eq.${email}`
        });

        console.log('🔍 البحث عن المستخدم:', email);
        console.log('📊 النتائج:', users);
        console.log('❌ الخطأ:', fetchError);

        if (fetchError) {
          console.error('❌ خطأ في البحث:', fetchError);
          throw new Error(currentLanguage === 'ar' ? 'خطأ في الاتصال بقاعدة البيانات' : 'Database connection error');
        }

        if (!users || users.length === 0) {
          console.error('❌ المستخدم غير موجود في قاعدة البيانات');
          throw new Error(currentLanguage === 'ar' ? 'البريد الإلكتروني غير مسجل' : 'Email not registered');
        }

        const userData = users[0];

        // التحقق من كلمة المرور
        if (userData.password !== password) {
          throw new Error(currentLanguage === 'ar' ? 'البريد الإلكتروني أو كلمة المرور غير صحيحة' : 'Invalid email or password');
        }

        // حفظ بيانات المستخدم محلياً
        localStorage.setItem('currentUser', email);
        localStorage.setItem('userId', userData.id);

        // مسح بيانات البروفايل القديمة عند تسجيل دخول جديد
        localStorage.removeItem('userProfile_' + localStorage.getItem('userId'));
        localStorage.removeItem('userProfilePhoto_' + localStorage.getItem('userId'));
        console.log('🧹 تم مسح بيانات البروفايل القديمة');

        // حفظ البريد الإلكتروني إذا تم تحديد تذكر
        if (rememberEmail) {
          localStorage.setItem('rememberedEmail', email);
          console.log('💾 البريد الإلكتروني تم تذكره');
        } else {
          localStorage.removeItem('rememberedEmail');
        }

        console.log('✅ تم تسجيل الدخول من Supabase:', email);

        // تحميل بيانات المستخدم من Supabase
        setTimeout(async () => {
          await loadUserFromSupabase(email);
          console.log('✅ تم تحميل البيانات من السحابة');
        }, 1000);

        // Show beautiful success message instead of alert
        showSuccessMessage(
          currentLanguage === 'ar' ? 'تم التسجيل بنجاح' : 'Login Successful',
          currentLanguage === 'ar' ? 'مرحباً بعودتك إلى التطبيق' : 'Welcome back to the app'
        );

        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
        document.getElementById('rememberEmail').checked = rememberEmail;

        updateUserDisplay();

        // Navigate to benefits screen after showing success message
        setTimeout(() => {
          showScreen('screen-benefits');
        }, 1000);

      } catch (error) {
        console.error('Login Error:', error);
        alert(currentLanguage === 'ar' ? 'خطأ: ' + error.message : 'Error: ' + error.message);
      }
    }

    async function handleResetPassword() {
      const email = document.getElementById('resetEmail').value.trim();
      const newPassword = document.getElementById('resetPassword').value;
      const confirmPassword = document.getElementById('resetPasswordConfirm').value;
      const msgDiv = document.getElementById('resetMsg');

      if (!email || !newPassword || !confirmPassword) {
        msgDiv.innerHTML = '<div style="background: #f8d7da; color: #721c24; padding: 12px; border-radius: 6px; border: 1px solid #f5c6cb;">يرجى ملء جميع الحقول</div>';
        return;
      }

      if (newPassword !== confirmPassword) {
        msgDiv.innerHTML = '<div style="background: #f8d7da; color: #721c24; padding: 12px; border-radius: 6px; border: 1px solid #f5c6cb;">كلمات المرور غير متطابقة</div>';
        return;
      }

      if (newPassword.length < 6) {
        msgDiv.innerHTML = '<div style="background: #f8d7da; color: #721c24; padding: 12px; border-radius: 6px; border: 1px solid #f5c6cb;">كلمة المرور يجب أن تكون 6 أحرف على الأقل</div>';
        return;
      }

      try {
        // البحث عن المستخدم في Supabase
        const { data: users, error: fetchError } = await supabaseCall('GET', 'users', null, {
          email: `eq.${email}`
        });

        if (fetchError || !users || users.length === 0) {
          msgDiv.innerHTML = '<div style="background: #f8d7da; color: #721c24; padding: 12px; border-radius: 6px; border: 1px solid #f5c6cb;">هذا البريد الإلكتروني غير موجود</div>';
          return;
        }

        const userData = users[0];

        // تحديث كلمة المرور في Supabase
        const { error: updateError } = await supabaseCall('PATCH', 'users',
          { password: newPassword },
          { id: `eq.${userData.id}` }
        );

        if (updateError) throw updateError;

        msgDiv.innerHTML = '<div style="background: #d4edda; color: #155724; padding: 12px; border-radius: 6px; border: 1px solid #c3e6cb;">✅ تم إعادة تعيين كلمة المرور بنجاح!</div>';

        // مسح النموذج
        document.getElementById('resetEmail').value = '';
        document.getElementById('resetPassword').value = '';
        document.getElementById('resetPasswordConfirm').value = '';

        // العودة إلى شاشة الدخول بعد ثانيتين
        setTimeout(() => {
          msgDiv.innerHTML = '';
          showScreen('screen-login');
        }, 2000);

      } catch (error) {
        console.error('Reset Password Error:', error);
        msgDiv.innerHTML = '<div style="background: #f8d7da; color: #721c24; padding: 12px; border-radius: 6px; border: 1px solid #f5c6cb;">خطأ: ' + error.message + '</div>';
      }
    }

    async function handleVerifyEmail() {
      const code = document.getElementById('verificationCode').value.trim();
      const msgDiv = document.getElementById('verifyMsg');
      const tempEmail = localStorage.getItem('tempEmail');
      const tempPassword = localStorage.getItem('tempPassword');

      if (!code) {
        msgDiv.innerHTML = '<div style="background: #f8d7da; color: #721c24; padding: 12px; border-radius: 6px; border: 1px solid #f5c6cb;">يرجى إدخال الرمز</div>';
        return;
      }

      if (code.length !== 6 || isNaN(code)) {
        msgDiv.innerHTML = '<div style="background: #f8d7da; color: #721c24; padding: 12px; border-radius: 6px; border: 1px solid #f5c6cb;">الرمز يجب أن يكون 6 أرقام</div>';
        return;
      }

      try {
        // التحقق من OTP
        const result = await verifyOTP(tempEmail, code);

        if (!result.success) {
          throw new Error(result.error);
        }

        // ⭐ تغيير: الآن نقوم بإنشاء المستخدم في Supabase فقط بعد التحقق من OTP بنجاح
        msgDiv.innerHTML = '<div style="background: #fff3cd; color: #856404; padding: 12px; border-radius: 6px; border: 1px solid #ffeaa7;">⏳ جاري إنشاء حسابك...</div>';

        const { data: userData, error: createError } = await supabaseCall('POST', 'users', {
          email: tempEmail,
          password: tempPassword
        });

        if (createError) {
          throw new Error('فشل في إنشاء الحساب: ' + createError);
        }

        // استخراج معرف المستخدم من الرد
        const userId = userData && userData[0] ? userData[0].id : null;

        if (!userId) {
          throw new Error('فشل في إنشاء المستخدم - لم نتلقَ معرف');
        }

        // تسجيل الدخول تلقائياً بعد التحقق والإنشاء الناجح
        localStorage.setItem('currentUser', tempEmail);
        localStorage.setItem('userId', userId);

        // مسح البيانات المؤقتة
        localStorage.removeItem('tempEmail');
        localStorage.removeItem('tempPassword');

        msgDiv.innerHTML = '<div style="background: #d4edda; color: #155724; padding: 12px; border-radius: 6px; border: 1px solid #c3e6cb;">✅ تم التحقق من البريد وإنشاء الحساب بنجاح!</div>';

        document.getElementById('verificationCode').value = '';
        updateUserDisplay();

        console.log('✅ تم إنشاء المستخدم في Supabase بنجاح:', tempEmail);

        // الانتقال إلى شاشة إكمال البروفايل
        setTimeout(() => {
          showScreen('screen-complete-profile');
        }, 1500);

      } catch (error) {
        console.error('Email Verification Error:', error);
        msgDiv.innerHTML = '<div style="background: #f8d7da; color: #721c24; padding: 12px; border-radius: 6px; border: 1px solid #f5c6cb;">❌ ' + error.message + '</div>';
      }
    }

    async function handleResendOTP() {
      const tempEmail = localStorage.getItem('tempEmail');

      if (!tempEmail) {
        alert('حدث خطأ - الرجاء بدء التسجيل من جديد');
        showScreen('screen-register');
        return;
      }

      try {
        const result = await sendOTP(tempEmail);

        if (!result.success) {
          throw new Error(result.error);
        }

        alert('📧 تم إعادة إرسال الرمز بنجاح');
      } catch (error) {
        console.error('Resend OTP Error:', error);
        alert('❌ فشل إعادة إرسال الرمز: ' + error.message);
      }
    }

    // ⭐ دالة تخطي التحقق من البريد والمتابعة مباشرة
    async function handleSkipVerification() {
      const tempEmail = localStorage.getItem('tempEmail');
      const tempPassword = localStorage.getItem('tempPassword');

      if (!tempEmail || !tempPassword) {
        alert('حدث خطأ - الرجاء بدء التسجيل من جديد');
        showScreen('screen-register');
        return;
      }

      try {
        // إنشاء المستخدم في Supabase مباشرة بدون التحقق من OTP
        const { data: userData, error: createError } = await supabaseCall('POST', 'users', {
          email: tempEmail,
          password: tempPassword
        });

        if (createError) {
          throw new Error('فشل في إنشاء الحساب: ' + createError);
        }

        // استخراج معرف المستخدم
        const userId = userData && userData[0] ? userData[0].id : null;

        if (!userId) {
          throw new Error('فشل في إنشاء المستخدم');
        }

        // تسجيل الدخول
        localStorage.setItem('currentUser', tempEmail);
        localStorage.setItem('userId', userId);

        // مسح البيانات المؤقتة
        localStorage.removeItem('tempEmail');
        localStorage.removeItem('tempPassword');

        alert('✅ تم إنشاء الحساب بنجاح! متابعة...');
        updateUserDisplay();

        // الانتقال إلى شاشة إكمال البروفايل
        setTimeout(() => {
          showScreen('screen-complete-profile');
        }, 1000);

      } catch (error) {
        console.error('Skip Verification Error:', error);
        alert('❌ خطأ: ' + error.message);
      }
    }

    function forgetEmail() {
      const confirmed = confirm(currentLanguage === 'ar'
        ? 'هل تريد حذف البريد الإلكتروني المخزن؟'
        : 'Delete your saved email address?');

      if (confirmed) {
        localStorage.removeItem('rememberedEmail');
        alert(currentLanguage === 'ar'
          ? '✅ تم حذف البريد الإلكتروني المخزن'
          : '✅ Saved email deleted');
        console.log('🗑️ البريد المخزن تم حذفه');
      }
    }

    async function logoutUser() {
      try {

        // حذف بيانات الجلسة من الجهاز (مع الحفاظ على سجل الحسابات)
        const savedUsers = localStorage.getItem('localUsers');
        const savedEmail = localStorage.getItem('rememberedEmail');
        localStorage.clear();
        if (savedUsers) localStorage.setItem('localUsers', savedUsers);
        if (savedEmail) localStorage.setItem('rememberedEmail', savedEmail);
        console.log('☁️ تم حذف جميع البيانات المحلية - كل البيانات على Google Sheets');

        alert(currentLanguage === 'ar' ? 'تم تسجيل الخروج بنجاح\n✅ بياناتك محفوظة على السحابة' : 'Logged out successfully\n✅ Your data is saved in the cloud');
        showScreen('screen-intro');
      } catch (error) {
        console.error('❌ Logout error:', error);
        alert(currentLanguage === 'ar' ? 'خطأ في تسجيل الخروج' : 'Error logging out');
      }
    }

    function goToDetails() {
      showScreen('screen-details');
    }

    function scrollToBenefitsSection(sectionId) {
      const element = document.getElementById('benefits-' + sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    function scrollToIntroSection(sectionId) {
      const element = document.getElementById('intro-' + sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    function scrollToDetailsSection(sectionId) {
      const element = document.getElementById('details-' + sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    function goToPlansFromPortfolio() {
      showScreen('screen-plans');
    }

    function renderPlans() {
      const grid = document.getElementById('plansGrid');
      const plans = getPlans();

      grid.innerHTML = plans.map((plan, i) => {
        const videoCount = plan.videos;
        const frames = Array(videoCount).fill(0).map((_, j) =>
          `<div class="f" style="--i:${j}"></div>`
        ).join('');

        const badgeText = currentLanguage === 'ar' ? 'الأفضل' : 'MOST POPULAR';
        const selectText = currentLanguage === 'ar' ? 'اختيار' : 'Choose';
        const supportText = currentLanguage === 'ar' ? 'دعم فني 24/7' : 'Professional Support';
        const updateText = currentLanguage === 'ar' ? 'تحديثات مستمرة' : 'Continuous Updates';
        const yearText = currentLanguage === 'ar' ? 'سنوي' : 'per year';

        const stars = '⭐'.repeat(plan.rating) + '☆'.repeat(5 - plan.rating);

        return `
          <div class="plan-card ${plan.popular ? 'popular' : ''}" style="animation-delay: ${i * 100}ms">
            ${plan.popular ? `<div class="badge">${badgeText}</div>` : ''}
            <div class="plan-inner">
              <div class="plan-name">${plan.name}</div>
              <div class="star-rating">${stars}</div>
              <div class="plan-price">${plan.price}<span>/${yearText}</span></div>
              <div class="frames" style="max-height: 50px; overflow-y: auto; display: flex; flex-wrap: wrap; gap: 7px;">${frames}</div>
              <div class="plan-meta">
                <b>${plan.features}</b><br>
                ${supportText}<br>
                ${updateText}
              </div>
              <button class="btn" onclick="showPlanDetails('${plan.name}', '${plan.price}', ${plan.videos}, '${plan.features}')" style="background:linear-gradient(135deg, var(--red) 0%, var(--red-light) 100%); color:white;">عرض التفاصيل</button>
            </div>
          </div>
        `;
      }).join('');
    }

    function addToCart(name, price) {
      const priceNum = parseInt(price.replace('$', ''));
      cart.push({ name, price, priceNum });
      updateCart();

      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
      console.log('✅ Item added to cart');

      // حفظ على Google Sheets
      autoSaveAllData();

      showScreen('screen-cart');
    }

    function selectPlan(name, price) {
      document.getElementById('confirmPlanName').textContent = name;
      document.getElementById('confirmPrice').textContent = price;
      showScreen('screen-confirm');
    }

    // Plan Details Modal Functions
    let currentPlanName = '';
    let currentPlanPrice = 0;
    let selectedAddOns = [];

    function showPlanDetails(name, price, videos, features) {
      currentPlanName = name;
      currentPlanPrice = parseInt(price.replace('$', ''));
      selectedAddOns = [];

      document.getElementById('planModalName').textContent = name;
      document.getElementById('planModalPrice').textContent = price;

      // Create features list
      const featuresList = features.split(',').map(f => f.trim()).filter(f => f);
      const featuresHTML = featuresList.map(f => `
        <li style="color:var(--text-secondary); margin-bottom:10px; display:flex; align-items:center; gap:10px;">
          <span style="color:var(--red); font-size:18px;">✓</span>
          <span>${f}</span>
        </li>
      `).join('');
      document.getElementById('planModalFeatures').innerHTML = featuresHTML;

      // Load add-ons
      loadAddOns();

      // Set up the add to cart button
      document.getElementById('addToCartBtn').onclick = () => {
        const totalPrice = calculateTotalPrice();
        addPlanWithAddOns(name, totalPrice);
        closePlanModal();
      };

      // Show modal
      document.getElementById('planModal').style.display = 'block';
    }

    function closePlanModal() {
      document.getElementById('planModal').style.display = 'none';
    }

    function loadAddOns() {
      const addOnsContainer = document.getElementById('planAddOns');
      const addOns = [
        { name: 'تصوير إضافي', price: 100, desc: 'ساعات تصوير إضافية' },
        { name: 'موسيقى مخصصة', price: 150, desc: 'تأليف موسيقى فريدة' },
        { name: 'توضيح الصوت', price: 80, desc: 'معالجة صوتية احترافية' },
        { name: 'رسوميات 3D', price: 200, desc: 'عناصر ثلاثية الأبعاد' },
        { name: 'نسخة سينمائية 4K', price: 120, desc: 'تصدير بجودة 4K' },
        { name: 'ترجمة وتعليقات', price: 100, desc: 'ترجمة لغات متعددة' }
      ];

      addOnsContainer.innerHTML = addOns.map((addon, i) => `
        <div class="addon-card" style="border:2px solid var(--line); padding:15px; border-radius:12px; cursor:pointer;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <h4 style="color:var(--text-primary); font-weight:700; margin:0;">${addon.name}</h4>
            <span style="color:var(--red); font-weight:700;">$${addon.price}</span>
          </div>
          <p style="color:var(--text-secondary); font-size:13px; margin:0;">${addon.desc}</p>
          <input type="checkbox" id="addon-${i}" data-price="${addon.price}" data-name="${addon.name}"
                 style="margin-top:10px; cursor:pointer; width:18px; height:18px;"
                 onchange="updateModalPrice()">
        </div>
      `).join('');
    }

    function updateModalPrice() {
      const checkboxes = document.querySelectorAll('#planAddOns input[type="checkbox"]:checked');
      selectedAddOns = [];
      let totalAddOnPrice = 0;

      checkboxes.forEach(cb => {
        const price = parseInt(cb.dataset.price);
        const name = cb.dataset.name;
        selectedAddOns.push({ name, price });
        totalAddOnPrice += price;
      });

      const totalPrice = currentPlanPrice + totalAddOnPrice;
      document.getElementById('planModalPrice').textContent = '$' + totalPrice;
    }

    function calculateTotalPrice() {
      let total = currentPlanPrice;
      selectedAddOns.forEach(addon => {
        total += addon.price;
      });
      return '$' + total;
    }

    function addPlanWithAddOns(planName, totalPrice) {
      // Add the main plan
      cart.push({ name: planName, price: totalPrice, priceNum: parseInt(totalPrice.replace('$', '')) });

      // Add selected add-ons as separate items
      selectedAddOns.forEach(addon => {
        cart.push({ name: '└─ ' + addon.name, price: '$' + addon.price, priceNum: addon.price, isAddOn: true });
      });

      updateCart();
      localStorage.setItem('cart', JSON.stringify(cart));
      console.log('✅ Plan with add-ons added to cart');
      showScreen('screen-cart');
    }

    // Close modal when clicking outside
    document.addEventListener('click', function(event) {
      const modal = document.getElementById('planModal');
      if (event.target === modal) {
        closePlanModal();
      }
    });

    function renderStats() {
      const grid = document.getElementById('statsGrid');
      const stats = getStats();

      grid.innerHTML = stats.map((stat, i) => `
        <div class="stat-card" style="animation-delay: ${i * 100}ms">
          <div class="stat-number">${stat.number}</div>
          <div class="stat-label">${stat.label}</div>
        </div>
      `).join('');
    }

    function renderFeaturedWorks() {
      const grid = document.getElementById('featuredGrid');
      const works = getFeaturedWorks();

      grid.innerHTML = works.map((work, i) => `
        <div class="featured-card" style="animation-delay: ${i * 100}ms">
          <div class="featured-image">${work.icon}</div>
          <div class="featured-content">
            <div class="featured-title">${work.title}</div>
            <div class="featured-desc">${work.desc}</div>
            <span class="featured-tag">${work.tag}</span>
          </div>
        </div>
      `).join('');
    }

    function renderTeam() {
      const grid = document.getElementById('teamGrid');
      const members = getTeamMembers();

      grid.innerHTML = members.map((member, i) => `
        <div class="team-card" style="animation-delay: ${i * 100}ms">
          <div class="team-avatar">${member.emoji}</div>
          <div class="team-name">${member.name}</div>
          <div class="team-role">${member.role}</div>
          <div class="team-desc">${currentLanguage === 'ar' ? 'متخصص في مجال الموشن جرافك والتصميم الاحترافي' : 'Specialist in motion graphics and professional design'}</div>
        </div>
      `).join('');
    }

    async function loadPortfolioVideos() {
      const grid = document.getElementById('portfolioGrid');

      // إزالة الفيديوهات الافتراضية - تحميل فقط الفيديوهات المحملة
      let allVideos = [];
      const userId = localStorage.getItem('userId');

      // Load from localStorage first
      console.log('📂 Loading videos from storage...');
      console.log('🔑 Current userId:', userId);
      try {
        const portfolio = JSON.parse(localStorage.getItem('portfolio') || '[]');
        console.log(`📦 Total videos in localStorage: ${portfolio.length}`);

        // حمّل جميع الفيديوهات بغض النظر عن userId (للتوافق مع البيانات القديمة)
        portfolio.forEach(video => {
          if (video.videoData || video.videoURL) {
            console.log('🎬 Loading video:', video.fileName, 'UserId:', video.userId);
            allVideos.push({
              title: video.fileName || (currentLanguage === 'ar' ? 'فيديو محفوظ' : 'Saved Video'),
              desc: new Date(video.uploadedAt).toLocaleDateString(currentLanguage === 'ar' ? 'ar-SA' : 'en-US'),
              type: 'motion',
              url: video.videoData || video.videoURL,
              isUploaded: true,
              isLocal: video.stored !== 'cloudinary' // If it's from Cloudinary, it's CLOUD, not local
            });
          }
        });
        console.log(`✅ Loaded ${allVideos.length} videos from localStorage`);
      } catch (error) {
        console.log('localStorage load failed:', error);
      }

      // Load from Firestore
      try {
      } catch (error) {
        console.log('Firestore load failed:', error);
      }

      // Load from Cloudinary directly if no videos found
      if (allVideos.length === 0) {
        console.log('🎬 No videos in storage, checking Cloudinary...');
        try {
          // Try to load from localStorage as backup
          const cloudinaryBackup = JSON.parse(localStorage.getItem('cloudinaryVideos') || '[]');
          if (cloudinaryBackup.length > 0) {
            allVideos.push(...cloudinaryBackup);
            console.log(`✅ Loaded ${cloudinaryBackup.length} videos from Cloudinary backup`);
          }
        } catch (e) {
          console.log('Cloudinary backup load failed:', e);
        }
      }

      const noVideoText = currentLanguage === 'ar'
        ? 'المتصفح الخاص بك لا يدعم تشغيل الفيديو'
        : 'Your browser does not support video playback';

      if (allVideos.length === 0) {
        grid.innerHTML = `<div style="text-align: center; padding: 60px 20px; grid-column: 1/-1; color: var(--text-secondary);">
          <p style="font-size: 18px; margin-bottom: 10px;">🎬 ${currentLanguage === 'ar' ? 'لم تحمّل أي فيديوهات بعد' : 'No videos uploaded yet'}</p>
          <p style="font-size: 14px;">${currentLanguage === 'ar' ? 'انتقل إلى المعلومات وحمّل فيديوهاتك الأولى' : 'Go to Settings and upload your first videos'}</p>
        </div>`;
        return;
      }

      grid.innerHTML = allVideos.map((video, i) => `
        <div class="video-item" data-type="${video.type}" style="animation-delay: ${i * 100}ms; position: relative;">
          <video class="video-player" controls crossorigin="anonymous" playsinline preload="metadata">
            <source src="${video.url}" type="video/mp4">
            ${noVideoText}
          </video>
          <div class="video-meta">
            <div class="video-title">${video.title}</div>
            <div class="video-desc">${video.desc}</div>
          </div>
          <span style="position: absolute; top: 10px; right: 10px; background: var(--red); color: white; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 700;">🎬 ${video.isLocal ? 'LOCAL' : 'CLOUD'}</span>
          <button onclick="deleteVideo('${video.title.replace(/'/g, "\\'")}', ${i})" style="position: absolute; top: 10px; left: 10px; background: #ff4444; border: none; color: white; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; font-size: 18px; display: flex; align-items: center; justify-content: center; transition: all 0.3s; hover: background: #cc0000;">✕</button>
        </div>
      `).join('');

      console.log(`📊 Total videos displayed: ${allVideos.length}`);
    }


    function filterPortfolio() {
      const searchTerm = document.getElementById('portfolioSearch').value.toLowerCase();
      const items = document.querySelectorAll('.video-item');
      items.forEach(item => {
        const title = item.querySelector('.video-title').textContent.toLowerCase();
        const desc = item.querySelector('.video-desc').textContent.toLowerCase();
        if (title.includes(searchTerm) || desc.includes(searchTerm)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    }

    function filterPortfolioByType(btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      const items = document.querySelectorAll('.video-item');
      items.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-type') === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    }

    function updateCart() {
      const cartDiv = document.getElementById('cartItems');
      if (cart.length === 0) {
        cartDiv.innerHTML = `<div style="text-align:center; padding:40px; color:var(--text-secondary);">${currentLanguage === 'ar' ? 'السلة فارغة - أضف باقات' : 'Cart is empty - Add plans'}</div>`;
      } else {
        cartDiv.innerHTML = cart.map((item, i) => `
          <div class="cart-item">
            <div class="cart-item-info">
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-price">${item.price}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${i})">${currentLanguage === 'ar' ? 'حذف' : 'Remove'}</button>
          </div>
        `).join('');
      }
      calculateTotal();
    }

    function removeFromCart(index) {
      cart.splice(index, 1);
      updateCart();
    }

    function calculateTotal() {
      const subtotal = cart.reduce((sum, item) => sum + item.priceNum, 0);
      const discount = Math.floor(subtotal * discountPercent / 100);
      const total = subtotal - discount;

      document.getElementById('subtotal').textContent = `$${subtotal}`;
      document.getElementById('discount').textContent = `$${discount}`;
      document.getElementById('total').textContent = `$${total}`;
    }

    function applyCoupon() {
      const code = document.getElementById('couponCode').value.toUpperCase();
      const message = document.getElementById('couponMessage');

      if (code === 'WELCOME50') {
        discountPercent = 50;
        message.textContent = currentLanguage === 'ar' ? 'تم تطبيق الخصم 50% بنجاح!' : 'Discount 50% applied successfully!';
        message.style.color = 'var(--red)';
      } else if (code === '') {
        message.textContent = currentLanguage === 'ar' ? 'يرجى إدخال رمز خصم' : 'Please enter a coupon code';
        message.style.color = 'var(--text-secondary)';
      } else {
        message.textContent = currentLanguage === 'ar' ? 'رمز الخصم غير صحيح' : 'Invalid coupon code';
        message.style.color = 'var(--red)';
      }
      calculateTotal();
    }

    async function checkoutCart() {
      if (cart.length === 0) {
        alert(currentLanguage === 'ar' ? 'السلة فارغة!' : 'Cart is empty!');
        return;
      }

      const currentUser = localStorage.getItem('currentUser');
      const userId = localStorage.getItem('userId');
      if (!currentUser) {
        alert(currentLanguage === 'ar' ? 'يرجى تسجيل الدخول أولاً' : 'Please login first');
        showScreen('screen-login');
        return;
      }

      const subtotal = cart.reduce((sum, item) => sum + item.priceNum, 0);
      const discount = Math.floor(subtotal * discountPercent / 100);
      const total = subtotal - discount;

      try {
        // Save order to localStorage
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        orders.push({
          userId: userId,
          userEmail: currentUser,
          items: cart,
          subtotal: subtotal,
          discountPercent: discountPercent,
          discount: discount,
          total: total,
          status: 'pending',
          createdAt: new Date().toISOString()
        });
        localStorage.setItem('orders', JSON.stringify(orders));
        console.log('✅ Order saved locally');

      } catch (error) {
        console.error('Checkout Error:', error);
        alert(currentLanguage === 'ar' ? 'خطأ في معالجة الطلب' : 'Error processing order');
        return;
      }

      alert(currentLanguage === 'ar' ? 'شكراً! تم توجيهك إلى بوابة الدفع' : 'Thank you! Redirecting to payment gateway');

      cart = [];
      updateCart();
    }

    async function submitContactForm(e) {
      e.preventDefault();
      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const phone = document.getElementById('contactPhone').value;
      const subject = document.getElementById('contactSubject').value;
      const message = document.getElementById('contactMessage').value;

      try {
        // Save message to localStorage
        const messages = JSON.parse(localStorage.getItem('messages') || '[]');
        messages.push({
          name: name,
          email: email,
          phone: phone,
          subject: subject,
          message: message,
          createdAt: new Date().toISOString(),
          read: false
        });
        localStorage.setItem('messages', JSON.stringify(messages));
        console.log('✅ Message saved locally');


        alert(currentLanguage === 'ar' ? `شكراً ${name}! تم استقبال رسالتك بنجاح` : `Thank you ${name}! Your message has been received`);
        e.target.reset();
        showScreen('screen-benefits');
      } catch (error) {
        console.error('Contact Form Error:', error);
        alert(currentLanguage === 'ar' ? `شكراً ${name}! تم استقبال رسالتك` : `Thank you ${name}! Message received`);
        e.target.reset();
        showScreen('screen-benefits');
      }
    }

    function subscribeNewsletter() {
      const emailInput = document.getElementById('emailNewsletter');
      const email = emailInput.value.trim();

      if (!email) {
        alert(currentLanguage === 'ar' ? 'يرجى إدخال بريدك الإلكتروني' : 'Please enter your email');
        return;
      }

      if (!email.includes('@')) {
        alert(currentLanguage === 'ar' ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email');
        return;
      }

      // Save to localStorage
      let subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
      }

      // Show success message
      const title = currentLanguage === 'ar' ? 'شكراً! ✨' : 'Thank You! ✨';
      const text = currentLanguage === 'ar' ? 'تم اشتراكك في النشرة البريدية' : 'You have been subscribed to our newsletter';
      showSuccessMessage(title, text);

      emailInput.value = '';
      console.log('📧 تم الاشتراك:', email);
    }

    function sendMessage() {
      const input = document.getElementById('chatInput');
      const msg = input.value.trim();
      if (!msg) return;

      const container = document.getElementById('chatMessages');
      container.innerHTML += `<div class="chat-message user">${msg}</div>`;
      input.value = '';

      setTimeout(() => {
        const responses = [
          currentLanguage === 'ar' ? 'شكراً لرسالتك! سنرد عليك قريباً.' : 'Thank you for your message! We\'ll reply soon.',
          currentLanguage === 'ar' ? 'كيف يمكننا مساعدتك؟' : 'How can we help you?',
          currentLanguage === 'ar' ? 'نحن هنا لمساعدتك في أي وقت!' : 'We\'re here to help anytime!'
        ];
        container.innerHTML += `<div class="chat-message bot">${responses[Math.floor(Math.random() * responses.length)]}</div>`;
        container.scrollTop = container.scrollHeight;
      }, 500);
    }

    // Review System Functions
    let currentRating = 0;

    function setRating(stars) {
      currentRating = stars;
      const starsContainer = document.getElementById('ratingStars');
      const starElements = starsContainer.querySelectorAll('.star');

      starElements.forEach((star, index) => {
        if (index < stars) {
          star.textContent = '⭐';
          star.style.color = 'var(--red)';
        } else {
          star.textContent = '☆';
          star.style.color = 'var(--gray)';
        }
      });

      const ratingTexts = [
        'سيء جداً 😞',
        'سيء 😐',
        'عادي 😊',
        'جيد جداً 😄',
        'ممتاز! 🤩'
      ];
      document.getElementById('ratingText').textContent = ratingTexts[stars - 1];
    }

    function submitReview() {
      if (currentRating === 0) {
        alert('يرجى اختيار تقييم من 1 إلى 5 نجوم');
        return;
      }

      const reviewType = document.querySelector('input[name="reviewType"]:checked')?.value || 'عام';
      const comment = document.getElementById('reviewComment').value.trim();
      const email = document.getElementById('reviewEmail').value.trim();

      const review = {
        rating: currentRating,
        type: reviewType,
        comment: comment,
        email: email,
        date: new Date().toLocaleDateString('ar-SA'),
        timestamp: Date.now()
      };

      // Save to localStorage
      let reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
      reviews.unshift(review);
      localStorage.setItem('reviews', JSON.stringify(reviews));

      // Reset form
      currentRating = 0;
      document.getElementById('ratingStars').querySelectorAll('.star').forEach(star => {
        star.textContent = '☆';
        star.style.color = 'var(--gray)';
      });
      document.getElementById('ratingText').textContent = 'اختر التقييم من 1 إلى 5 نجوم';
      document.querySelectorAll('input[name="reviewType"]').forEach(r => r.checked = false);
      document.getElementById('reviewComment').value = '';
      document.getElementById('reviewEmail').value = '';
      document.getElementById('charCount').textContent = '0/500';

      // Show success message
      alert('شكراً لتقييمك! نقدر آرائك كثيراً 🙏');

      // Reload reviews
      loadReviews();
    }

    function loadReviews() {
      const reviewsList = document.getElementById('reviewsList');
      let reviews = JSON.parse(localStorage.getItem('reviews') || '[]');

      if (reviews.length === 0) {
        reviewsList.innerHTML = '<p style="color:var(--text-secondary); text-align:center;">لا توجد تقييمات حتى الآن. كن الأول!</p>';
        return;
      }

      reviewsList.innerHTML = reviews.slice(0, 5).map(review => `
        <div style="background:var(--bg-primary); padding:20px; border-radius:12px; margin-bottom:15px; border-left:4px solid var(--red);">
          <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:10px;">
            <div>
              <p style="color:var(--red); font-weight:700; margin:0; margin-bottom:5px;">
                ${'⭐'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
              </p>
              <p style="color:var(--text-secondary); font-size:12px; margin:0;">
                ${review.date} • ${review.type}
              </p>
            </div>
          </div>
          ${review.comment ? `<p style="color:var(--text-primary); margin:10px 0; line-height:1.6;">"${review.comment}"</p>` : ''}
          ${review.email ? `<p style="color:var(--text-secondary); font-size:12px; margin:0;">- ${review.email}</p>` : ''}
        </div>
      `).join('');
    }

    // Update character count
    document.addEventListener('DOMContentLoaded', () => {
      const commentField = document.getElementById('reviewComment');
      if (commentField) {
        commentField.addEventListener('input', (e) => {
          document.getElementById('charCount').textContent = e.target.value.length + '/500';
        });
      }

      // Initialize new features
      initializeAppointments();
      initializeProjects();
      initializeOffers();
      initializeReferral();
    });

    // ============ APPOINTMENTS FUNCTIONS ============
    function initializeAppointments() {
      // Set minimum date to today
      const today = new Date().toISOString().split('T')[0];
      document.getElementById('appointmentDate').setAttribute('min', today);
      loadAppointments();
    }

    function bookAppointment() {
      const date = document.getElementById('appointmentDate').value;
      const time = document.querySelector('input[name="appointmentTime"]:checked')?.value;
      const type = document.querySelector('input[name="consultationType"]:checked')?.value;
      const notes = document.getElementById('appointmentNotes').value;

      if (!date || !time || !type) {
        alert(currentLanguage === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill all required fields');
        return;
      }

      const userId = localStorage.getItem('userId');
      let appointments = JSON.parse(localStorage.getItem('appointments_' + userId) || '[]');

      const appointment = {
        id: Date.now().toString(),
        date: date,
        time: time,
        type: type === 'video' ? 'استشارة فيديو' : 'استشارة هاتفية',
        notes: notes,
        status: 'مؤكد',
        createdAt: new Date().toISOString()
      };

      appointments.push(appointment);
      localStorage.setItem('appointments_' + userId, JSON.stringify(appointments));

      alert(currentLanguage === 'ar' ? 'تم حجز موعدك بنجاح! سيتم التواصل معك قريباً' : 'Appointment booked successfully!');

      // Reset form
      document.getElementById('appointmentDate').value = '';
      document.querySelectorAll('input[name="appointmentTime"]').forEach(r => r.checked = false);
      document.querySelectorAll('input[name="consultationType"]').forEach(r => r.checked = false);
      document.getElementById('appointmentNotes').value = '';

      loadAppointments();
    }

    function loadAppointments() {
      const userId = localStorage.getItem('userId');
      let appointments = JSON.parse(localStorage.getItem('appointments_' + userId) || '[]');
      const list = document.getElementById('appointmentsList');

      if (appointments.length === 0) {
        list.innerHTML = '<p style="color:var(--text-secondary); text-align:center; padding:20px;">لا توجد مواعيد محجوزة حتى الآن</p>';
        return;
      }

      list.innerHTML = appointments.map(apt => `
        <div style="background:var(--bg-primary); padding:15px; border-radius:10px; margin-bottom:10px; border-left:4px solid var(--red);">
          <div style="display:flex; justify-content:space-between; align-items:start;">
            <div style="flex:1;">
              <p style="color:var(--text-primary); font-weight:700; margin:0 0 5px 0;">📅 ${apt.date} ⏰ ${apt.time}</p>
              <p style="color:var(--text-secondary); font-size:14px; margin:0;">نوع: ${apt.type}</p>
              ${apt.notes ? `<p style="color:var(--text-secondary); font-size:13px; margin:5px 0 0 0;">ملاحظات: ${apt.notes}</p>` : ''}
            </div>
            <span style="background:var(--red); color:white; padding:5px 10px; border-radius:6px; font-size:12px; font-weight:700; white-space:nowrap;">✓ ${apt.status}</span>
          </div>
        </div>
      `).join('');
    }

    // ============ PROJECTS FUNCTIONS ============
    function initializeProjects() {
      filterProjects('all');
    }

    function filterProjects(filter) {
      const userId = localStorage.getItem('userId');
      let projects = JSON.parse(localStorage.getItem('projects_' + userId) || '[]');

      // لا توجد بيانات وهمية - فقط البيانات الحقيقية من المستخدم
      let filtered = projects;
      if (filter === 'active') filtered = projects.filter(p => p.status === 'active');
      else if (filter === 'completed') filtered = projects.filter(p => p.status === 'completed');
      else if (filter === 'pending') filtered = projects.filter(p => p.status === 'pending');

      const list = document.getElementById('projectsList');
      const noProjects = document.getElementById('noProjects');

      if (filtered.length === 0) {
        list.style.display = 'none';
        noProjects.style.display = 'block';
        return;
      }

      list.style.display = 'grid';
      noProjects.style.display = 'none';

      list.innerHTML = filtered.map(proj => `
        <div style="background:var(--bg-secondary); padding:25px; border-radius:16px; border-left:4px solid ${proj.status === 'completed' ? '#10b981' : 'var(--red)'};">
          <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:15px;">
            <div>
              <h3 style="color:var(--text-primary); font-weight:700; margin:0 0 5px 0;">📹 ${proj.name}</h3>
              <p style="color:var(--text-secondary); font-size:14px; margin:0;">📅 ${proj.dueDate}</p>
            </div>
            <span style="background:${proj.status === 'completed' ? '#10b981' : 'var(--red)'}; color:white; padding:8px 15px; border-radius:8px; font-size:13px; font-weight:700; white-space:nowrap;">
              ${proj.status === 'active' ? '🔄 جاري' : proj.status === 'completed' ? '✓ مكتمل' : '⏳ قيد الانتظار'}
            </span>
          </div>
          <div style="margin-bottom:15px;">
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
              <span style="color:var(--text-secondary); font-size:13px;">التقدم</span>
              <span style="color:var(--text-primary); font-weight:700;">${proj.progress}%</span>
            </div>
            <div style="background:var(--line); height:8px; border-radius:4px; overflow:hidden;">
              <div style="background:var(--red); height:100%; width:${proj.progress}%; transition:width 0.3s;"></div>
            </div>
          </div>
          <p style="color:var(--text-primary); font-weight:700; margin:0;">💰 ${proj.price}</p>
        </div>
      `).join('');

      // Update tab styles
      document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.style.background = 'var(--bg-primary)';
      });
      event.target.style.background = 'var(--bg-secondary)';
    }

    // ============ OFFERS FUNCTIONS ============
    function initializeOffers() {
      loadOffers();
    }

    function loadOffers() {
      const offers = [
        { title: '🎯 خصم الصيف 2026', desc: 'احصل على خصم 25% على جميع الباقات طوال شهر أغسطس', discount: '25%', code: 'SUMMER25', daysLeft: 15 },
        { title: '🎁 العروض الحصرية', desc: 'تحديث مستمر لـ الباقة الاحترافية مجاناً للعملاء الجدد', discount: 'مجاني', code: 'NEWPRO', daysLeft: 30 },
        { title: '👥 خصم الإحالة', desc: 'أحصل على 10% خصم اضافي عند إحالة عميل جديد', discount: '10%', code: 'REFER10', daysLeft: 90 },
      ];

      document.getElementById('offersList').innerHTML = offers.map(offer => `
        <div style="background:var(--bg-primary); padding:20px; border-radius:12px; border-left:4px solid var(--red);">
          <div style="display:flex; justify-content:space-between; align-items:start;">
            <div style="flex:1;">
              <h4 style="color:var(--text-primary); font-weight:700; margin:0 0 8px 0;">${offer.title}</h4>
              <p style="color:var(--text-secondary); font-size:14px; margin:0 0 10px 0;">${offer.desc}</p>
              <p style="color:var(--text-primary); font-size:13px; margin:0;">⏰ ينتهي خلال ${offer.daysLeft} يوم</p>
            </div>
            <div style="text-align:center; min-width:80px;">
              <p style="color:var(--red); font-size:24px; font-weight:900; margin:0;">${offer.discount}</p>
              <p style="color:var(--text-secondary); font-size:12px; margin:8px 0 0 0; font-family:'JetBrains Mono';">${offer.code}</p>
            </div>
          </div>
        </div>
      `).join('');
    }

    function applyDiscountCode() {
      const code = document.getElementById('discountCode').value.trim().toUpperCase();
      const result = document.getElementById('discountResult');

      if (!code) {
        result.innerHTML = '<p style="color:var(--text-secondary);">يرجى إدخال كود الخصم</p>';
        return;
      }

      const validCodes = {
        'WELCOME20': { discount: 20, message: '✅ تم تطبيق خصم 20% بنجاح!' },
        'VIP2024': { discount: 30, message: '✅ تم تطبيق خصم 30% بنجاح!' },
        'SUMMER25': { discount: 25, message: '✅ تم تطبيق خصم 25% لعرض الصيف!' },
        'NEWPRO': { discount: 0, message: '✅ تم تفعيل التحديثات المجانية!' },
        'REFER10': { discount: 10, message: '✅ تم تطبيق خصم الإحالة 10%!' }
      };

      if (validCodes[code]) {
        const userId = localStorage.getItem('userId');
        let myDiscounts = JSON.parse(localStorage.getItem('myDiscounts_' + userId) || '[]');

        if (!myDiscounts.find(d => d.code === code)) {
          myDiscounts.push({ code, discount: validCodes[code].discount, appliedAt: new Date().toISOString() });
          localStorage.setItem('myDiscounts_' + userId, JSON.stringify(myDiscounts));
        }

        result.innerHTML = `<p style="color:#10b981; font-weight:700;">${validCodes[code].message}</p>`;
        document.getElementById('discountCode').value = '';
        setTimeout(() => loadMyDiscounts(), 1000);
      } else {
        result.innerHTML = '<p style="color:var(--red);">❌ الكود غير صحيح أو منتهي الصلاحية</p>';
      }
    }

    function loadMyDiscounts() {
      const userId = localStorage.getItem('userId');
      let myDiscounts = JSON.parse(localStorage.getItem('myDiscounts_' + userId) || '[]');
      const list = document.getElementById('myDiscounts');

      if (myDiscounts.length === 0) {
        list.innerHTML = '<p style="color:var(--text-secondary); text-align:center; padding:20px;">لا توجد خصومات متاحة حالياً</p>';
        return;
      }

      list.innerHTML = myDiscounts.map(disc => `
        <div style="background:var(--bg-primary); padding:15px; border-radius:10px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <p style="color:var(--text-primary); font-weight:700; margin:0;">خصم ${disc.discount}%</p>
            <p style="color:var(--text-secondary); font-size:13px; margin:5px 0 0 0; font-family:'JetBrains Mono';">${disc.code}</p>
          </div>
          <span style="background:var(--red); color:white; padding:5px 10px; border-radius:6px; font-size:12px; font-weight:700;">نشط</span>
        </div>
      `).join('');
    }

    // ============ SUBSCRIPTIONS FUNCTIONS ============
    function initializeReferral() {
      loadSubscriptions();
    }

    function loadSubscriptions() {
      const userId = localStorage.getItem('userId');
      let subscriptions = JSON.parse(localStorage.getItem('subscriptions_' + userId) || '[]');

      const today = new Date();
      const active = subscriptions.filter(sub => new Date(sub.endDate) > today);
      const expired = subscriptions.filter(sub => new Date(sub.endDate) <= today);

      // عرض الاشتراكات النشطة
      const activeDiv = document.getElementById('activeSubscriptions');
      if (active.length === 0) {
        activeDiv.innerHTML = `
          <div style="text-align:center; padding:40px 20px; background:var(--bg-secondary); border-radius:16px;">
            <div style="font-size:48px; margin-bottom:15px;">📭</div>
            <p style="color:var(--text-primary); font-weight:700; margin:0 0 8px 0;">لا توجد اشتراكات نشطة</p>
            <p style="color:var(--text-secondary); font-size:14px; margin:0;">اختر باقة الآن لبدء اشتراكك</p>
            <button class="btn" onclick="showScreen('screen-plans')" style="margin-top:20px; background:linear-gradient(135deg, var(--red) 0%, var(--red-light) 100%); color:white;">اختر باقة</button>
          </div>
        `;
      } else {
        activeDiv.innerHTML = active.map(sub => createSubscriptionCard(sub)).join('');
      }

      // عرض الاشتراكات المنتهية
      const expiredDiv = document.getElementById('expiredSubscriptions');
      if (expired.length === 0) {
        expiredDiv.innerHTML = `
          <div style="text-align:center; padding:40px 20px; background:var(--bg-secondary); border-radius:16px;">
            <p style="color:var(--text-secondary); font-size:14px;">لا توجد اشتراكات منتهية</p>
          </div>
        `;
      } else {
        expiredDiv.innerHTML = expired.map(sub => createSubscriptionCard(sub, true)).join('');
      }
    }

    function createSubscriptionCard(sub, isExpired = false) {
      const startDate = new Date(sub.startDate).toLocaleDateString('ar-SA');
      const endDate = new Date(sub.endDate).toLocaleDateString('ar-SA');
      const daysLeft = Math.ceil((new Date(sub.endDate) - new Date()) / (1000 * 60 * 60 * 24));

      return `
        <div style="background:var(--bg-primary); padding:25px; border-radius:16px; border-left:4px solid ${isExpired ? 'var(--gray)' : 'var(--red)'};">
          <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:20px;">
            <div>
              <h3 style="color:var(--text-primary); font-weight:900; font-size:20px; margin:0 0 5px 0;">📦 ${sub.planName}</h3>
              <p style="color:var(--text-secondary); font-size:13px; margin:0;">${sub.duration === 'monthly' ? 'اشتراك شهري' : 'اشتراك سنوي'}</p>
            </div>
            <span style="background:${isExpired ? 'var(--gray)' : 'var(--red)'}; color:white; padding:8px 15px; border-radius:8px; font-weight:700; font-size:13px; white-space:nowrap;">
              ${isExpired ? '❌ منتهي' : '✓ نشط'}
            </span>
          </div>

          <div style="background:var(--bg-secondary); padding:20px; border-radius:12px; margin-bottom:20px;">
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
              <div>
                <p style="color:var(--text-secondary); font-size:12px; margin:0 0 8px 0;">📅 تاريخ البداية</p>
                <p style="color:var(--text-primary); font-weight:700; margin:0;">${startDate}</p>
              </div>
              <div>
                <p style="color:var(--text-secondary); font-size:12px; margin:0 0 8px 0;">📅 تاريخ الانتهاء</p>
                <p style="color:var(--text-primary); font-weight:700; margin:0;">${endDate}</p>
              </div>
              ${!isExpired ? `
                <div>
                  <p style="color:var(--text-secondary); font-size:12px; margin:0 0 8px 0;">⏱️ الوقت المتبقي</p>
                  <p style="color:var(--red); font-weight:700; margin:0;">${daysLeft} يوم</p>
                </div>
              ` : ''}
              <div>
                <p style="color:var(--text-secondary); font-size:12px; margin:0 0 8px 0;">💰 المبلغ المدفوع</p>
                <p style="color:var(--text-primary); font-weight:700; margin:0;">$${sub.amount}</p>
              </div>
            </div>
          </div>

          <div>
            <p style="color:var(--text-primary); font-weight:700; margin:0 0 12px 0;">✨ المميزات المتضمنة:</p>
            <ul style="margin:0; padding-right:20px; color:var(--text-secondary); font-size:14px;">
              ${sub.features.map(f => `<li style="margin-bottom:8px;">${f}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    }

    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    }

    async function handleCompleteProfile() {
      const fullName = document.getElementById('completeName').value;
      const company = document.getElementById('completeCompany').value;
      const phone = document.getElementById('completePhone').value;
      const country = document.getElementById('completeCountry').value;
      const city = document.getElementById('completeCity').value;
      const description = document.getElementById('completeDescription').value;
      const profilePicFile = document.getElementById('completeProfilePic').files[0];
      const userId = localStorage.getItem('userId');

      if (!fullName || !company || !phone || !country || !city) {
        alert(currentLanguage === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill all required fields');
        return;
      }

      try {
        let profilePicUrl = '';

        // Upload image to Cloudinary if selected
        if (profilePicFile) {
          const formData = new FormData();
          formData.append('file', profilePicFile);
          formData.append('upload_preset', 'unsigned_preset');
          formData.append('cloud_name', 'lddc7v8k');
          formData.append('folder', `trueline_profiles/${userId}`);

          console.log('⏳ Uploading profile picture to Cloudinary...');

          const response = await fetch('https://api.cloudinary.com/v1_1/lddc7v8k/image/upload', {
            method: 'POST',
            body: formData
          });

          if (!response.ok) {
            throw new Error(`Upload failed: ${response.status}`);
          }

          const data = await response.json();
          profilePicUrl = data.secure_url;
          console.log('✅ Profile picture uploaded to Cloudinary:', profilePicUrl);
        }

        // حفظ بيانات البروفايل على Supabase
        const { error: updateError } = await supabaseCall('PATCH', 'users',
          {
            full_name: fullName,
            phone: phone,
            company: company,
            country: country,
            bio: description,
            avatar_url: profilePicUrl
          },
          { id: `eq.${userId}` }
        );

        if (updateError) throw updateError;

        // حفظ البيانات محلياً أيضاً
        const userProfile = {
          name: fullName,
          company: company,
          phone: phone,
          country: country,
          city: city,
          description: description,
          photoURL: profilePicUrl,
          profileCompleted: true,
          completedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        localStorage.setItem('userProfile_' + userId, JSON.stringify(userProfile));
        console.log('☁️ تم حفظ البروفايل على Supabase');

        // حفظ رابط الصورة
        if (profilePicUrl) {
          localStorage.setItem('userProfilePhoto_' + userId, profilePicUrl);
          console.log('🖼️ تم حفظ الصورة على Cloudinary');
        }

        // Show success message
        const title = currentLanguage === 'ar' ? 'تم بنجاح! ✨' : 'Success! ✨';
        const text = currentLanguage === 'ar' ? 'تم إكمال بروفايلك بنجاح' : 'Profile completed successfully';
        showSuccessMessage(title, text);

        updateUserDisplay();

        // Navigate to benefits screen
        setTimeout(() => {
          showScreen('screen-benefits');
        }, 1500);

      } catch (error) {
        console.error('Profile completion error:', error);
        alert(currentLanguage === 'ar'
          ? `خطأ: ${error.message}`
          : `Error: ${error.message}`);
      }
    }

    async function saveProfile() {
      const name = document.getElementById('profileName').value;
      const company = document.getElementById('profileCompany').value;
      const phone = document.getElementById('profilePhone').value;
      const country = document.getElementById('profileCountry').value;
      const city = document.getElementById('profileCity').value;
      const description = document.getElementById('profileDescription').value;
      const profilePicFile = document.getElementById('profilePic').files[0];
      const currentUser = localStorage.getItem('currentUser');
      const userId = localStorage.getItem('userId');

      if (!currentUser) {
        alert(currentLanguage === 'ar' ? 'يرجى تسجيل الدخول أولاً' : 'Please login first');
        return;
      }

      if (!name || !company || !phone || !country || !city) {
        alert(currentLanguage === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill all required fields');
        return;
      }

      try {
        let profilePicUrl = '';

        // Upload image to Cloudinary if selected
        if (profilePicFile) {
          const formData = new FormData();
          formData.append('file', profilePicFile);
          formData.append('upload_preset', 'unsigned_preset');
          formData.append('cloud_name', 'lddc7v8k');
          formData.append('folder', `trueline_profiles/${userId}`);

          console.log('⏳ جاري رفع صورة البروفايل...');

          const response = await fetch('https://api.cloudinary.com/v1_1/lddc7v8k/image/upload', {
            method: 'POST',
            body: formData
          });

          if (!response.ok) {
            throw new Error(`Upload failed: ${response.status}`);
          }

          const data = await response.json();
          profilePicUrl = data.secure_url;
          console.log('✅ تم رفع صورة البروفايل:', profilePicUrl);
        }

        // Get existing photo URL if no new upload
        if (!profilePicUrl) {
          const existingPhoto = localStorage.getItem('userProfilePhoto_' + userId);
          if (existingPhoto) {
            profilePicUrl = existingPhoto;
          }
        }

        // Save all data to localStorage (primary storage)
        const userProfile = {
          name: name,
          company: company,
          phone: phone,
          country: country,
          city: city,
          description: description,
          photoURL: profilePicUrl,
          updatedAt: new Date().toISOString()
        };
        localStorage.setItem('userProfile_' + userId, JSON.stringify(userProfile));
        console.log('💾 تم حفظ البيانات في localStorage');

        // Save to Supabase (cloud storage) 🌐
        console.log('📡 جاري حفظ البيانات على السحابة...');
        const { error: updateError } = await supabaseCall('PATCH', 'users',
          {
            full_name: name,
            company: company,
            phone: phone,
            country: country,
            city: city,
            description: description,
            profile_image_url: profilePicUrl
          },
          { email: `eq.${currentUser}` }
        );

        if (updateError) {
          console.error('⚠️ تحذير: فشل حفظ على السحابة', updateError);
          // لا نرفع خطأ لأن localStorage نجح
        } else {
          console.log('✅ تم حفظ البيانات على السحابة بنجاح');
        }

        // Save photo URL
        if (profilePicUrl) {
          localStorage.setItem('userProfilePhoto_' + userId, profilePicUrl);
          console.log('🖼️ تم حفظ صورة البروفايل');
        }

        // Show success message
        const title = currentLanguage === 'ar' ? 'تم بنجاح! ✨' : 'Success! ✨';
        const text = currentLanguage === 'ar' ? 'تم حفظ البيانات بنجاح' : 'Data saved successfully';
        showSuccessMessage(title, text);

        // Show preview
        if (profilePicUrl) {
          document.getElementById('profileImg').src = profilePicUrl;
          document.getElementById('profileImg').style.display = 'block';
          document.getElementById('profileAvatarDisplay').style.display = 'none';
          updateUserDisplay();
        }
      } catch (error) {
        console.error('خطأ في حفظ البروفايل:', error);
        alert(currentLanguage === 'ar'
          ? `خطأ في حفظ البيانات: ${error.message}`
          : `Error saving profile: ${error.message}`);
      }
    }

    // Preview image when selected - Profile page
    document.addEventListener('DOMContentLoaded', () => {
      // Complete Profile Form handlers
      const completeProfilePicInput = document.getElementById('completeProfilePic');
      if (completeProfilePicInput) {
        completeProfilePicInput.addEventListener('change', (e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
              document.getElementById('profilePreviewImg').src = event.target.result;
              document.getElementById('profilePreviewImg').style.display = 'block';
              document.getElementById('profileAvatarCircle').style.display = 'none';
            };
            reader.readAsDataURL(file);
          }
        });
      }

      // Character counter for description in Complete Profile form
      const descriptionTextarea = document.getElementById('completeDescription');
      if (descriptionTextarea) {
        descriptionTextarea.addEventListener('input', (e) => {
          document.getElementById('charCountDisplay').textContent = e.target.value.length;
        });
      }

      // Character counter for description in Profile page
      const profileDescriptionTextarea = document.getElementById('profileDescription');
      if (profileDescriptionTextarea) {
        profileDescriptionTextarea.addEventListener('input', (e) => {
          document.getElementById('profileCharCount').textContent = e.target.value.length;
        });
      }

      // Original Profile page handlers
      const profilePicInput = document.getElementById('profilePic');
      if (profilePicInput) {
        profilePicInput.addEventListener('change', (e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
              document.getElementById('profileImg').src = event.target.result;
              document.getElementById('profileImg').style.display = 'block';
            };
            reader.readAsDataURL(file);
          }
        });
      }
    });

    async function loadUserProfile() {
      const currentUser = localStorage.getItem('currentUser');
      const userId = localStorage.getItem('userId');

      if (!currentUser || !userId) return;

      try {
        console.log('👤 المستخدم الحالي:', currentUser);
        console.log('🆔 معرف المستخدم:', userId);
        console.log('📡 جاري تحميل البروفايل من السحابة...');

        // جلب البيانات من Supabase (السحابة) 🌐
        const { data: users, error } = await supabaseCall('GET', 'users', null, {
          email: `eq.${currentUser}`
        });

        let profileData = {};

        if (error) {
          console.error('❌ فشل جلب البيانات من السحابة:', error);
          throw new Error('فشل تحميل البروفايل');
        }

        if (!users || users.length === 0) {
          console.warn('⚠️ لم يتم العثور على المستخدم');
          // البيانات فارغة - حقل جديد
          profileData = {
            name: '',
            company: '',
            phone: '',
            country: '',
            city: '',
            description: '',
            photoURL: ''
          };
        } else {
          const userData = users[0];
          console.log('✅ تم جلب البيانات من السحابة ☁️:', userData);
          console.log('📋 الحقول المتاحة:', {
            full_name: userData.full_name,
            company: userData.company,
            phone: userData.phone,
            country: userData.country,
            city: userData.city,
            description: userData.description,
            profile_image_url: userData.profile_image_url
          });

          profileData = {
            name: userData.full_name || '',
            company: userData.company || '',
            phone: userData.phone || '',
            country: userData.country || '',
            city: userData.city || '',
            description: userData.description || '',
            photoURL: userData.profile_image_url || ''
          };
        }

        // تحميل البيانات في النموذج
        if (profileData.name) document.getElementById('profileName').value = profileData.name;
        if (profileData.company) document.getElementById('profileCompany').value = profileData.company;
        if (profileData.phone) document.getElementById('profilePhone').value = profileData.phone;
        if (profileData.country) document.getElementById('profileCountry').value = profileData.country;
        if (profileData.city) document.getElementById('profileCity').value = profileData.city;
        if (profileData.description) {
          document.getElementById('profileDescription').value = profileData.description;
          document.getElementById('profileCharCount').textContent = profileData.description.length;
        }
        if (profileData.photoURL) {
          document.getElementById('profileImg').src = profileData.photoURL;
          document.getElementById('profileImg').style.display = 'block';
          document.getElementById('profileAvatarDisplay').style.display = 'none';
        }

        console.log('✅ البروفايل تم تحميله بنجاح من السحابة ☁️');
      } catch (error) {
        console.error('❌ خطأ في تحميل البروفايل:', error);
      }
    }

    function updateAllColors(color) {
      const rgb = hexToRgb(color);
      const lighter = adjustBrightness(color, 30);
      const darker = adjustBrightness(color, -30);

      document.documentElement.style.setProperty('--red', color);
      document.documentElement.style.setProperty('--red-light', lighter);
      document.documentElement.style.setProperty('--red-deep', darker);
      document.documentElement.style.setProperty('--accent', lighter);

      document.documentElement.style.setProperty('--gradient1', `linear-gradient(135deg, ${color} 0%, ${lighter} 100%)`);
      document.documentElement.style.setProperty('--gradient2', `linear-gradient(135deg, ${lighter} 0%, ${adjustBrightness(lighter, 30)} 100%)`);
      document.documentElement.style.setProperty('--gradient3', `linear-gradient(135deg, ${color} 0%, ${darker} 100%)`);
    }

    function hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : hex;
    }

    function adjustBrightness(hex, percent) {
      const num = parseInt(hex.replace("#",""), 16);
      const amt = Math.round(2.55 * percent);
      const R = Math.max(0, Math.min(255, (num >> 16) + amt));
      const G = Math.max(0, Math.min(255, (num >> 8 & 0x00FF) + amt));
      const B = Math.max(0, Math.min(255, (num & 0x0000FF) + amt));
      return "#" + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
    }

    function resetColor() {
      updateAllColors('#E5121C');
      document.getElementById('colorPicker').value = '#E5121C';
      localStorage.removeItem('primaryColor');
    }

    async function uploadVideos() {
      const videoInput = document.getElementById('videoUpload');
      const files = videoInput.files;
      const userId = localStorage.getItem('userId');
      const currentUser = localStorage.getItem('currentUser');
      const progressDiv = document.getElementById('uploadProgress');
      const statusText = document.getElementById('uploadStatus');
      const uploadBar = document.getElementById('uploadBar');

      if (!userId) {
        alert(currentLanguage === 'ar' ? 'يرجى تسجيل الدخول أولاً' : 'Please login first');
        return;
      }

      // فحص ADMIN_EMAIL
      if (currentUser !== ADMIN_EMAIL) {
        alert('❌ فقط ' + ADMIN_EMAIL + ' يستطيع رفع الفيديوهات');
        return;
      }

      if (files.length === 0) {
        alert(currentLanguage === 'ar' ? 'يرجى اختيار فيديو واحد على الأقل' : 'Please select at least one video');
        return;
      }

      progressDiv.style.display = 'block';
      uploadBar.style.backgroundColor = 'var(--red)';

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);

        statusText.textContent = currentLanguage === 'ar'
          ? `⏳ جاري رفع الفيديو ${i + 1} من ${files.length}...\n(${fileSizeMB}MB)`
          : `⏳ Uploading ${i + 1}/${files.length}...\n(${fileSizeMB}MB)`;
        uploadBar.style.width = ((i / files.length) * 100) + '%';

        try {
          console.log(`🎬 Uploading to Cloudinary: ${file.name}`);

          const formData = new FormData();
          formData.append('file', file);
          formData.append('upload_preset', 'unsigned_preset');
          formData.append('cloud_name', 'lddc7v8k');
          formData.append('folder', `trueline_videos/${userId}`);

          const response = await fetch('https://api.cloudinary.com/v1_1/lddc7v8k/video/upload', {
            method: 'POST',
            body: formData
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          console.log('✅ Cloudinary Response:', data);

          const videoURL = data.secure_url;
          const fileName = data.original_filename || file.name;

          statusText.textContent = currentLanguage === 'ar'
            ? `💾 جاري حفظ البيانات...`
            : `💾 Saving data...`;

          // ⭐ حفظ الفيديو في جدول videos بـ Supabase
          // (هذه الخطوة كانت مفقودة — لذلك لم تظهر الفيديوهات في "أعمالنا")
          console.log('💾 جاري الحفظ في Supabase...');
          const { data: savedVideo, error: saveError } = await supabaseCall('POST', 'videos', {
            user_id: userId,
            title: fileName,
            url: videoURL,
            description: new Date().toLocaleDateString(currentLanguage === 'ar' ? 'ar-EG' : 'en-US')
          });

          if (saveError) {
            console.error('❌ فشل الحفظ في Supabase:', saveError);
            throw new Error('فشل حفظ الفيديو في قاعدة البيانات: ' + saveError);
          }
          console.log('✅ تم حفظ الفيديو في Supabase:', savedVideo);

          // Save to localStorage
          let portfolio = JSON.parse(localStorage.getItem('portfolio') || '[]');
          portfolio.push({
            userId: userId,
            videoURL: videoURL,
            fileName: fileName,
            uploadedAt: new Date().toISOString(),
            type: 'video',
            fileSize: file.size,
            stored: 'cloudinary'
          });
          localStorage.setItem('portfolio', JSON.stringify(portfolio));
          console.log('✅ Saved to localStorage');


          // ملاحظة: كان هنا استدعاء saveVideoToCloud() الذي يحفظ في نفس جدول
          // videos — أُزيل لأنه يسبب تكرار الصف، والحفظ يتم أعلاه مع إظهار الأخطاء.

          // Add to Cloudinary backup
          let cloudinaryVideos = JSON.parse(localStorage.getItem('cloudinaryVideos') || '[]');
          cloudinaryVideos.push({
            title: fileName,
            desc: new Date().toLocaleDateString(currentLanguage === 'ar' ? 'ar-SA' : 'en-US'),
            url: videoURL,
            isUploaded: true,
            isLocal: false,
            type: 'motion'
          });
          localStorage.setItem('cloudinaryVideos', JSON.stringify(cloudinaryVideos));
          console.log('✅ Added to Cloudinary backup');

          uploadBar.style.width = ((i + 1) / files.length * 100) + '%';
          console.log(`✅ Video ${i + 1} Complete!\n`);

        } catch (error) {
          console.error('❌ Upload Error:', error);
          statusText.textContent = currentLanguage === 'ar'
            ? `❌ خطأ: ${error.message}`
            : `❌ Error: ${error.message}`;
          uploadBar.style.backgroundColor = '#ff4444';
          return;
        }
      }

      statusText.textContent = currentLanguage === 'ar'
        ? `✅ تم رفع جميع الفيديوهات بنجاح!\n🎬 يظهر الآن في قائمة الأعمال`
        : `✅ All Videos Uploaded!\n🎬 Now in portfolio`;
      uploadBar.style.width = '100%';
      uploadBar.style.backgroundColor = '#4CAF50';

      videoInput.value = '';
      setTimeout(() => {
        loadAllVideos();
      }, 1000);

      setTimeout(() => {
        progressDiv.style.display = 'none';
        uploadBar.style.width = '0%';
        uploadBar.style.backgroundColor = 'var(--red)';
      }, 3000);
    }

    function fileToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          console.log('📊 File size:', (reader.result.length / (1024 * 1024)).toFixed(2), 'MB');
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }

    async function saveToLocalStorage(userId, file, base64Video) {

      // Fallback to localStorage
      console.log('💾 Saving to localStorage (temporary)...');
      let portfolio = JSON.parse(localStorage.getItem('portfolio') || '[]');
      portfolio.push({
        userId: userId,
        videoData: base64Video,
        fileName: file.name,
        uploadedAt: new Date().toISOString(),
        type: 'video',
        fileSize: file.size,
        stored: 'localStorage'
      });
      localStorage.setItem('portfolio', JSON.stringify(portfolio));
      console.log('✅ localStorage saved (temporary)');
    }

    function updateLanguageContent() {
      const menuKeys = ['home', 'stats', 'featured', 'team', 'plans', 'cart', 'contact', 'settings', 'profile', 'help'];
      document.querySelectorAll('.dropdown-item').forEach((item, i) => {
        if (menuKeys[i]) item.textContent = t(menuKeys[i]);
      });

      let elem = document.querySelector('#screen-intro h1');
      if (elem) elem.textContent = t('welcome');
      elem = document.querySelector('#screen-intro p');
      if (elem) elem.textContent = t('welcomeDesc');
      elem = document.querySelector('#screen-intro .btn');
      if (elem) elem.textContent = t('startNow');

      elem = document.querySelector('#screen-register .title');
      if (elem) elem.textContent = t('registerTitle');
      elem = document.querySelector('#screen-register .subtitle');
      if (elem) elem.textContent = t('registerSubtitle');
      const regLabels = document.querySelectorAll('#screen-register .field label');
      if (regLabels[0]) regLabels[0].textContent = t('email');
      if (regLabels[1]) regLabels[1].textContent = t('password');
      const regBtns = document.querySelectorAll('#screen-register .btn');
      if (regBtns[0]) regBtns[0].textContent = t('createAccount');
      if (regBtns[1]) regBtns[1].textContent = t('haveAccount');

      elem = document.querySelector('#screen-login .title');
      if (elem) elem.textContent = t('loginTitle');
      elem = document.querySelector('#screen-login .subtitle');
      if (elem) elem.textContent = t('loginSubtitle');
      const loginLabels = document.querySelectorAll('#screen-login .field label');
      if (loginLabels[0]) loginLabels[0].textContent = t('email');
      if (loginLabels[1]) loginLabels[1].textContent = t('password');
      const loginBtns = document.querySelectorAll('#screen-login .btn');
      if (loginBtns[0]) loginBtns[0].textContent = t('loginBtn');
      if (loginBtns[1]) loginBtns[1].textContent = t('noAccount');

      elem = document.querySelector('#screen-benefits .benefits-headline');
      if (elem) elem.innerHTML = currentLanguage === 'ar'
        ? `لماذا اختيار <span class="hl">TRUE LINE</span>؟`
        : `Why Choose <span class="hl">TRUE LINE</span>?`;
      elem = document.querySelector('#screen-benefits .benefits-sub');
      if (elem) elem.textContent = t('whyDesc');
      elem = document.querySelector('#screen-benefits .btn');
      if (elem) elem.textContent = t('discoverMore');

      elem = document.querySelector('#screen-details .benefits-headline');
      if (elem) elem.innerHTML = currentLanguage === 'ar'
        ? `فريق من <span class="hl">المحترفين</span>`
        : `Expert <span class="hl">Team</span>`;
      elem = document.querySelector('#screen-details .benefits-sub');
      if (elem) elem.textContent = t('teamDesc');
      elem = document.querySelector('#screen-details .btn');
      if (elem) elem.textContent = t('next');

      elem = document.querySelectorAll('#screen-portfolio h1')[0];
      if (elem) elem.textContent = t('portfolio');
      elem = document.querySelectorAll('#screen-portfolio p')[0];
      if (elem) elem.textContent = t('portfolioDesc');
      const portfolioBtn = document.querySelectorAll('#screen-portfolio .btn')[0];
      if (portfolioBtn) portfolioBtn.textContent = t('pricesAndPlans');

      elem = document.querySelector('#screen-plans .plans-head h1');
      if (elem) elem.textContent = t('chooseplan');
      elem = document.querySelector('#screen-plans .plans-head p');
      if (elem) elem.textContent = t('flexiblePlans');

      elem = document.querySelector('#screen-settings .title');
      if (elem) elem.textContent = t('settings');
      elem = document.querySelector('#screen-settings .field label');
      if (elem) elem.textContent = t('colorLabel');
      const settingsBtns = document.querySelectorAll('#screen-settings .btn');
      if (settingsBtns[0]) settingsBtns[0].textContent = currentLanguage === 'ar' ? '🌙 الوضع الليلي' : '🌙 Dark Mode';
      if (settingsBtns[1]) settingsBtns[1].textContent = t('personalInfo');
      if (settingsBtns[2]) settingsBtns[2].textContent = t('back');

      elem = document.querySelector('#screen-profile .title');
      if (elem) elem.textContent = t('personalInfo');
      const profileLabels = document.querySelectorAll('#screen-profile .field label');
      if (profileLabels[0]) profileLabels[0].textContent = t('username');
      if (profileLabels[1]) profileLabels[1].textContent = t('profilePicture');
      const profileBtns = document.querySelectorAll('#screen-profile .btn');
      if (profileBtns[0]) profileBtns[0].textContent = t('save');
      if (profileBtns[2]) profileBtns[2].textContent = t('back');

      elem = document.querySelector('#screen-help h1');
      if (elem) elem.textContent = t('needHelp');
      elem = document.querySelector('#screen-help > div > p');
      if (elem) elem.textContent = t('helpDesc');
      elem = document.querySelector('#screen-help .chat-input-area input');
      if (elem) elem.placeholder = t('typeMessage');
      const helpBtns = document.querySelectorAll('#screen-help .btn');
      if (helpBtns[0]) helpBtns[0].textContent = t('sendMessage');
      const helpSectionHeading = document.querySelector('#screen-help .help-section h3');
      if (helpSectionHeading) helpSectionHeading.textContent = t('faq');
      const faqItems = document.querySelectorAll('#screen-help .help-item');
      if (faqItems[0]) faqItems[0].innerHTML = `<p><strong>${t('faqQ1')}</strong></p><p>${t('faqA1')}</p>`;
      if (faqItems[1]) faqItems[1].innerHTML = `<p><strong>${t('faqQ2')}</strong></p><p>${t('faqA2')}</p>`;
      const contactBox = document.querySelector('#screen-help .contact-box');
      if (contactBox) {
        contactBox.innerHTML = `
          <h3>${t('contactUs')}</h3>
          <p>${t('contactDesc')}</p>
          <p style="font-weight: 800; font-size: 18px; color: var(--red);">☎️ 00972592453766</p>
          <a href="tel:00972592453766" class="phone-link">${t('callNow')}</a>
        `;
      }
      const helpBackBtn = document.querySelectorAll('#screen-help .btn');
      if (helpBackBtn[helpBackBtn.length - 1]) helpBackBtn[helpBackBtn.length - 1].textContent = t('back');

      renderPlans();
      loadAllVideos();
      loadAllImages();
      renderStats();
      renderFeaturedWorks();
      renderTeam();
      updateCart();
    }

    document.getElementById('languageToggle').addEventListener('click', () => {
      currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
      document.documentElement.lang = currentLanguage;
      document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
      document.getElementById('languageToggle').textContent = currentLanguage === 'ar' ? 'EN' : 'AR';
      localStorage.setItem('language', currentLanguage);
      updateLanguageContent();
    });

    if (localStorage.getItem('language')) {
      currentLanguage = localStorage.getItem('language');
      document.documentElement.lang = currentLanguage;
      document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
      document.getElementById('languageToggle').textContent = currentLanguage === 'ar' ? 'EN' : 'AR';
    }

    document.getElementById('menuBtn').addEventListener('click', (e) => {
      document.getElementById('dropdownMenu').classList.toggle('active');
      e.stopPropagation();
    });

    document.addEventListener('click', () => {
      document.getElementById('dropdownMenu').classList.remove('active');
    });

    document.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
        showScreen(item.dataset.screen);
        document.getElementById('dropdownMenu').classList.remove('active');
      });
    });

    document.getElementById('darkToggle').addEventListener('click', toggleDarkMode);
    document.getElementById('colorPickerBtn').addEventListener('click', () => document.getElementById('colorPicker').click());

    document.getElementById('colorPicker').addEventListener('change', (e) => {
      const color = e.target.value;
      updateAllColors(color);
      localStorage.setItem('primaryColor', color);
    });

    document.getElementById('chatInput').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });

    // Use light mode by default if not set
    const darkModePref = localStorage.getItem('darkMode');
    if (darkModePref === 'true') {
      document.body.classList.add('dark-mode');
    }

    if (localStorage.getItem('primaryColor')) {
      const color = localStorage.getItem('primaryColor');
      updateAllColors(color);
      document.getElementById('colorPicker').value = color;
    }

    if (localStorage.getItem('profileName')) {
      document.getElementById('profileName').value = localStorage.getItem('profileName');
    }

    renderPlans();
    loadAllVideos();
    renderStats();
    renderFeaturedWorks();
    renderTeam();
    updateCart();

    // Restore session from localStorage
    try {
      const sessionUser = localStorage.getItem('currentUser');
      if (sessionUser) {
        console.log('✅ User is logged in:', sessionUser);
        loadUserProfile();
      } else {
        console.log('❌ User is logged out');
      }
    } catch (error) {
      console.log('Session restore not available');
    }

    // Update user profile display in topbar
    function updateUserDisplay() {
      const currentUser = localStorage.getItem('currentUser');
      const userId = localStorage.getItem('userId');
      const userProfileSection = document.getElementById('userProfileSection');
      const userNameDisplay = document.getElementById('userNameDisplay');
      const userProfileImg = document.getElementById('userProfileImg');

      if (!currentUser || !userId) {
        userProfileSection.style.display = 'none';
        return;
      }

      try {
        // Load من localStorage
        const storageKey = 'userProfile_' + userId;
        const photoKey = 'userProfilePhoto_' + userId;

        const localProfile = JSON.parse(localStorage.getItem(storageKey) || '{}');
        const localPhoto = localStorage.getItem(photoKey);

        let name = localProfile.name || currentUser.split('@')[0];
        userNameDisplay.textContent = name;

        if (localPhoto) {
          userProfileImg.src = localPhoto;
        } else {
          userProfileImg.src = getDefaultAvatar(currentUser);
        }

        userProfileSection.style.display = 'flex';
        console.log('📂 البروفايل يتم عرضه من localStorage');

      } catch (error) {
        console.log('Error loading profile:', error);
        userNameDisplay.textContent = currentUser.split('@')[0];
        userProfileImg.src = getDefaultAvatar(currentUser);
        userProfileSection.style.display = 'flex';
      }
    }

    function getDefaultAvatar(currentUser) {
      return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect fill="%23E5121C" width="100" height="100"/%3E%3Ctext x="50" y="60" font-size="40" fill="white" text-anchor="middle" dy=".3em"%3E' + (currentUser ? currentUser.charAt(0).toUpperCase() : 'U') + '%3C/text%3E%3C/svg%3E';
    }

    // Show success message (disabled)
    function showSuccessMessage(title, text) {
      // Success message disabled
    }

    // Show Tour or Benefits based on login status
    function showTourScreen() {
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        // If logged in, show full benefits
        showScreen('screen-benefits');
      } else {
        // If not logged in, show tour (limited view)
        showScreen('screen-tour');
      }
    }

    // Load background video
    function loadBgVideo() {
      const container = document.getElementById('bgVideoContainer');
      if (!container) return;

      const video = document.createElement('video');
      video.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; object-fit:cover; z-index:-1; pointer-events:none;';
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;

      // Load from Supabase Storage
      const supabaseVideoUrl = 'https://qdmindnmvwsrnbclzrxz.supabase.co/storage/v1/object/public/true%20line/video/vecteezy_bluish-circle-bubble-background-transition-animation_11818481.mp4';
      video.src = supabaseVideoUrl;
      container.appendChild(video);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadBgVideo);
    } else {
      loadBgVideo();
    }

    // Check if user is logged in on page load
    const currentUser = localStorage.getItem('currentUser');

    // إخفاء الـ Topbar في البداية (شاشة الـ Intro)
    document.getElementById('topbar').style.display = 'none';
    document.getElementById('screen-benefits').style.display = 'none';  // ⭐ أضفت هاي الـ line

    if (currentUser) {
      updateUserDisplay();
      // If logged in, redirect to benefits screen instead of intro
      setTimeout(() => {
        document.getElementById('introOverlay').style.display = 'none';
        document.body.classList.remove('intro-playing');
        document.getElementById('screen-intro').classList.remove('active');
        showScreen('screen-benefits');
      }, 1500);
    } else {
      setTimeout(() => {
        document.getElementById('introOverlay').style.display = 'none';
        document.body.classList.remove('intro-playing');
        showScreen('screen-login');  // ⭐ أضفت هاي الـ line
      }, 2500);
    }

// ⭐ دالة الدخول كضيف — Global Scope (متاحة دائماً)
function handleGuestLogin() {
  localStorage.setItem('isGuest', 'true');
  localStorage.setItem('currentUser', 'ضيف');
  localStorage.removeItem('userId');
  
  alert('🌐 أهلاً بك كضيف!\nتستطيع المشاهدة فقط');
  
  document.body.classList.add('guest-mode');
  if (typeof updateUserDisplay === 'function') {
    updateUserDisplay();
  }
  if (typeof showScreen === 'function') {
    showScreen('screen-benefits');
  }
}

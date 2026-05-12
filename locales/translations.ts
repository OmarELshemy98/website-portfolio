export const translations = {
  en: {
    common: {
      loading: 'Loading...',
      readMore: 'Read More',
      requestService: 'Request Service',
      sendViaWhatsApp: 'Send Request via WhatsApp',
      visitProject: 'Visit Project',
      previous: 'Previous',
      next: 'Next'
    },
    navbar: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      services: 'Services',
      experience: 'Experience',
      projects: 'Projects',
      certifications: 'Certificates',
      contact: 'Contact',
      toggleMenu: 'Toggle Menu',
      closeMenu: 'Close menu',
      switchToArabic: 'Switch to Arabic'
    },
    footer: {
      tagline: 'Digital Craftsman & Front-End Expert',
      rights: 'All rights reserved.'
    },
    home: {
      hello: "Hello, It's Me",
      roleIntro: "And I'm a",
      role: 'Frontend Developer',
      summary: 'Passionate Front End Developer crafting modern, responsive, and user-friendly web experiences.',
      viewCv: 'View CV (PDF)',
      hireMe: 'Hire Me',
      introHeading: 'About Omar Elshemy — front-end developer',
      introP1:
        "Hello, and welcome to my portfolio. My name is Omar Elshemy, and I work as a frontend developer who turns product goals into clear, maintainable UI. I am the same person you read in the hero headline: someone who enjoys the craft of front-end engineering, from semantic HTML and accessible components to polished motion that does not get in the way. I spend most of my time with React and Next.js because they help teams ship quickly without giving up structure, testing, or performance budgets.",
      introP2:
        'If you are comparing freelancers or hiring partners for a new launch, here is what you should know about how I work. I collaborate closely on requirements, propose sensible defaults for routing, data fetching, and styling, and keep the surface area of dependencies small when a lighter approach will do. I care about responsive layouts, predictable state, and real-world performance: lazy loading where it helps, image discipline, and careful attention to Core Web Vitals. I also write UI copy that matches the tone of your brand when you need an extra pair of eyes on microcopy.',
      introP3:
        'Across this site you will find projects, services, certifications, and a longer story on the About page. You can think of this home section as the plain-language companion to the hero: it repeats the essentials so search engines and readers alike understand that Omar Elshemy is a professional front-end developer who builds modern web applications, supports bilingual experiences, and is open for freelance engagements. When you are ready, use the Hire Me button to reach the contact page with a short note about your timeline, stack, and success criteria—I read every message.'
    },
    services: {
      title: 'Professional Front-End Services',
      subtitle: 'I provide high-quality, professional front-end development services to help you transform your ideas into modern, fast, and user-centric web experiences.',
      items: [
        {
          title: 'API Integration',
          description: 'Connecting websites to RESTful/GraphQL APIs and databases for dynamic data flow.',
          image: '/images/service/api-integration/api-integration.png',
          features: ['Real-time data synchronization', 'Secure authentication handling', 'Error handling & retry logic', 'Third-party platform connectivity']
        },
        {
          title: 'i18n & RTL Support',
          description: 'Multilingual support and direction adjustment (LTR/RTL) for global reach.',
          image: '/images/service/translate-i8n/translate-i8n.png',
          features: ['Dynamic language switching', 'RTL layout optimization', 'SEO-friendly translations', 'Localized content management']
        },
        {
          title: 'Headless CMS Integration',
          description: 'Building websites powered by modern content management systems like Contentful or Sanity.',
          image: '/images/service/cms/cms.png',
          features: ['User-friendly content editing', 'Blazing fast performance', 'Flexible content modeling', 'Seamless deployments']
        },
        {
          title: 'Bug Fixing',
          description: 'Identifying and fixing frontend issues, logic errors, and styling bugs.',
          image: '/images/service/fix-bugs/fix-bugs.png',
          features: ['Comprehensive issue diagnosis', 'Cross-browser compatibility fixes', 'Performance bottleneck resolution', 'Clean & maintainable code fixes']
        },
        {
          title: 'Figma/XD to Next.js',
          description: 'Transforming UI designs into pixel-perfect, responsive React/Next.js interfaces.',
          image: '/images/service/figma-to-website/figma-to-website.png',
          features: ['Pixel-perfect precision', 'Modern CSS animations', 'Reusable component architecture', 'Accessibility standards (A11y)']
        },
        {
          title: 'Performance Optimization',
          description: 'Speeding up Next.js sites and achieving 90+ Lighthouse scores.',
          image: '/images/service/static-to-next.js/static-to-nextjs.png',
          features: ['Core Web Vitals improvement', 'Image & asset optimization', 'Code splitting & lazy loading', 'Caching strategies']
        },
        {
          title: 'Admin Dashboards',
          description: 'Developing professional, data-driven admin panels with React and Next.js.',
          image: '/images/service/dashboard/dashboard.png',
          features: ['Interactive data visualization', 'User role management', 'CRUD operations', 'Exportable reports (PDF/Excel)']
        },
        {
          title: 'Portfolio Websites',
          description: 'Crafting professional personal websites for freelancers and creatives.',
          image: '/images/service/build-portfolio-website/build-portfolio-website.png',
          features: ['Custom unique designs', 'Fast loading speed', 'Mobile-first responsiveness', 'Personal branding focus']
        },
        {
          title: 'Static Websites',
          description: 'Building fast, secure, and high-performance static websites.',
          image: '/images/service/static-website/static-website.png',
          features: ['Ultra-fast page loads', 'SEO-friendly structure', 'Zero server maintenance', 'Low-cost hosting options']
        },
        {
          title: 'Landing Pages',
          description: 'Designing and building high-converting landing pages for your products.',
          image: '/images/service/landing page/landing-page.png',
          features: ['Conversion rate optimization', 'Clear CTA placement', 'Engaging animations', 'A/B testing ready structure']
        },
        {
          title: 'Custom UI Components',
          description: 'Building reusable, accessible, and customized UI component libraries.',
          image: '/images/service/responsive-design/responsive-design.png',
          features: ['Design system consistency', 'Headless component logic', 'Theming support', 'Comprehensive documentation']
        },
        {
          title: 'Advanced Technical SEO',
          description: 'Optimizing site structure and metadata for better search engine rankings.',
          image: '/images/service/seo/seo.jpeg',
          features: ['Structured data (JSON-LD)', 'Sitemap & robots.txt generation', 'Semantic HTML structure', 'Meta tags optimization']
        },
        {
          title: 'Dark Mode Implementation',
          description: 'Adding seamless dark/light mode toggles to existing web applications.',
          image: '/images/service/dark-mode/dark-mode.jpeg',
          features: ['System preference detection', 'Persistent theme storage', 'Smooth CSS transitions', 'Tailwind CSS integration']
        },
        {
          title: 'Smart Business Cards',
          description: 'Designing and developing digital, interactive business cards.',
          image: '/images/service/smart-buisness-card/smart-buisness-card.png',
          features: ['One-click contact saving', 'Social media integration', 'Analytics tracking', 'NFC compatible layouts']
        },
        {
          title: 'HTML Email Templates',
          description: 'Building responsive, cross-client compatible email templates.',
          image: '/images/service/landing page/landing-page.png',
          features: ['Cross-client compatibility', 'Responsive layouts', 'Dark mode support', 'Dynamic content variables']
        },
        {
          title: 'Logo Design',
          description: 'Creating modern, minimal, and impactful brand logos.',
          image: '/images/service/design-logo/design-logo.png',
          features: ['Vector-based designs', 'Multiple concepts', 'Brand identity guidelines', 'Print & web formats']
        },
        {
          title: 'Responsive Web Design',
          description: 'Ensuring your website looks perfect on every device and screen size.',
          image: '/images/service/responsive-design/responsive-design.png',
          features: ['Fluid grid layouts', 'Mobile-first approach', 'Touch-friendly elements', 'Cross-browser testing']
        },
        {
          title: 'Hosting & Deployment',
          description: 'Deploying websites to global platforms like Vercel, Netlify, or AWS.',
          image: '/images/service/hosting-deployment/hosting-deploment.png',
          features: ['CI/CD pipeline setup', 'Domain & SSL configuration', 'Serverless functions setup', 'Environment variables management']
        },
        {
          title: 'React to Next.js Migration',
          description: 'Upgrading React/HTML projects to Next.js for SSR, SSG, and better SEO.',
          image: '/images/service/static-to-next.js/static-to-nextjs.png',
          features: ['SSR & SSG benefits', 'Automatic image optimization', 'Improved routing system', 'Enhanced developer experience']
        }
      ]
    }
  },
  ar: {
    common: {
      loading: 'جاري التحميل...',
      readMore: 'اقرأ المزيد',
      requestService: 'اطلب الخدمة',
      sendViaWhatsApp: 'إرسال الطلب عبر واتساب',
      visitProject: 'زيارة المشروع',
      previous: 'السابق',
      next: 'التالي'
    },
    navbar: {
      home: 'الصفحة الرئيسية',
      about: 'نبذة عني',
      skills: 'المهارات',
      services: 'خدماتي',
      experience: 'الخبرات',
      projects: 'المشاريع',
      certifications: 'الشهادات',
      contact: 'تواصل معي',
      toggleMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      switchToArabic: 'التحويل إلى العربية'
    },
    footer: {
      tagline: 'مطوّر واجهات أمامية وحِرَفي تجارب رقمية',
      rights: 'جميع الحقوق محفوظة.'
    },
    home: {
      hello: 'مرحبًا، أنا',
      roleIntro: 'وأعمل كـ',
      role: 'مطوّر واجهات أمامية',
      summary: 'مطوّر واجهات أمامية شغوف ببناء تجارب ويب حديثة، متجاوبة، وسهلة الاستخدام.',
      viewCv: 'عرض السيرة الذاتية (PDF)',
      hireMe: 'وظّفني',
      introHeading: 'نبذة عن عمر الشيمي — مطوّر واجهات أمامية',
      introP1:
        'مرحبًا بك في ملفي الشخصي. أنا عمر الشيمي، مطوّر واجهات أمامية أركّز على تحويل متطلبات المنتج إلى واجهات واضحة وسهلة الصيانة، من HTML الدلالي والمكوّنات القابلة لإعادة الاستخدام وصولًا إلى تجربة بصرية متزنة. أعمل بكثافة مع React وNext.js لأنها تمنح الفرق سرعة في الإطلاق دون التفريط في الأداء أو تنظيم المشروع.',
      introP2:
        'إذا كنت تقارن بين مقدّمي خدمات أو تبحث عن شريك تقني لمشروع جديد، فهذه صفة عملي: أناقش المتطلبات بوضوح، أقترح افتراضات عملية للتوجيه وجلب البيانات والتنسيق، وأقلل الاعتماديات عندما يكفي حل أخف. أهتم بالتصميم المتجاوب، وبإدارة الحالة بشكل يمكن توقعه، وبأداء الويب في الواقع وليس في الاختبارات النظرية فقط، مع اهتمام خاص بمؤشرات الأداء وتحسين الصور.',
      introP3:
        'ستجد في الموقع مشاريعي وخدماتي وشهاداتي وقصة أطول في صفحة «نبذة عني». تعامل مع هذا القسم كمرافق نصي للوحة البطولة: يكرر المعلومات الأساسية حتى يفهم القارئ ومحرك البحث أن عمر الشيمي مطوّر واجهات أمامية محترف يبني تطبيقات ويب حديثة ويدعم تجارب ثنائية اللغة، وهو متاح للعمل الحر. عندما تكون جاهزًا، استخدم زر «وظّفني» لصفحة التواصل مع ملخص للجدول الزمني والتقنيات ومعايير النجاح—أقرأ كل الرسائل.'
    },
    services: {
      title: 'خدمات تطوير واجهات أمامية احترافية',
      subtitle: 'أقدّم خدمات احترافية في تطوير الواجهات الأمامية لتحويل أفكارك إلى تجارب ويب حديثة وسريعة وموجهة للمستخدم.',
      items: [
        {
          title: 'ربط المواقع بـ APIs وقواعد البيانات',
          description: 'تكامل سلس مع خدمات RESTful/GraphQL لضمان تدفق البيانات الحيوية.',
          image: '/images/service/api-integration/api-integration.png',
          features: ['مزامنة البيانات في الوقت الفعلي', 'إدارة آمنة لعمليات المصادقة', 'معالجة الأخطاء ومنطق إعادة المحاولة', 'الربط مع المنصات الخارجية']
        },
        {
          title: 'دعم اللغات المتعددة وتعديل الاتجاهات',
          description: 'تهيئة المواقع للغات العالمية مع دعم كامل للاتجاهات (LTR/RTL).',
          image: '/images/service/translate-i8n/translate-i8n.png',
          features: ['تبديل اللغات بشكل ديناميكي', 'تحسين تخطيط RTL', 'ترجمات صديقة لمحركات البحث', 'إدارة محتوى متعدد اللغات']
        },
        {
          title: 'بناء مواقع تعتمد على أنظمة إدارة المحتوى',
          description: 'تطوير مواقع مرنة باستخدام Headless CMS مثل Contentful أو Sanity.',
          image: '/images/service/cms/cms.png',
          features: ['تحرير محتوى سهل للمستخدم', 'أداء فائق السرعة', 'نمذجة مرنة للمحتوى', 'نشر وتحديثات سلسة']
        },
        {
          title: 'إصلاح الأخطاء البرمجية',
          description: 'اكتشاف وحل مشاكل الواجهات، منطق الكود، وعيوب التنسيق.',
          image: '/images/service/fix-bugs/fix-bugs.png',
          features: ['تشخيص شامل للمشكلات', 'إصلاح توافق المتصفحات', 'حل اختناقات الأداء', 'إصلاحات بكود نظيف وقابل للصيانة']
        },
        {
          title: 'تحويل تصاميم Figma/XD إلى Next.js',
          description: 'تحويل تصميماتك إلى واجهات برمجية دقيقة ومتجاوبة بأعلى المعايير.',
          image: '/images/service/figma-to-website/figma-to-website.png',
          features: ['دقة بكسلية متناهية', 'تنسيقات CSS وحركات حديثة', 'بناء مكوّنات قابلة لإعادة الاستخدام', 'الالتزام بمعايير الوصول (A11y)']
        },
        {
          title: 'تحسين أداء المواقع وسرعتها',
          description: 'تسريع مواقع Next.js وتحقيق سكور Lighthouse يتجاوز +90.',
          image: '/images/service/static-to-next.js/static-to-nextjs.png',
          features: ['تحسين مؤشرات Core Web Vitals', 'تحسين الصور والملفات', 'تقسيم الكود والتحميل الكسول', 'استراتيجيات التخزين المؤقت']
        },
        {
          title: 'برمجة وتطوير لوحات التحكم',
          description: 'بناء لوحات تحكم (Dashboard) احترافية وتفاعلية باستخدام React و Next.',
          image: '/images/service/dashboard/dashboard.png',
          features: ['تصور تفاعلي للبيانات', 'إدارة أدوار المستخدمين', 'عمليات CRUD متكاملة', 'تقارير قابلة للتصدير (PDF/Excel)']
        },
        {
          title: 'بناء موقع شخصي (Portfolio) احترافي',
          description: 'تصميم وبناء مواقع شخصية مميزة للمستقلين والمبدعين لعرض أعمالهم.',
          image: '/images/service/build-portfolio-website/build-portfolio-website.png',
          features: ['تصميمات فريدة ومخصصة', 'سرعة تحميل فائقة', 'استجابة كاملة للموبايل', 'التركيز على الهوية الشخصية']
        },
        {
          title: 'بناء مواقع ثابتة (Static Websites)',
          description: 'تطوير مواقع ثابتة سريعة جداً، آمنة، وعالية الأداء.',
          image: '/images/service/static-website/static-website.png',
          features: ['تحميل صفحات فائق السرعة', 'هيكلة صديقة للـ SEO', 'صيانة صفرية للسيرفر', 'خيارات استضافة منخفضة التكلفة']
        },
        {
          title: 'تصميم وبناء صفحات هبوط (Landing Page)',
          description: 'إنشاء صفحات هبوط جذابة تهدف لزيادة التحويل والمبيعات.',
          image: '/images/service/landing page/landing-page.png',
          features: ['تحسين معدل التحويل', 'توزيع ذكي لزر الـ CTA', 'حركات وتفاعلات جذابة', 'هيكلة جاهزة لاختبارات A/B']
        },
        {
          title: 'بناء نماذج (UI Components) مخصصة',
          description: 'تطوير مكتبة مكونات واجهة مستخدم قابلة لإعادة الاستخدام والوصول.',
          image: '/images/service/responsive-design/responsive-design.png',
          features: ['اتساق نظام التصميم', 'منطق مكوّنات منفصل', 'دعم السمات (Themes)', 'توثيق شامل للمكونات']
        },
        {
          title: 'تهيئة المواقع لمحركات البحث (SEO)',
          description: 'تحسين بنية الموقع والبيانات الوصفية لضمان أفضل ظهور في النتائج.',
          image: '/images/service/seo/seo.jpeg',
          features: ['بيانات مهيكلة (JSON-LD)', 'توليد Sitemap و robots.txt', 'هيكلة HTML دلالية', 'تحسين الوسوم الوصفية']
        },
        {
          title: 'إضافة "الوضع الليلي" (Dark Mode)',
          description: 'دمج خاصية التبديل بين الوضع الليلي والنهاري بشكل سلس وجذاب.',
          image: '/images/service/dark-mode/dark-mode.jpeg',
          features: ['اكتشاف تفضيلات النظام', 'تخزين دائم للسمة المختارة', 'انتقالات CSS ناعمة', 'دمج كامل مع Tailwind CSS']
        },
        {
          title: 'برمجة بطاقات العمل الذكية',
          description: 'تصميم وتطوير بطاقات عمل رقمية تفاعلية وحديثة.',
          image: '/images/service/smart-buisness-card/smart-buisness-card.png',
          features: ['حفظ جهة الاتصال بضغطة واحدة', 'ربط وسائل التواصل الاجتماعي', 'تتبع التحليلات', 'توافق مع تقنية NFC']
        },
        {
          title: 'بناء نماذج البريد الإلكتروني (HTML)',
          description: 'تصميم قوالب بريد إلكتروني متجاوبة تعمل على كافة المنصات.',
          image: '/images/service/landing page/landing-page.png',
          features: ['توافق مع كافة برامج البريد', 'تصميمات متجاوبة', 'دعم الوضع الليلي', 'متغيرات محتوى ديناميكية']
        },
        {
          title: 'تصميم شعارات (Logo Design) عصرية',
          description: 'ابتكار شعارات تعبر عن هويتك التجارية بأسلوب عصري وبسيط.',
          image: '/images/service/design-logo/design-logo.png',
          features: ['تصاميم تعتمد على Vector', 'مفاهيم وتصاميم متعددة', 'إرشادات الهوية البصرية', 'صيغ للطباعة والويب']
        },
        {
          title: 'تحويل المواقع إلى واجهات متجاوبة',
          description: 'ضمان عمل موقعك بشكل مثالي على كافة أحجام الشاشات والأجهزة.',
          image: '/images/service/responsive-design/responsive-design.png',
          features: ['تخطيطات شبكية مرنة', 'نهج الموبايل أولاً', 'عناصر صديقة للمس', 'اختبار على متصفحات متعددة']
        },
        {
          title: 'رفع المواقع على الاستضافات العالمية',
          description: 'نشر وإدارة موقعك على منصات مثل Vercel، Netlify، أو AWS.',
          image: '/images/service/hosting-deployment/hosting-deploment.png',
          features: ['إعداد أنابيب CI/CD', 'ضبط الدومين وشهادة SSL', 'إعداد وظائف Serverless', 'إدارة متغيرات البيئة']
        },
        {
          title: 'ترقية المشاريع إلى Next.js',
          description: 'تحويل مشاريع React/HTML إلى Next.js للاستفادة من SSR و SEO أفضل.',
          image: '/images/service/static-to-next.js/static-to-nextjs.png',
          features: ['الاستفادة من SSR و SSG', 'تحسين تلقائي للصور', 'نظام توجيه مطوّر', 'تجربة تطوير أفضل']
        }
      ]
    }
  }
} as const

export type Project = {
  id: string
  title: string
  titleAr?: string
  description: string
  descriptionAr?: string
  tech: string
  link: string
  images: string[]
}

export const projects: Project[] = [
  {
    id: 'professional-portfolio',
    title: 'Omar Elshemy | Official Full-Stack Developer Portfolio',
    description: 'A sophisticated, high-performance Full-Stack Website Portfolio engineered to showcase comprehensive software development expertise and professional services. This bilingual platform (Arabic & English) features a seamless multi-language architecture using i18next, a dynamic theme engine (Dark/Light mode), and fluid animations powered by Framer Motion. Designed as a professional service hub, it offers a detailed look into web development solutions, UI/UX design, and consulting services. The application demonstrates mastery of modern web standards, featuring an interactive project gallery, professional experience timeline, technical skill sets, and certifications—all built with a mobile-first approach, clean architecture, and optimized for peak performance and SEO.',
    tech: 'Next.js, React, TypeScript, Tailwind CSS, Framer Motion, i18next, Lucide React, SEO Optimization, Performance Tuning, Responsive Design',
    link: 'https://omarelshemy.netlify.app/',
    images: [
      '/images/mockup/portfolio-mockup/home-page-mokcup.png',
      '/images/mockup/portfolio-mockup/home-page-mokcup-ar.png',
      '/images/mockup/portfolio-mockup/about-page-mokcup.png',
      '/images/mockup/portfolio-mockup/about-page-mokcup-ar.png',
      '/images/mockup/portfolio-mockup/experience-page-mokcup.png',
      '/images/mockup/portfolio-mockup/experience-page-mokcup-ar.png',
      '/images/mockup/portfolio-mockup/skills-page-mokcup.png',
      '/images/mockup/portfolio-mockup/skills-page-mokcup-ar.png',
      '/images/mockup/portfolio-mockup/project-page-mokcup.png',
      '/images/mockup/portfolio-mockup/project-page-mokcup-ar.png',
      '/images/mockup/portfolio-mockup/certification-page-mokcup.png',
      '/images/mockup/portfolio-mockup/certification-page-mokcup-ar.png',
      '/images/mockup/portfolio-mockup/services-page-mokcup.png',
      '/images/mockup/portfolio-mockup/services-page-mokcup-ar.png',
      '/images/mockup/portfolio-mockup/services-one-page-mokcup.png',
      '/images/mockup/portfolio-mockup/services-two-page-mokcup.png',
      '/images/mockup/portfolio-mockup/services-three-page-mokcup.png',
      '/images/mockup/portfolio-mockup/services-four-page-mokcup.png',
      '/images/mockup/portfolio-mockup/services-five-page-mokcup.png',
      '/images/mockup/portfolio-mockup/services-six-page-mokcup.png',
      '/images/mockup/portfolio-mockup/services-seven-page-mokcup.png',
      '/images/mockup/portfolio-mockup/services-eight-page-mokcup.png',
      '/images/mockup/portfolio-mockup/contact-page-mokcup.png',
      '/images/mockup/portfolio-mockup/contact-page-mokcup-ar.png'
    ]
  },
  {
    id: 'crew-social-platform',
    title: 'Crew | Premium Social Media Platform',
  
    description: 'Crew is a modern, luxury-styled social media platform that combines elite networking with cutting-edge communication features. Built from scratch, Crew offers a premium user experience featuring posts, image sharing, Stories, HD video/voice calls via Agora.io, group chats, and a comprehensive admin controls. The project emphasizes performance, smooth UX/UI, and full SEO optimization for Google search readiness.',
    descriptionAr: 'Crew هي منصة تواصل اجتماعي عصرية وذات تصميم فاخر تجمع بين الشبكات الاجتماعية والتقنيات المتقدمة. تقدم منصة Crew تجربة مستخدم ممتعة تجمع بين مشاركة المنشورات والصور، شريط القصص، مكالمات فيديو وصوت عالية الجودة عبر Agora.io، دردشات جماعية، وتحكم كامل للمدير. تم بناء المشروع من الصفر مع تركيز كبير على سرعة التحميل، تجربة المستخدم السلسة، وتحسين محركات البحث لظهور في نتائج جوجل.',
    tech: 'React 19, React-Redux (Toolkit), React-Router, React-Bootstrap, Framer Motion, Vite, Node.js, Express.js, MongoDB (Mongoose), Cloudinary (Media Hosting), Agora.io (Video/Voice Calls), Helmet.js',
    link: 'https://crew-socialmedia.up.railway.app/',
    images: [
      '/images/mockup/socialSphere-mockup/mockup/social-sphere-mockup.png',
      '/images/mockup/socialSphere-mockup/mockup/home-page-dark-mockup.png',
      '/images/mockup/socialSphere-mockup/mockup/home-page-ligth-mockup.png',
      '/images/mockup/socialSphere-mockup/mockup/login-page-ligth-mockup.png',
      '/images/mockup/socialSphere-mockup/mockup/notfications-page-dark-mockup.png',
      '/images/mockup/socialSphere-mockup/mockup/profile-page-dark-mockup.png',
      '/images/mockup/socialSphere-mockup/home-page-dark.png',
      '/images/mockup/socialSphere-mockup/home-page-ligth.png',
      '/images/mockup/socialSphere-mockup/notfications-page-dark.png',
      '/images/mockup/socialSphere-mockup/notfications-page-light.png',
      '/images/mockup/socialSphere-mockup/profile-page-dark.png',
      '/images/mockup/socialSphere-mockup/profile-page-light.png'
    ]
  },
  {
    id: 'arcon-corp',
    title: 'ARCON - Pioneering Solutions for a Dynamic Future',
    description: 'ARCON is a leading provider of manufacturing, engineering, and automation services. The website showcases the company\'s innovative solutions in cybersecurity, interactive tools, transformative learning tools, and comprehensive support for robotics and training systems. It highlights ARCON\'s commitment to enhancing efficiency, creativity, and collaboration across various sectors, with a focus on education, community engagement, and global impact.',
    tech: 'Next.js (React Framework), React.js, Bootstrap 5 (for responsive design and components), CSS Modules & Custom CSS, JavaScript (ES6+), Image Optimization (Next.js Image component), Font Awesome (for icons), HTML5 & Modern Web Standards',
    link: 'www.arconcorp.com',
    images: [
      '/images/mockup/arcon-mockup/arcon-home.png',
      '/images/mockup/arcon-mockup/arcon-aboutus.png',
      '/images/mockup/arcon-mockup/arcon-contact.png',
      '/images/mockup/arcon-mockup/arcon-products-manufacturing.png',
      '/images/mockup/arcon-mockup/arcon-products-engineeringLearningSystems.png',
      '/images/mockup/arcon-mockup/arcon-products-informationTechnology.png',
      '/images/mockup/arcon-mockup/arcon-products-robotics.png',
      '/images/mockup/arcon-mockup/arcon-products-simulation.png',
      '/images/mockup/arcon-mockup/arcon-products-vocationalTrainingSolutions.png',
      '/images/mockup/arcon-mockup/arcon-sectors-cyberSecurity.png',
      '/images/mockup/arcon-mockup/arcon-sectors-education.png',
      '/images/mockup/arcon-mockup/arcon-sectors-engineering.png',
      '/images/mockup/arcon-mockup/arcon-sectors-informationTechnology.png',
      '/images/mockup/arcon-mockup/arcon-sectors-logistics.png',
      '/images/mockup/arcon-mockup/arcon-sectors-manufacturing.png',
      '/images/mockup/arcon-mockup/arcon-sectors-transportation.png'
    ]
  },
  {
    id: 'axiom',
    title: 'Axiom AI Solutions Website',
    description: 'The Axiom AI Solutions Website is a comprehensive front-end development project for a leading engineering and technology firm. I crafted a responsive and visually compelling website that reflects the company\'s commitment to innovation and excellence. Developed entirely using Next.js, the site offers high performance and a seamless user experience. It effectively showcases Axiom\'s advanced solutions across critical sectors like engineering, manufacturing, cybersecurity, and IT. The front-end was meticulously designed to be intuitive and engaging, professionally presenting products and services to potential business clients.',
    tech: 'Next.js, React, TypeScript , bootstrap 5 , responsive design , seo optimization',
    link: 'www.axiomais.com',
    images: [
      '/images/mockup/axiom-mockup/axiom-home.png',
      '/images/mockup/axiom-mockup/axiom-aboutus.png',
      '/images/mockup/axiom-mockup/axiom-whyaxiom.png',
      '/images/mockup/axiom-mockup/axiom-contact.png',
      '/images/mockup/axiom-mockup/axiom-products-engineeringLearningSystems.png',
      '/images/mockup/axiom-mockup/axiom-products-informationTechnology.png',
      '/images/mockup/axiom-mockup/axiom-products-manufacturing.png',
      '/images/mockup/axiom-mockup/axiom-products-robotics.png',
      '/images/mockup/axiom-mockup/axiom-products-scienceLabEquipment.png',
      '/images/mockup/axiom-mockup/axiom-products-simulation.png',
      '/images/mockup/axiom-mockup/axiom-products-vocationalTrainingSolutions.png',
      '/images/mockup/axiom-mockup/axiom-sectors-defenseSolutions.png',
      '/images/mockup/axiom-mockup/axiom-sectors-education.png',
      '/images/mockup/axiom-mockup/axiom-sectors-engineering.png',
      '/images/mockup/axiom-mockup/axiom-sectors-logistics.png',
      '/images/mockup/axiom-mockup/axiom-sectors-manufacturing.png',
      '/images/mockup/axiom-mockup/axiom-sectors-oilGas.png',
      '/images/mockup/axiom-mockup/axiom-sectors-transportation.png',
      '/images/mockup/axiom-mockup/axiom-sectors-WaterandElectricityPlants.png',
      '/images/mockup/axiom-mockup/axiom-services-cybersecurity.png',
      '/images/mockup/axiom-mockup/axiom-services-EngineeringandSystemsIntegration.png',
      '/images/mockup/axiom-mockup/axiom-services-informationTechnology.png',
      '/images/mockup/axiom-mockup/axiom-services-Logistics.png',
      '/images/mockup/axiom-mockup/axiom-services-SmartManufacturing.png',
      '/images/mockup/axiom-mockup/axiom-services-Training.png',
      '/images/mockup/axiom-mockup/axiom-services-TransportationandMobility.png',

    ]
  },
    {
    id: 'modern-trade-corporate',
    title: 'Modern Trade for Engineering (MTE)',
    description: 'Engineered a transformative digital presence for MTE, crafting a visually striking and fully responsive corporate website that unites English and Arabic audiences under one seamless platform. This project redefines user engagement through innovative design, intuitive navigation, and robust multilingual support, ensuring every visitor feels at home. Leveraging best-in-class SEO strategies and a mobile-first philosophy, the site amplifies MTE’s brand authority, showcases its diverse portfolio, and drives meaningful connections with clients across the globe. The result is not just a website, but a digital gateway that elevates MTE’s vision and values to an international stage.',
    tech: 'HTML5, CSS3, JavaScript (Vanilla JS), Tailwind CSS, Multilingual Support, SEO Optimization, Responsive Web Design',
    link: 'https://moderntrade.netlify.app',
    images: [
      '/images/mockup/modernTrade-mockup/mte-home-en.png',
      '/images/mockup/modernTrade-mockup/mte-home-ar.png',
      '/images/mockup/modernTrade-mockup/mte-about-en.png',
      '/images/mockup/modernTrade-mockup/mte-about-ar.png',
      '/images/mockup/modernTrade-mockup/mte-careers-ar.png',
      '/images/mockup/modernTrade-mockup/mte-contact-en.png',
      '/images/mockup/modernTrade-mockup/mte-contact-ar.png',
      '/images/mockup/modernTrade-mockup/mte-faqs-ar.png',
      '/images/mockup/modernTrade-mockup/mte-faqs-en.png',
      '/images/mockup/modernTrade-mockup/mte-news-ar.png',
      '/images/mockup/modernTrade-mockup/mte-news-en.png',
      '/images/mockup/modernTrade-mockup/mte-privacy-ar.png',
      '/images/mockup/modernTrade-mockup/mte-privacy-en.png',
      '/images/mockup/modernTrade-mockup/mte-projects-ar.png',
      '/images/mockup/modernTrade-mockup/mte-services-ar.png',
      '/images/mockup/modernTrade-mockup/mte-services-en.png',
      '/images/mockup/modernTrade-mockup/mte-services-ar.png',
      '/images/mockup/modernTrade-mockup/mte-services-en.png',

    ]
  },
    {
    id: 'medyour',
    title: 'Medyour – Digital Healthcare Platform',
    description: 'A responsive, bilingual (Arabic & English) website for Medyour, designed to showcase healthcare services, address industry challenges, and provide information to users in both languages. The website features dedicated pages for services, FAQs, contact, and more, with a focus on accessibility and user experience.',
    tech: 'Next.js, Static Site Generation (SSG), Multilingual Support, SEO Optimization, Responsive Web Design',
    link: 'https://medyour.com',
    images: [
      '/images/mockup/medyour-mockup/medyour-home-en-mockup.png',
      '/images/mockup/medyour-mockup/medyour-home-ar-mockup.png',
      '/images/mockup/medyour-mockup/medyour-aboutUs-en-mockup.png',
      '/images/mockup/medyour-mockup/medyour-aboutUs-ar-mockup.png',
      '/images/mockup/medyour-mockup/medyour-healthcare-en-mockup.png',
      '/images/mockup/medyour-mockup/medyour-healthcare-ar.png',
      '/images/mockup/medyour-mockup/medyour-services-en-mockup.png',
      '/images/mockup/medyour-mockup/medyour-services-ar-mockup.png',
      '/images/mockup/medyour-mockup/medyour-whymedyour-en.png',
      '/images/mockup/medyour-mockup/medyour-whymedyour-ar.png',
      '/images/mockup/medyour-mockup/medyour-contact-en.png',
      '/images/mockup/medyour-mockup/medyour-contact-ar.png',
      '/images/mockup/medyour-mockup/medyour-faqs-en.png',
      '/images/mockup/medyour-mockup/medyour-faqs-ar.png',
      '/images/mockup/medyour-mockup/medyour-privacy-en.png',
      '/images/mockup/medyour-mockup/medyour-privacy-ar.png',
      '/images/mockup/medyour-mockup/medyour-terms-en.png',
      '/images/mockup/medyour-mockup/medyour-terms-ar.png'
    ]
  },
  {
    id: 'labsforhome',
    title: 'Labs For Home – Interactive Science Learning',
    description: 'A modern, responsive web application designed to enhance science education through interactive simulations, gamified learning modules, and comprehensive resource management. The platform provides tailored experiences for students, teachers, and schools, featuring video demonstrations, testimonials, and a robust content management system. The website aims to make science learning engaging, accessible, and effective for various academic levels.',
    tech: 'Next.js, React.js, TypeScript, Tailwind CSS, Node.js, Interactive Simulations, Gamified Learning Modules, Comprehensive Resource Management, Video Demonstrations, Testimonials, Robust Content Management System, Multilingual Support, SEO Optimization, Responsive Web Design',
    link: 'https://lightcyan-salamander-875465.hostingersite.com',
    images: [
      '/images/mockup/l4h-mockup/l4h-home.png',
      '/images/mockup/l4h-mockup/l4h-aboutus.png',
      '/images/mockup/l4h-mockup/l4h-academicLevel.png',
      '/images/mockup/l4h-mockup/l4h-technologyFeatures.png',
      '/images/mockup/l4h-mockup/l4h-solForSchools.png',
      '/images/mockup/l4h-mockup/l4h-solForStudents.png',
      '/images/mockup/l4h-mockup/l4h-solForTeachers.png',
      '/images/mockup/l4h-mockup/l4h-experments.png',
      '/images/mockup/l4h-mockup/l4h-physicalKits.png',
      '/images/mockup/l4h-mockup/l4h-lms.png',
      '/images/mockup/l4h-mockup/l4h-requestQuote.png',
      '/images/mockup/l4h-mockup/l4h-contact.png'
    ]
  },
  {
    id: 'egyptian-robotics',
    title: 'ERRCSF | Robotics Federation Site & Registration',
    description: 'A professional, bilingual website showcasing events, competitions, and educational programs for the Egyptian Robotics Union. Features clear navigation, modern UI, and responsive layouts across all devices.',
    tech: 'HTML5, CSS3, Tailwind CSS, Vanilla JS, Multilingual Support, SEO Optimization, Responsive Web Design',
    link: 'https://staging.errcsf.org',
    images: [
      '/images/mockup/errcsf-mockup/errcsf.png',
      '/images/mockup/errcsf-mockup/about-us.png',
      '/images/mockup/errcsf-mockup/part2.png',
      '/images/mockup/errcsf-mockup/screencapture-staging-errcsf-org-2026-02-16-12_54_00.png'
    ]
  },
  {
    id: 'dh-consult',
    title: 'DH Consult | Modern Business & Consulting Site',
    description: 'Developed a dynamic and visually appealing website for a consulting firm, designed to enhance the company\'s online presence and streamline client engagement. The website features a modern, responsive user interface with dedicated sections for company information, services, projects portfolio, and a contact form. Emphasis was placed on user experience, accessibility, and performance optimization to ensure seamless navigation across all devices. The project demonstrates strong front-end development skills and attention to design detail.',
    tech: 'HTML5 (semantic, accessible markup), Tailwind CSS (efficient, utility-first styling & responsive design), Vanilla JavaScript (smooth interactivity & dynamic UI), Optimized images (fast load times & performance)',
    link: 'https://darkgoldenrod-gnu-568360.hostingersite.com',
    images: [
      '/images/mockup/DhConsult-mockup/home.png',
      '/images/mockup/DhConsult-mockup/about-us.png',
      '/images/mockup/DhConsult-mockup/projects.png',
      '/images/mockup/DhConsult-mockup/screencapture-darkgoldenrod-gnu-568360-hostingersite-2026-02-16-13_21_12.png'
    ]
  },
  {
    id: 'ti-educational',
    title: 'TI Educational | STEM & Industrial Global Platform',
    description: 'A high-performance educational and engineering portal for TI Educational, designed to connect academic institutions with leading industrial manufacturers. The platform features an advanced multi-level navigation system handling extensive product catalogs, a dynamic Enquiry Basket for seamless information requests, and interactive components such as carousels and technical formula rendering. Emphasizing a modern corporate identity, the solution leverages Tailwind CSS, Vanilla JS (ES6+), and Swiper.js to deliver responsive design, smooth user experience, and robust lead generation capabilities.',
    tech: 'HTML5 (semantic, accessible markup), Tailwind CSS (modern utility-first CSS framework for responsive and rapid UI development), Vanilla JavaScript (ES6+ for dynamic user interfaces and modular code), Swiper.js (advanced touch slider library for interactive carousels), KaTeX (high-performance math typesetting), and advanced Responsive Design for seamless experience across devices.',
    link: 'https://forestgreen-koala-992569.hostingersite.com',
    images: [
      '/images/mockup/ti-educational-mockup/ti-home.png',
      '/images/mockup/ti-educational-mockup/ti-about.png',
      '/images/mockup/ti-educational-mockup/ti-category.png',
      '/images/mockup/ti-educational-mockup/ti-contact.png',
      '/images/mockup/ti-educational-mockup/ti-products.png',
    ]
  },  
  {
    id: 'todo-app',
    title: 'To-Do List Web Application',
    description: 'Intuitive app to create, manage, and organize daily tasks.',
    tech: 'HTML5, CSS3, Vanilla JS',
    link: 'https://omarelshemy98.github.io/todo-list-app/',
    images: []
  },
  {
    id: 'student-dashboard',
    title: 'EduPulse | Interactive Student Dashboard & LMS',
    description: 'I developed EduPulse, a comprehensive educational dashboard designed to optimize the digital learning experience. It serves as a centralized hub where students can manage courses, track attendance statistics, and access recorded lessons via a sleek, high-performance interface. Built entirely with Vanilla JavaScript (ES6+) and no frameworks, the platform features a dynamic theme engine (Dark/Light mode with preference persistence), simulated authentication with "Remember Me" and secure session handling, and interactive components like integrated YouTube video lessons, custom modals, and visual attendance tracking. The mobile-first, responsive design ensures seamless usability across devices.',
    tech: 'HTML5 (Semantic), CSS3 (Flexbox/Grid), Vanilla JavaScript (ES6+), LocalStorage API, YouTube API Integration',
    link: 'https://omarelshemy98.github.io/mathmatic-dashboard-courses',
    images: [
      '/images/mockup/math-dashboard/mockup.png',
      '/images/mockup/math-dashboard/login-page.png',
      '/images/mockup/math-dashboard/dark-mode.png',
      '/images/mockup/math-dashboard/ligth-mode.png',
    ]
  },

  {
    id: 'medyour-card',
    title: 'Medyour Digital Business Card',
    description: 'Responsive digital business card platform with unique QR codes and instant contact access.',
    tech: 'HTML5, CSS3, Vanilla JS',
    link: 'https://medyour.com',
    images: []
  },

  {
    id: 'modern-trade-mte',
    title: 'Modern Trade Digital Business Card',
    description: 'Responsive digital business card and company profile for MTE.',
    tech: 'HTML5, CSS3, Vanilla JS, Tailwind CSS',
    link: 'https://moderntrade.netlify.app/cards/index.html?id=19634771',
    images: [
      '/images/mockup/modernTrade-mockup/mte-home-en.png',
      '/images/mockup/modernTrade-mockup/mte-home-ar.png',
      '/images/mockup/modernTrade-mockup/mte-about-en.png',
      '/images/mockup/modernTrade-mockup/mte-about-ar.png',
      '/images/mockup/modernTrade-mockup/mte-services-en.png',
      '/images/mockup/modernTrade-mockup/mte-services-ar.png',
      '/images/mockup/modernTrade-mockup/mte-projects-ar.png',
      '/images/mockup/modernTrade-mockup/mte-contact-en.png',
      '/images/mockup/modernTrade-mockup/mte-contact-ar.png',
      '/images/mockup/modernTrade-mockup/mte-careers-ar.png',
      '/images/mockup/modernTrade-mockup/mte-news-en.png',
      '/images/mockup/modernTrade-mockup/mte-news-ar.png',
      '/images/mockup/modernTrade-mockup/mte-faqs-en.png',
      '/images/mockup/modernTrade-mockup/mte-faqs-ar.png',
      '/images/mockup/modernTrade-mockup/mte-privacy-en.png',
      '/images/mockup/modernTrade-mockup/mte-privacy-ar.png',
      '/images/mockup/modernTrade-mockup/mte-terms-en.png',
      '/images/mockup/modernTrade-mockup/mte-terms-ar.png'
    ]
  },
  {
    id: 'luxury-apartment',
    title: 'Luxury Apartment Showcase',
    description: 'Modern real estate showcase with interactive galleries and elegant design.',
    tech: 'HTML5, CSS3, Vanilla JS',
    link: 'https://alexluxuryapt.netlify.app/',
    images: []
  }
]

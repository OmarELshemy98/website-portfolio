export type Certification = {
  id: string
  title: string
  description: string
  image: string
  issueDate: string
  credentialId: string
  credentialUrl: string
  category: 'Udemy' | 'SoloLearn' | 'MaharaTech' | 'Other'
  subcategory?: string
  issuingOrg?: string
}

export const certifications: Certification[] = [
    {
    id: 'mahartech-typescript',
    title: 'TypeScript Fundamentals',
    description: 'TypeScript Foundations Certification\nEarned a professional certification demonstrating foundational proficiency in TypeScript. This program equipped me with the skills to introduce type-safety into JavaScript projects, improving code quality, readability, and developer experience. Capable of setting up TypeScript environments and applying its core concepts to build more reliable and predictable web applications, a crucial skill for modern front-end and full-stack development.',
    image: '/images/certificates/mahartech/typeScript-fundamentals-en.jpg',
    issueDate: 'june 2025',
    credentialId: 'MkoIonwR15',
    credentialUrl: 'https://maharatech.gov.eg/mod/customcert/verify_certificate.php?code=MkoIonwR15&qrcode=1',
    category: 'MaharaTech',
    subcategory: 'JavaScript'
  },
   {
    id: 'mahartech-html-css',
    title: 'Programming in HTML5 with JavaScript and CSS3',
    description: 'Certification in JavaScript Programming\nEarned a professional certification in JavaScript, demonstrating foundational skills essential for web development. This program provided practical experience in implementing client-side interactivity, manipulating the Document Object Model (DOM), handling events, and writing clean, efficient JavaScript code. Prepared to contribute to building engaging and responsive user interfaces',
    image: '/images/certificates/mahartech/html-and-css-en.jpg',
    issueDate: 'june 2025',
    credentialId: 'ruHLi9MfMI',
    credentialUrl: 'https://maharatech.gov.eg/mod/customcert/verify_certificate.php?code=ruHLi9MfMI&qrcode=1',
    category: 'MaharaTech',
    subcategory: 'HTML & CSS'
  },
  {
    id: 'mahartech-advanced-js',
    title: 'Modern JavaScript (ES6 and Beyond)',
    description: 'This certificate validates my successful completion of the "Modern JavaScript​: ES6 and beyond" course offered by ITI Platform (Mahara-Tech). The course, spanning 3 hours and 10 minutes, focused on advanced JavaScript concepts, including features introduced in ECMAScript 6 (ES6) and subsequent versions. This training has enhanced my proficiency in writing modern, efficient, and maintainable JavaScript code, essential for contemporary web development.',
    image: '/images/certificates/mahartech/advanced-js-en.jpg',
    issueDate: 'june 2025',
    credentialId: 'etim8PhB8H',
    credentialUrl: 'https://maharatech.gov.eg/mod/customcert/verify_certificate.php?code=etim8PhB8H&qrcode=1',
    category: 'MaharaTech',
    subcategory: 'JavaScript'
  },
 
  {
    id: 'mahartech-js',
    title: 'Javascript Programming',
    description: 'Successfully completed an intensive 7-hour JavaScript programming course provided by the ITI\'s Mahara-Tech platform. Gained fundamental to intermediate programming skills, validated by one of the leading technology institutes in the region.',
    image: '/images/certificates/mahartech/js-en.jpg',
    issueDate: 'june 2025',
    credentialId: 'ruHLi9MfMI',
    credentialUrl: 'https://maharatech.gov.eg/mod/customcert/verify_certificate.php?code=ruHLi9MfMI&qrcode=1',
    category: 'MaharaTech',
    subcategory: 'JavaScript'
  },

  {
    id: 'sololearn-intro-java',
    title: 'Introduction to Java',
    description: 'Successfully demonstrated a theoretical and practical understanding of Java programming. Covered fundamental concepts including object-oriented programming (OOP), variables, data types, and control structures, providing a strong foundation for software development and backend logic.',
    image: '/images/certificates/soloLearn/introduction-to-java.jpg',
    issueDate: 'february 2025',
    credentialId: 'CC-TLR5VWW2',
    credentialUrl: 'https://www.sololearn.com/en/certificates/CC-TLR5VWW2',
    category: 'SoloLearn',
    subcategory: 'Tools & Version Control'
  },
  {
    id: 'sololearn-coding-data',
    title: 'Coding for Data',
    description: 'Successfully completed the \'Coding for Data\' course, demonstrating a foundational understanding of programming techniques used in data processing. This certification validates my ability to use code to manipulate and analyze data, bridging the gap between core programming and data-driven application development.',
    image: '/images/certificates/soloLearn/coding-for-data.jpeg',
    issueDate: 'february 2025',
    credentialId: 'CC-K22BKEGQ',
    credentialUrl: 'https://www.sololearn.com/certificates/CC-K22BKEGQ',
    category: 'SoloLearn',
    subcategory: 'Tools & Version Control'
  },
  {
    id: 'sololearn-frontend',
    title: 'Front-end for Beginners',
    description: "Excited to share that I've successfully completed the 'Front-end for Beginners' course with SoloLearn, developed with the Angular Team at Google. This journey enhanced my skills in Angular and modern front-end development. Looking forward to applying these skills to create impactful web applications!",
    image: '/images/certificates/soloLearn/front-end-for-begginers.jpeg',
    issueDate: 'february 2025',
    credentialId: 'CC-SGJOVRX6',
    credentialUrl: 'https://www.sololearn.com/en/certificates/CC-SGJOVRX6',
    category: 'SoloLearn',
    subcategory: 'HTML & CSS'
  },
  {
    id: 'sololearn-webdev',
    title: 'Web Development',
    description: 'Excited to share that I’ve earned a **Web Development** certificate from **SoloLearn**! This course enhanced my skills in HTML, CSS, JavaScript, and building responsive websites. It represents my commitment to learning and growing in the field of web development. Looking forward to applying these skills in upcoming projects!',
    image: '/images/certificates/soloLearn/web-development.jpeg',
    issueDate: 'january 2025',
    credentialId: 'CC-Q97ISUGD',
    credentialUrl: 'https://www.sololearn.com/en/certificates/CC-Q97ISUGD',
    category: 'SoloLearn',
    subcategory: 'HTML & CSS'
  },
  // first
  {
    id: 'udemy-nodejs-scalable-backend',
    title: 'Node.js - Build Fast and Scalable Backend Applications',
    description: 'Focused on mastering the core principles of building high-performance backend systems using Node.js. Developed expertise in creating fast, secure, and scalable server-side applications, optimizing performance, and implementing industry best practices for modern backend architecture.',
    image: '/images/certificates/udemy/node.js-build-fast-and-scalable-backend.jpg',
    issueDate: 'march 2026',
    credentialId: 'UC-9346cb98-a8c0-4165-9b84-2dd3bd616687',
    credentialUrl: 'https://www.udemy.com/certificate/UC-9346cb98-a8c0-4165-9b84-2dd3bd616687',
    category: 'Udemy',
    subcategory: 'Node.js'
  },
  // second
  {
    id: 'udemy-html-css-complete-guide',
    title: 'HTML & CSS: The Complete Web Development Guide',
    description: 'Comprehensive mastery of HTML and CSS for modern web development. Gained in-depth knowledge of structuring web content and designing sophisticated layouts, ensuring a solid foundation for building professional, standards-compliant websites.',
    image: '/images/certificates/udemy/html-css-the-complete-web-development.jpg',
    issueDate: 'february 2026',
    credentialId: 'UC-1e27039e-c6c0-4885-b73c-6b751ebfc038',
    credentialUrl: 'https://www.udemy.com/certificate/UC-1e27039e-c6c0-4885-b73c-6b751ebfc038',
    category: 'Udemy',
    subcategory: 'Frontend Basics'
  },
  // third 
  {
    id: 'udemy-responsive-css3',
    title: 'JavaScript From Scratch',
    description: 'Expertise in building modern, responsive websites that provide a seamless user experience across all device sizes. Mastered advanced CSS3 techniques, media queries, and fluid layouts to create high-performance, mobile-friendly webpages that adapt perfectly to smartphones, tablets, and desktops.',
    image: '/images/certificates/udemy/responsive-design-with-css3-create-mobile-friendly-webpages.jpg',
    issueDate: 'february 2026',
    credentialId: 'UC-1065fa16-e928-448c-b06d-85b2db4a2109',
    credentialUrl: 'https://www.udemy.com/certificate/UC-1065fa16-e928-448c-b06d-85b2db4a2109',
    category: 'Udemy',
    subcategory: 'HTML & CSS'
  },
  // fourth
  {
    id: 'udemy-js-advanced',
    title: 'The Complete Front-End Web Development Bootcamp',
    description: 'Successfully completed an intensive bootcamp covering the full spectrum of front-end engineering. Gained advanced proficiency in building complex, responsive, and high-performance web applications using modern tools and industry-standard best practices.',
    image: '/images/certificates/udemy/the-complete-front-end-web-development.jpg',
    issueDate: 'february 2026',
    credentialId: 'UC-09399139-0101-4eb4-b087-26f72581b402',
    credentialUrl: 'https://www.udemy.com/certificate/UC-09399139-0101-4eb4-b087-26f72581b402',
    category: 'Udemy',
    subcategory: 'JavaScript'
  },
  // fifth
  {
    id: 'udemy-nextjs-practical',
    title: 'React: All You Need to Know with Practical Project',
    description: 'Advanced specialization in Next.js for developing production-ready web applications. Focused on server-side rendering (SSR), static site generation (SSG), and building highly scalable, SEO-friendly, and performance-optimized dynamic websites using the latest React framework features.',
    image: '/images/certificates/udemy/next-js-build-dynamic-fast-scalable-web-app.jpg',
    issueDate: 'february 2026',
    credentialId: 'UC-1d26ca5e-4128-4dfe-91f8-3af7b887f0ed',
    credentialUrl: 'https://www.udemy.com/certificate/UC-1d26ca5e-4128-4dfe-91f8-3af7b887f0ed',
    category: 'Udemy',
    subcategory: 'Next.js'
  },
  // sixth
  {
    id: 'udemy-webdev-html-css-js',
    title: 'Web Development for Beginners: HTML, CSS & JavaScript',
    description: 'Mastered the core pillars of web development through a comprehensive hands-on program. Gained proficiency in structuring content with HTML, designing responsive layouts with CSS, and implementing dynamic client-side logic with JavaScript to build fully functional web applications.',
    image: '/images/certificates/udemy/web-development-for-beginners-html-css-javaScript.jpg',
    issueDate: 'february 2026',
    credentialId: 'UC-4bbdd991-afb6-4920-83e8-2d01fce2690e',
    credentialUrl: 'https://www.udemy.com/certificate/UC-4bbdd991-afb6-4920-83e8-2d01fce2690e',
    category: 'Udemy',
    subcategory: 'HTML & CSS'
  },
  // seventh
  {
    id: 'udemy-nodejs-restapi',
    title: 'Node.js Crash Course: Build a REST API',
    description: 'Successfully completed an intensive crash course on building robust RESTful APIs using Node.js. Developed a deep understanding of server-side architecture, routing, and backend logic by building a production-ready API in a highly condensed timeframe.',
    image: '/images/certificates/udemy/next-js-build-scalable-react-apps-with-page-and-app-router.jpg',
    issueDate: 'february 2026',
    credentialId: 'UC-50162445-48b2-40a4-90b3-4deabbe6cc69',
    credentialUrl: 'https://www.udemy.com/certificate/UC-50162445-48b2-40a4-90b3-4deabbe6cc69',
    category: 'Udemy',
    subcategory: 'REST API'
  },
  // eigth
  {
    id: 'udemy-react-complete-guide',
    title: 'React.js Complete Guide: Build Interactive Web Applications',
    description: 'In-depth mastery of React.js for building modern, high-performance interactive web applications. Gained practical experience in component-based architecture, state management, and creating seamless user interfaces with the latest industry standards.',
    image: '/images/certificates/udemy/react-js-complete-guide-build-interactive-web-applications.jpg',
    issueDate: 'february 2026',
    credentialId: 'UC-f8138af0-5312-4f84-a255-7deca285c561',
    credentialUrl: 'https://www.udemy.com/certificate/UC-f8138af0-5312-4f84-a255-7deca285c561',
    category: 'Udemy',
    subcategory: 'React.js'
  },
  // ninth
  {
    id: 'udemy-master-html-modern-web-design',
    title: 'Master HTML for Modern Web Design',
    description: 'Advanced mastery of HTML specifically tailored for modern web design. Focused on creating semantic, accessible, and high-performance front-end structures that align with contemporary design trends and user experience standards.',
    image: '/images/certificates/udemy/master-html-for-modern-web-design.jpg',
    issueDate: 'february 2026',
    credentialId: 'UC-13ce519d-7f9e-43b4-aafb-f76d6e4c7d08',
    credentialUrl: 'https://www.udemy.com/certificate/UC-13ce519d-7f9e-43b4-aafb-f76d6e4c7d08',
    category: 'Udemy',
    subcategory: 'HTML & CSS'
  },
  // tenth
  {
    id: 'udemy-git-github-2026',
    title: 'Learn Git and GitHub in Less Than 3 Hours (2026)',
    description: 'Mastered the essential workflows of Git and GitHub for 2026. Learned how to manage code versions, collaborate with other developers, and use the most up-to-date industry standards for repository management and software development lifecycles.',
    image: '/images/certificates/udemy/learn-git-and-github-in-less-than-3-hours(2026).jpg',
    issueDate: 'february 2026',
    credentialId: 'UC-2bbeeb83-ecbe-4cd5-9093-618553c7aa83',
    credentialUrl: 'https://www.udemy.com/certificate/UC-2bbeeb83-ecbe-4cd5-9093-618553c7aa83',
    category: 'Udemy',
    subcategory: 'Tools & Version Control'
  },
  // eleventh
  {
    id: 'udemy-mongodb-cloud-nosql',
    title: 'Master MongoDB: Cloud Based NoSQL Database Management',
    description: 'Mastered NoSQL database management using MongoDB Atlas. Covered document-based data modeling, CRUD operations, and cloud deployment strategies essential for building modern, scalable applications.',
    image: '/images/certificates/udemy/master-mongodb-cloud-based-nosql-database-management.jpg',
    issueDate: 'february 2026',
    credentialId: 'UC-95bda844-7b31-4aa7-a816-20b8dd787138',
    credentialUrl: 'https://www.udemy.com/certificate/UC-95bda844-7b31-4aa7-a816-20b8dd787138',
    category: 'Udemy',
    subcategory: 'MongoDB'
  },
  // twelfth
  {
    id: 'udemy-js-fullstack',
    title: 'JavaScript Fundamentals to Advanced: Full Stack Development',
    description: 'Comprehensive certification covering the full spectrum of JavaScript development. Mastered everything from core fundamental syntax to advanced programming concepts essential for Full Stack Development, providing a deep understanding of how to build dynamic and scalable web applications.',
    image: '/images/certificates/udemy/javaScript-fundamentals-to-advanced-full-stack-development.jpg',
    issueDate: 'february 2026',
    credentialId: 'UC-4efac4b8-d30f-4648-8178-dfa41070160f',
    credentialUrl: 'https://www.udemy.com/certificate/UC-4efac4b8-d30f-4648-8178-dfa41070160f',
    category: 'Udemy',
    subcategory: 'JavaScript'
  },
  // thirteenth
  {
    id: 'udemy-nodejs-fullstack-2026',
    title: 'Master Node.js: From Beginner to Full-Stack Developer',
    description: 'Comprehensive certification in Node.js development, bridging the gap between basic server-side scripting and full-stack integration. Mastered advanced backend workflows, database connectivity, and environment management to build robust, scalable applications.',
    image: '/images/certificates/udemy/master-node.js--from-beginner-to-full-stack-developer.jpg',
    issueDate: 'february 2026',
    credentialId: 'UC-431f7e3c-20f7-4fcd-af57-a478b391e442',
    credentialUrl: 'http://udemy.com/certificate/UC-431f7e3c-20f7-4fcd-af57-a478b391e442',
    category: 'Udemy',
    subcategory: 'Node.js'
  },
  // fourteenth
  {
    id: 'udemy-master-node-fullstack',
    title: 'Complete Node.js Bootcamp: From Basics to Advanced',
    description: 'Completed an intensive bootcamp covering Node.js from foundational concepts to advanced architectural patterns. Developed deep expertise in building robust server-side applications, managing APIs, and implementing scalable backend solutions using modern JavaScript environments.',
    image: '/images/certificates/udemy/complete-node-js-bootcamp-from-basics-to-advanced.jpg',
    issueDate: 'february 2026',
    credentialId: 'UC-222854e2-218b-4063-b187-b5f3997c0b0a',
    credentialUrl: 'https://www.udemy.com/certificate/UC-222854e2-218b-4063-b187-b5f3997c0b0a',
    category: 'Udemy',
    subcategory: 'Node.js'
  },
  // fifteenth
  {
    id: 'udemy-nextjs-scalable-react',
    title: 'Next.js: Build Scalable React Apps with Page & App Routers',
    description: 'Mastered Next.js to build high-performance, scalable React applications. Gained expertise in both Page and App Router architectures, server-side rendering (SSR), static site generation (SSG), and modern web optimization techniques for professional-grade development.',
    image: '/images/certificates/udemy/next-js-build-scalable-react-apps-with-page-and-app-router.jpg',
    issueDate: 'february 2026',
    credentialId: 'UC-281609b3-82b2-4efb-a573-816ddbb18988',
    credentialUrl: 'https://www.udemy.com/certificate/UC-281609b3-82b2-4efb-a573-816ddbb18988',
    category: 'Udemy',
    subcategory: 'Next.js'
  },
  // sixteenth
  {
    id: 'udemy-nodejs-practical-project',
    title: 'Nodejs: All You Need to Know with Practical Project',
    description: 'Mastered back-end development fundamentals using Node.js. Built a practical project covering server-side logic, environment configuration, and integration of core Node.js modules to create scalable web applications.',
    image: '/images/certificates/udemy/nodejs-all-you-need-to-know-with-practical-project.jpg',
    issueDate: 'january 2026',
    credentialId: 'UC-fca4d233-3a2b-4ced-a20f-a040ed466a43',
    credentialUrl: 'https://www.udemy.com/certificate/UC-fca4d233-3a2b-4ced-a20f-a040ed466a43',
    category: 'Udemy',
    subcategory: 'Node.js'
  },
  // seventeenth
  {
    id: 'udemy-responsive-css-complete-guide',
    title: 'Responsive Web Design with CSS: A Complete CSS Guide',
    description: 'Mastered the art of creating responsive web layouts that work seamlessly across all devices. This comprehensive guide covered advanced CSS techniques, media queries, and modern layout systems like Flexbox and Grid to ensure optimal user experience on mobile, tablet, and desktop.',
    image: '/images/certificates/udemy/responsiv-web-design-with-css-a-complete-css-guide.jpg',
    issueDate: 'january 2026',
    credentialId: 'UC-3314bb1e-b328-4b4e-95b0-20dd41dfe45c',
    credentialUrl: 'https://www.udemy.com/certificate/UC-3314bb1e-b328-4b4e-95b0-20dd41dfe45c',
    category: 'Udemy',
    subcategory: 'CSS'
  },
  // eighteenth
  {
    id: 'udemy-git-gitlab-github-fundamentals',
    title: 'GIT, GitLab, GitHub Fundamentals for Software Developers',
    description: 'Mastered the essentials of version control systems. Learned how to manage source code effectively using Git, and collaborated on projects via GitHub and GitLab, covering branching, merging, and repository management.',
    image: '/images/certificates/udemy/git-gitLab-github-fundamentals-for-software-developers.jpg',
    issueDate: 'january 2026',
    credentialId: 'UC-134446a5-9074-4ca5-834f-328211249fbc',
    credentialUrl: 'https://www.udemy.com/certificate/UC-134446a5-9074-4ca5-834f-328211249fbc',
    category: 'Udemy',
    subcategory: 'Tools & Version Control'
  },
  // nintheen
  {
    id: 'udemy-ui-ux-canva-smart',
    title: 'Complete UI/UX Design with Canva - Design Smart Interface',
    description: 'Gained practical skills in user interface (UI) and user experience (UX) design. Learned to create smart, user-centric interfaces and professional web layouts using Canva, focusing on design principles that enhance digital product usability.',
    image: '/images/certificates/udemy/complete-ui-ux-design-with-canva-design-smart.jpg',
    issueDate: 'january 2026',
    credentialId: 'UC-0e283d9e-9523-4d8b-8a13-61f4cac5c8aa',
    credentialUrl: 'https://www.udemy.com/certificate/UC-0e283d9e-9523-4d8b-8a13-61f4cac5c8aa',
    category: 'Udemy',
    subcategory: 'Web Design'
  },
  // twentieth
  {
    id: 'udemy-react-practical-project',
    title: 'React: All You Need to Know with Practical Project',
    description: 'Mastered React.js fundamentals by building a practical project. Covered component-based architecture, state management, and modern React hooks to develop dynamic and scalable user interfaces.',
    image: '/images/certificates/udemy/react-all-you-need-to-know-with-practical-project.jpg',
    issueDate: 'january 2026',
    credentialId: 'UC-687bc164-d993-4745-9d3c-13f10d2d9f4e',
    credentialUrl: 'https://www.udemy.com/certificate/UC-687bc164-d993-4745-9d3c-13f10d2d9f4e',
    category: 'Udemy',
    subcategory: 'React.js'
  },
  // twentyone
  {
    id: 'udemy-js-scratch-part1-beginner',
    title: 'JavaScript From Scratch (Part 1 - Beginner Level)',
    description: 'Started the journey into programming by mastering JavaScript fundamentals from scratch. Covered essential concepts including variables, data types, control flow, and basic functions to build a solid logical foundation for web development.',
    image: '/images/certificates/udemy/javaScript-from-scratch-part1-beginner-level.jpg',
    issueDate: 'january 2026',
    credentialId: 'UC-bc7216a9-8573-4101-8e3c-af05c6e965da',
    credentialUrl: 'https://www.udemy.com/certificate/UC-bc7216a9-8573-4101-8e3c-af05c6e965da',
    category: 'Udemy',
    subcategory: 'JavaScript'
  },
  // twentytwo
  {
    id: 'udemy-js-10-projects-10-days',
    title: 'javaScript 10 Projects in 10 Days Course for Beginners',
    description: 'Completed a project-based course focused on practical JavaScript application. Developed 10 distinct web projects in 10 days, enhancing skills in DOM manipulation, event handling, and functional programming logic.',
    image: '/images/certificates/udemy/javaScript 10 Projects in 10 Days Course for Beginners.jpg',
    issueDate: 'january 2026',
    credentialId: 'UC-d34f00c3-9d75-4b41-b84d-2dc1f374b055',
    credentialUrl: 'https://www.udemy.com/certificate/UC-d34f00c3-9d75-4b41-b84d-2dc1f374b055',
    category: 'Udemy',
    subcategory: 'JavaScript'
  },
  // twentythree
  {
    id: 'udemy-html5-css3-beginner',
    title: 'Mastering HTML5 and CSS3 (Part 1 - Beginner Level)',
    description: 'Foundational course covering the essentials of web development. Learned the core structure of web pages using HTML5 and the basics of styling with CSS3 to create clean and functional user interfaces',
    image: '/images/certificates/udemy/mastering-html5-and-css3-beginner.jpg',
    issueDate: 'january 2026',
    credentialId: 'UC-6fa5689b-db95-48ef-aea8-a66b57a922b1',
    credentialUrl: 'https://www.udemy.com/certificate/UC-6fa5689b-db95-48ef-aea8-a66b57a922b1',
    category: 'Udemy',
    subcategory: 'Frontend Basics'
  },
  // twentyfour
  {
    id: 'udemy-html-css-intermediate',
    title: 'Mastering HTML5 and CSS3 (Part 2 - Intermediate Level)',
    description: 'Advanced deep-dive into HTML5 and CSS3, covering complex responsive design, advanced animations, and modern web optimization techniques to create professional-grade user interfaces.',
    image: '/images/certificates/udemy/mastering-html5-and-css3-intermediate.jpg',
    issueDate: 'january 2026',
    credentialId: 'UC-65f60783-fdc7-4da3-a30a-c5e05b5a4f0b',
    credentialUrl: 'https://www.udemy.com/certificate/UC-65f60783-fdc7-4da3-a30a-c5e05b5a4f0b',
    category: 'Udemy',
    subcategory: 'HTML & CSS'
  },
  // twentyfive
  {
    id: 'udemy-html-css-advanced',
    title: 'Mastering HTML5 and CSS3 (Part 3 - Advanced Level)',
    description: 'Specialized in advanced HTML5 and CSS3 architecture. Focused on building complex user interfaces, implementing advanced animations, and utilizing modern layout techniques to ensure high-performance web experiences.',
    image: '/images/certificates/udemy/mastering-html5-and-css3-advanced.jpg',
    issueDate: 'january 2026',
    credentialId: 'UC-2a832d34-284d-4997-87be-e3f64f5c446b',
    credentialUrl: 'https://www.udemy.com/certificate/UC-2a832d34-284d-4997-87be-e3f64f5c446b',
    category: 'Udemy',
    subcategory: 'HTML & CSS'
  },
  // twentysix
  {
    id: 'udemy-fullstack-html-css-java-js',
    title: 'HTML, CSS, Java, & JavaScript​: Full Stack Programming Course',
    description: 'Earned a certification in Full Stack Programming through an intensive course focused on:\n\nFront-End: Designing modern, responsive layouts using HTML5 and CSS3.\n\nScripting: Enhancing user experience and interactivity with JavaScript.\n\nBack-End Foundation: Mastering object-oriented programming (OOP) principles and logic using Java.\n\nThis course provided the foundational tools necessary to develop and deploy complete web applications',
    image: '/images/udemy/js-ten-Projects-in-ten-days-course-for-beginners.jpg',
    issueDate: 'january 2026',
    credentialId: 'UC-fbaf0675-c156-42ff-aa0a-af446f6b734c',
    credentialUrl: 'https://www.udemy.com/certificate/UC-fbaf0675-c156-42ff-aa0a-af446f6b734c',
    category: 'Udemy',
    subcategory: 'Full Stack'
  },
  // twentyseven
  {
    id: 'udemy-css-js-beginners',
    title: 'CSS And JavaScript Complete Course For Beginners',
    description: 'This certificate confirms my successful completion of the "CSS and JavaScript Essentials" course on Udemy. The training covered core styling techniques with CSS and interactivity with JavaScript, including DOM manipulation, events, and modern best practices. It improved my capability to craft dynamic, responsive interfaces with clean and accessible code.',
    image: '/images/certificates/udemy/css-and-javaScript-essentials.jpg',
    issueDate: 'january 2026',
    credentialId: 'UC-ef9a899c-abda-43d7-a863-8a71b493d2ce',
    credentialUrl: 'https://www.udemy.com/certificate/UC-ef9a899c-abda-43d7-a863-8a71b493d2ce',
    category: 'Udemy',
    subcategory: 'HTML & CSS'
  },
  // twentyeight
  {
    id: 'udemy-web-project-workshop',
    title: 'Web Project Workshop: 20+ HTML & CSS Websites in Action',
    description: 'This certificate confirms my successful completion of the "Web Project Workshop" course on Udemy. The course focused on building end-to-end web projects, from planning and structuring to styling and interaction. It strengthened my practical experience in assembling complete, production-ready web pages and components.',
    image: '/images/certificates/udemy/web-project-workshop.jpg',
    issueDate: 'january 2026',
    credentialId: 'UC-6505d7be-5433-451d-be2b-5366df28deaf',
    credentialUrl: 'https://www.udemy.com/certificate/UC-6505d7be-5433-451d-be2b-5366df28deaf/',
    category: 'Udemy',
    subcategory: 'HTML & CSS'
  },
  // twentynine
  {
    id: 'udemy-js-html-css-30-projects',
    title: 'Master JavaScript, HTML, and CSS with 30 Projects in 30 Days',
    description: 'This certificate confirms my successful completion of the "Master JavaScript, HTML, and CSS" course on Udemy. The training covered modern HTML5 semantics, CSS3 layout and responsive design (including Flexbox and Grid), and JavaScript for interactivity, events, and DOM manipulation. It strengthened my ability to build accessible, responsive, and interactive web interfaces following contemporary best practices.',
    image: '/images/certificates/udemy/master-javaScript-html-and-css.jpg',
    issueDate: 'january 2026',
    credentialId: 'UC-ffbe5ace-1e4e-4382-89d8-dad19dc507a0',
    credentialUrl: 'https://www.udemy.com/certificate/UC-ffbe5ace-1e4e-4382-89d8-dad19dc507a0',
    category: 'Udemy',
    subcategory: 'HTML & CSS'
  },
  // thirty
  {
    id: 'udemy-js-fast-entry',
    title: 'JavaScript Fast Entry: Programming for Everyone',
    description: 'This certificate confirms my successful completion of the "JavaScript Fast Entry: Programming for Everyone" course on Udemy. The program introduced core JavaScript concepts including variables, data types, control flow, functions, and basic DOM operations. It provided a practical, beginner-friendly pathway into programming, enabling me to write clear, functional scripts and understand essential web interactivity',
    image: '/images/certificates/udemy/javaScript-fast-entry-programming-for-everyone.jpg',
    issueDate: 'january 2026',
    credentialId: 'UC-a368f3c5-e1e5-4ec6-af53-663320b441c0',
    credentialUrl: 'https://www.udemy.com/certificate/UC-a368f3c5-e1e5-4ec6-af53-663320b441c0',
    category: 'Udemy',
    subcategory: 'Frontend Basics'
  },
  // thirtyone
  {
    id: 'udemy-js-fundamentals-to-advanced',
    title: 'JavaScript Fundamentals to Advanced: Full Stack Development',
    description: 'Successfully completed "JavaScript Fundamentals to Advanced: Full Stack Development" (5.5 hrs) via Udemy (Sayman Creative Institute, 06/21/2025). Gained comprehensive skills, progressing from foundational to advanced JavaScript, for building complete front-end and back-end web applications',
    image: '/images/certificates/udemy/javascript-fundamentals-to-advanced.jpg',
    issueDate: 'june 2025',
    credentialId: 'UC-85f76409-88fb-4d82-8a56-36daf1575ffe',
    credentialUrl: 'https://www.udemy.com/certificate/UC-85f76409-88fb-4d82-8a56-36daf1575ffe',
    category: 'Udemy',
    subcategory: 'Full Stack'
  },
  // thirtytwo
  {
    id: 'udemy-html-css-web-designers',
    title: 'HTML and CSS for Web Designers: From Basics to Beautiful',
    description: 'This certificate confirms my successful completion of the "HTML and CSS for Web Designers: From Basics to Beautiful" course on Udemy, instructed by Mehmood Khalil. Completed on June 21, 2025, this extensive 8-hour course provided a deep dive into HTML and CSS, teaching how to structure and style web content effectively to create visually appealing and responsive designs. It enhanced my ability to translate design concepts into functional and beautiful web pages.',
    image: '/images/certificates/udemy/html-and-css-for-web-designers-from-basics-to-beautiful.jpg',
    issueDate: 'june 2025',
    credentialId: 'UC-744c1c52-468e-4e07-a8fb-f5e79c0d6917',
    credentialUrl: 'https://www.udemy.com/certificate/UC-744c1c52-468e-4e07-a8fb-f5e79c0d6917/',
    category: 'Udemy',
    subcategory: 'HTML & CSS'
  },
  // thirtythree
  {
    id: 'udemy-intro-css-grid',
    title: 'Introduction To CSS Grid',
    description: 'I have successfully completed the Introduction to CSS Grid course on Udemy, instructed by Joshan Grewal. This course enhanced my skills in creating responsive web layouts using CSS Grid, including working with fractional units, percentages, and auto values. I’m excited to apply these skills in building flexible, scalable, and user-friendly web designs.',
    image: '/images/certificates/udemy/introduction-to-css-grid.jpg',
    issueDate: 'march 2025',
    credentialId: 'UC-993b1597-f3a4-4dd6-be6b-e71f30bbaa30',
    credentialUrl: 'https://www.udemy.com/certificate/UC-993b1597-f3a4-4dd6-be6b-e71f30bbaa30',
    category: 'Udemy',
    subcategory: 'CSS'
  },
  // thirtyfour
  {
    id: 'udemy-practical-nextjs-react',
    title: 'Practical Next.js & React - Build a real WebApp with Next.js',
    description: 'Completed "Practical Next.js & React - Build a Real WebApp with Next.js" on Udemy (Instructor: Nick Ovchinnikov). Gained hands-on experience in Next.js, React, SSR, SSG, API routes, and performance optimization. Excited to apply these skills to build modern, scalable web apps!',
    image: '/images/certificates/udemy/javascript-fundamentals-to-advanced.jpg',
    issueDate: 'february 2025',
    credentialId: 'UC-ad14e6fc-afa3-4679-98af-6a82083eac1f',
    credentialUrl: 'https://www.udemy.com/certificate/UC-ad14e6fc-afa3-4679-98af-6a82083eac1f',
    category: 'Udemy',
    subcategory: 'Next.js'
  },
  // thirtyfive
  {
    id: 'udemy-practical-nextjs-react',
    title: 'HTML5, CSS3, and JavaScript The Right Way 2025',
    description: 'Excited to share that I’ve completed the "HTML5, CSS3, and JavaScript The Right Way 2025" course on Udemy by Ali Murtaza. This course provided hands-on experience in building modern, responsive websites using HTML5, styling with CSS3, and adding interactivity with JavaScript. It’s a great step forward in my journey as a web developer, and I’m eager to apply these skills in real-world projects!',
    image: '/images/certificates/udemy/html-css-js-the-right-way.jpg',
    issueDate: 'february 2025',
    credentialId: 'UC-a06d33cc-c037-4a62-82dc-a0755e1e049e',
    credentialUrl: 'https://www.udemy.com/certificate/UC-a06d33cc-c037-4a62-82dc-a0755e1e049e',
    category: 'Udemy',
    subcategory: 'Next.js'
  },
  // thirtytwo
  {
    id: 'chubb-life',
    title: 'Chubb Life-Egypt Basic Sales Induction Training',
    description: 'This certificate recognizes successful completion of the "Chubb Life-Egypt Basic Sales Induction Training".',
    image: '/images/certificates/chubb-life.jpeg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Other'
  },
  {
    id: 'banque-misr',
    title: 'Banque Misr Summer Training Program 2022',
    description: 'This Certificate of Achievement acknowledges successful completion of the "Banque Misr Summer Training Program 2022".',
    image: '/images/certificates/banque-misr-certificate .jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Other'
  }
]

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
  {
    id: 'udemy-website-template',
    title: 'Design a Website Template using HTML5 & CSS3',
    description: 'This certificate confirms completion of the "Design a Website Template using HTML5 & CSS3" course on Udemy.',
    image: '/images/udemy/design-a-website-template-using-htmlandcss.jpeg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'HTML & CSS'
  },
  {
    id: 'udemy-css-grid',
    title: 'Introduction to CSS Grid',
    description: 'This certificate confirms completion of the "Introduction To CSS Grid" course on Udemy.',
    image: '/images/udemy/introduction-to-css-grid.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'HTML & CSS'
  },
  {
    id: 'udemy-js-scratch',
    title: 'JavaScript From Scratch',
    description: 'This certificate confirms completion of the "JavaScript From Scratch" course on Udemy.',
    image: '/images/udemy/introduction-to-programming-using-javaScript.jpeg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'JavaScript'
  },
  {
    id: 'udemy-js-advanced',
    title: 'JavaScript Fundamentals to Advanced: Full Stack Development',
    description: 'This certificate confirms completion of the "JavaScript Fundamentals to Advanced: Full Stack Development" course on Udemy.',
    image: '/images/udemy/javaScript-fundamentals-to-advanced.jpg',
    issueDate: '2025-06-21',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'JavaScript'
  },
  {
    id: 'udemy-react-practical',
    title: 'React: All You Need to Know with Practical Project',
    description: 'This certificate confirms completion of the "React: All You Need to Know with Practical Project" course on Udemy.',
    image: '/images/udemy/react-all-you-need-to-know-with-practical-project.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'React & Next.js'
  },
  {
    id: 'udemy-nextjs-react',
    title: 'Practical Next.js & React',
    description: 'This certificate confirms completion of the "Practical Next.js & React - Build a real WebApp with Next.js" course on Udemy.',
    image: '/images/udemy/Practical-next.jsandreact.jpeg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'React & Next.js'
  },
  {
    id: 'udemy-nextjs-scalable',
    title: 'Next.js: Build Scalable React Apps',
    description: 'This certificate confirms completion of the "Next.js: Build Scalable React Apps with Page and App Router" course on Udemy.',
    image: '/images/udemy/next-js-build-scalable-react-apps-with-page-and-app-router.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'React & Next.js'
  },
  {
    id: 'udemy-css-and-js',
    title: 'CSS and JavaScript Essentials',
    description: 'This certificate confirms completion of the "CSS and JavaScript Essentials" course on Udemy.',
    image: '/images/udemy/css-and-js.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'Frontend Basics'
  },
  {
    id: 'udemy-web-design',
    title: 'Web Design Course For Beginner to Advanced',
    description: 'This certificate confirms completion of the "Web Design Course For Beginner to Advanced" on Udemy.',
    image: '/images/udemy/web-design.jpeg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'Web Design'
  },
  {
    id: 'udemy-web-project-workshop',
    title: 'Web Project Workshop',
    description: 'This certificate confirms completion of the "Web Project Workshop" course on Udemy.',
    image: '/images/udemy/web-project-workshop.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'Web Design'
  },
  {
    id: 'udemy-js-fast-entry',
    title: 'JavaScript Fast Entry: Programming for Everyone',
    description: 'This certificate confirms completion of the "JavaScript Fast Entry: Programming for Everyone" course on Udemy.',
    image: '/images/udemy/javaScript-fast-entry-programming-for-everyone.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'JavaScript'
  },
  {
    id: 'udemy-git-gitlab-github',
    title: 'Git, GitLab, & GitHub Fundamentals',
    description: 'This certificate confirms completion of the "Git, GitLab, & GitHub Fundamentals for Software Developers" course on Udemy.',
    image: '/images/udemy/git-gitLab-github-fundamentals-for-software-developers.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'Tools & Version Control'
  },
  {
    id: 'udemy-git-github-3hours-2026',
    title: 'Learn Git and GitHub in Less Than 3 Hours (2026)',
    description: 'This certificate confirms completion of the "Learn Git and GitHub in Less Than 3 Hours (2026)" course on Udemy.',
    image: '/images/udemy/learn-git-and-github-in-less-than-3-hours(2026).jpg',
    issueDate: '2026-01-01',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'Tools & Version Control'
  },
  {
    id: 'udemy-master-node-fullstack',
    title: 'Master Node.js: From Beginner to Full Stack Developer',
    description: 'This certificate confirms completion of the "Master Node.js: From Beginner to Full Stack Developer" course on Udemy.',
    image: '/images/udemy/master-node.js--from-beginner-to-full-stack-developer.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'Node.js'
  },
  {
    id: 'udemy-nodejs-practical',
    title: 'Node.js: All You Need to Know',
    description: 'This certificate confirms completion of the "Node.js: All You Need to Know with Practical Project" course on Udemy.',
    image: '/images/udemy/nodejs-all-you-need-to-know-with-practical-project.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'Node.js'
  },
  {
    id: 'udemy-30-html-css',
    title: '30 HTML & CSS Projects Workshop',
    description: 'This certificate confirms completion of the "30 HTML & CSS Projects Workshop" course on Udemy.',
    image: '/images/udemy/30-html-css.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'HTML & CSS'
  },
  {
    id: 'udemy-master-html-modern-web-design',
    title: 'Master HTML for Modern Web Design',
    description: 'This certificate confirms completion of the "Master HTML for Modern Web Design" course on Udemy.',
    image: '/images/udemy/master-html-for-modern-web-design.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'HTML & CSS'
  },
  {
    id: 'udemy-html-css-designers',
    title: 'HTML and CSS for Web Designers',
    description: 'This certificate confirms completion of the "HTML and CSS for Web Designers: From Basics to Beautiful" course on Udemy.',
    image: '/images/udemy/html-and-css-for-web-designers.jpg',
    issueDate: '2025-06-21',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'HTML & CSS'
  },
  {
    id: 'udemy-html-css-java-js-fullstack',
    title: 'HTML, CSS, Java & JavaScript Full-Stack Development',
    description: 'This certificate confirms completion of the "HTML, CSS, Java & JavaScript Full-Stack Development" course on Udemy.',
    image: '/images/udemy/html-css-java-javaScript-full-stack.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'JavaScript'
  },
  {
    id: 'udemy-mastering-html5-css3-advanced',
    title: 'Mastering HTML5 & CSS3: Advanced',
    description: 'This certificate confirms completion of the "Mastering HTML5 & CSS3: Advanced" course on Udemy.',
    image: '/images/udemy/mastering-html5-and-css3-advanced.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'HTML & CSS'
  },
  {
    id: 'udemy-mastering-html5-css3-intermediate',
    title: 'Mastering HTML5 & CSS3: Intermediate',
    description: 'This certificate confirms completion of the "Mastering HTML5 & CSS3: Intermediate" course on Udemy.',
    image: '/images/udemy/mastering-html5-and-css3-intermediate.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'HTML & CSS'
  },
  {
    id: 'udemy-mastering-html5-css3-beginner',
    title: 'Mastering HTML5 & CSS3: Beginner',
    description: 'This certificate confirms completion of the "Mastering HTML5 & CSS3: Beginner" course on Udemy.',
    image: '/images/udemy/mastering-html5-and-css3-beginner.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'HTML & CSS'
  },
  {
    id: 'udemy-responsive-css',
    title: 'Responsive Web Design with CSS',
    description: 'This certificate confirms completion of the "Responsive Web Design with CSS: A Complete CSS Guide" course on Udemy.',
    image: '/images/udemy/responsiv-web-design-with-css-a-complete-css-guide.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'HTML & CSS'
  },
  {
    id: 'udemy-node-bootcamp',
    title: 'Complete Node.js Bootcamp',
    description: 'This certificate confirms completion of the "Complete Node.js Bootcamp: From Basics to Advanced" course on Udemy.',
    image: '/images/udemy/complete-node-js-bootcamp-from-basics-to-advanced.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'Node.js'
  },
  {
    id: 'udemy-ui-ux-canva',
    title: 'Complete UI/UX Design with Canva',
    description: 'This certificate confirms completion of the "Complete UI/UX Design with Canva: Design Smart" course on Udemy.',
    image: '/images/udemy/complete-ui-ux-design-with-canva-design-smart.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'Web Design'
  },
  {
    id: 'udemy-js-ten-projects',
    title: 'JavaScript: 10 Projects in 10 Days',
    description: 'This certificate confirms completion of the "JS: Ten Projects in Ten Days course for beginners" on Udemy.',
    image: '/images/udemy/js-ten-Projects-in-ten-days-course-for-beginners.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'JavaScript'
  },
  {
    id: 'udemy-master-js-html-css',
    title: 'Master JavaScript, HTML, and CSS',
    description: 'This certificate confirms completion of the "Master JavaScript, HTML, and CSS" course on Udemy.',
    image: '/images/udemy/master-javaScript-html-and-css.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'JavaScript'
  },
  {
    id: 'udemy-mongodb-nosql',
    title: 'Master MongoDB: Cloud-Based NoSQL Database',
    description: 'This certificate confirms completion of the "Master MongoDB: Cloud-Based NoSQL Database Management" course on Udemy.',
    image: '/images/udemy/master-mongodb-cloud-based-nosql-database-management.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'Node.js'
  },
  {
    id: 'udemy-advanced-win-store-js',
    title: 'Advanced Windows Store App Development using HTML & JS',
    description: 'This certificate confirms completion of the "Advanced Windows Store App Development using HTML and JavaScript" course on Udemy.',
    image: '/images/udemy/advanced-windows-store-app-development-usinghtml-and-javaScript.jpeg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'JavaScript'
  },
  {
    id: 'udemy-ciw-js-specialist',
    title: 'CIW JavaScript Specialist',
    description: 'This certificate confirms completion of the "Certified Internet Webmaster JavaScript Specialist" course on Udemy.',
    image: '/images/udemy/certified-internet-webmaster-javaScript-specialist.jpeg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'JavaScript'
  },
  {
    id: 'udemy-js-scratch-part1',
    title: 'JavaScript From Scratch (Part 1 - Beginner Level)',
    description: 'This certificate confirms completion of the "JavaScript From Scratch Part 1 - Beginner Level" course on Udemy.',
    image: '/images/udemy/javaScript-from-scratch-part1-beginner-level).jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy',
    subcategory: 'JavaScript'
  },
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

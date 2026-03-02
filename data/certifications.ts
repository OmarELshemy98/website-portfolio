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
}

export const certifications: Certification[] = [
  {
    id: 'mahartech-advanced-js',
    title: 'Modern JavaScript (ES6 and Beyond)',
    description: 'This certificate validates my successful completion of the "Modern JavaScript: ES6 and beyond" course offered by ITI Platform (Mahara-Tech). The course focused on advanced JavaScript concepts introduced in ECMAScript 6 and later.',
    image: '/images/mahartech/advanced-js-en.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'MaharaTech'
  },
  {
    id: 'mahartech-html-css',
    title: 'Learn HTML & CSS',
    description: 'This certificate confirms my successful completion of the "Learn HTML & CSS" course provided by ITI Platform (Mahara-Tech).',
    image: '/images/mahartech/html-and-css-en.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'MaharaTech'
  },
  {
    id: 'mahartech-js',
    title: 'JavaScript Programming',
    description: 'This certificate verifies my successful completion of the "JavaScript" course offered by ITI Platform (Mahara-Tech).',
    image: '/images/mahartech/js-en.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'MaharaTech'
  },
  {
    id: 'mahartech-typescript',
    title: 'TypeScript Fundamentals',
    description: 'This certificate confirms completion of the "TypeScript Fundamentals" course provided by ITI Platform (Mahara-Tech).',
    image: '/images/mahartech/typeScript-fundamentals-en.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'MaharaTech'
  },
  {
    id: 'sololearn-coding-data',
    title: 'Coding for Data',
    description: 'This certificate attests to completion of the "Coding for Data" course from Sololearn.',
    image: '/images/soloLearn/coding-for-data.jpeg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'SoloLearn'
  },
  {
    id: 'sololearn-frontend',
    title: 'Front-end for Beginners',
    description: 'This certificate confirms completion of the "Front-end for Beginners" course from Sololearn.',
    image: '/images/soloLearn/front-end-for-begginers.jpeg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'SoloLearn'
  },
  {
    id: 'sololearn-webdev',
    title: 'Web Development',
    description: 'This certificate verifies completion of the "Web Development" course from Sololearn.',
    image: '/images/soloLearn/web-development.jpeg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'SoloLearn'
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
    category: 'Udemy'
  },
  {
    id: 'udemy-node-bootcamp',
    title: 'Complete Node.js Bootcamp',
    description: 'This certificate confirms completion of the "Complete Node.js Bootcamp: From Basics to Advanced" course on Udemy.',
    image: '/images/udemy/complete-node-js-bootcamp-from-basics-to-advanced.jpg',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    category: 'Udemy'
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

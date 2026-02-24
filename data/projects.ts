export type Project = {
  id: string
  title: string
  description: string
  tech: string
  link: string
  images: string[]
}

export const projects: Project[] = [
  {
    id: 'arcon-corp',
    title: 'ARCON - Pioneering Solutions for a Dynamic Future',
    description: 'ARCON is a leading provider of manufacturing, engineering, and automation services. The website showcases the company\'s innovative solutions in cybersecurity, interactive tools, transformative learning tools, and comprehensive support for robotics and training systems. It highlights ARCON\'s commitment to enhancing efficiency, creativity, and collaboration across various sectors, with a focus on education, community engagement, and global impact.',
    tech: 'Next.js, React, Bootstrap 5, CSS Modules, JavaScript , responsive design , seo optimization',
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
            '/images/mockup/axiom-mockup/axiom-sectors-defenseSolutions.png',
            '/images/mockup/axiom-mockup/axiom-sectors-defenseSolutions.png',
            '/images/mockup/axiom-mockup/axiom-sectors-defenseSolutions.png',

    ]
  },
  {
    id: 'egyptian-robotics',
    title: 'ERRCSF Website',
    description: 'Responsive website for the Egyptian Robotics & RC Sports Federation with multi-step registration and interactive popups.',
    tech: 'HTML5, CSS3, Tailwind CSS, Vanilla JS',
    link: 'https://staging.errcsf.org',
    images: []
  },
  {
    id: 'dh-consult',
    title: 'ConsultCo – Consulting Services Website',
    description: 'Dynamic and visually appealing website for a consulting firm with sections for company info, services, projects, and contact.',
    tech: 'HTML5, Tailwind CSS, Vanilla JS',
    link: 'https://darkgoldenrod-gnu-568360.hostingersite.com',
    images: []
  },
  {
    id: 'ti-educational',
    title: 'Educational Website for Kitmeer',
    description: 'Responsive educational website showcasing products and solutions for academic sectors.',
    tech: 'HTML5, CSS3, Vanilla JS',
    link: 'https://forestgreen-koala-992569.hostingersite.com',
    images: []
  },
  {
    id: 'labsforhome',
    title: 'Labs For Home – Interactive Science Learning',
    description: 'Responsive web app with interactive simulations, gamified modules, and resource management, tailored for students and schools.',
    tech: 'Next.js, TypeScript, CSS Modules, PostCSS',
    link: 'https://lightcyan-salamander-875465.hostingersite.com',
    images: []
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
    title: 'Mathmatic Dashboard Courses',
    description: 'Web-based dashboard to manage and display mathematics courses.',
    tech: 'HTML5, CSS3, Vanilla JS',
    link: 'https://omarelshemy98.github.io/mathmatic-dashboard-courses',
    images: []
  },
  {
    id: 'medyour',
    title: 'Medyour – Digital Healthcare Platform',
    description: 'Modern responsive website with bilingual support and seamless navigation.',
    tech: 'HTML5, CSS3, Vanilla JS',
    link: 'https://medyour.com',
    images: []
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
    id: 'modern-trade-corporate',
    title: 'Modern Trade for Engineering (MTE)',
    description: 'Multilingual corporate website with mobile-first design and SEO optimization.',
    tech: 'HTML5, CSS3, Vanilla JS, Tailwind CSS',
    link: 'https://moderntrade.netlify.app/',
    images: []
  },
  {
    id: 'modern-trade-mte',
    title: 'Modern Trade Digital Business Card',
    description: 'Responsive digital business card and company profile for MTE.',
    tech: 'HTML5, CSS3, Vanilla JS, Tailwind CSS',
    link: 'https://moderntrade.netlify.app/cards/index.html?id=19634771',
    images: []
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

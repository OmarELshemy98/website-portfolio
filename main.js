document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceModal = document.getElementById('serviceModal');
    const closeButton = serviceModal.querySelector('.close-button');
    const serviceRequestForm = document.getElementById('serviceRequestForm');
    const modalServiceTitle = document.getElementById('modalServiceTitle');
    const formMessage = document.getElementById('formMessage');

    let currentService = ''; // To store the title of the service being requested

    // Open modal when "Request Service" button is clicked
    serviceCards.forEach(card => {
        card.querySelector('.request-button').addEventListener('click', () => {
            currentService = card.dataset.serviceTitle;
            modalServiceTitle.textContent = currentService; // Set dynamic service title
            serviceModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling background
            formMessage.classList.add('hidden'); // Hide previous messages
            serviceRequestForm.reset(); // Clear form fields
        });
    });

    // Close modal functionality
    closeButton.addEventListener('click', () => {
        serviceModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close modal if clicked outside content
    serviceModal.addEventListener('click', (e) => {
        if (e.target === serviceModal) {
            serviceModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Form Submission Handler
    serviceRequestForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission

        // Basic Client-Side Validation
        const clientName = document.getElementById('clientName').value.trim();
        const clientEmail = document.getElementById('clientEmail').value.trim();
        const serviceDescription = document.getElementById('serviceDescription').value.trim();
        const mobileNumber = document.getElementById('mobileNumber').value.trim();
        const paymentMethod = document.getElementById('paymentMethod').value;
        const deliveryTimeframe = document.getElementById('deliveryTimeframe').value || 'Not specified'; // Default if not selected
        
        // File upload cannot be sent directly via WhatsApp URL
        const fileInput = document.getElementById('fileUpload');
        const file = fileInput.files[0];
        // Changed message to English
        let fileInfo = file ? `File upload attempted: ${file.name} (${(file.size / 1024).toFixed(2)} KB). Please send it separately via WhatsApp.` : 'No file attached.';


        if (!clientName || !clientEmail || !serviceDescription || !mobileNumber || !paymentMethod) {
            // Changed message to English
            displayMessage('Please fill in all required fields (Name, Email, Description, Mobile Number, Payment Method).', 'error');
            return;
        }

        // Prepare the WhatsApp message text in English
        const whatsappMessage = `
New Service Request:
Service Requested: ${currentService}
Client Name: ${clientName}
Client Email: ${clientEmail}
Project Description & Requirements: ${serviceDescription}
Mobile Number (WhatsApp): ${mobileNumber}
Preferred Payment Method: ${paymentMethod}
Desired Delivery Timeframe: ${deliveryTimeframe}
File Information: ${fileInfo}
        `.trim(); // .trim() removes leading/trailing whitespace

        // WhatsApp number including country code for Egypt (+20)
        const whatsappNumber = '201026238072'; // 01026238072

        // Construct the WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        // Open WhatsApp link in a new tab
        window.open(whatsappUrl, '_blank');

        // Show success message in English and reset form
        displayMessage('WhatsApp will open with your message ready. Please press the send button within WhatsApp.', 'success');
        serviceRequestForm.reset(); // Clear form fields
        setTimeout(() => serviceModal.classList.remove('active'), 5000); // Auto close after 5 seconds
        document.body.style.overflow = ''; // Restore scrolling
    });

    function displayMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `message mt-4 ${type === 'success' ? 'success-message' : 'error-message'}`;
        formMessage.classList.remove('hidden');
    }
});
// Portfolio Website Main JS

// Performance monitoring
const startTime = performance.now();

// Intersection Observer for better lazy loading
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    }
  });
}, {
  rootMargin: '50px 0px',
  threshold: 0.1
});

// Observe all images with data-src attribute
document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(img => imageObserver.observe(img));
  
  // Log performance
  const loadTime = performance.now() - startTime;
  console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
});

// Landing Overlay Hide/Show Animation
window.addEventListener('DOMContentLoaded', function() {
  var overlay = document.getElementById('landing-overlay');
  if (overlay) {
    // Start with show animation
    overlay.classList.add('landing-show');
    overlay.classList.remove('landing-hide');
    // Hide after 5 seconds with animation
    setTimeout(function() {
      overlay.classList.remove('landing-show');
      overlay.classList.add('landing-hide');
      setTimeout(function() { overlay.style.display = 'none'; }, 700);
    }, 5000);
  }
});

// Code Rain Animation for Landing Overlay (Realistic code snippets)
(function() {
  var canvas = document.getElementById('code-rain-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;

  // Realistic code snippets (HTML, JS, CSS)
  var codeSnippets = [
    '<div class="box">',
    '<button onclick="go()">',
    '<input type="text" />',
    '<img src="logo.png" alt="logo">',
    '<ul class="nav">',
    '<li class="item">',
    '<a href="#">Home</a>',
    '<h1>Welcome!</h1>',
    '<meta charset="UTF-8">',
    '<link rel="stylesheet" href="main.css">',
    'function handleClick() {',
    'let result = sum(5, 7);',
    'const skills = ["HTML", "CSS"]',
    'console.log("Hi!");',
    'if (x > 10) { ... }',
    'for (let i = 0; i < 5; i++)',
    'setTimeout(() => {...}, 1000);',
    'document.getElementById("main")',
    'window.addEventListener("load", ...)',
    'return a + b;',
    'background: #1a374d;',
    'color: #fff;',
    'padding: 16px 24px;',
    'margin: 0 auto;',
    'display: flex;',
    'align-items: center;',
    'justify-content: space-between;',
    'border-radius: 8px;',
    'font-size: 1.2rem;',
    'box-shadow: 0 2px 8px #0003;',
    'transition: all 0.3s;',
    'export default App;',
    'import React from "react";',
    'map(item => <li>{item}</li>)',
    'filter(Boolean)',
    'reduce((a, b) => a + b, 0)',
    'const [state, setState] = useState()',
    'useEffect(() => {...}, [])',
    'props.children',
    'className="container"',
    'href="/about"',
    'src="/img/bg.jpg"',
    'type="button"',
    'value="Submit"',
    'id="main-section"',
    'onClick={handleClick}',
    'aria-label="Close"',
    'justify-content: center;',
    'gap: 12px;',
    'min-width: 320px;',
    'max-width: 1200px;',
    'overflow: hidden;',
    'position: absolute;',
    'top: 0;',
    'left: 0;',
    'right: 0;',
    'bottom: 0;',
    'z-index: 10;',
    'opacity: 0.8;',
    'pointer-events: none;',
    'font-family: Montserrat, sans-serif;',
    'border: none;',
    'outline: none;',
    'cursor: pointer;',
    'transition: background 0.2s;',
    'background-color: #222;',
    'color: #00ffb3;',
    'height: 100vh;',
    'width: 100vw;',
    'margin-bottom: 2rem;',
    'padding-top: 2rem;',
    'text-align: center;',
    'font-weight: bold;',
    'letter-spacing: 1px;',
    'line-height: 1.5;',
    'box-sizing: border-box;',
    'overflow-x: hidden;',
    'overflow-y: auto;',
    'background-image: url("bg.svg");',
    'background-repeat: no-repeat;',
    'background-size: cover;',
    'background-position: center;',
    'filter: blur(2px);',
    'transform: scale(1.05);',
    'animation: fadeIn 1s;',
    'keyframes fadeIn { ... }',
    '::-webkit-scrollbar { ... }',
    '::selection { background: #00ffb3; }',
    '/* Responsive Design */',
    '@media (max-width: 600px) { ... }',
    '/* End of CSS */',
  ];
  var fontSize = 22;
  var columns = Math.floor(w / fontSize);
  var drops = [];
  for (var i = 0; i < columns; i++) drops[i] = Math.random() * -h;

  function draw() {
    ctx.fillStyle = 'rgba(26, 55, 77, 0.18)';
    ctx.fillRect(0, 0, w, h);
    ctx.font = fontSize + 'px monospace';
    ctx.fillStyle = '#00ffb3';
    for (var i = 0; i < drops.length; i++) {
      var text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > h && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i] += 0.4 + Math.random() * 0.1;
    }
  }

  var animationId;
  function animate() {
    draw();
    animationId = requestAnimationFrame(animate);
  }
  animate();

  // Resize canvas on window resize
  window.addEventListener('resize', function() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    columns = Math.floor(w / fontSize);
    drops = [];
    for (var i = 0; i < columns; i++) drops[i] = Math.random() * -h;
  });

  // Stop animation when overlay is hidden
  var observer = new MutationObserver(function() {
    var overlay = document.getElementById('landing-overlay');
    if (overlay && overlay.style.display === 'none') {
      cancelAnimationFrame(animationId);
    }
  });
  observer.observe(document.getElementById('landing-overlay'), { attributes: true, attributeFilter: ['style'] });
})();

// --- Certificate Modal System ---
const certificateData = {
  'mahartech-advanced-js': {
    title: 'Modern JavaScript (ES6 and Beyond)',
    description: 'This certificate validates my successful completion of the "Modern JavaScript: ES6 and beyond" course offered by ITI Platform (Mahara-Tech). The course, spanning 3 hours and 10 minutes, focused on advanced JavaScript concepts, including features introduced in ECMAScript 6 (ES6) and subsequent versions. This training has enhanced my proficiency in writing modern, efficient, and maintainable JavaScript code, essential for contemporary web development.',
    image: 'images/mahartech/advanced-js-en.jpg'
  },
  'mahartech-html-css': {
    title: 'Learn HTML & CSS',
    description: 'This certificate confirms my successful completion of the "Learn HTML & CSS" course provided by ITI Platform (Mahara-Tech). This comprehensive course, totaling 7 hours and 42 minutes, equipped me with fundamental skills in HyperText Markup Language (HTML) for structuring web content and Cascading Style Sheets (CSS) for styling and layout. This training is crucial for building visually appealing and well-structured web pages.',
    image: 'images/mahartech/html-and-css-en.jpg'
  },
  'mahartech-js': {
    title: 'JavaScript Programming',
    description: 'This certificate verifies my successful completion of the "JavaScript" course offered by ITI Platform (Mahara-Tech). Over 7 hours of dedicated study, I gained a solid understanding of JavaScript fundamentals, including syntax, data types, control structures, functions, and working with the Document Object Model (DOM). This foundational knowledge is essential for developing interactive and dynamic web applications.',
    image: 'images/mahartech/js-en.jpg'
  },
  'mahartech-typescript': {
    title: 'TypeScript Fundamentals',
    description: 'This certificate confirms my successful completion of the "TypeScript Fundamentals" course provided by ITI Platform (Mahara-Tech). Through 2 hours and 8 minutes of focused learning, I acquired a foundational understanding of TypeScript, including its core concepts like static typing, interfaces, classes, and modules. This training is crucial for building more robust, scalable, and maintainable JavaScript applications.',
    image: 'images/mahartech/typeScript-fundamentals-en.jpg'
  },
  'sololearn-coding-data': {
    title: 'Coding for Data',
    description: 'This certificate attests to my successful completion of the "Coding for Data" course from Sololearn. This course provided me with a comprehensive theoretical and practical understanding of coding principles and techniques specifically applied to data-related tasks. It equipped me with essential skills for handling, processing, and analyzing data using programming, which is critical in various data-driven fields.',
    image: 'images/soloLearn/coding-for-data.jpeg'
  },
  'sololearn-frontend': {
    title: 'Front-end for Beginners (Developed with Angular Team at Google)',
    description: 'This certificate confirms my successful completion of the "Front-end for Beginners" course from Sololearn, which was developed in collaboration with the Angular Team at Google. This course provided me with a foundational understanding of front-end web development, covering essential concepts and technologies necessary to begin building user interfaces. The curriculum, influenced by Google\'s Angular team, ensures a practical and industry-relevant introduction to the field.',
    image: 'images/soloLearn/front-end-for-begginers.jpeg'
  },
  'sololearn-webdev': {
    title: 'Web Development',
    description: 'This certificate verifies my successful completion of the "Web Development" course from Sololearn. This course provided me with a comprehensive theoretical and practical understanding of core web development principles and technologies. It equipped me with the foundational knowledge and skills necessary to build and maintain websites, covering key aspects of both front-end and potentially back-end development.',
    image: 'images/soloLearn/web-development.jpeg'
  },
  'udemy-html-css-js': {
    title: 'HTML5, CSS3, and JavaScript The Right Way 2025',
    description: 'This certificate confirms my successful completion of the "HTML5, CSS3, and JavaScript The Right Way 2025" course on Udemy, instructed by Ali Murtaza. Over 5 total hours, this course provided an in-depth understanding of modern web development fundamentals, focusing on best practices for HTML5, CSS3, and JavaScript. This training has equipped me with the skills to build robust, semantic, and visually appealing web applications according to current industry standards.',
    image: 'images/udemy/advanced-windows-store-app-development-usinghtml-and-javaScript.jpeg'
  },
  'udemy-js-fundamentals': {
    title: 'JavaScript Fundamentals Course for Beginners',
    description: 'This certificate confirms my successful completion of the "JavaScript Fundamentals Course for Beginners" on Udemy, instructed by Sara Academy. This 2.5-hour course provided a solid introduction to the core concepts of JavaScript programming. It equipped me with foundational knowledge in JavaScript syntax, variables, data types, operators, control flow, and functions, essential for anyone starting in web development and building interactive web applications.',
    image: 'images/udemy/certified-internet-webmaster-javaScript-specialist.jpeg'
  },
  'udemy-website-template': {
    title: 'Design a Website Template using HTML5 & CSS3',
    description: 'This certificate confirms my successful completion of the "Design a Website Template using HTML5 & CSS3" course on Udemy, instructed by Kioomars Jonood and Samaneh Mazidi Sharaf Abadi. This extensive 10.5-hour course provided practical skills and techniques for creating professional and responsive website templates using modern HTML5 and CSS3. It enhanced my ability to structure web content semantically and style it effectively, which is fundamental for front-end web design and development.',
    image: 'images/udemy/design-a-website-template-using-htmlandcss.jpeg'
  },
  'udemy-css-grid': {
    title: 'Introduction to CSS Grid',
    description: 'This certificate confirms my successful completion of the "Introduction To CSS Grid" course on Udemy, instructed by Joshan Grewal. This 4.5-hour course provided a comprehensive understanding of CSS Grid, a powerful layout system for designing two-dimensional grid-based layouts on the web. It significantly enhanced my skills in creating complex and responsive web designs, a crucial aspect of modern front-end development.',
    image: 'images/udemy/introduction-to-css-grid.jpg'
  },
  'udemy-js-scratch': {
    title: 'JavaScript From Scratch',
    description: 'This certificate confirms my successful completion of the "JavaScript From Scratch (Part 1 - Beginner Level)" course on Udemy, instructed by Kioomars Jonood and Samaneh Mazidi Sharaf Abadi. This 4.5-hour course served as a foundational introduction to JavaScript programming, covering essential concepts for beginners. It provided me with a strong understanding of core JavaScript syntax, variables, data types, and basic programming constructs, which are critical first steps in becoming proficient in web development.',
    image: 'images/udemy/introduction-to-programming-using-javaScript.jpeg'
  },
  'udemy-js-advanced': {
    title: 'JavaScript Fundamentals to Advanced: Full Stack Development',
    description: 'This certificate confirms my successful completion of the "JavaScript Fundamentals to Advanced: Full Stack Development" course on Udemy, instructed by Sayman Creative Institute. Completed on June 21, 2025, this comprehensive 5.5-hour course provided an in-depth exploration of JavaScript, progressing from foundational concepts to advanced topics relevant for full-stack development. It significantly enhanced my understanding of JavaScript\'s role in both front-end and back-end environments, equipping me with skills for building complete web applications.',
    image: 'images/udemy/javaScript-fundamentals-to-advanced.jpg'
  },
  'udemy-nextjs-react': {
    title: 'Practical Next.js & React - Build a real WebApp with Next.js',
    description: 'This certificate confirms my successful completion of the "Practical Next.js & React - Build a real WebApp with Next.js" course on Udemy, instructed by Nick Ovchinnikov. This extensive 11-hour course provided hands-on experience in building a complete web application using Next.js and React. It significantly enhanced my skills in modern front-end development, specifically in server-side rendering, routing, and state management within the Next.js framework, crucial for developing high-performance and scalable web applications.',
    image: 'images/udemy/Practical-next.jsandreact.jpeg'
  },
  'udemy-web-design': {
    title: 'Web Design Course For Beginner to Advanced',
    description: 'This certificate confirms my successful completion of the "Web Design Course For Beginner to Advanced" on Udemy, instructed by Manuel Tudu. This comprehensive 3-hour course provided a thorough understanding of web design principles and practices, progressing from fundamental concepts to more advanced techniques. It equipped me with a holistic view of web design, enabling me to create aesthetically pleasing and functional websites from initial concept to completion.',
    image: 'images/udemy/web-design.jpeg'
  },
  'udemy-html-css-designers': {
    title: 'HTML and CSS for Web Designers: From Basics to Beautiful',
    description: 'This certificate confirms my successful completion of the "HTML and CSS for Web Designers: From Basics to Beautiful" course on Udemy, instructed by Mehmood Khalil. Completed on June 21, 2025, this extensive 8-hour course provided a deep dive into HTML and CSS, teaching how to structure and style web content effectively to create visually appealing and responsive designs. It enhanced my ability to translate design concepts into functional and beautiful web pages.',
    image: 'images/udemy/html-and-css-for-web-designers.jpg'
  },
  'udemy-30-html-css': {
    title: '30 HTML & CSS Projects Workshop',
    description: 'This certificate confirms my successful completion of the "30 HTML & CSS Projects Workshop" course on Udemy. The course focused on building practical, real-world projects using modern HTML5 and CSS3, strengthening my skills in layout, responsive design, and component-driven structuring. It enhanced my ability to translate design ideas into clean, maintainable, and performant web pages.',
    image: 'images/udemy/30-html-css.jpg'
  },
  'udemy-css-and-js': {
    title: 'CSS and JavaScript Essentials',
    description: 'This certificate confirms my successful completion of the "CSS and JavaScript Essentials" course on Udemy. The training covered core styling techniques with CSS and interactivity with JavaScript, including DOM manipulation, events, and modern best practices. It improved my capability to craft dynamic, responsive interfaces with clean and accessible code.',
    image: 'images/udemy/css-and-js.jpg'
  },
  'udemy-web-project-workshop': {
    title: 'Web Project Workshop',
    description: 'This certificate confirms my successful completion of the "Web Project Workshop" course on Udemy. The course focused on building end-to-end web projects, from planning and structuring to styling and interaction. It strengthened my practical experience in assembling complete, production-ready web pages and components.',
    image: 'images/udemy/web-project-workshop.jpg'
  },
  'chubb-life': {
    title: 'Chubb Life-Egypt Basic Sales Induction Training',
    description: 'This certificate recognizes my successful completion of the "Chubb Life-Egypt Basic Sales Induction Training." This training program equipped me with foundational knowledge in product understanding and sales principles within the life insurance sector. My achievement of a 98% score in the Product\'s Knowledge test demonstrates my comprehensive grasp of Chubb Life\'s offerings and commitment to professional development in sales.',
    image: 'images/certificates/chubb-life.jpeg'
  },
  'banque-misr': {
    title: 'Banque Misr Summer Training Program 2022',
    description: 'This Certificate of Achievement acknowledges my successful completion of the "Banque Misr Summer Training Program 2022." This program was organized by the Central Administration for Development and Learning within the Human Resources Sector of Banque Misr. It signifies my successful engagement and completion of the designated training track, demonstrating my commitment to continuous learning and professional development within the human resources field.',
    image: 'images/certificates/banque-misr-certificate .jpg'
  },
  'military-accounting': {
    title: 'Military Service - Procurement Accountant',
    description: 'This Certificate of Experience, issued by the Command of Brigade 96 Artillery of the Air Defense Forces, verifies my service during the period of January 7, 2023, to March 1, 2024. During my military service, I served as a Procurement Accountant, demonstrating proficiency and excellence in managing procurement-related financial operations. This experience provided me with practical skills in financial record-keeping, expenditure tracking, and inventory management within a structured organizational environment.',
    image: 'images/certificates/military-accounting.jpg'
  },

};

// Open certificate modal
function openCertificateModal(certificateId) {
  const certificate = certificateData[certificateId];
  if (certificate) {
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const certificateModal = document.getElementById('certificateModal');
    
    if (modalImage && modalTitle && modalDescription && certificateModal) {
      modalImage.src = certificate.image;
      modalImage.alt = certificate.title;
      modalTitle.textContent = certificate.title;
      modalDescription.textContent = certificate.description;
      
      certificateModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Focus trap for accessibility
      const modalClose = document.getElementById('modalClose');
      if (modalClose) modalClose.focus();
    }
  }
}

// Close certificate modal
function closeCertificateModal() {
  const certificateModal = document.getElementById('certificateModal');
  if (certificateModal) {
    certificateModal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// --- Animated Counters ---
function animateCounters() {
  document.querySelectorAll('.count').forEach(counter => {
    const target = +counter.getAttribute('data-count');
    let count = 0;
    const step = Math.ceil(target / 60);
    function update() {
      count += step;
      if (count > target) count = target;
      counter.textContent = count;
      if (count < target) requestAnimationFrame(update);
    }
    update();
  });
}

// --- Skills Animation System ---
function initSkillsAnimation() {
  const skillItems = document.querySelectorAll('.skill-item');
  
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillItem = entry.target;
        const skillProgress = skillItem.querySelector('.skill-progress');
        const skillLevel = skillProgress.getAttribute('data-level');
        
        // Add animation class
        skillItem.classList.add('fade-in');
        
        // Animate skill bar
        setTimeout(() => {
          skillProgress.style.width = skillLevel + '%';
        }, 300);
        
        // Unobserve after animation
        skillsObserver.unobserve(skillItem);
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
  });
  
  skillItems.forEach(item => {
    skillsObserver.observe(item);
  });
}

// --- Skill Tags Interaction ---
function initSkillTags() {
  const skillTags = document.querySelectorAll('.skill-tag');
  
  skillTags.forEach(tag => {
    tag.addEventListener('click', () => {
      // Add a subtle click effect
      tag.style.transform = 'scale(0.95)';
      setTimeout(() => {
        tag.style.transform = '';
      }, 150);
    });
    
    // Add hover sound effect simulation (visual feedback)
    tag.addEventListener('mouseenter', () => {
      tag.style.animation = 'pulse 0.3s ease-in-out';
    });
    
    tag.addEventListener('mouseleave', () => {
      tag.style.animation = '';
    });
  });
}

// --- Skills Section Enhancement ---
function enhanceSkillsSection() {
  const skillItems = document.querySelectorAll('.skill-item');
  
  skillItems.forEach(item => {
    // Add click to show skill details
    item.addEventListener('click', () => {
      const skillName = item.getAttribute('data-skill');
      const skillLevel = item.querySelector('.skill-progress').getAttribute('data-level');
      
      // Create a temporary tooltip or notification
      showSkillNotification(skillName, skillLevel);
    });
  });
}

// Show skill notification
function showSkillNotification(skillName, level) {
  // Remove existing notification
  const existingNotification = document.querySelector('.skill-notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'skill-notification';
  notification.innerHTML = `
    <div class="notification-content">
      <h4>${skillName}</h4>
      <p>Proficiency Level: ${level}%</p>
    </div>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, rgba(0, 255, 247, 0.9), rgba(0, 195, 255, 0.9));
    color: #181f2a;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 255, 247, 0.3);
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 255, 247, 0.3);
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Initialize skills animation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initSkillsAnimation();
  initSkillTags();
  enhanceSkillsSection();
  animateCounters();
  
  // Trigger continuous navbar animation
  setTimeout(() => {
    const logoRole = document.querySelector('.logo-role');
    const logoName = document.querySelector('.logo-name');
    
    if (logoRole) {
      logoRole.style.animation = 'typewriterRole 4s steps(18, end) infinite, blinkCaret 0.7s step-end infinite';
      logoRole.classList.add('typing');
    }
    
    if (logoName) {
      logoName.style.animation = 'typewriterName 4s steps(13, end) infinite 2s, blinkCaret 0.7s step-end infinite 2s';
      logoName.classList.add('typing');
    }
  }, 100);
  
  // Set year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Inject enhanced animated code background in hero
  const codeBg = document.querySelector('.code-bg');
  if (codeBg) {
    const codeSnippets = [
      `// Portfolio.js\nfunction Developer() {\n  const skills = ['HTML', 'CSS', 'JavaScript', 'React'];\n  for (let skill of skills) {\n    console.log(skill);\n  }\n  return <Portfolio />;\n}`,
      `// Responsive Design\n@media (max-width: 900px) {\n  .container { flex-direction: column; }\n}`,
      `// Creativity\nconst design = () => 'Modern & Clean';` ,
      `// Animation\nrequestAnimationFrame(() => render());` ,
      `// Contact\nconst email = 'me@portfolio.com';` ,
      `// Experience\nlet years = 5;\nconsole.log('Years:', years);` ,
      `// UI/UX\nfunction createButton(text) {\n  return '<button>' + text + '</button>';\n}` ,
      `// Frameworks\nimport React from 'react';\nimport NextJS from 'next';` ,
      `// CSS Variables\n:root {\n  --primary: #00fff7;\n  --bg: #181f2a;\n}`
    ];
    let layers = '';
    for (let i = 0; i < 3; i++) {
      const snippet = codeSnippets.slice(i * 3, (i + 1) * 3).join('\n\n');
      const speed = 10 + i * 4;
      const opacity = 0.18 + i * 0.08;
      const top = Math.random() * 40;
      layers += `<div class=\"code-lines\" style=\"animation-duration:${speed}s;opacity:${opacity};top:${top}%;\">${snippet}</div>`;
    }
    codeBg.innerHTML = layers;
  }

  // Certificate Modal Event Listeners
  // Add click listeners to all certificate cards
  const certificateCards = document.querySelectorAll('.certificate-card');
  
  certificateCards.forEach((card, index) => {
    // Set animation delay for staggered effect
    const readMoreBtn = card.querySelector('.read-more-btn');
    if (readMoreBtn) {
      readMoreBtn.style.setProperty('--animation-order', index);
    }
    
    card.addEventListener('click', (e) => {
      // Don't trigger if clicking on the read more button (to avoid double triggering)
      if (e.target.classList.contains('read-more-btn')) {
        return;
      }
      
      e.preventDefault();
      const certificateId = card.getAttribute('data-certificate');
      openCertificateModal(certificateId);
    });
  });

  // Also keep the read more button clickable for better UX
  const readMoreButtons = document.querySelectorAll('.read-more-btn');
  
  readMoreButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation(); // Prevent the card click event from also firing
      const certificateCard = btn.closest('.certificate-card');
      const certificateId = certificateCard.getAttribute('data-certificate');
      openCertificateModal(certificateId);
    });
  });

  // Close modal events
  const modalClose = document.getElementById('modalClose');
  const certificateModal = document.getElementById('certificateModal');
  
  if (modalClose) {
    modalClose.addEventListener('click', closeCertificateModal);
  }
  
  if (certificateModal) {
    certificateModal.addEventListener('click', (e) => {
      if (e.target === certificateModal) {
        closeCertificateModal();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certificateModal && certificateModal.classList.contains('active')) {
      closeCertificateModal();
    }
  });
});

// --- Project Modal System ---
const projectModal = document.getElementById('projectModal');
const projectModalClose = document.getElementById('projectModalClose');
const projectModalTitle = document.getElementById('projectModalTitle');
const projectModalDescription = document.getElementById('projectModalDescription');
const projectModalTech = document.getElementById('projectModalTech');
const projectModalLink = document.getElementById('projectModalLink');

// Project data
const projectData = {
  'arcon-corp': {
    title: '🔹 Arcon Corp Website',
    description: 'ARCON is a leading provider of manufacturing, engineering, and automation services. The website showcases the company\'s innovative solutions in cybersecurity, interactive tools, transformative learning tools, and comprehensive support for robotics and training systems. It highlights ARCON\'s commitment to enhancing efficiency, creativity, and collaboration across various sectors, with a focus on education, community engagement, and global impact.',
    tech: 'Next.js (React Framework), React.js, Bootstrap 5 (for responsive design and components), CSS Modules & Custom CSS, JavaScript (ES6+), Image Optimization (Next.js Image component), Font Awesome (for icons), HTML5 & Modern Web Standards',
    link: 'https://staging.arconcorp.com'
  },
  'egyptian-robotics': {
    title: 'ERRCSF Website (Egyptian Robotics & RC Sports Federation)',
    description: 'A modern, responsive website for the Egyptian Robotics & RC Sports Federation. The site provides information about the federation, its activities, membership, media, and news. It features a multi-step registration form, interactive popups, and a visually engaging design tailored for both desktop and mobile users.',
    tech: 'HTML5 (Semantic & Accessible Markup), CSS3 (Custom styles + Tailwind CSS utility framework), JavaScript (Vanilla JS for interactivity), Font Awesome (Icons), Google Fonts (Roboto), Responsive Design (Mobile-first approach)',
    link: 'https://staging.errcsf.org'
  },
  'dh-consult': {
    title: 'ConsultCo – Professional Consulting Services Website',
    description: 'Developed a dynamic and visually appealing website for a consulting firm, designed to enhance the company\'s online presence and streamline client engagement. The website features a modern, responsive user interface with dedicated sections for company information, services, projects portfolio, and a contact form. Emphasis was placed on user experience, accessibility, and performance optimization to ensure seamless navigation across all devices. The project demonstrates strong front-end development skills and attention to design detail.',
    tech: 'HTML5 for semantic and accessible markup, Tailwind CSS for rapid, utility-first styling and responsive design, Vanilla JavaScript for interactive features and smooth navigation, Image optimization for fast loading times',
    link: 'https://darkgoldenrod-gnu-568360.hostingersite.com'
  },
  'ti-educational': {
    title: 'Educational Website for Kitmeer',
    description: 'A responsive and user-friendly educational website designed to showcase Kitmeer\'s products and solutions for schools, universities, vocational, and industrial sectors. The website features detailed product pages, category-based navigation, and a modern visual design to enhance user engagement and accessibility.',
    tech: 'HTML5, CSS3, JavaScript (Vanilla JS), Responsive Web Design, Image Optimization',
    link: 'https://forestgreen-koala-992569.hostingersite.com'
  },
  'labsforhome': {
    title: 'Labs For Home Website – Interactive Science Learning Platform',
    description: 'A modern, responsive web application designed to enhance science education through interactive simulations, gamified learning modules, and comprehensive resource management. The platform provides tailored experiences for students, teachers, and schools, featuring video demonstrations, testimonials, and a robust content management system. The website aims to make science learning engaging, accessible, and effective for various academic levels.',
    tech: 'Next.js (React Framework), TypeScript, CSS Modules & PostCSS, Responsive Web Design, Modular Component Architecture, Media Asset Management (Images, Videos), Node.js (for build and tooling)',
    link: 'https://lightcyan-salamander-875465.hostingersite.com'
  },
  'todo-app': {
    title: 'To-Do List Web Application',
    description: 'A simple and intuitive web application that allows users to create, manage, and organize their daily tasks efficiently. The app features task addition, deletion, and completion tracking, providing a seamless user experience for productivity management.',
    tech: 'HTML5, CSS3, JavaScript (Vanilla JS)',
    link: 'https://omarelshemy98.github.io/todo-list-app/'
  },
  'student-dashboard': {
    title: 'Mathmatic Dashboard Courses',
    description: 'A web-based dashboard designed to manage and display mathematics courses. The platform provides an intuitive interface for users to log in, view available courses, and interact with course content efficiently. The project emphasizes user experience, accessibility, and responsive design.',
    tech: 'HTML5, CSS3, JavaScript (Vanilla JS)',
    link: 'https://omarelshemy98.github.io/mathmatic-dashboard-courses'
  },
  'medyour': {
    title: 'Medyour – Digital Healthcare Platform',
    description: 'Developed a modern, responsive website for Medyour, a healthcare services provider. The platform delivers comprehensive information about services, challenges, and FAQs, supporting both Arabic and English languages. Emphasized user experience, accessibility, and seamless navigation across devices to ensure broad reach and engagement.',
    tech: 'HTML5, CSS3, JavaScript (Vanilla JS), Responsive Web Design, Multilingual Implementation (Arabic & English)',
    link: 'https://medyour.com'
  },
  'medyour-card': {
    title: 'Medyour Digital Business Card Platform',
    description: 'A dynamic digital business card platform that transforms traditional contact sharing into an interactive experience. Built with modern web technologies, this responsive application allows users to instantly access team member information, contact details, and social media profiles through personalized URLs. Features include one-click contact saving, mobile-optimized design, and seamless integration with various communication channels. Each profile has a unique QR code that, when scanned, directly switches to the profile website. Example profile: https://medyourcard.netlify.app/?id=4',
    tech: 'HTML5, CSS3, JavaScript (Vanilla JS), Responsive Web Design, QR Code Integration, Digital Business Card Technology',
    link: 'https://medyour.com'
  },
  'modern-trade-corporate': {
    title: '🔹 Modern Trade for Engineering (MTE)',
    description: 'Engineered a transformative digital presence for MTE, crafting a visually striking and fully responsive corporate website that unites English and Arabic audiences under one seamless platform. This project redefines user engagement through innovative design, intuitive navigation, and robust multilingual support, ensuring every visitor feels at home. Leveraging best-in-class SEO strategies and a mobile-first philosophy, the site amplifies MTE’s brand authority, showcases its diverse portfolio, and drives meaningful connections with clients across the globe. The result is not just a website, but a digital gateway that elevates MTE’s vision and values to an international stage.',
    tech: 'HTML5, CSS3, JavaScript (Vanilla JS), Tailwind CSS, Multilingual Support, SEO Optimization, Responsive Web Design',
    link: 'https://moderntrade.netlify.app/'
  },
  'modern-trade-mte': {
    title: '🔹 Modern Trade (MTE) Digital Business Card & Company Profile',
    description: 'A visually striking, responsive digital business card and company profile for Modern Trade for Engineering (MTE), a leading provider of engineering and industrial solutions in Egypt and the Middle East. This project combines elegant design with seamless user experience, featuring quick contact options, social media integration, and a concise company overview. Built with modern web technologies and Tailwind CSS, the site delivers a professional, mobile-friendly interface that highlights MTE\'s commitment to innovation, quality, and client satisfaction. The digital card serves as both a personal contact hub and a corporate introduction, making it ideal for networking and business development.',
    tech: 'HTML5, CSS3, JavaScript (Vanilla JS), Tailwind CSS, Responsive Web Design, Digital Business Card, Social Media Integration',
    link: 'https://moderntrade.netlify.app/cards/index.html?id=19634771'
  },
  'luxury-apartment': {
    title: '🔹 Luxury Apartment Showcase – Modern Real Estate Experience',
    description: 'A sophisticated and modern real estate showcase website designed to present luxury apartments with an elegant, user-friendly interface. The platform features high-quality property images, detailed descriptions, interactive galleries, and seamless navigation to provide potential buyers and renters with an immersive viewing experience. Built with responsive design principles, the website ensures optimal viewing across all devices while maintaining the premium aesthetic expected in luxury real estate.',
    tech: 'HTML5, CSS3, JavaScript (Vanilla JS), Responsive Web Design, Image Optimization, Modern UI/UX Design',
    link: 'https://alexluxuryapt.netlify.app/'
  }
};

// Function to open project modal
function openProjectModal(projectId) {
  const project = projectData[projectId];
  if (!project) return;

  projectModalTitle.textContent = project.title;
  projectModalDescription.textContent = project.description;
  projectModalTech.innerHTML = `<strong>Tech Stack:</strong> ${project.tech}`;
  projectModalLink.innerHTML = `<a href="${project.link}" target="_blank" rel="noopener">Visit Project → ${project.link}</a>`;

  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Focus management
  projectModalClose.focus();
}

// Function to close project modal
function closeProjectModal() {
  projectModal.classList.remove('active');
  document.body.style.overflow = '';
}

// Event listeners for project cards
document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach((card, index) => {
    const projectId = card.dataset.project;
    const readMoreBtn = card.querySelector('.read-more-btn');
    
    // Add animation delay for wave effect
    if (readMoreBtn) {
      readMoreBtn.style.setProperty('--animation-order', index);
    }
    
    // Make entire card clickable
    card.addEventListener('click', (e) => {
      // Prevent double trigger if clicking the button
      if (e.target === readMoreBtn) return;
      openProjectModal(projectId);
    });
    
    // Button click handler
    if (readMoreBtn) {
      readMoreBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent card click
        openProjectModal(projectId);
      });
    }
  });
  
  // Close modal events
  if (projectModalClose) {
    projectModalClose.addEventListener('click', closeProjectModal);
  }
  
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }
  
  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });
});

// --- Accessibility: Focus outline for keyboard users ---
document.body.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
  }
});
document.body.addEventListener('mousedown', function() {
  document.body.classList.remove('user-is-tabbing');
});

// --- Burger Menu Functionality ---
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burgerMenu');
  const mobileNav = document.getElementById('mobileNav');
  if (burger && mobileNav) {
    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = burger.classList.toggle('open');
      mobileNav.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen);
    });
    // Close menu on nav link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileNav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (mobileNav.classList.contains('open') && !mobileNav.contains(e.target) && !burger.contains(e.target)) {
        burger.classList.remove('open');
        mobileNav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }
});

// --- Navbar Role Animation ---
function animateNavbarRole() {
  const roleEl = document.querySelector('.logo-role');
  if (!roleEl) return;
  const text = 'Front end developer';
  let i = 0;
  let isErasing = false;
  let caretBlinkInterval;

  // Always start with empty text
  roleEl.textContent = '';

  // Caret blink effect
  function startCaretBlink() {
    if (caretBlinkInterval) clearInterval(caretBlinkInterval);
    caretBlinkInterval = setInterval(() => {
      if (roleEl) {
        roleEl.style.borderRightColor = roleEl.style.borderRightColor === 'transparent' ? 'var(--neon)' : 'transparent';
      }
    }, 500);
  }
  function stopCaretBlink() {
    if (caretBlinkInterval) clearInterval(caretBlinkInterval);
    if (roleEl) roleEl.style.borderRightColor = 'var(--neon)';
  }

  function typeLoop() {
    if (!isErasing) {
      roleEl.textContent = text.slice(0, i);
      i++;
      if (i > text.length) {
        isErasing = true;
        startCaretBlink();
        setTimeout(typeLoop, 1200); // Pause before erasing
        return;
      }
    } else {
      roleEl.textContent = text.slice(0, i);
      i--;
      if (i < 0) {
        isErasing = false;
        // Clear text before starting to type again
        roleEl.textContent = '';
        stopCaretBlink();
        setTimeout(typeLoop, 700); // Pause before typing again
        return;
      }
    }
    setTimeout(typeLoop, isErasing ? 45 + Math.random()*30 : 70 + Math.random()*40);
  }
  stopCaretBlink();
  typeLoop();
}

// CV Modal logic
const viewCvBtn = document.getElementById('viewCvBtn');
const cvModal = document.getElementById('cvModal');
const cvModalClose = document.getElementById('cvModalClose');

// Carousel elements
const cvImages = cvModal ? cvModal.querySelectorAll('.cv-image') : [];
const cvPrev = document.getElementById('cvPrev');
const cvNext = document.getElementById('cvNext');
const cvIndicators = document.getElementById('cvIndicators');
let cvCurrent = 0;

function showCvSlide(idx) {
  if (!cvImages.length) return;
  cvImages.forEach((img, i) => {
    img.style.display = i === idx ? 'block' : 'none';
  });
  if (cvIndicators) {
    const dots = cvIndicators.querySelectorAll('.indicator');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });
  }
  cvCurrent = idx;
}

if (viewCvBtn && cvModal && cvModalClose) {
  viewCvBtn.addEventListener('click', function(e) {
    e.preventDefault();
    cvModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    showCvSlide(0);
  });
  cvModalClose.addEventListener('click', function() {
    cvModal.classList.remove('active');
    document.body.style.overflow = '';
  });
  cvModal.addEventListener('click', function(e) {
    if (e.target === cvModal) {
      cvModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  if (cvPrev && cvNext) {
    cvPrev.addEventListener('click', function() {
      showCvSlide((cvCurrent - 1 + cvImages.length) % cvImages.length);
    });
    cvNext.addEventListener('click', function() {
      showCvSlide((cvCurrent + 1) % cvImages.length);
    });
  }
  if (cvIndicators) {
    cvIndicators.addEventListener('click', function(e) {
      if (e.target.classList.contains('indicator')) {
        const idx = parseInt(e.target.getAttribute('data-index'));
        showCvSlide(idx);
      }
    });
  }
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (!cvModal.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') {
      showCvSlide((cvCurrent - 1 + cvImages.length) % cvImages.length);
    } else if (e.key === 'ArrowRight') {
      showCvSlide((cvCurrent + 1) % cvImages.length);
    } else if (e.key === 'Escape') {
      cvModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.main-navbar');
  if (navbar) {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

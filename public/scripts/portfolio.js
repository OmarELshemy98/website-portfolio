document.addEventListener('DOMContentLoaded', () => {
  const isArabic = document.documentElement.lang === 'ar'

  // --- Mobile Menu Logic ---
  const menuBtn = document.getElementById('mobileMenuBtn');
  const menuOverlay = document.getElementById('mobileMenuOverlay');
  const menuClose = document.getElementById('mobileMenuClose');
  const mobileLinks = document.querySelectorAll('.mobile-nav-item');

  if (menuBtn && menuOverlay) {
    const toggleMenu = () => {
      menuOverlay.classList.toggle('show-menu');
      menuBtn.classList.toggle('active');
      
      // Toggle body scroll
      if (menuOverlay.classList.contains('show-menu')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    const closeMenu = () => {
      menuOverlay.classList.remove('show-menu');
      menuBtn.classList.remove('active');
      document.body.style.overflow = '';
    };

    menuBtn.addEventListener('click', toggleMenu);
    if (menuClose) menuClose.addEventListener('click', closeMenu);

    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close on outside click
    menuOverlay.addEventListener('click', (e) => {
      if (e.target === menuOverlay) {
        closeMenu();
      }
    });
  }

  // --- Other Pure JS Functionality ---
  // ... (The rest of your portfolio.js code remains the same)

  // Skills Animation Logic
  const handleSkillsAnimation = () => {
    const skillProgressElements = document.querySelectorAll('.skill-progress');
    skillProgressElements.forEach(skill => {
      const level = skill.getAttribute('data-level');
      if (level) {
        skill.style.width = `${level}%`;
      }
    });
  };

  if (document.querySelector('.skills-section')) {
    setTimeout(handleSkillsAnimation, 100);
  }

  // Navbar Scroll Behavior
  const navbar = document.querySelector('.main-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Contact Form Submission (WhatsApp)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      const whatsappNumber = '201026238072';
      const whatsappMessage = isArabic
        ? `مرحبًا، اسمي ${name}. بريدي الإلكتروني ${email}.\n\nرسالتي:\n${message}`
        : `Hello, my name is ${name}. My email is ${email}.\n\nMy message is:\n${message}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // --- Scroll Reveal Animation Logic ---
  const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealElements);
  // Initial check on load
  setTimeout(revealElements, 500);

  // Add reveal classes to sections
  const sections = document.querySelectorAll('section, main, .service-card, .project-item, .experience-item, .skill-category-card');
  sections.forEach((section, index) => {
    if (!section.classList.contains('hero-section')) {
      section.classList.add('reveal');
    }
  });

  // Services Modal & Form Submission (WhatsApp)
  const serviceModal = document.getElementById('serviceModal');
  const serviceRequestForm = document.getElementById('serviceRequestForm');
  const modalServiceTitle = document.getElementById('modalServiceTitle');
  const requestButtons = document.querySelectorAll('.request-button');
  const closeButton = serviceModal ? serviceModal.querySelector('.close-button') : null;

  if (serviceModal && requestButtons.length > 0) {
    requestButtons.forEach(button => {
      button.addEventListener('click', () => {
        const serviceCard = button.closest('section') || button.closest('.service-card');
        if (!serviceCard) return;
        
        const titleEl = serviceCard.querySelector('h2') || serviceCard.querySelector('h3');
        if (!titleEl) return;

        const serviceTitle = titleEl.innerText;
        if (modalServiceTitle) modalServiceTitle.innerText = serviceTitle;
        const hiddenInput = document.getElementById('hiddenServiceType');
        if (hiddenInput) hiddenInput.value = serviceTitle;
        
        serviceModal.style.display = 'flex';
        serviceModal.classList.remove('hidden');
      });
    });

    if (closeButton) {
      closeButton.addEventListener('click', () => {
        serviceModal.style.display = 'none';
        serviceModal.classList.add('hidden');
      });
    }

    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) {
        serviceModal.style.display = 'none';
        serviceModal.classList.add('hidden');
      }
    });
  }

  if (serviceRequestForm) {
    serviceRequestForm.addEventListener('submit', (e) => {
      // Allow Formspree to handle the submission if desired, 
      // but the user wants it professional and sent to email.
      // We will keep the default submission for Formspree.
      // e.preventDefault(); // Commenting this out to allow form submission to action URL
      
      const formData = new FormData(serviceRequestForm);
      const data = Object.fromEntries(formData.entries());
      const serviceTitle = modalServiceTitle ? modalServiceTitle.innerText : (isArabic ? 'خدمة غير محددة' : 'Unknown Service');

      // If you want to ALSO send to WhatsApp, keep the logic below, 
      // otherwise, Formspree handles the email part.
    });
  }
});

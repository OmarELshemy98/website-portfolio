document.addEventListener('DOMContentLoaded', () => {
  const isArabic = document.documentElement.lang === 'ar'

  // Skills Animation Logic
  const handleSkillsAnimation = () => {
    const skillProgressElements = document.querySelectorAll('.skill-progress');
    skillProgressElements.forEach(skill => {
      const level = skill.getAttribute('data-level');
      if (level) {
        skill.style.width = `${level}%`;
      }
    });
  }

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
  const sections = document.querySelectorAll('section, .service-card, .project-item, .experience-item, .skill-category-card');
  sections.forEach((section, index) => {
    if (!section.classList.contains('hero-section')) {
      section.classList.add('reveal');
    }
  });
});

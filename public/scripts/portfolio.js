document.addEventListener('DOMContentLoaded', () => {

  // --- Page Transition & Code Rain Logic ---
  const overlay = document.getElementById('page-transition-overlay');
  const pageNameEl = document.getElementById('transition-page-name');
  const internalLinks = document.querySelectorAll('a[href^="/"]');
  const canvas = document.getElementById('code-rain-canvas');
  let rainAnimationId = null;

  const startCodeRain = () => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '01<>{}';
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0).map(() => Math.random() * -50);

    const draw = () => {
      ctx.fillStyle = 'rgba(26, 55, 77, 0.1)'; // Match overlay bg
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00fff7';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      rainAnimationId = requestAnimationFrame(draw);
    };

    if (rainAnimationId) cancelAnimationFrame(rainAnimationId);
    draw();
  };

  const stopCodeRain = () => {
    if (rainAnimationId) {
      cancelAnimationFrame(rainAnimationId);
      rainAnimationId = null;
    }
  };

  const showOverlay = (pageName) => {
    if (overlay && pageNameEl) {
      pageNameEl.textContent = pageName.replace(/\//g, '') || 'Home';
      overlay.classList.add('show');
      startCodeRain();
    }
  };

  const hideOverlay = () => {
    if (overlay) {
      overlay.classList.remove('show');
      stopCodeRain();
    }
  };

  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === window.location.pathname || href.startsWith('#') || !href.startsWith('/')) {
        return;
      }
      e.preventDefault();
      showOverlay(href);
      setTimeout(() => {
        window.location.href = href;
      }, 600); // Wait for animation
    });
  });

  // --- Mobile Menu Logic ---
  const menuBtn = document.getElementById('mobileMenuBtn');
  const menuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (menuBtn && menuOverlay) {
    const toggleMenu = () => {
      const isOpen = menuOverlay.classList.contains('opacity-100');
      if (isOpen) {
        menuOverlay.classList.remove('opacity-100', 'pointer-events-auto');
        menuOverlay.classList.add('opacity-0', 'pointer-events-none', 'translate-y-full');
        menuBtn.classList.remove('active');
      } else {
        menuOverlay.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-full');
        menuOverlay.classList.add('opacity-100', 'pointer-events-auto');
        menuBtn.classList.add('active');
      }
    };

    menuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuOverlay.classList.remove('opacity-100', 'pointer-events-auto');
        menuOverlay.classList.add('opacity-0', 'pointer-events-none', 'translate-y-full');
        menuBtn.classList.remove('active');
      });
    });
  }

  // Hide overlay on page load (for back/forward navigation)
  window.addEventListener('pageshow', hideOverlay);
  hideOverlay();

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
      const whatsappMessage = `Hello, my name is ${name}. My email is ${email}.\n\nMy message is:\n${message}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // Services Modal & Form Submission (WhatsApp)
  const serviceModal = document.getElementById('serviceModal');
  const serviceRequestForm = document.getElementById('serviceRequestForm');
  const modalServiceTitle = document.getElementById('modalServiceTitle');
  const requestButtons = document.querySelectorAll('.request-button');
  const closeButton = serviceModal ? serviceModal.querySelector('.close-button') : null;

  if (serviceModal && requestButtons.length > 0) {
    requestButtons.forEach(button => {
      button.addEventListener('click', () => {
        const serviceCard = button.closest('.service-card');
        const serviceTitle = serviceCard.querySelector('h3').innerText;
        if (modalServiceTitle) modalServiceTitle.innerText = serviceTitle;
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
      e.preventDefault();
      const formData = new FormData(serviceRequestForm);
      const data = Object.fromEntries(formData.entries());
      const serviceTitle = modalServiceTitle ? modalServiceTitle.innerText : 'Unknown Service';

      const whatsappNumber = '201026238072';
      const whatsappMessage = `*New Service Request*\n\n*Service:* ${serviceTitle}\n*Name:* ${data.clientName}\n*Email:* ${data.clientEmail}\n*Mobile:* ${data.mobileNumber}\n*Payment:* ${data.paymentMethod}\n*Timeframe:* ${data.deliveryTimeframe}\n\n*Description:* ${data.serviceDescription}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      
      serviceModal.style.display = 'none';
      serviceModal.classList.add('hidden');
      serviceRequestForm.reset();
    });
  }
});

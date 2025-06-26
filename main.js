// Portfolio Website Main JS

// --- Multilingual Support ---
const translations = {
  en: {
    nav_home: "Home",
    nav_aboutus: "About us",
    nav_activities: "Activities",
    nav_competitions: "Competitions",
    nav_subscription: "Subscription",
    nav_news: "News",
    nav_login: "Login",
    nav_register: "Register",
    nav_logout: "Logout",
    nav_about: "About",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",
    hero_title: "Hi, I'm Your Name",
    hero_job: "Frontend Developer",
    hero_intro: "I build creative, modern, and performant web experiences.",
    hero_cta: "Contact Me",
    about_title: "About Me",
    about_bio: "Short bio goes here. Passionate about web development and UI/UX design.",
    about_years: "Years Experience",
    about_projects: "Projects",
    projects_title: "Projects",
    project1_title: "Project One",
    project1_desc: "Short description of the project.",
    project1_more: "More",
    skills_title: "Skills",
    skill_html: "HTML5",
    skill_css: "CSS3",
    skill_js: "JavaScript",
    testimonials_title: "Testimonials",
    testimonial1: '"A fantastic developer! Highly recommended."',
    contact_title: "Contact Me",
    contact_send: "Send",
    footer_rights: "All rights reserved.",
    contact_name: "Your Name",
    contact_email: "Your Email",
    contact_message: "Your Message"
  },
  ar: {
    nav_home: "الرئيسية",
    nav_aboutus: "من نحن",
    nav_activities: "الأنشطة",
    nav_competitions: "المسابقات",
    nav_subscription: "الاشتراك",
    nav_news: "الأخبار",
    nav_login: "تسجيل الدخول",
    nav_register: "تسجيل جديد",
    nav_logout: "تسجيل الخروج",
    nav_about: "عنّي",
    nav_projects: "المشاريع",
    nav_skills: "المهارات",
    nav_contact: "تواصل",
    hero_title: "مرحباً، أنا اسمك",
    hero_job: "مطور واجهات أمامية",
    hero_intro: "أبني تجارب ويب إبداعية وحديثة وعالية الأداء.",
    hero_cta: "تواصل معي",
    about_title: "عنّي",
    about_bio: "نبذة قصيرة هنا. شغوف بتطوير الويب وتصميم تجربة المستخدم.",
    about_years: "سنوات الخبرة",
    about_projects: "مشاريع",
    projects_title: "المشاريع",
    project1_title: "المشروع الأول",
    project1_desc: "وصف مختصر للمشروع.",
    project1_more: "المزيد",
    skills_title: "المهارات",
    skill_html: "HTML5",
    skill_css: "CSS3",
    skill_js: "جافاسكريبت",
    testimonials_title: "آراء العملاء",
    testimonial1: '"مطور رائع! أنصح بالتعامل معه."',
    contact_title: "تواصل معي",
    contact_send: "إرسال",
    footer_rights: "جميع الحقوق محفوظة.",
    contact_name: "اسمك",
    contact_email: "بريدك الإلكتروني",
    contact_message: "رسالتك"
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  // Update all data-i18n text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
  // Update lang toggle button
  const langBtn = document.getElementById('lang-toggle');
  langBtn.textContent = lang === 'en' ? 'AR' : 'EN';
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  setLanguage(currentLang === 'en' ? 'ar' : 'en');
});

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

// --- Skills Progress Bars ---
function animateSkills() {
  document.querySelectorAll('.progress-bar').forEach(bar => {
    const percent = bar.getAttribute('data-skill');
    const progress = bar.querySelector('.progress');
    setTimeout(() => {
      progress.style.width = percent + '%';
    }, 400);
  });
}

// --- Fade-in/Slide-up Animations on Scroll ---
function revealOnScroll() {
  const revealEls = document.querySelectorAll('.about-section, .projects-section, .skills-section, .testimonials-section, .contact-section, .project-card, .counter, .skill, blockquote');
  const windowHeight = window.innerHeight;
  revealEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 60) {
      el.style.opacity = 1;
      el.style.transform = 'none';
    } else {
      el.style.opacity = 0;
      el.style.transform = 'translateY(40px)';
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('resize', revealOnScroll);
window.addEventListener('DOMContentLoaded', () => {
  setLanguage('en');
  animateCounters();
  animateSkills();
  revealOnScroll();
  // Set year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
});

// --- Modal Logic for Projects ---
const modal = document.getElementById('project-modal');
const modalContent = modal.querySelector('.modal-body');
const closeModalBtn = modal.querySelector('.close-modal');

document.querySelectorAll('.project-modal-btn').forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    // Example: You can expand this to load different project details
    modalContent.innerHTML = `
      <h3>${translations[currentLang]['project1_title']}</h3>
      <img src="images/design-website-template-using HTML5 -CSS3.jpg" alt="Project 1 screenshot" style="width:100%;border-radius:12px;margin-bottom:1rem;">
      <p>${translations[currentLang]['project1_desc']}</p>
      <a href="#" style="color:var(--primary);text-decoration:underline;">${currentLang === 'en' ? 'View on GitHub' : 'شاهد على جيتهاب'}</a>
    `;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
// Keyboard accessibility for modal
closeModalBtn.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') closeModal(); });

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      card.querySelector('.project-modal-btn').click();
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

// --- Navbar Hamburger and Overlay ---
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');

if (menuToggle && mobileMenu && closeMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    menuToggle.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeMenu.focus();
    trapFocus(mobileMenu);
  });
  closeMenu.addEventListener('click', closeMobileMenu);
  // Close on overlay link click
  mobileMenu.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', closeMobileMenu);
  });
  // Esc to close
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  });
  // Click on backdrop closes menu
  mobileMenu.addEventListener('mousedown', e => {
    if (e.target === mobileMenu) closeMobileMenu();
  });
}
function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  menuToggle.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  menuToggle.focus();
}
// Hamburger icon animation
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
  });
}
// Trap focus inside mobile menu
function trapFocus(container) {
  const focusable = container.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
  if (!focusable.length) return;
  let first = focusable[0];
  let last = focusable[focusable.length - 1];
  function handleTab(e) {
    if (!container.classList.contains('open')) return;
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  }
  container.addEventListener('keydown', handleTab);
}
// Sync language toggle in mobile menu
const langToggle = document.getElementById('lang-toggle');
const mobileLangToggle = document.getElementById('mobile-lang-toggle');
if (langToggle && mobileLangToggle) {
  mobileLangToggle.addEventListener('click', () => {
    langToggle.click();
  });
}
// Logo fallback for missing image
const logoImg = document.querySelector('.logo-img');
if (logoImg) {
  logoImg.onerror = function() {
    this.style.display = 'none';
    const fallback = document.createElement('div');
    fallback.className = 'logo-img-fallback';
    fallback.textContent = 'FD'; // Initials fallback
    fallback.style = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:700;color:#194378;background:#e0e7ef;border-radius:50%';
    this.parentNode.appendChild(fallback);
  };
}
// Add ARIA attributes
if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
if (closeMenu) closeMenu.setAttribute('aria-label', 'Close menu');
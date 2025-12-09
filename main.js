// Global data stores that original functions rely on
let certificateData = {};
let projectData = {};
let allData = {}; // To store the fetched JSON data

// --- NEW: Data Loading and Rendering Functions ---

/**
 * Fetches data from data.json and initializes the application.
 */
async function loadAndInitApp() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        allData = await response.json();
        
        // For now, default to English. Later, you can add a language switcher.
        const langData = allData.en;

        // 1. Populate global data objects for original modal functions
        Object.assign(certificateData, langData.certificates.details);
        Object.assign(projectData, langData.projects.details);

        // 2. Render all dynamic HTML sections
        renderPageHead(langData.meta);
        renderContactInfo(langData.contact);
        renderSkills(langData.skills);
        renderServices(langData.services);
        renderExperience(langData.experience);
        renderCertificates(langData.certificates);
        renderProjects(langData.projects);
        renderServiceModalOptions(langData.serviceModal);

        // 3. Apply all i18n text strings from JSON
        applyTranslations(langData);

        // 4. Initialize all original app logic (event listeners, animations, etc.)
        initializeOriginalAppLogic(langData);

    } catch (error) {
        console.error('Failed to load and initialize app:', error);
        document.body.innerHTML = `<h1 style="color:white; text-align:center; padding-top: 20vh;">Error loading portfolio data. Please check console.</h1>`;
    }
}

/**
 * Populates the <head> tag with meta info
 */
function renderPageHead(metaData) {
    document.title = metaData.title;
    document.querySelector('meta[name="description"]').setAttribute('content', metaData.description);
    document.querySelector('meta[name="keywords"]').setAttribute('content', metaData.keywords);
    document.querySelector('meta[name="author"]').setAttribute('content', metaData.author);
    document.querySelector('meta[property="og:title"]').setAttribute('content', metaData.title);
    document.querySelector('meta[property="og:description"]').setAttribute('content', metaData.description);
    document.querySelector('meta[property="twitter:title"]').setAttribute('content', metaData.title);
    document.querySelector('meta[property="twitter:description"]').setAttribute('content', metaData.description);
}

/**
 * Populates contact info in the About card and Social links
 */
function renderContactInfo(contactData) {
    // About card
    const emailLink = document.getElementById('info-email-link');
    if (emailLink) {
        emailLink.href = `mailto:${contactData.email}`;
        emailLink.textContent = contactData.email;
    }
    const linkedinLink = document.getElementById('info-linkedin-link');
    if (linkedinLink) {
        linkedinLink.href = contactData.linkedin;
        linkedinLink.textContent = contactData.linkedin.replace('https://www.', '');
    }
    const whatsappLink = document.getElementById('info-whatsapp-link');
    if (whatsappLink) {
        whatsappLink.href = contactData.whatsapp;
        whatsappLink.textContent = contactData.whatsapp_number.substring(2); // Show number without country code
    }
    document.getElementById('info-phone').textContent = contactData.phone;
    document.getElementById('info-address1').textContent = contactData.address1;
    document.getElementById('info-address2').textContent = contactData.address2;

    // Social icons
    document.getElementById('social-github').href = contactData.github;
    document.getElementById('social-linkedin').href = contactData.linkedin;
    document.getElementById('social-whatsapp').href = contactData.whatsapp;
    document.getElementById('social-gmail').href = `mailto:${contactData.email}`;
    document.getElementById('social-phone').href = `tel:${contactData.phone}`;
}

/**
 * Applies text content/innerHTML from data object to elements with [data-i18n]
 */
function applyTranslations(langData) {
    // Helper to get nested properties from a string path (e.g., "hero.greeting")
    const getProp = (obj, path) => path.split('.').reduce((acc, part) => acc && acc[part], obj);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = getProp(langData, key);
        if (text) {
            // Use innerHTML to allow for <span> tags in titles
            el.innerHTML = text;
        } else {
            console.warn(`Missing i18n key: ${key}`);
        }
    });

    // Apply placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const text = getProp(langData, key);
        if (text) {
            el.placeholder = text;
        } else {
            console.warn(`Missing i18n placeholder key: ${key}`);
        }
    });
}

/**
 * Renders the skills section from data
 */
function renderSkills(skillsData) {
    const container = document.querySelector('#skills .skills-container');
    if (!container) return;
    container.innerHTML = ''; // Clear existing
    
    skillsData.categories.forEach(category => {
        const categoryEl = document.createElement('div');
        categoryEl.className = 'skills-category';
        
        const itemsHTML = category.items.map(item => `
            <div class="skill-item" data-skill="${item.name}">
                <div class="skill-icon">
                    <img src="${item.icon}" alt="${item.name} Logo" style="width: 44px; height: 44px; object-fit: contain;" loading="lazy">
                </div>
                <div class="skill-info">
                    <h4>${item.name}</h4>
                    <div class="skill-bar">
                        <div class="skill-progress" data-level="${item.level}"></div>
                    </div>
                    <span class="skill-percentage">${item.level}%</span>
                </div>
            </div>
        `).join('');
        
        categoryEl.innerHTML = `
            <h3 class="category-title">${category.title}</h3>
            <div class="skills-grid">${itemsHTML}</div>
        `;
        container.appendChild(categoryEl);
    });
}

/**
 * Renders the services section from data
 */
function renderServices(servicesData) {
    const grid = document.querySelector('#services .services-grid');
    if (!grid) return;
    grid.innerHTML = ''; // Clear existing
    
    grid.innerHTML = servicesData.items.map(service => `
        <div class="service-card" data-service-title="${service.title}">
            <h3 class="text-2xl font-bold mb-3 text-[#00fff7]">${service.title}</h3>
            <p class="text-gray-400 mb-6">${service.description}</p>
            <button class="request-button">Request Service</button>
        </div>
    `).join('');
}

/**
 * Renders the experience section from data
 */
function renderExperience(experienceData) {
    const container = document.querySelector('#experience .experience-container');
    if (!container) return;
    container.innerHTML = ''; // Clear existing

    container.innerHTML = experienceData.items.map(item => `
        <div class="experience-item">
            <div class="experience-header">
                <div class="experience-company">
                    <h3>${item.role}</h3>
                    <h4>${item.company}</h4>
                </div>
                <div class="experience-period">
                    <span class="period">${item.period}</span>
                </div>
            </div>
            <div class="experience-content">
                <ul>
                    ${item.duties.map(duty => `<li>${duty}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
}

/**
 * Renders the certificates section from data
 */
function renderCertificates(certificatesData) {
    const section = document.querySelector('#certificates');
    if (!section) return;
    // Clear existing, but keep the H2 title
    section.querySelectorAll('.certificate-category').forEach(el => el.remove());

    certificatesData.categories.forEach((category, catIndex) => {
        const categoryEl = document.createElement('div');
        categoryEl.className = 'certificate-category';
        
        const itemsHTML = category.items.map((item, itemIndex) => `
            <div class="certificate-card" data-certificate="${item.id}">
                <img src="${item.image}" alt="${item.title} Certificate" loading="lazy" width="350" height="220">
                <div class="certificate-title">${item.title}</div>
                <button class="read-more-btn" style="--animation-order: ${itemIndex}">${'Read More'}</button>
            </div>
        `).join('');
        
        categoryEl.innerHTML = `
            <h3>${category.title}</h3>
            <div class="certificates-list">${itemsHTML}</div>
        `;
        section.appendChild(categoryEl);
    });
}

/**
 * Renders the projects section from data
 */
function renderProjects(projectsData) {
    const list = document.querySelector('#projects .projects-list');
    if (!list) return;
    list.innerHTML = ''; // Clear existing
    
    list.innerHTML = projectsData.items.map((item, index) => `
        <div class="project-card" data-project="${item.id}">
            <div class="project-title">${item.title}</div>
            <div class="project-link"><a href="${item.link}" target="_blank" rel="noopener noreferrer">Live Link: ${item.link.replace('https://', '')}</a></div>
            <button class="read-more-btn" style="--animation-order: ${index}">${'Read More'}</button>
        </div>
    `).join('');
}

/**
 * Populates the dropdowns in the service modal
 */
function renderServiceModalOptions(modalData) {
    const paymentSelect = document.getElementById('paymentMethod');
    if (paymentSelect) {
        paymentSelect.innerHTML = modalData.paymentOptions.map(opt => `<option value="${opt === 'Select an option' ? '' : opt}">${opt}</option>`).join('');
    }
    
    const timeframeSelect = document.getElementById('deliveryTimeframe');
    if (timeframeSelect) {
        timeframeSelect.innerHTML = modalData.timeframeOptions.map(opt => `<option value="${opt === 'Select timeframe (Optional)' ? '' : opt}">${opt}</option>`).join('');
    }
}

// --- End of NEW Data Loading Functions ---


// --- Main App Initialization ---

// This listener starts the app
document.addEventListener('DOMContentLoaded', loadAndInitApp);


/**
 * This function contains ALL of the original JavaScript logic from your main.js file.
 * It is now called *after* the data.json is fetched and the page is rendered.
 */
function initializeOriginalAppLogic(langData) {

    // --- Service Modal Logic ---
    const serviceCards = document.querySelectorAll('.service-card');
    const serviceModal = document.getElementById('serviceModal');
    const closeButton = serviceModal.querySelector('.close-button');
    const serviceRequestForm = document.getElementById('serviceRequestForm');
    const modalServiceTitle = document.getElementById('modalServiceTitle');
    const formMessage = document.getElementById('formMessage');

    let currentService = ''; // To store the title of the service being requested

    serviceCards.forEach(card => {
        card.querySelector('.request-button').addEventListener('click', () => {
            currentService = card.dataset.serviceTitle;
            // The <h2> in the modal has an ID for its title part. We need to set the text content
            // of the *parent* <h2> while keeping the span's structure.
            // Let's find the h2 itself, which has the data-i18n attribute
            const modalTitleH2 = document.querySelector('[data-i18n="serviceModal.title"]');
            if (modalTitleH2) {
                 // Re-create the innerHTML using the service title
                modalTitleH2.innerHTML = `Request <span id="modalServiceTitle" class="text-[#00fff7]">${currentService}</span>`;
            }

            serviceModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling background
            formMessage.classList.add('hidden'); // Hide previous messages
            serviceRequestForm.reset(); // Clear form fields
        });
    });

    closeButton.addEventListener('click', () => {
        serviceModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });

    serviceModal.addEventListener('click', (e) => {
        if (e.target === serviceModal) {
            serviceModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    serviceRequestForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const clientName = document.getElementById('clientName').value.trim();
        const clientEmail = document.getElementById('clientEmail').value.trim();
        const serviceDescription = document.getElementById('serviceDescription').value.trim();
        const mobileNumber = document.getElementById('mobileNumber').value.trim();
        const paymentMethod = document.getElementById('paymentMethod').value;
        const deliveryTimeframe = document.getElementById('deliveryTimeframe').value || 'Not specified'; 
        
        const fileInput = document.getElementById('fileUpload');
        const file = fileInput.files[0];
        
        // Use strings from langData
        let fileInfo = file 
            ? langData.serviceModal.fileInfo
                .replace('{fileName}', file.name)
                .replace('{fileSize}', (file.size / 1024).toFixed(2))
            : langData.serviceModal.noFile;


        if (!clientName || !clientEmail || !serviceDescription || !mobileNumber || !paymentMethod) {
            displayMessage(langData.serviceModal.validationError, 'error');
            return;
        }

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
        `.trim(); 

        const whatsappNumber = langData.contact.whatsapp_number; // Use data from JSON

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappUrl, '_blank');

        displayMessage(langData.serviceModal.successMessage, 'success');
        serviceRequestForm.reset(); 
        setTimeout(() => serviceModal.classList.remove('active'), 5000); 
        document.body.style.overflow = ''; 
    });

    function displayMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `message mt-4 ${type === 'success' ? 'success-message' : 'error-message'}`;
        formMessage.classList.remove('hidden');
    }

    // --- Performance Monitoring & Lazy Loading ---
    const startTime = performance.now();
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

    // Observe all images with data-src attribute (original logic)
    // We modify this to re-run *after* rendering
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
    
    // Log performance (original logic)
    const loadTime = performance.now() - startTime;
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
    

    // --- Landing Overlay Hide/Show Animation ---
    var overlay = document.getElementById('landing-overlay');
    if (overlay) {
      overlay.classList.add('landing-show');
      overlay.classList.remove('landing-hide');
      setTimeout(function() {
        overlay.classList.remove('landing-show');
        overlay.classList.add('landing-hide');
        setTimeout(function() { overlay.style.display = 'none'; }, 700);
      }, 5000);
    }

    // --- Code Rain Animation ---
    // We wrap the original logic in a function that accepts the data
    function initCodeRain(codeSnippets) {
      var canvas = document.getElementById('code-rain-canvas');
      if (!canvas) return;
      var ctx = canvas.getContext('2d');
      var w = window.innerWidth;
      var h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;

      // Use the snippets passed from langData
      if (!codeSnippets || codeSnippets.length === 0) {
          console.warn('Code rain snippets not found in data.json');
          codeSnippets = ['// No data']; // Fallback
      }

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

      window.addEventListener('resize', function() {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
        columns = Math.floor(w / fontSize);
        drops = [];
        for (var i = 0; i < columns; i++) drops[i] = Math.random() * -h;
      });

      var observer = new MutationObserver(function() {
        var overlay = document.getElementById('landing-overlay');
        if (overlay && overlay.style.display === 'none') {
          cancelAnimationFrame(animationId);
        }
      });
      // Check if overlay exists before observing
      if (document.getElementById('landing-overlay')) {
        observer.observe(document.getElementById('landing-overlay'), { attributes: true, attributeFilter: ['style'] });
      }
    }
    // Call the function with data from JSON
    initCodeRain(langData.codeRainSnippets);


    // --- Certificate Modal System ---
    // (The `certificateData` object is already populated globally)
    function openCertificateModal(certificateId) {
      const certificate = certificateData[certificateId]; // Reads from global
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
          
          const modalClose = document.getElementById('modalClose');
          if (modalClose) modalClose.focus();
        }
      }
    }

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
            
            skillItem.classList.add('fade-in');
            
            setTimeout(() => {
              skillProgress.style.width = skillLevel + '%';
            }, 300);
            
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
          tag.style.transform = 'scale(0.95)';
          setTimeout(() => {
            tag.style.transform = '';
          }, 150);
        });
        
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
        item.addEventListener('click', () => {
          const skillName = item.getAttribute('data-skill');
          const skillLevel = item.querySelector('.skill-progress').getAttribute('data-level');
          showSkillNotification(skillName, skillLevel);
        });
      });
    }

    function showSkillNotification(skillName, level) {
      const existingNotification = document.querySelector('.skill-notification');
      if (existingNotification) {
        existingNotification.remove();
      }
      
      const notification = document.createElement('div');
      notification.className = 'skill-notification';
      notification.innerHTML = `
        <div class="notification-content">
          <h4>${skillName}</h4>
          <p>Proficiency Level: ${level}%</p>
        </div>
      `;
      
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
      
      setTimeout(() => {
        notification.style.transform = 'translateX(0)';
      }, 100);
      
      setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
          notification.remove();
        }, 300);
      }, 3000);
    }

    // --- Initialize Skills and Counters (Original Logic) ---
    initSkillsAnimation();
    initSkillTags();
    enhanceSkillsSection();
    animateCounters();
    
    // --- Navbar Animation ---
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
    
    // --- Footer Year ---
    document.getElementById('year').textContent = new Date().getFullYear();

    // --- Inject Hero Code Background ---
    function injectHeroCode(codeSnippets) {
        const codeBg = document.querySelector('.code-bg');
        if (codeBg) {
            if (!codeSnippets || codeSnippets.length === 0) {
                console.warn('Hero code snippets not found in data.json');
                codeSnippets = ['// No data']; // Fallback
            }
            let layers = '';
            for (let i = 0; i < 3; i++) {
                const snippet = codeSnippets.slice(i * 3, (i + 1) * 3).join('\n\n');
                const speed = 10 + i * 4;
                const opacity = 0.18 + i * 0.08;
                const top = Math.random() * 40;
                layers += `<div class="code-lines" style="animation-duration:${speed}s;opacity:${opacity};top:${top}%;">${snippet}</div>`;
            }
            codeBg.innerHTML = layers;
        }
    }
    // Call the function with data from JSON
    injectHeroCode(langData.heroCodeSnippets);


    // --- Certificate Modal Event Listeners (Original Logic) ---
    // This now works because renderCertificates() created the cards
    const certificateCards = document.querySelectorAll('.certificate-card');
    
    certificateCards.forEach((card, index) => {
      const readMoreBtn = card.querySelector('.read-more-btn');
      if (readMoreBtn) {
        readMoreBtn.style.setProperty('--animation-order', index);
      }
      
      card.addEventListener('click', (e) => {
        if (e.target.classList.contains('read-more-btn')) {
          return;
        }
        e.preventDefault();
        const certificateId = card.getAttribute('data-certificate');
        openCertificateModal(certificateId);
      });
    });

    const readMoreButtons = document.querySelectorAll('.certificate-card .read-more-btn');
    
    readMoreButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); 
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

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && certificateModal && certificateModal.classList.contains('active')) {
        closeCertificateModal();
      }
    });

    // --- Project Modal System ---
    // (The `projectData` object is already populated globally)
    const projectModal = document.getElementById('projectModal');
    const projectModalClose = document.getElementById('projectModalClose');
    const projectModalTitle = document.getElementById('projectModalTitle');
    const projectModalDescription = document.getElementById('projectModalDescription');
    const projectModalTech = document.getElementById('projectModalTech');
    const projectModalLink = document.getElementById('projectModalLink');

    function openProjectModal(projectId) {
      const project = projectData[projectId]; // Reads from global
      if (!project) return;

      projectModalTitle.textContent = project.title;
      projectModalDescription.textContent = project.description;
      projectModalTech.innerHTML = `<strong>Tech Stack:</strong> ${project.tech}`;
      projectModalLink.innerHTML = `<a href="${project.link}" target="_blank" rel="noopener">Visit Project → ${project.link}</a>`;

      projectModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      projectModalClose.focus();
    }

    function closeProjectModal() {
      projectModal.classList.remove('active');
      document.body.style.overflow = '';
    }

    // Event listeners for project cards (Original Logic)
    // This now works because renderProjects() created the cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
      const projectId = card.dataset.project;
      const readMoreBtn = card.querySelector('.read-more-btn');
      
      if (readMoreBtn) {
        readMoreBtn.style.setProperty('--animation-order', index);
      }
      
      card.addEventListener('click', (e) => {
        if (e.target === readMoreBtn) return;
        openProjectModal(projectId);
      });
      
      if (readMoreBtn) {
        readMoreBtn.addEventListener('click', (e) => {
          e.stopPropagation(); 
          openProjectModal(projectId);
        });
      }
    });
    
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
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeProjectModal();
      }
    });

    // --- Accessibility: Focus outline ---
    document.body.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
      }
    });
    document.body.addEventListener('mousedown', function() {
      document.body.classList.remove('user-is-tabbing');
    });

    // --- Burger Menu Functionality ---
    const burger = document.getElementById('burgerMenu');
    const mobileNav = document.getElementById('mobileNav');
    if (burger && mobileNav) {
      burger.addEventListener('click', function (e) {
        e.stopPropagation();
        const isOpen = burger.classList.toggle('open');
        mobileNav.classList.toggle('open', isOpen);
        burger.setAttribute('aria-expanded', isOpen);
      });
      mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          burger.classList.remove('open');
          mobileNav.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
        });
      });
      document.addEventListener('click', function (e) {
        if (mobileNav.classList.contains('open') && !mobileNav.contains(e.target) && !burger.contains(e.target)) {
          burger.classList.remove('open');
          mobileNav.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // --- Navbar Role Animation ---
    // (This function seems redundant as it's also set with setTimeout above, but keeping original logic)
    function animateNavbarRole() {
      const roleEl = document.querySelector('.logo-role');
      if (!roleEl) return;
      const text = 'Front end developer';
      let i = 0;
      let isErasing = false;
      let caretBlinkInterval;

      roleEl.textContent = '';

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
            setTimeout(typeLoop, 1200); 
            return;
          }
        } else {
          roleEl.textContent = text.slice(0, i);
          i--;
          if (i < 0) {
            isErasing = false;
            roleEl.textContent = '';
            stopCaretBlink();
            setTimeout(typeLoop, 700); 
            return;
          }
        }
        setTimeout(typeLoop, isErasing ? 45 + Math.random()*30 : 70 + Math.random()*40);
      }
      stopCaretBlink();
      // typeLoop(); // Commented out as the other navbar animation is running
    }
    // animateNavbarRole(); // Commented out

    // --- CV Modal logic ---
    const viewCvBtn = document.getElementById('viewCvBtn');
    const cvModal = document.getElementById('cvModal');
    const cvModalClose = document.getElementById('cvModalClose');

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

    // --- Navbar Scroll ---
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

}
// --- End of Original App Logic Wrapper ---
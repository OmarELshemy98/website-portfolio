(function() {
  function initCertificatesModal() {
    console.log('[CertModal] Initializing');
    
    document.addEventListener('click', function(e) {
      // 1. Handle "Read More" button click
      const readMoreBtn = e.target.closest('.read-more-btn');
      if (readMoreBtn) {
        openCertificateModal(readMoreBtn);
        return;
      }

      // 2. Handle Modal Close button click
      const closeBtn = e.target.closest('#certificateModalClose');
      if (closeBtn) {
        closeCertificateModal();
        return;
      }

      // 3. Handle Backdrop click
      const modal = document.getElementById('certificateModal');
      if (modal && e.target === modal) {
        closeCertificateModal();
        return;
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeCertificateModal();
    });
  }

  function openCertificateModal(btn) {
    const modal = document.getElementById('certificateModal');
    if (!modal) return;
    
    const modalImg = document.getElementById('certificateModalImage');
    const modalTitle = document.getElementById('certificateModalTitle');
    const modalDesc = document.getElementById('certificateModalDescription');
    const modalOrg = document.getElementById('certificateModalOrg');
    const modalDate = document.getElementById('certificateModalDate');
    const modalId = document.getElementById('certificateModalId');
    const modalUrl = document.getElementById('certificateModalUrl');
    
    const orgCont = document.getElementById('certificateModalOrgContainer');
    const dateCont = document.getElementById('certificateModalDateContainer');
    const idCont = document.getElementById('certificateModalIdContainer');
    const urlCont = document.getElementById('certificateModalUrlContainer');

    // Extract data
    const title = btn.getAttribute('data-cert-title') || '';
    const image = btn.getAttribute('data-cert-image') || '';
    const desc = btn.getAttribute('data-cert-desc') || '';
    const org = btn.getAttribute('data-cert-org') || '';
    const date = btn.getAttribute('data-cert-date') || '';
    const idVal = btn.getAttribute('data-cert-id-val') || '';
    const url = btn.getAttribute('data-cert-url') || '';

    // Populate
    if (modalImg) modalImg.src = image;
    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = desc;
    
    if (modalOrg) {
      modalOrg.textContent = org;
      if (orgCont) orgCont.style.display = org ? 'block' : 'none';
    }

    if (modalDate) {
      modalDate.textContent = date;
      if (dateCont) dateCont.style.display = date ? 'block' : 'none';
    }
    
    if (modalId) {
      modalId.textContent = idVal;
      if (idCont) idCont.style.display = idVal ? 'block' : 'none';
    }
    
    if (modalUrl) {
      modalUrl.href = url;
      if (urlCont) urlCont.style.display = url ? 'block' : 'none';
    }

    // Show
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (!window._certModalInitialized) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initCertificatesModal);
    } else {
      initCertificatesModal();
    }
    window._certModalInitialized = true;
  }
})();

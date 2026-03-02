(function() {
  function initCertificatesModal() {
    // We use a general click listener on the document to handle all certificate actions
    // This is more robust in Next.js when pages change via client-side routing
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

      // 3. Handle Backdrop click (click outside modal content)
      const modal = document.getElementById('certificateModal');
      if (modal && e.target === modal) {
        closeCertificateModal();
        return;
      }
    });

    // Handle Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeCertificateModal();
    });
  }

  function openCertificateModal(btn) {
    const modal = document.getElementById('certificateModal');
    if (!modal) return;
    
    const modalContent = modal.querySelector('.relative');
    const modalImg = document.getElementById('certificateModalImage');
    const modalTitle = document.getElementById('certificateModalTitle');
    const modalDesc = document.getElementById('certificateModalDesc');
    const modalDate = document.getElementById('certificateModalDate');
    const modalId = document.getElementById('certificateModalId');
    const modalUrl = document.getElementById('certificateModalUrl');
    const modalUrlContainer = document.getElementById('certificateModalUrlContainer');

    // Extract data from button
    const title = btn.getAttribute('data-cert-title');
    const image = btn.getAttribute('data-cert-image');
    const desc = btn.getAttribute('data-cert-desc');
    const date = btn.getAttribute('data-cert-date');
    const idVal = btn.getAttribute('data-cert-id-val');
    const url = btn.getAttribute('data-cert-url');

    // Update Modal content
    if (modalImg) modalImg.src = image;
    if (modalTitle) modalTitle.textContent = title;
    if (modalDesc) modalDesc.textContent = desc;
    if (modalDate) modalDate.textContent = date;
    if (modalId) modalId.textContent = idVal;
    
    if (modalUrl && url) {
      modalUrl.href = url;
      modalUrl.textContent = url;
      if (modalUrlContainer) modalUrlContainer.style.display = 'block';
    } else if (modalUrlContainer) {
      modalUrlContainer.style.display = 'none';
    }

    // Show modal
    modal.classList.remove('opacity-0', 'pointer-events-none');
    if (modalContent) {
      modalContent.classList.remove('scale-95');
      modalContent.classList.add('scale-100');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    if (!modal) return;
    
    const modalContent = modal.querySelector('.relative');
    modal.classList.add('opacity-0', 'pointer-events-none');
    if (modalContent) {
      modalContent.classList.remove('scale-100');
      modalContent.classList.add('scale-95');
    }
    document.body.style.overflow = '';
  }

  // Initialize if not already initialized
  if (!window._certModalInitialized) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initCertificatesModal);
    } else {
      initCertificatesModal();
    }
    window._certModalInitialized = true;
  }
})();

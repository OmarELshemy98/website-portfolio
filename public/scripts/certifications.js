function initCertificatesModal() {
  var cards = document.querySelectorAll('.certificate-card')
  var modal = document.getElementById('certificateModal')
  var modalImg = document.getElementById('certificateModalImage')
  var modalClose = document.getElementById('certificateModalClose')
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      var img = card.querySelector('.certificate-image')
      if (!img || !modal || !modalImg) return
      modalImg.src = img.src
      modalImg.alt = img.alt || ''
      modal.classList.add('active')
      document.body.style.overflow = 'hidden'
    })
  })
  if (modalClose) {
    modalClose.addEventListener('click', function () {
      modal.classList.remove('active')
      document.body.style.overflow = ''
    })
  }
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('active')
        document.body.style.overflow = ''
      }
    })
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCertificatesModal)
} else {
  initCertificatesModal()
}

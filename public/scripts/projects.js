document.addEventListener('DOMContentLoaded', function () {
  var carousels = document.querySelectorAll('.project-carousel')
  carousels.forEach(function (carousel) {
    var track = carousel.querySelector('.carousel-track')
    var images = track ? track.querySelectorAll('.carousel-image') : []
    var prev = carousel.querySelector('.carousel-prev')
    var next = carousel.querySelector('.carousel-next')
    var indicators = carousel.querySelector('.carousel-indicators')
    var index = 0
    function update() {
      images.forEach(function (img, i) {
        img.style.display = i === index ? 'block' : 'none'
      })
      if (indicators) {
        indicators.innerHTML = ''
        images.forEach(function (_, i) {
          var dot = document.createElement('span')
          dot.className = 'indicator' + (i === index ? ' active' : '')
          dot.setAttribute('data-index', String(i))
          indicators.appendChild(dot)
        })
      }
    }
    if (prev) {
      prev.addEventListener('click', function () {
        if (!images.length) return
        index = (index - 1 + images.length) % images.length
        update()
      })
    }
    if (next) {
      next.addEventListener('click', function () {
        if (!images.length) return
        index = (index + 1) % images.length
        update()
      })
    }
    if (indicators) {
      indicators.addEventListener('click', function (e) {
        var t = e.target
        if (t && t.classList.contains('indicator')) {
          var i = Number(t.getAttribute('data-index') || '0')
          index = i
          update()
        }
      })
    }
    update()
  })
})

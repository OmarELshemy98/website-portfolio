function initCodeRain() {
  const canvas = document.getElementById('code-rain-canvas')
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // Set canvas size
  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resize()
  window.addEventListener('resize', resize)

  // Characters to rain
  const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ<>[]{}!@#$%^&*()_+'
  const charArray = chars.split('')
  
  const fontSize = 16
  const columns = canvas.width / fontSize
  
  // Drops for each column
  const drops = []
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100 // Random start positions
  }

  function draw() {
    // Semi-transparent background to create trail effect
    ctx.fillStyle = 'rgba(24, 31, 42, 0.05)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = '#00fff7' // Neon color
    ctx.font = fontSize + 'px monospace'

    for (let i = 0; i < drops.length; i++) {
      const text = charArray[Math.floor(Math.random() * charArray.length)]
      ctx.fillText(text, i * fontSize, drops[i] * fontSize)

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0
      }
      drops[i]++
    }
    requestAnimationFrame(draw)
  }

  draw()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCodeRain)
} else {
  initCodeRain()
}

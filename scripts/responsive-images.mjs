import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SRC = path.join(ROOT, 'public', 'images')
const OUT = path.join(SRC, 'responsive')

const WIDTH_STEPS = [240, 320, 420, 640, 820, 1024, 1280]
const ASSETS = [
  { name: 'profile-photo', src: path.join(SRC, 'profile-photo.png') },
  { name: 'logo', src: path.join(SRC, 'logo.png') },
  { name: 'background5', src: path.join(SRC, 'background5.jpg') },
]

fs.mkdirSync(OUT, { recursive: true })

async function processImage({ name, src }) {
  if (!fs.existsSync(src)) {
    console.warn(`⚠ Source not found: ${src}`)
    return
  }
  const meta = await sharp(src).metadata()
  const origW = meta.width || 1000
  console.log(`\nProcessing: ${name} (${origW}px wide)`)

  const usedSteps = WIDTH_STEPS.filter(w => w <= origW)
  if (usedSteps[usedSteps.length - 1] !== origW) usedSteps.push(origW)

  for (const w of usedSteps) {
    const baseName = `${name}-${w}`
    const webpOut = path.join(OUT, `${baseName}.webp`)
    const pngOut = path.join(OUT, `${baseName}.png`)

    const pipeline = sharp(src).resize(w, null, { withoutEnlargement: true, fit: 'inside' })

    await pipeline.clone().webp({ quality: 72, effort: 6, alphaQuality: 80 }).toFile(webpOut)
    if (name !== 'background5') {
      await pipeline.clone().png({ compressionLevel: 9, quality: 75, palette: true }).toFile(pngOut)
    }

    const webpKb = (fs.statSync(webpOut).size / 1024).toFixed(1)
    console.log(`  ✔ ${baseName}.webp → ${webpKb} KiB (${w}px)`)
  }
}

const start = Date.now()
for (const a of ASSETS) await processImage(a)
console.log(`\n✅ Done in ${Date.now() - start}ms → ${OUT}`)

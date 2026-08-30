import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SRC_LOGO = path.join(ROOT, 'public', 'images', 'logo.png')
const OUT_DIR = path.join(ROOT, 'public', 'images', 'responsive')

const SIZES = [96, 128]

for (const w of SIZES) {
  const baseName = `logo-${w}`
  const webpOut = path.join(OUT_DIR, `${baseName}.webp`)
  const pngOut = path.join(OUT_DIR, `${baseName}.png`)

  const pipeline = sharp(SRC_LOGO).resize(w, null, { withoutEnlargement: true, fit: 'inside' })

  await pipeline.clone().webp({ quality: 82, effort: 6, alphaQuality: 85 }).toFile(webpOut)
  await pipeline.clone().png({ compressionLevel: 9, quality: 80, palette: true }).toFile(pngOut)

  const webpKb = (fs.statSync(webpOut).size / 1024).toFixed(1)
  const pngKb = (fs.statSync(pngOut).size / 1024).toFixed(1)
  console.log(`  ✔ ${baseName}.webp → ${webpKb} KiB (${w}px)`)
  console.log(`  ✔ ${baseName}.png → ${pngKb} KiB (${w}px)`)
}

console.log('\n✅ Small logo assets generated')

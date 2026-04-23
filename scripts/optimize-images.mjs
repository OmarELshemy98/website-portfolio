import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, '..', 'public', 'images')

/** @type {Array<{ input: string; output: string; quality?: number }>} */
const conversions = [
  { input: 'profile-photo.jpg', output: 'profile-photo.webp', quality: 88 },
  { input: 'logo.png', output: 'logo.webp', quality: 90 },
  { input: 'background5.jpg', output: 'background5.webp', quality: 82 }
]

async function main() {
  if (!fs.existsSync(imagesDir)) {
    console.warn('optimize-images: public/images not found, skipping.')
    return
  }

  const metaOut = {}

  for (const { input, output, quality } of conversions) {
    const inPath = path.join(imagesDir, input)
    const outPath = path.join(imagesDir, output)
    if (!fs.existsSync(inPath)) {
      console.warn(`optimize-images: missing ${input}, skip.`)
      continue
    }
    const pipeline = sharp(inPath)
    const meta = await pipeline.metadata()
    await pipeline.webp({ quality: quality ?? 85 }).toFile(outPath)
    metaOut[input] = { width: meta.width, height: meta.height, webp: `/images/${output}` }
    console.log(`Wrote ${output} (${meta.width}x${meta.height})`)
  }

  const dataDir = path.join(__dirname, '..', 'data')
  fs.mkdirSync(dataDir, { recursive: true })
  const metaPath = path.join(dataDir, 'image-meta.json')
  fs.writeFileSync(metaPath, JSON.stringify(metaOut, null, 2), 'utf8')
  console.log('Wrote data/image-meta.json')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

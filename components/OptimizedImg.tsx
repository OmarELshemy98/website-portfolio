type Props = {
  webpSrc: string
  fallbackSrc: string
  alt: string
  className?: string
  width: number
  height: number
  sizes?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
  decoding?: 'async' | 'auto' | 'sync'
  responsiveBase?: string | null
  aspectRatio?: string
}

const WIDTH_STEPS = [240, 320, 420, 640, 820, 1024, 1280]

function buildResponsiveSrcSet(base: string | null | undefined, ext: string, maxW: number) {
  if (!base) return null
  const parts: string[] = []
  for (const w of WIDTH_STEPS) {
    if (w <= Math.max(maxW, 240)) parts.push(`${base}-${w}.${ext} ${w}w`)
  }
  if (!parts.length) return null
  return parts.join(', ')
}

export default function OptimizedImg({
  webpSrc,
  fallbackSrc,
  alt,
  className,
  width,
  height,
  sizes = '100vw',
  loading = 'lazy',
  fetchPriority,
  decoding = 'async',
  responsiveBase,
  aspectRatio,
}: Props) {
  const maxDim = Math.max(width, height)
  const intrinsicW = Math.max(width, 240)
  const webpSet = buildResponsiveSrcSet(responsiveBase, 'webp', intrinsicW)
  const pngSet = buildResponsiveSrcSet(responsiveBase, 'png', intrinsicW)

  return (
    <picture style={{ aspectRatio: aspectRatio || `${width} / ${height}`, display: 'block' }}>
      {webpSet ? (
        <source srcSet={webpSet} sizes={sizes} type="image/webp" />
      ) : (
        <source srcSet={webpSrc} sizes={sizes} type="image/webp" />
      )}
      <img
        src={fallbackSrc}
        srcSet={pngSet || undefined}
        sizes={pngSet ? sizes : undefined}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        {...(fetchPriority ? { fetchpriority: fetchPriority } : {})}
        decoding={decoding}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </picture>
  )
}

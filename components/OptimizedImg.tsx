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
  intrinsicWidth?: number
}

const buildSrcSet = (src: string, baseW: number, steps: number[]) =>
  steps
    .filter(w => w <= Math.max(baseW, 300))
    .map(w => `${src} ${w}w`)
    .join(', ')

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
  intrinsicWidth
}: Props) {
  const effectiveW = intrinsicWidth || width
  const widthSteps = [120, 150, 240, 280, 320, 420, 600, 800, 1024, 1280]
  const webpSet = buildSrcSet(webpSrc, effectiveW, widthSteps)
  const pngSet = buildSrcSet(fallbackSrc, effectiveW, widthSteps)

  return (
    <picture>
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
      />
    </picture>
  )
}

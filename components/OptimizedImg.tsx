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
}

export default function OptimizedImg({
  webpSrc,
  fallbackSrc,
  alt,
  className,
  width,
  height,
  sizes,
  loading = 'lazy',
  fetchPriority,
  decoding = 'async'
}: Props) {
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        width={width}
        height={height}
        sizes={sizes}
        loading={loading}
        {...(fetchPriority ? { fetchPriority } : {})}
        decoding={decoding}
      />
    </picture>
  )
}

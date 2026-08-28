import Link from 'next/link'
import OptimizedImg from '@/components/OptimizedImg'
import imageMeta from '@/data/image-meta.json'

const logoMeta = imageMeta['logo.png'] as { width: number; height: number; webp: string }

export default function Logo() {
  return (
    <Link href="/" className="nav-logo-wrapper">
      <div className="logo-circle">
        <OptimizedImg
          webpSrc="/images/responsive/logo-240.webp"
          fallbackSrc="/images/responsive/logo-240.png"
          responsiveBase="/images/responsive/logo"
          alt="Omar Elshemy Logo"
          className="logo-img"
          width={64}
          height={66}
          sizes="48px"
          loading="eager"
          fetchPriority="low"
          aspectRatio="64 / 66"
        />
        <div className="logo-glow"></div>
      </div>
    </Link>
  )
}

import Link from 'next/link'
import OptimizedImg from '@/components/OptimizedImg'
import imageMeta from '@/data/image-meta.json'

const logoMeta = imageMeta['logo.png'] as { width: number; height: number; webp: string }

export default function Logo() {
  return (
    <Link href="/" className="nav-logo-wrapper">
      <div className="logo-circle">
        <OptimizedImg
          webpSrc={logoMeta.webp}
          fallbackSrc="/images/logo.png"
          alt="Omar Elshemy Logo"
          className="logo-img"
          width={logoMeta.width}
          height={logoMeta.height}
          sizes="48px"
          loading="eager"
          fetchPriority="low"
        />
        <div className="logo-glow"></div>
      </div>
    </Link>
  )
}

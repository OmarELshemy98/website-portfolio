import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="nav-logo-wrapper">
      <div className="logo-circle">
        <picture>
          <source srcSet="/images/responsive/logo-240.webp 1x, /images/responsive/logo-253.webp 2x" type="image/webp" />
          <source srcSet="/images/responsive/logo-240.png 1x, /images/responsive/logo-253.png 2x" type="image/png" />
          <Image
            src="/images/responsive/logo-240.webp"
            alt="Omar Elshemy Logo"
            className="logo-img"
            width={64}
            height={66}
            sizes="48px"
            loading="eager"
            fetchPriority="low"
            quality={80}
            style={{ width: '100%', height: '100%' }}
          />
        </picture>
        <div className="logo-glow"></div>
      </div>
    </Link>
  )
}

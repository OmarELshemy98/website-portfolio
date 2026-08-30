import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="nav-logo-wrapper">
      <div className="logo-circle">
        <picture>
          <source
            srcSet="/images/responsive/logo-240.webp 240w, /images/responsive/logo-253.webp 253w"
            sizes="(max-width: 768px) 57px, (max-width: 1024px) 47px, 62px"
            type="image/webp"
          />
          <source
            srcSet="/images/responsive/logo-240.png 240w, /images/responsive/logo-253.png 253w"
            sizes="(max-width: 768px) 57px, (max-width: 1024px) 47px, 62px"
            type="image/png"
          />
          <Image
            src="/images/responsive/logo-240.webp"
            alt="Omar Elshemy Logo"
            className="logo-img"
            width={62}
            height={64}
            sizes="(max-width: 768px) 57px, (max-width: 1024px) 47px, 62px"
            loading="eager"
            fetchPriority="low"
            quality={80}
            style={{ width: '100%', height: '100%', aspectRatio: '62 / 64' }}
          />
        </picture>
        <div className="logo-glow"></div>
      </div>
    </Link>
  )
}

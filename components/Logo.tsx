import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="nav-logo-wrapper">
      <div className="logo-circle">
        <img 
          src="/images/logo.png" 
          alt="Omar Elshemy Logo" 
          className="logo-img"
        />
        <div className="logo-glow"></div>
      </div>
    </Link>
  )
}

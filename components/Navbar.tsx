import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="main-navbar dark-navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-inner">
        <div className="logo-text">
          <span className="logo-role">Front end developer</span><br />
          <span className="logo-name">Omar Elshemy</span>
        </div>
        <ul className="nav-links">
          <li><Link href="/" className="active">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/certifications">Certificates</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

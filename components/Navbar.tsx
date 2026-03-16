import Link from 'next/link'
import Logo from './Logo'

export default function Navbar() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/services', label: 'Services' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/certifications', label: 'Certificates' },
    { href: '/contact', label: 'Contact' },
  ]

  const leftLinks = navLinks.slice(0, 4)
  const rightLinks = navLinks.slice(4)

  return (
    <header className="navbar-container">
      <nav className="main-navbar" role="navigation" aria-label="Main Navigation">
        <div className="navbar-inner px-4 relative mx-auto">
          
          {/* --- MOBILE LAYOUT --- */}
          <div className="lg:hidden flex-1"></div>
          
          <div className="lg:hidden flex justify-center flex-1">
            <Logo />
          </div>

          <div className="lg:hidden flex justify-end flex-1">
            <button 
              id="mobileMenuBtn"
              className="mobile-menu-btn"
              aria-label="Toggle Menu"
            >
              <div className="menu-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>

          {/* --- DESKTOP LAYOUT --- */}
          <ul className="nav-links left hidden lg:flex">
            {leftLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="nav-item">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="logo-container hidden lg:flex">
            <Logo />
          </div>

          <ul className="nav-links right hidden lg:flex">
            {rightLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="nav-item">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Overlay */}
          <div id="mobileMenuOverlay" className="mobile-overlay">
            <div id="mobileMenuClose" className="close-icon">&times;</div>
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="mobile-nav-item">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

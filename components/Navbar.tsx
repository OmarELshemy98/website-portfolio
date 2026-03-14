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
    <nav className="main-navbar dark-navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-inner flex items-center justify-between px-4 md:px-12 relative h-full max-w-[1400px] mx-auto">
        
        {/* --- MOBILE LAYOUT (3 Columns) --- */}
        <div className="lg:hidden flex-1"></div> {/* Left Placeholder */}
        
        <div className="lg:hidden flex justify-center flex-1">
          <Logo />
        </div>

        <div className="lg:hidden flex justify-end flex-1">
          <button 
            id="mobileMenuBtn"
            className="text-white p-2 focus:outline-none z-50 mobile-menu-btn"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
              <span className="line w-full h-0.5 bg-neon transition-all duration-300"></span>
              <span className="line w-full h-0.5 bg-neon transition-all duration-300"></span>
              <span className="line w-full h-0.5 bg-neon transition-all duration-300"></span>
            </div>
          </button>
        </div>

        {/* --- DESKTOP LAYOUT --- */}
        {/* Left Links (Desktop) */}
        <ul className="nav-links hidden lg:flex flex-1 justify-end gap-8 mr-10">
          {leftLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className="relative text-sm xl:text-base hover:text-neon transition-colors duration-300 text-white/80"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Center Logo (Desktop) */}
        <div className="hidden lg:flex items-center justify-center z-10">
          <Logo />
        </div>

        {/* Right Links (Desktop) */}
        <ul className="nav-links hidden lg:flex flex-1 justify-start gap-8 ml-10">
          {rightLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className="relative text-sm xl:text-base hover:text-neon transition-colors duration-300 text-white/80"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Overlay */}
        <div 
          id="mobileMenuOverlay"
          className="fixed inset-0 bg-[#0d1117] lg:hidden transition-all duration-500 flex flex-col items-center justify-center z-40 opacity-0 pointer-events-none translate-y-full"
        >
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="mobile-link text-2xl font-bold transition-all duration-300 text-white/70 hover:text-neon"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

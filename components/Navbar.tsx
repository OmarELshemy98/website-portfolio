import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from './Logo'

export default function Navbar() {
  const router = useRouter()

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

  return (
    <nav className="main-navbar dark-navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-inner flex items-center justify-between px-4 md:px-8 relative">
        <div className="flex items-center gap-4 z-10">
          <Logo />
        </div>
        
        <ul className="nav-links hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href} 
                className={`relative hover:text-neon transition-colors duration-300 ${
                  router.pathname === link.href 
                    ? 'text-neon font-bold' 
                    : ''
                }`}
              >
                {link.label}
                {router.pathname === link.href && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-neon rounded-full"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Placeholder to keep layout balanced if needed, or for future right-side elements */}
        <div className="w-[150px] hidden lg:block pointer-events-none"></div>
      </div>
    </nav>
  )
}

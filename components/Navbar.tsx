import Link from 'next/link'
import Logo from './Logo'

export default function Navbar() {
  return (
    <nav className="main-navbar dark-navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-inner flex items-center justify-between px-4 md:px-8 relative">
        <div className="flex items-center gap-4 z-10">
          <Logo />
        </div>
        
        <ul className="nav-links hidden lg:flex gap-8 ">
          <li><Link href="/" className="hover:text-neon transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-neon transition-colors">About</Link></li>
          <li><Link href="/skills" className="hover:text-neon transition-colors">Skills</Link></li>
          <li><Link href="/services" className="hover:text-neon transition-colors">Services</Link></li>
          <li><Link href="/experience" className="hover:text-neon transition-colors">Experience</Link></li>
          <li><Link href="/projects" className="hover:text-neon transition-colors">Projects</Link></li>
          <li><Link href="/certifications" className="hover:text-neon transition-colors">Certificates</Link></li>
          <li><Link href="/contact" className="hover:text-neon transition-colors">Contact</Link></li>
        </ul>

        {/* Placeholder to keep layout balanced if needed, or for future right-side elements */}
        <div className="w-[150px] hidden lg:block pointer-events-none"></div>
      </div>
    </nav>
  )
}

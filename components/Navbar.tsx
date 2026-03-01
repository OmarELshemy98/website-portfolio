import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="main-navbar dark-navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-inner flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-4">
          {/* Logo with Animation */}
          <Link href="/" className="flex items-center animate-[pulse_3s_ease-in-out_infinite]">
            <img 
              src="/favicon.png" 
              alt="Logo" 
              className="w-10 h-10 object-contain hover:scale-110 transition-transform duration-300"
            />
          </Link>
          <div className="logo-text">
            <span className="logo-role">Front end developer</span><br />
            <span className="logo-name text-neon">Omar Elshemy</span>
          </div>
        </div>
        <ul className="nav-links hidden lg:flex gap-6">
          <li><Link href="/" className="hover:text-neon transition-colors">Home</Link></li>
          <li><Link href="/about" className="hover:text-neon transition-colors">About</Link></li>
          <li><Link href="/skills" className="hover:text-neon transition-colors">Skills</Link></li>
          <li><Link href="/services" className="hover:text-neon transition-colors">Services</Link></li>
          <li><Link href="/experience" className="hover:text-neon transition-colors">Experience</Link></li>
          <li><Link href="/projects" className="hover:text-neon transition-colors">Projects</Link></li>
          <li><Link href="/certifications" className="hover:text-neon transition-colors">Certificates</Link></li>
          <li><Link href="/contact" className="hover:text-neon transition-colors">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Omar Elshemy – Frontend Developer Portfolio</title>
        <meta name="description" content="Frontend Developer crafting modern, responsive, and user-friendly web experiences." />
      </Head>
      <nav className="main-navbar dark-navbar" role="navigation" aria-label="Main Navigation">
        <div className="navbar-inner">
          <div className="logo-text">
            <span className="logo-role">Front end developer</span><br />
            <span className="logo-name">Omar Elshemy</span>
          </div>
          <ul className="nav-links">
            <li><Link href="/" className="active">Home</Link></li>
            <li><Link href="/certifications">Certificates</Link></li>
            <li><Link href="/projects">Projects</Link></li>
          </ul>
        </div>
      </nav>
      <section id="hero" className="hero-section">
        <div className="animated-bg"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span>Hello, It&apos;s Me</span><br />
              <span className="hero-name">Omar Elshemy</span><br />
              <span>And I&apos;m a <span className="highlight">Frontend Developer</span></span>
            </h1>
            <p>Passionate Front End Developer crafting modern, responsive, and user-friendly web experiences.</p>
          </div>
        </div>
      </section>
      <footer className="footer-section bg-[#1a374d] text-white text-center py-8 relative overflow-hidden">
        <div className="footer-glow"></div>
        <div className="footer-content flex items-center justify-center gap-2">
          <img src="/images/circle-logo.png" alt="Logo" className="w-8 h-8 object-contain rounded-full shadow" />
          <p className="text-sm m-0">&copy; <span>2026</span> <span className="footer-name">Omar Elshemy</span>. <span>All rights reserved.</span></p>
        </div>
      </footer>
    </>
  )
}

import SEO from '@/components/SEO'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <SEO 
        title="Omar Elshemy | Professional Front-End Developer & Freelancer" 
        description="Explore the portfolio of Omar Elshemy, a professional Front-End Developer specializing in React, Next.js, and high-performance web applications. Open for freelance projects."
      />
      <Navbar />
      <div className="bg-particles"></div>
      <section id="hero" className="hero-section">
        {/* Code Rain Background */}
        <canvas id="code-rain-canvas" className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"></canvas>
        
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
          <div className="hexagon-img">
            <img src="/images/profile-photo.jpg" alt="Omar Elshemy" className="profile-img" />
          </div>
        </div>
      </section>
      <Script src="/scripts/code-rain.js" strategy="afterInteractive" />
      <Footer />
    </>
  )
}

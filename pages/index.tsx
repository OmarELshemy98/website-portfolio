import Head from 'next/head'
import Script from 'next/script'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Omar Elshemy – Frontend Developer Portfolio</title>
        <meta name="description" content="Frontend Developer crafting modern, responsive, and user-friendly web experiences." />
      </Head>
      <Navbar />
      <section id="hero" className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Code Rain Background */}
        <canvas id="code-rain-canvas" className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"></canvas>
        
        <div className="hero-content relative z-10 text-center px-4">
          <div className="hero-text">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-text-muted text-xl md:text-2xl mb-2">Hello, It&apos;s Me</span>
              <span className="hero-name block text-neon drop-shadow-[0_0_15px_rgba(0,255,247,0.5)] mb-2">Omar Elshemy</span>
              <span className="block">And I&apos;m a <span className="highlight text-accent">Frontend Developer</span></span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-text-muted leading-relaxed">
              Passionate Front End Developer crafting modern, responsive, and user-friendly web experiences.
            </p>
          </div>
        </div>
      </section>
      <Script src="/scripts/code-rain.js" strategy="afterInteractive" />
      <Footer />
    </>
  )
}

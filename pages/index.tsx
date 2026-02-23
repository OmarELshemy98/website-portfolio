import Head from 'next/head'
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
      <Footer />
    </>
  )
}

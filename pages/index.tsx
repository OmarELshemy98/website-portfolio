import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

export default function Home() {
  return (
    <>
      <SEO 
        title="Omar Elshemy | Front End Developer"
        description="Omar Elshemy is a passionate Front End Developer based in Egypt, specialized in creating modern, responsive, and user-friendly web experiences using React and Next.js."
      />
      <Navbar />
      <section id="hero" className="hero-section">
        <div className="animated-bg"></div>
        <div className="hero-content px-4 md:px-0">
          <div className="hero-text text-center md:text-left">
            <h1>
              <span>Hello, It&apos;s Me</span><br />
              <span className="hero-name">Omar Elshemy</span><br />
              <span>And I&apos;m a <span className="highlight">Front End Developer</span></span>
            </h1>
            <p className="max-w-xl mx-auto md:mx-0">I am a professional <strong>Front End Developer</strong> dedicated to crafting high-quality, scalable, and interactive web applications that deliver exceptional user experiences.</p>
          </div>
          <div className="hexagon-img hidden md:flex">
            <img src="/images/profile-photo.jpg" alt="Omar Elshemy - Front End Developer" className="profile-img" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

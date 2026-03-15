import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

export default function About() {
  return (
    <>
      <SEO 
        title="About Me" 
        description="Learn more about Omar Elshemy, a digital craftsman and front-end developer passionate about creating beautiful and functional web experiences."
      />
      <Navbar />
      <section id="about" className="about-section">
        <div className="about-inner">
          <div className="about-text">
            <h2 className="section-title">About <span className="highlight">Me</span></h2>
            <p> I&apos;m a digital craftsman who transforms ideas into interactive realities. My journey in front-end development is fueled by curiosity, creativity, and a relentless pursuit of pixel-perfect design. I don&apos;t just build websites; I create digital experiences that connect, inspire, and delight users across every device.</p>
            <p>With a toolkit packed with <b>HTML5</b>, <b>CSS3</b>, <b>JavaScript</b>, <b>React</b>, and <b>Vue.js</b>, I blend code and creativity to deliver solutions that are as beautiful as they are functional. Whether it&apos;s a sleek landing page, a <b>dynamic web app</b>, or a seamless user interface, I believe every detail matters. My approach is rooted in <b>UI/UX best practices</b>, ensuring every project is not just well-coded, but truly user-centered.</p>
            <p>Collaboration is my superpower — I thrive on turning complex challenges into elegant, maintainable solutions, working hand-in-hand with designers and back-end teams. From startups to established brands, I&apos;ve helped clients stand out in the digital world with innovative, high-performance web experiences. Let&apos;s build something extraordinary together!</p>
          </div>
          <div className="about-info portrait-card">
            <div className="portrait-profile-pic">
              <img src="/images/profile-photo.jpg" alt="Profile Photo" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 15px rgba(0, 255, 247, 0.3)', marginBottom: '1rem', border: '2px solid var(--neon)' }} />
            </div>
            <h2 style={{ color: 'var(--neon)', textShadow: '0 0 10px rgba(0, 255, 247, 0.5)' }}>Basic Information</h2>
            <table>
              <tbody>
                <tr><td>Email:</td><td className="email-cell"><a href="mailto:omarelshemy010@gmail.com" style={{ textDecoration: 'none' }}>omarelshemy010@gmail.com</a></td></tr>
                <tr><td>LinkedIn:</td><td><a href="https://www.linkedin.com/in/omar-elshemy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>linkedin.com/in/omar-elshemy</a></td></tr>
                <tr><td>WhatsApp:</td><td><a href="https://wa.me/201026238072" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>01026238072</a></td></tr>
                <tr><td>Phone:</td><td>01204777405</td></tr>
                <tr><td>Address:</td><td>Alexandria</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

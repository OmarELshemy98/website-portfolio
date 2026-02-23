import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <section id="about" className="about-section">
        <div className="about-inner">
          <div className="about-text">
            <h2 className="section-title">About <span className="highlight">Me</span></h2>
            <p>I&apos;m a digital craftsman who transforms ideas into interactive realities. My journey in front-end development is fueled by curiosity, creativity, and a relentless pursuit of pixel-perfect design.</p>
            <p>With a toolkit packed with HTML5, CSS3, JavaScript, React, and Vue.js, I blend code and creativity to deliver solutions that are as beautiful as they are functional.</p>
            <p>Collaboration is my superpower — I thrive on turning complex challenges into elegant, maintainable solutions.</p>
          </div>
          <div className="about-info portrait-card">
            <div className="portrait-profile-pic">
              <img src="/images/profile-photo.jpg" alt="Profile Photo" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 12px rgba(0,0,0,0.12)', marginBottom: '1rem' }} />
            </div>
            <h2>Basic Information</h2>
            <table>
              <tbody>
                <tr><td>EMAIL:</td><td className="email-cell"><a href="mailto:omarelshemy010@gmail.com" style={{ color: '#27ae60', textDecoration: 'none' }}>omarelshemy010@gmail.com</a></td></tr>
                <tr><td>LinkedIn:</td><td><a href="https://www.linkedin.com/in/omar-elshemy" target="_blank" rel="noopener noreferrer" style={{ color: '#27ae60', textDecoration: 'none' }}>linkedin.com/in/omar-elshemy</a></td></tr>
                <tr><td>Whatapp:</td><td style={{ color: '#27ae60' }}><a href="https://wa.me/201026238072" target="_blank" rel="noopener noreferrer" style={{ color: '#27ae60', textDecoration: 'none' }}>01026238072</a></td></tr>
                <tr><td>PHONE:</td><td>01204777405</td></tr>
                <tr><td>ADDRESS:</td><td>New cairo</td></tr>
                <tr><td>Secondary ADDRESS:</td><td>Alexandria</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

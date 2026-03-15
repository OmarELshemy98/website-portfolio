import Logo from './Logo'
import SocialIcons from './SocialIcons'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="main-footer">
      <div className="footer-glow-top"></div>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <div className="brand-text">
              <h3 className="footer-name">Omar Elshemy</h3>
              <p className="footer-tagline">Digital Craftsman & Front-End Expert</p>
            </div>
          </div>
          
          <div className="footer-nav">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4 className="footer-heading">Connect</h4>
            <SocialIcons />
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>&copy; {year} <span className="highlight">Omar Elshemy</span>. Built with passion and precision.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

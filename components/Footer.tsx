import Logo from './Logo'
import SocialIcons from './SocialIcons'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="main-footer">
      <div className="footer-glow-top"></div>
      <div className="footer-container w-[90%] mx-auto">
        <div className="footer-content-simple">
          <div className="footer-brand-simple">
            <Logo />
            <div className="brand-text-simple">
              <h3 className="footer-name-simple">Omar Elshemy</h3>
              <p className="footer-tagline-simple">Digital Craftsman & Front-End Expert</p>
            </div>
          </div>
          
          <div className="footer-social-simple">
            <SocialIcons />
          </div>
        </div>

        <div className="footer-bottom-simple">
          <p>&copy; {year} <span className="highlight">Omar Elshemy</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

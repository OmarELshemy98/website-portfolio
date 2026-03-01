import Logo from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer-section bg-[#1a374d] text-white text-center py-8 relative overflow-hidden">
      <div className="footer-glow"></div>
      <div className="footer-content flex items-center justify-center gap-4">
        <Logo />
        <p className="text-sm m-0">&copy; <span>{year}</span> <span className="footer-name">Omar Elshemy</span>. <span>All rights reserved.</span></p>
      </div>
    </footer>
  )
}

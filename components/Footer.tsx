import Logo from './Logo'
import SocialIcons from './SocialIcons'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer-section bg-dark text-white py-6 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Logo />
          <div>
            <div className="text-lg font-bold text-white">Omar Elshemy</div>
            <p className="text-sm text-gray-400">&copy; {year} All rights reserved.</p>
          </div>
        </div>
        
        <SocialIcons />
      </div>
    </footer>
  )
}

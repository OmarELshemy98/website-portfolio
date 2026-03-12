import Logo from './Logo'
import SocialIcons from './SocialIcons'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer-section bg-[#1a374d] text-white py-8 relative overflow-hidden border-t border-neon/10">
      <div className="footer-glow"></div>
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Logo />
          <p className="text-sm text-text-muted hidden md:block border-l border-white/10 pl-4 ml-2">
            &copy; {year} <span className="text-neon font-bold">Omar Elshemy</span>. All rights reserved.
          </p>
        </div>
        
        <SocialIcons />
        
        <p className="text-sm text-text-muted md:hidden text-center">
          &copy; {year} <span className="text-neon font-bold">Omar Elshemy</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

import Logo from './Logo'
import SocialIcons from './SocialIcons'
import { useI18n } from '@/lib/i18n'

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()
  return (
    <footer className="main-footer">
      <div className="footer-glow-top"></div>
      <div className="footer-container w-[90%] mx-auto">
        <div className="footer-content-simple">
          <div className="footer-brand-simple">
            <Logo />
            <div className="brand-text-simple">
              <p className="footer-name-simple font-bold text-lg m-0">Omar Elshemy</p>
              <p className="footer-tagline-simple">{t('footer.tagline')}</p>
            </div>
          </div>
          
          <div className="footer-social-simple">
            <SocialIcons />
          </div>
        </div>

        <div className="footer-bottom-simple">
          <p>&copy; {year} <span className="highlight">Omar Elshemy</span>. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}

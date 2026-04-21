import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from './Logo'
import { useI18n, type Locale } from '@/lib/i18n'
import { NAV_LINKS } from '@/config/navigation'

export default function Navbar() {
  const router = useRouter()
  const { locale, setLocale, t } = useI18n()
  const withLang = (href: string) => `${href}?lang=${locale}`
  const currentPath = router.asPath.split('?')[0].replace(/\/$/, '') || '/'
  const isActive = (href: string) => {
    const normalized = href.replace(/\/$/, '') || '/'
    return currentPath === normalized
  }
  const navLinks = NAV_LINKS.map((link) => ({
    href: link.href,
    label: t(link.labelKey)
  }))

  const leftLinks = navLinks.slice(0, 4)
  const rightLinks = navLinks.slice(4)
  const arRightGroupLinks = [...leftLinks].reverse()
  const arLeftGroupLinks = [...rightLinks].reverse()

  const nextLocale: Locale = locale === 'en' ? 'ar' : 'en'

  return (
    <header className="navbar-container">
      <nav className={`main-navbar ${locale === 'ar' ? 'locale-ar' : 'locale-en'}`} role="navigation" aria-label="Main Navigation">
        <div className="navbar-inner px-4 relative mx-auto">
          
          {/* --- MOBILE LAYOUT --- */}
          <div className="lg:hidden flex-1"></div>
          
          <div className="lg:hidden flex justify-center flex-1">
            <Logo />
          </div>

          <div className="lg:hidden flex justify-end flex-1">
            <button
              type="button"
              className="lang-btn"
              onClick={() => setLocale(nextLocale)}
              aria-label={t('navbar.switchToArabic')}
            >
              {locale === 'en' ? 'AR' : 'EN'}
            </button>
            <button 
              id="mobileMenuBtn"
              className="mobile-menu-btn"
              aria-label={t('navbar.toggleMenu')}
            >
              <div className="menu-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>

          {/* --- DESKTOP LAYOUT --- */}
          {locale === 'ar' ? (
            <>
              <button
                type="button"
                className="lang-btn hidden lg:flex"
                onClick={() => setLocale(nextLocale)}
                aria-label={t('navbar.switchToArabic')}
              >
                EN
              </button>

              <ul className="nav-links start hidden lg:flex">
                {arLeftGroupLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={withLang(link.href)} className={`nav-item ${isActive(link.href) ? 'active' : ''}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="logo-container hidden lg:flex">
                <Logo />
              </div>

              <ul className="nav-links end hidden lg:flex">
                {arRightGroupLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={withLang(link.href)} className={`nav-item ${isActive(link.href) ? 'active' : ''}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <ul className="nav-links start hidden lg:flex">
                {leftLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={withLang(link.href)} className={`nav-item ${isActive(link.href) ? 'active' : ''}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="logo-container hidden lg:flex">
                <Logo />
              </div>

              <ul className="nav-links end hidden lg:flex">
                {rightLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={withLang(link.href)} className={`nav-item ${isActive(link.href) ? 'active' : ''}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="lang-btn hidden lg:flex"
                onClick={() => setLocale(nextLocale)}
                aria-label={t('navbar.switchToArabic')}
              >
                AR
              </button>
            </>
          )}

          {/* Mobile Menu Overlay */}
          <div id="mobileMenuOverlay" className="mobile-overlay">
            <div id="mobileMenuClose" className="close-icon" aria-label={t('navbar.closeMenu')}>&times;</div>
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={withLang(link.href)} className={`mobile-nav-item ${isActive(link.href) ? 'active' : ''}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

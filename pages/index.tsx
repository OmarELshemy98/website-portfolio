import Link from 'next/link'
import Image from 'next/image'
import SEO from '@/components/SEO'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useI18n } from '@/lib/i18n'

export default function Home() {
  const { t, locale } = useI18n()
  const isAr = locale === 'ar'

  return (
    <>
      <SEO page="home" />
      <Navbar />
      <div className="bg-particles"></div>
      <section id="hero" className="hero-section">
        {/* Code Rain Background */}
        <canvas id="code-rain-canvas" className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"></canvas>
        
        <div className="animated-bg"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span>{t('home.hello')}</span><br />
              <span className="hero-name">Omar Elshemy</span><br />
              <span>{t('home.roleIntro')} <span className="highlight">{t('home.role')}</span></span>
            </h1>
            <p>{t('home.summary')}</p>
            <div className="hero-btns mt-8 flex gap-4">
              <a 
                href="/images/my-cv/omar-elshemy-front-end.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-neon text-dark font-bold rounded-xl shadow-[0_0_15px_rgba(0,255,247,0.4)] hover:scale-105 transition-all"
              >
                {t('home.viewCv')}
              </a>
              <Link
                href="/contact/"
                className="px-8 py-3 border-2 border-neon text-neon font-bold rounded-xl hover:bg-neon/10 transition-all inline-block text-center"
              >
                {t('home.hireMe')}
              </Link>
            </div>
          </div>
          <div className="hexagon-img">
            <picture>
              <source
                srcSet="/images/responsive/profile-photo-240.webp 240w, /images/responsive/profile-photo-320.webp 320w, /images/responsive/profile-photo-420.webp 420w, /images/responsive/profile-photo-640.webp 640w"
                sizes="(max-width: 360px) 221px, (max-width: 480px) 255px, (max-width: 768px) 272px, (max-width: 1024px) 272px, 357px"
                type="image/webp"
              />
              <source
                srcSet="/images/responsive/profile-photo-240.png 240w, /images/responsive/profile-photo-320.png 320w, /images/responsive/profile-photo-420.png 420w, /images/responsive/profile-photo-640.png 640w"
                sizes="(max-width: 360px) 221px, (max-width: 480px) 255px, (max-width: 768px) 272px, (max-width: 1024px) 272px, 357px"
                type="image/png"
              />
              <Image
                src="/images/responsive/profile-photo-420.webp"
                alt="Omar Elshemy, front-end developer portrait"
                className="profile-img"
                width={357}
                height={374}
                sizes="(max-width: 360px) 221px, (max-width: 480px) 255px, (max-width: 768px) 272px, (max-width: 1024px) 272px, 357px"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
                quality={80}
                style={{ width: '100%', height: '100%', aspectRatio: '357 / 374' }}
              />
            </picture>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

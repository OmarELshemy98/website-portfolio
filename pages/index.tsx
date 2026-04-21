import SEO from '@/components/SEO'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useI18n } from '@/lib/i18n'

export default function Home() {
  const { t, locale } = useI18n()
  const isAr = locale === 'ar'

  return (
    <>
      <SEO 
        title={isAr ? 'عمر الشيمي | مطوّر واجهات أمامية محترف' : 'Omar Elshemy | Professional Front-End Developer & Freelancer'} 
        description={isAr ? 'استعرض أعمال عمر الشيمي، مطوّر واجهات أمامية متخصص في React و Next.js وبناء تطبيقات ويب عالية الأداء، ومتاح للعمل الحر.' : 'Explore the portfolio of Omar Elshemy, a professional Front-End Developer specializing in React, Next.js, and high-performance web applications. Open for freelance projects.'}
      />
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
              <a 
                href={`/contact?lang=${locale}`} 
                className="px-8 py-3 border-2 border-neon text-neon font-bold rounded-xl hover:bg-neon/10 transition-all"
              >
                {t('home.hireMe')}
              </a>
            </div>
          </div>
          <div className="hexagon-img">
            <img src="/images/profile-photo.jpg" alt="Omar Elshemy" className="profile-img" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

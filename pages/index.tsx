import Link from 'next/link'
import SEO from '@/components/SEO'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import OptimizedImg from '@/components/OptimizedImg'
import imageMeta from '@/data/image-meta.json'
import { useI18n } from '@/lib/i18n'

const profileMeta = imageMeta['profile-photo.jpg'] as { width: number; height: number; webp: string }

export default function Home() {
  const { t, locale } = useI18n()
  const isAr = locale === 'ar'

  return (
    <>
      <SEO 
        title={isAr ? 'عمر الشيمي | مطوّر واجهات أمامية' : 'Omar Elshemy | Front-End Developer'} 
        description={
          isAr
            ? 'أعمال عمر الشيمي: مطوّر واجهات أمامية (React وNext.js)، مواقع سريعة وواجهات نظيفة. متاح للعمل الحر.'
            : 'Omar Elshemy is a front-end developer for React and Next.js: fast, responsive interfaces, clean UI, and performance-minded delivery. Open for freelance work.'
        }
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
              <Link
                href="/contact/"
                className="px-8 py-3 border-2 border-neon text-neon font-bold rounded-xl hover:bg-neon/10 transition-all inline-block text-center"
              >
                {t('home.hireMe')}
              </Link>
            </div>
          </div>
          <div className="hexagon-img">
            <OptimizedImg
              webpSrc={profileMeta.webp}
              fallbackSrc="/images/profile-photo.jpg"
              alt="Omar Elshemy, front-end developer portrait"
              className="profile-img"
              width={profileMeta.width}
              height={profileMeta.height}
              sizes="(max-width: 480px) 280px, (max-width: 768px) 300px, 420px"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

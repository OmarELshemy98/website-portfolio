import Link from 'next/link'
import SEO from '@/components/SEO'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useI18n } from '@/lib/i18n'

export default function NotFoundPage() {
  const { t, locale } = useI18n()
  const isAr = locale === 'ar'

  return (
    <>
      <SEO
        title={isAr ? 'الصفحة غير موجودة' : 'Page not found'}
        description={
          isAr
            ? 'الصفحة التي طلبتها غير متوفرة. ارجع للرئيسية أو تصفح أقسام الموقع.'
            : 'The page you requested could not be found. Return home or browse the portfolio sections.'
        }
        noindex
      />
      <Navbar />
      <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-24 text-center text-white">
        <p className="text-neon-cyan font-mono text-sm tracking-[0.3em] uppercase mb-4">404</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-xl">
          {isAr ? 'هذه الصفحة غير موجودة' : 'This page is missing'}
        </h1>
        <p className="text-text-muted max-w-md mb-10 text-lg">
          {isAr
            ? 'ربما تم نقل الرابط أو حدث خطأ في الكتابة. جرّب الروابط أدناه.'
            : 'The link may have moved or there may be a typo in the URL. Try the links below.'}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-neon text-dark font-bold rounded-xl shadow-[0_0_15px_rgba(0,255,247,0.4)] hover:scale-105 transition-all"
          >
            {t('navbar.home')}
          </Link>
          <Link
            href="/contact/"
            className="px-8 py-3 border-2 border-neon text-neon font-bold rounded-xl hover:bg-neon/10 transition-all"
          >
            {t('navbar.contact')}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

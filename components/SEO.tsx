import Head from 'next/head'
import { useRouter } from 'next/router'
import { useI18n } from '@/lib/i18n'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogUrl?: string
  noindex?: boolean
}

export default function SEO({ 
  title, 
  description = "Omar Elshemy is a Front End Developer specializing in React and Next.js. I build modern, responsive web applications with a focus on performance and UI/UX design.",
  keywords = "Omar Elshemy, Front End Developer, React Developer, Next.js, Web Design, Portfolio, Freelance Developer",
  ogImage = "/images/profile-photo.jpg",
  ogUrl,
  noindex = false
}: SEOProps) {
  const router = useRouter()
  const { locale } = useI18n()
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://omarelshemy.com').replace(/\/$/, '')
  const pathname = router.asPath.split('?')[0] || '/'
  const cleanPath = pathname === '' ? '/' : pathname
  const canonicalBase = `${siteUrl}${cleanPath}`
  const localizedCanonical = `${canonicalBase}?lang=${locale}`
  const arAlternate = `${canonicalBase}?lang=ar`
  const enAlternate = `${canonicalBase}?lang=en`
  const finalOgUrl = ogUrl || localizedCanonical
  const ogLocale = locale === 'ar' ? 'ar_AR' : 'en_US'

  const baseTitle = "Omar Elshemy | Front End Developer"
  const fullTitle = title ? `${title} | Omar Elshemy` : baseTitle

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Omar Elshemy" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="language" content={locale === 'ar' ? 'Arabic' : 'English'} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={locale === 'ar' ? 'en_US' : 'ar_AR'} />
      <meta property="og:site_name" content="Omar Elshemy Portfolio" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalOgUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:site" content="@omarelshemy" />
      <meta name="twitter:creator" content="@omarelshemy" />

      <link rel="canonical" href={localizedCanonical} />
      <link rel="alternate" hrefLang="en" href={enAlternate} />
      <link rel="alternate" hrefLang="ar" href={arAlternate} />
      <link rel="alternate" hrefLang="x-default" href={enAlternate} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

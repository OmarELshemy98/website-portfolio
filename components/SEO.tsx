import Head from 'next/head'
import { useRouter } from 'next/router'
import { useI18n } from '@/lib/i18n'
import imageMeta from '@/data/image-meta.json'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogUrl?: string
  noindex?: boolean
}

type ProfileMeta = { width: number; height: number; webp: string }

const profileMeta = imageMeta['profile-photo.jpg'] as ProfileMeta

const segmentLabels: Record<string, { en: string; ar: string }> = {
  about: { en: 'About', ar: 'نبذة عني' },
  skills: { en: 'Skills', ar: 'المهارات' },
  services: { en: 'Services', ar: 'الخدمات' },
  experience: { en: 'Experience', ar: 'الخبرات' },
  projects: { en: 'Projects', ar: 'المشاريع' },
  certifications: { en: 'Certificates', ar: 'الشهادات' },
  contact: { en: 'Contact', ar: 'تواصل' }
}

function labelizeSegment(seg: string, locale: 'en' | 'ar') {
  const row = segmentLabels[seg.toLowerCase()]
  if (row) return row[locale]
  return seg.charAt(0).toUpperCase() + seg.slice(1)
}

function buildBreadcrumbList(siteUrl: string, pathNormalized: string, locale: 'en' | 'ar') {
  const homeName = locale === 'ar' ? 'الرئيسية' : 'Home'
  const clean = pathNormalized.replace(/\/$/, '') || '/'
  if (clean === '/') {
    return {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: homeName,
          item: `${siteUrl}/`
        }
      ]
    }
  }
  const segments = clean.split('/').filter(Boolean)
  const itemListElement: Array<{ '@type': string; position: number; name: string; item: string }> = [
    { '@type': 'ListItem', position: 1, name: homeName, item: `${siteUrl}/` }
  ]
  let acc = siteUrl
  segments.forEach((seg, i) => {
    acc += `/${seg}/`
    itemListElement.push({
      '@type': 'ListItem',
      position: i + 2,
      name: labelizeSegment(seg, locale),
      item: acc
    })
  })
  return { '@type': 'BreadcrumbList', itemListElement }
}

export default function SEO({
  title,
  description = 'Omar Elshemy is a Front End Developer specializing in React and Next.js. I build modern, responsive web applications with a focus on performance and UI/UX design.',
  keywords = 'Omar Elshemy, Front End Developer, React Developer, Next.js, Web Design, Portfolio, Freelance Developer',
  ogImage = '/images/profile-photo.jpg',
  ogUrl,
  noindex = false
}: SEOProps) {
  const router = useRouter()
  const { locale } = useI18n()
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_URL ||
    'https://omarelshemy.com'
  ).replace(/\/$/, '')
  const pathOnly = (router.asPath.split('?')[0] || '/').trim() || '/'
  const withLeading = pathOnly.startsWith('/') ? pathOnly : `/${pathOnly}`
  const pathNormalized =
    withLeading === '/' ? '/' : withLeading.endsWith('/') ? withLeading : `${withLeading}/`
  const canonicalBase = `${siteUrl}${pathNormalized}`
  const localizedCanonical = locale === 'ar' ? `${canonicalBase}?lang=ar` : canonicalBase
  const enAlternate = canonicalBase
  const arAlternate = `${canonicalBase}?lang=ar`
  const finalOgUrl = ogUrl || localizedCanonical
  const ogLocale = locale === 'ar' ? 'ar_AR' : 'en_US'

  const baseTitle = 'Omar Elshemy | Front-End Developer'
  const fullTitle = title?.trim() ? title.trim() : baseTitle

  const breadcrumb = buildBreadcrumbList(siteUrl, pathNormalized, locale)

  const baseGraph = [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Omar Elshemy Portfolio',
      description,
      inLanguage: ['en', 'ar'],
      publisher: { '@id': `${siteUrl}/#person` }
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Omar Elshemy',
      url: siteUrl,
      image: `${siteUrl}${ogImage}`,
      jobTitle: 'Front-End Developer',
      knowsAbout: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'Tailwind CSS',
        'Web performance',
        'Accessibility'
      ],
      sameAs: [
        'https://github.com/omarelshemy98',
        'https://www.linkedin.com/in/omar-elshemy',
        'https://twitter.com/omarelshemy'
      ]
    }
  ]

  const pageGraph = noindex
    ? []
    : [
        {
          '@type': 'WebPage',
          '@id': `${localizedCanonical}#webpage`,
          url: localizedCanonical,
          name: fullTitle,
          description,
          isPartOf: { '@id': `${siteUrl}/#website` },
          inLanguage: locale,
          about: { '@id': `${siteUrl}/#person` }
        },
        breadcrumb
      ]

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [...baseGraph, ...pageGraph]
  }

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Omar Elshemy" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="content-language" content={locale} />
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      {ogImage === '/images/profile-photo.jpg' ? (
        <>
          <meta property="og:image:width" content={String(profileMeta.width)} />
          <meta property="og:image:height" content={String(profileMeta.height)} />
          <meta property="og:image:alt" content="Omar Elshemy — front-end developer" />
        </>
      ) : null}
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={locale === 'ar' ? 'en_US' : 'ar_AR'} />
      <meta property="og:site_name" content="Omar Elshemy Portfolio" />

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  )
}

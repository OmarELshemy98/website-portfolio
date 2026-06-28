import Head from 'next/head'
import { useRouter } from 'next/router'
import { useI18n } from '@/lib/i18n'
import imageMeta from '@/data/image-meta.json'

interface SEOProps {
  page?: 'home' | 'about' | 'skills' | 'services' | 'experience' | 'projects' | 'certifications' | 'contact'
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogUrl?: string
  noindex?: boolean
}

type ProfileMeta = { width: number; height: number; webp: string }

const profileMeta = imageMeta['profile-photo.png'] as ProfileMeta

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
  page = 'home',
  title,
  description,
  keywords,
  ogImage = '/images/profile-photo.png',
  ogUrl,
  noindex = false
}: SEOProps) {
  const router = useRouter()
  const { t, locale } = useI18n()
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

  // Get translated SEO values
  const getSeoValue = (key: string) => {
    const fullKey = `seo.${page}${key.charAt(0).toUpperCase()}${key.slice(1)}`
    try {
      return t(fullKey as any)
    } catch {
      return ''
    }
  }

  const defaultTitle = getSeoValue('title') || (locale === 'ar' ? 'عمر الشيمي | مطوّر واجهات أمامية' : 'Omar Elshemy | Front-End Developer')
  const defaultDescription = getSeoValue('description') || (locale === 'ar' 
    ? 'أعمال عمر الشيمي: مطوّر واجهات أمامية (React وNext.js)، مواقع سريعة وواجهات نظيفة. متاح للعمل الحر.'
    : 'Omar Elshemy is a front-end developer for React and Next.js: fast, responsive interfaces, clean UI, and performance-minded delivery. Open for freelance work.')
  const defaultKeywords = getSeoValue('keywords') || (locale === 'ar'
    ? 'عمر الشيمي، عمر الشيمي مطور، مطور واجهات أمامية، مطور ويب، مطور React، مطور Next.js، مطور TypeScript، تصميم مواقع، تطوير مواقع، ملف شخصي، مطور فريلانس، مطور ويب مصر، مطور واجهات أمامية الإسكندرية، مطور ويب الإسكندرية، برمجة الويب، تطوير تطبيقات الويب، تصميم واجهات المستخدم، UI/UX، صفحات هبوط، تطوير مواقع، تصميم متجاوب، تصميم مواقع احترافي، تصميم مواقع في مصر، تصميم مواقع في الإسكندرية، خدمات تطوير الويب، خدمات تصميم المواقع'
    : 'Omar Elshemy, Omar Elshemy developer, Front End Developer, Web Developer, React Developer, Next.js Developer, TypeScript Developer, Web Design, Website Development, Portfolio, Freelance Developer, Web Developer Egypt, Alexandria Frontend, Alexandria Web Developer, Web Programming, Web Application Development, UI Design, UX Design, Landing Page, Portfolio Website, Website Development, Responsive Design, Professional Web Design, Web Design Egypt, Web Design Alexandria, Web Development Services, Web Design Services')

  const fullTitle = title?.trim() || defaultTitle
  const finalDescription = description?.trim() || defaultDescription
  const finalKeywords = keywords?.trim() || defaultKeywords

  const breadcrumb = buildBreadcrumbList(siteUrl, pathNormalized, locale)

  const baseGraph = [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Omar Elshemy Portfolio',
      description: finalDescription,
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
        'Accessibility',
        'مطور واجهات أمامية',
        'مطور ويب',
        'تطوير واجهات المستخدم',
        'تصميم المواقع',
        'برمجة الويب'
      ],
      sameAs: [
        'https://github.com/omarelshemy98',
        'https://www.linkedin.com/in/omar-elshemy',
        'https://twitter.com/omarelshemy'
      ],
      worksFor: {
        '@id': `${siteUrl}/#organization`
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Alexandria',
        addressRegion: 'Alexandria',
        addressCountry: 'EG'
      },
      telephone: '+201026238072',
      email: 'omarelshemy010@gmail.com'
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#organization`,
      name: 'Omar Elshemy - Front-End Development Services',
      description: locale === 'ar' 
        ? 'خدمات تطوير واجهات أمامية احترافية في مصر. تطوير مواقع وتطبيقات ويب باستخدام React و Next.js و TypeScript.'
        : 'Professional front-end development services in Egypt. Website and web application development using React, Next.js, and TypeScript.',
      url: siteUrl,
      telephone: '+201026238072',
      email: 'omarelshemy010@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Alexandria',
        addressRegion: 'Alexandria',
        addressCountry: 'EG'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '31.2001',
        longitude: '29.9187'
      },
      areaServed: {
        '@type': 'Country',
        name: 'Egypt'
      },
      priceRange: '$$',
      openingHours: 'Mo-Su 00:00-23:59',
      availableLanguage: ['English', 'Arabic'],
      founder: { '@id': `${siteUrl}/#person` }
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
          description: finalDescription,
          isPartOf: { '@id': `${siteUrl}/#website` },
          inLanguage: locale,
          about: { '@id': `${siteUrl}/#person` },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: `${siteUrl}${ogImage}`,
            width: profileMeta.width,
            height: profileMeta.height
          }
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

      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
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
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      {ogImage === '/images/profile-photo.png' ? (
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
      <meta property="twitter:description" content={finalDescription} />
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

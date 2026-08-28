import Head from 'next/head'
import { useRouter } from 'next/router'
import { useI18n } from '@/lib/i18n'
import imageMeta from '@/data/image-meta.json'

interface SEOProps {
  page?: 'home' | 'about' | 'skills' | 'services' | 'experience' | 'projects' | 'certifications' | 'contact' | 'request-service'
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
  contact: { en: 'Contact', ar: 'تواصل' },
  'request-service': { en: 'Request Service', ar: 'اطلب خدمة' }
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
    process.env.NEXT_PUBLIC_VERCEL_URL ||
    process.env.VERCEL_URL ||
    process.env.URL ||
    process.env.DEPLOY_URL ||
    'https://omarelshemy.vercel.app'
  ).replace(/\/$/, '').startsWith('http')
    ? (
        process.env.NEXT_PUBLIC_SITE_URL ||
        process.env.NEXT_PUBLIC_VERCEL_URL ||
        process.env.VERCEL_URL ||
        process.env.URL ||
        process.env.DEPLOY_URL ||
        'https://omarelshemy.vercel.app'
      ).replace(/\/$/, '')
    : `https://${(
        process.env.NEXT_PUBLIC_SITE_URL ||
        process.env.NEXT_PUBLIC_VERCEL_URL ||
        process.env.VERCEL_URL ||
        'omarelshemy.vercel.app'
      ).replace(/\/$/, '')}`

  const pathOnly = (router.asPath.split('?')[0] || '/').trim() || '/'
  const withLeading = pathOnly.startsWith('/') ? pathOnly : `/${pathOnly}`
  const pathNormalized =
    withLeading === '/' ? '/' : withLeading.endsWith('/') ? withLeading : `${withLeading}/`
  const canonicalBase = `${siteUrl}${pathNormalized}`
  const localizedCanonical = locale === 'ar' ? `${canonicalBase}?lang=ar` : canonicalBase
  const enAlternate = canonicalBase
  const arAlternate = `${canonicalBase}?lang=ar`
  const finalOgUrl = ogUrl || localizedCanonical
  const ogLocale = locale === 'ar' ? 'ar_EG' : 'en_US'

  const getSeoValue = (key: string) => {
    const fullKey = `seo.${page}${key.charAt(0).toUpperCase()}${key.slice(1)}`
    try {
      return t(fullKey as any)
    } catch {
      return ''
    }
  }

  const defaultTitle =
    getSeoValue('title') ||
    (locale === 'ar'
      ? 'عمر الشيمي | مطور واجهات أمامية و متخصص SEO | React و Next.js'
      : 'Omar Elshemy | Front-End Developer & SEO Specialist | React & Next.js')
  const defaultDescription =
    getSeoValue('description') ||
    (locale === 'ar'
      ? 'عمر الشيمي مطور واجهات أمامية متخصص في React، Next.js، Tailwind CSS، و TypeScript، بالإضافة إلى تحسين محركات البحث (SEO)، Core Web Vitals، والبيانات المهيكلة. أبني مواقع سريعة ومتجاوبة و SEO-friendly تظهر في أول نتائج البحث. متاح للعمل الفريلانس في مصر والعالم عن بعد.'
      : 'Omar Elshemy is a Front-End Developer and SEO Specialist expert in React, Next.js, Tailwind CSS, TypeScript, Technical SEO, Core Web Vitals, and Schema Markup. I build modern, responsive, and performance-optimized websites that rank high on Google. Open for freelance work in Egypt and worldwide remote.')
  const defaultKeywords =
    getSeoValue('keywords') ||
    (locale === 'ar'
      ? 'عمر الشيمي، عمر الشيمي مطور، عمر الشيمي SEO، مطور واجهات أمامية، مطور ويب، مطور React، مطور Next.js، مطور TypeScript، تصميم مواقع، تطوير مواقع، ملف شخصي، مطور فريلانس، مطور ويب مصر، مطور واجهات أمامية الإسكندرية، مطور ويب الإسكندرية، برمجة الويب، تطوير تطبيقات الويب، تصميم واجهات المستخدم، UI/UX، صفحات هبوط، تصميم متجاوب، تصميم مواقع احترافي، تصميم مواقع في مصر، تصميم مواقع في الإسكندرية، خدمات تطوير الويب، خدمات تصميم المواقع، متخصص SEO، مهندس SEO، تحسين محركات البحث، Technical SEO، Core Web Vitals، Schema Markup، بيانات مهيكلة، On-Page SEO، تحسين أداء المواقع، Google Search Console، تصنيف جوجل، ظهور في أول نتائج البحث'
      : 'Omar Elshemy, Omar Elshemy developer, Omar Elshemy SEO, Front End Developer, Front-End Developer, Frontend Developer, Web Developer, React Developer, Next.js Developer, NextJS Developer, TypeScript Developer, Web Design, Website Development, Portfolio, Freelance Developer, Web Developer Egypt, Alexandria Frontend, Alexandria Web Developer, Web Programming, Web Application Development, UI Design, UX Design, Landing Page, Portfolio Website, Responsive Design, Professional Web Design, Web Design Egypt, Web Design Alexandria, Web Development Services, Web Design Services, SEO Specialist, SEO Expert, Technical SEO, Search Engine Optimization, Core Web Vitals, Schema Markup, JSON-LD, On-Page SEO, Off-Page SEO, Performance Optimization, Google Search Console, Google Rankings, Organic Traffic')

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
      alternateName: ['Omar Elshemy Front-End', 'عمر الشيمي مطور ويب'],
      description: finalDescription,
      inLanguage: ['en', 'ar'],
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/?s={search_term_string}`,
        'query-input': 'required name=search_term_string'
      },
      publisher: { '@id': `${siteUrl}/#person` }
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Omar Elshemy',
      alternateName: ['عمر الشيمي', 'Omar Elshemy98'],
      url: siteUrl,
      image: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/profile-photo.png`,
        width: profileMeta.width,
        height: profileMeta.height,
        encodingFormat: ['image/png', 'image/webp'],
        contentUrl: `${siteUrl}/images/profile-photo.png`
      },
      jobTitle: [
        'Front-End Developer',
        'Frontend Developer',
        'SEO Specialist',
        'SEO Expert',
        'Web Developer',
        'React Developer',
        'Next.js Developer',
        'مطور واجهات أمامية',
        'مطور ويب',
        'متخصص تحسين محركات البحث'
      ],
      hasOccupation: [
        {
          '@type': 'Occupation',
          name: 'Front-End Developer',
          occupationLocation: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Alexandria',
              addressRegion: 'Alexandria',
              addressCountry: 'EG'
            }
          }
        },
        {
          '@type': 'Occupation',
          name: 'SEO Specialist',
          occupationLocation: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Alexandria',
              addressRegion: 'Alexandria',
              addressCountry: 'EG'
            }
          }
        }
      ],
      knowsAbout: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'Tailwind CSS',
        'Web performance',
        'Core Web Vitals',
        'Accessibility',
        'Search Engine Optimization',
        'SEO',
        'Technical SEO',
        'On-Page SEO',
        'Schema Markup',
        'JSON-LD',
        'Google Search Console',
        'Google Analytics',
        'Sitemap',
        'Robots.txt',
        'Canonical URLs',
        'Semantic HTML',
        'Lighthouse',
        'مطور واجهات أمامية',
        'مطور ويب',
        'تطوير واجهات المستخدم',
        'تصميم المواقع',
        'برمجة الويب',
        'تحسين محركات البحث',
        'سيو',
        'تحسين أداء المواقع',
        'البيانات المهيكلة'
      ],
      sameAs: [
        'https://github.com/omarelshemy98',
        'https://www.linkedin.com/in/omar-elshemy',
        'https://twitter.com/omarelshemy',
        'https://omarelshemy.vercel.app'
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
      email: 'omarelshemy010@gmail.com',
      nationality: {
        '@type': 'Country',
        name: 'Egypt'
      }
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#organization`,
      name: 'Omar Elshemy - Front-End Development & SEO Services',
      alternateName: ['Omar Elshemy Services', 'خدمات عمر الشيمي'],
      description:
        locale === 'ar'
          ? 'خدمات تطوير واجهات أمامية احترافية وخدمات تحسين محركات البحث SEO في مصر والعالم. تطوير مواقع وتطبيقات ويب باستخدام React و Next.js و TypeScript، مع تحسين الظهور في جوجل والتصنيف في أولى النتائج.'
          : 'Professional front-end development and SEO services in Egypt and worldwide remote. Website and web application development using React, Next.js, and TypeScript, with Technical SEO, Core Web Vitals optimization, and Schema Markup for top Google rankings.',
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
      areaServed: [
        { '@type': 'Country', name: 'Egypt' },
        { '@type': 'Country', name: 'Worldwide' }
      ],
      priceRange: '$$',
      openingHours: 'Mo-Su 00:00-23:59',
      availableLanguage: ['English', 'Arabic'],
      founder: { '@id': `${siteUrl}/#person` },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name:
          locale === 'ar'
            ? 'قائمة خدمات تطوير الويب و SEO'
            : 'Web Development & SEO Service Catalog',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name:
                locale === 'ar' ? 'تطوير واجهات أمامية (React / Next.js)' : 'Front-End Development (React / Next.js)',
              description:
                locale === 'ar'
                  ? 'بناء مواقع وتطبيقات ويب حديثة وقابلة للتطوير باستخدام React و Next.js و TypeScript'
                  : 'Building modern, scalable websites and web apps with React, Next.js, and TypeScript'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: locale === 'ar' ? 'خدمات SEO و تحسين محركات البحث' : 'SEO Services & Search Engine Optimization',
              description:
                locale === 'ar'
                  ? 'تحسين فني للمواقع، Core Web Vitals، بيانات مهيكلة، sitemap، وrobots.txt، لتصنيف أعلى في جوجل'
                  : 'Technical SEO, Core Web Vitals, Schema Markup, sitemaps, robots.txt for higher Google rankings'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: locale === 'ar' ? 'تحويل Figma إلى Next.js' : 'Figma to Next.js Conversion',
              description:
                locale === 'ar'
                  ? 'تحويل تصاميم Figma/XD إلى واجهات Next.js دقة البكسل ومتجاوبة'
                  : 'Pixel-perfect responsive Figma/XD designs converted into production Next.js code'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name:
                locale === 'ar' ? 'تحسين أداء المواقع و Core Web Vitals' : 'Performance Optimization & Core Web Vitals',
              description:
                locale === 'ar'
                  ? 'تسريع المواقع وتحقيق سكور Lighthouse +90 وإصلاح Core Web Vitals'
                  : 'Speed up sites, achieve 90+ Lighthouse scores, and fix Core Web Vitals issues'
            }
          }
        ]
      }
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
          },
          lastReviewed: '2026-08-28',
          reviewedBy: {
            '@type': 'Person',
            name: 'Omar Elshemy'
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
      <meta name="language" content={locale} />
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1, notranslate'
        }
      />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot-news" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Omar Elshemy" />
      <meta name="application-name" content="Omar Elshemy Portfolio" />
      <meta name="theme-color" content="#0d1117" />
      <meta name="msapplication-TileColor" content="#0d1117" />
      <meta name="format-detection" content="telephone=yes" />

      <meta name="geo.position" content="31.2001;29.9187" />
      <meta name="geo.placename" content="Alexandria, Egypt" />
      <meta name="geo.region" content="EG-ALX" />
      <meta name="ICBM" content="31.2001, 29.9187" />
      <meta name="city" content="Alexandria" />
      <meta name="country" content="Egypt" />
      <meta name="region" content="Alexandria" />
      <meta name="target" content="global" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="1 days" />
      <meta name="expires" content="never" />
      <meta name="doc-type" content="Public" />
      <meta name="doc-class" content="Completed" />
      <meta name="doc-rights" content="Public" />
      <meta name="resource-type" content="document" />
      <meta name="search_date" content="2026-08-28" />
      <meta name="abstract" content={finalDescription} />
      <meta name="topic" content={locale === 'ar' ? 'تطوير الويب و SEO' : 'Web Development and SEO'} />
      <meta name="category" content={locale === 'ar' ? 'تكنولوجيا، تطوير ويب، سيو' : 'Technology, Web Development, SEO'} />
      <meta name="subject" content={finalKeywords} />
      <meta name="classification" content="Web Development, SEO, Portfolio" />
      <meta name="copyright" content="Omar Elshemy © 2026" />
      <meta name="designer" content="Omar Elshemy" />
      <meta name="publisher" content="Omar Elshemy" />
      <meta name="owner" content="Omar Elshemy" />
      <meta name="url" content={localizedCanonical} />
      <meta name="identifier-URL" content={localizedCanonical} />
      <meta name="pagename" content={fullTitle} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:secure_url" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:type" content="image/png" />
      {ogImage === '/images/profile-photo.png' ? (
        <>
          <meta property="og:image:width" content={String(profileMeta.width)} />
          <meta property="og:image:height" content={String(profileMeta.height)} />
          <meta property="og:image:alt" content="Omar Elshemy — Front-End Developer & SEO Specialist" />
        </>
      ) : null}
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={locale === 'ar' ? 'en_US' : 'ar_EG'} />
      <meta property="og:site_name" content="Omar Elshemy Portfolio" />
      <meta property="og:see_also" content="https://github.com/omarelshemy98" />
      <meta property="og:see_also" content="https://www.linkedin.com/in/omar-elshemy" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalOgUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:image:alt" content="Omar Elshemy — Front-End Developer & SEO Specialist" />
      <meta name="twitter:site" content="@omarelshemy" />
      <meta name="twitter:creator" content="@omarelshemy" />

      <link rel="canonical" href={localizedCanonical} />
      <link rel="alternate" hrefLang="en" href={enAlternate} />
      <link rel="alternate" hrefLang="ar" href={arAlternate} />
      <link rel="alternate" hrefLang="x-default" href={enAlternate} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  )
}

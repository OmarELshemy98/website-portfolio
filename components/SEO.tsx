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
  const rawSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_VERCEL_URL ||
    process.env.VERCEL_URL ||
    process.env.URL ||
    process.env.DEPLOY_URL ||
    'https://omarelshemy.vercel.app'
  const cleanedUrl = rawSiteUrl.replace(/\/$/, '')
  const siteUrl = cleanedUrl.startsWith('http') ? cleanedUrl : `https://${cleanedUrl}`

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
      ? 'عمر الشيمي | مطور واجهات أمامية، متخصص SEO، ومدير عمليات - خدمات Software House احترافية'
      : 'Omar Elshemy | Front-End Developer, SEO Specialist & Operations Manager — Premium Software House Services')
  const defaultDescription =
    getSeoValue('description') ||
    (locale === 'ar'
      ? 'عمر الشيمي مطور واجهات أمامية متخصص في React و Next.js و TypeScript، و متخصص تحسين محركات البحث SEO، وكتابة محتوى SEO إنساني، ومدير عمليات (Operations Manager) بشركة Modern Trade للهندسة، وخبرة في تسعير باقات شركات السياحة. يقدم حلول برمجية متكاملة (Software House) تشمل: Landing Pages، CRM، لوحات تحكم، ربط APIs، دعم اللغات RTL، Headless CMS، تحويل Figma إلى Next.js، تحسين الأداء Core Web Vitals، وتصميم هوية بصرية. خدمة الشركات الناشئة واصحاب الأعمال في مصر والعالم.'
      : 'Omar Elshemy is a Front-End Developer (React, Next.js, TypeScript), SEO Specialist, Humanized SEO Copywriter, SEO Content Specialist, and Operations Manager at Modern Trade for Engineering with tourism pricing & packaging expertise. Delivering premium Software House solutions: Landing Pages, CRM systems, Admin Dashboards, API Integration, i18n & RTL, Headless CMS, Bug Fixing, Figma/XD to Next.js, Performance Optimization, Core Web Vitals, Technical SEO, Dark Mode, Smart Business Cards, Responsive Web Design, Hosting & Deployment, and React-to-Next.js migration. Serving startups, business owners, CEOs, and engineering & tourism companies worldwide.')
  const defaultKeywords =
    getSeoValue('keywords') ||
    (locale === 'ar'
      ? 'عمر الشيمي، عمر الشيمي مطور، عمر الشيمي SEO، عمر الشيمي مطور ويب، عمر الشيمي مدير عمليات، عمر الشيمي تسعير سياحي، عمر الشيمي مودرن تريد، Modern Trade for engineering، مطور واجهات أمامية، مطور ويب، مطور React، مطور Next.js، مطور TypeScript، تصميم مواقع، تطوير مواقع، ملف شخصي، مطور فريلانس، مطور ويب مصر، مطور واجهات أمامية الإسكندرية، مطور ويب الإسكندرية، برمجة الويب، تطوير تطبيقات الويب، تصميم واجهات المستخدم، UI/UX، صفحات هبوط، تصميم متجاوب، تصميم مواقع احترافي، تصميم مواقع في مصر، تصميم مواقع في الإسكندرية، خدمات تطوير الويب، خدمات تصميم المواقع، متخصص SEO، مهندس SEO، تحسين محركات البحث، SEO Technical، Core Web Vitals، Schema Markup، بيانات مهيكلة، On-Page SEO، تحسين أداء المواقع، Google Search Console، تصنيف جوجل، ظهور في أول نتائج البحث، SEO Content Specialist، Humanized SEO Copywriting، كتابة محتوى SEO، Operations Manager، مدير العمليات، Modern Trade، شركات هندسة، تسعير باقات سياحية، شركات سياحة، Tourism pricing، Software House، شركة برمجيات، حلول برمجية متكاملة، بناء CRM، نظام إدارة علاقات العملاء، Admin Dashboard، لوحات تحكم، API Integration، ربط واجهات برمجة التطبيقات، i18n & RTL، دعم اللغات المتعددة، Headless CMS، إصلاح أخطاء برمجية، Bug Fixing، Figma to Next.js، تحويل تصاميم Figma، XD to Next.js، Performance Optimization، تحسين الأداء، Static Websites، مواقع ثابتة، Custom UI Components، مكونات UI مخصصة، Dark Mode Implementation، الوضع الليلي، Smart Business Cards، بطاقات أعمال ذكية، HTML Email Templates، قوالب بريد إلكتروني، Logo Design، تصميم شعارات، Responsive Web Design، تصميم متجاوب، Hosting & Deployment، استضافة ونشر، React to Next.js Migration، ترقية مشاريع React إلى Next.js، Landing Page Agency، وكالة صفحات الهبوط، Startup web development, CEO, Founder, Business Owner, صاحب مشروع, مؤسس, شركة ناشئة'
      : 'Omar Elshemy, Omar Elshemy developer, Omar Elshemy SEO, Omar Elshemy web developer, Omar Elshemy operations manager, Omar Elshemy tourism pricing, Omar Elshemy modern trade, Modern Trade for engineering, Front End Developer, Front-End Developer, Frontend Developer, Web Developer, React Developer, Next.js Developer, NextJS Developer, TypeScript Developer, Web Design, Website Development, Portfolio, Freelance Developer, Web Developer Egypt, Alexandria Frontend, Alexandria Web Developer, Web Programming, Web Application Development, UI Design, UX Design, Landing Page, Portfolio Website, Responsive Design, Professional Web Design, Web Design Egypt, Web Design Alexandria, Web Development Services, Web Design Services, SEO Specialist, SEO Expert, Technical SEO, Search Engine Optimization, Core Web Vitals, Schema Markup, JSON-LD, On-Page SEO, Off-Page SEO, Performance Optimization, Google Search Console, Google Rankings, Organic Traffic, SEO Content Specialist, Humanized SEO Copy, SEO Copywriting, Content Writer, Operations Manager, Modern Trade, Engineering companies, Tourism pricing strategy, Travel agency pricing, Tourism packages pricing, Software House, Web Development Agency, Digital Agency, CRM Development, Customer Relationship Management, Admin Dashboard, Dashboard development, API Integration, REST API, GraphQL API, i18n & RTL support, Multilingual website, Headless CMS, Contentful, Sanity, Bug Fixing, Frontend bug fixes, Figma to Next.js, Figma to React, XD to Next.js, Performance Optimization, Lighthouse 90+, Static website, Custom UI Components, Design System, Dark Mode, Dark theme, Smart Business Cards, Digital Business Card, HTML Email Templates, Email Development, Logo Design, Branding, Responsive Web Design, Mobile First, Hosting & Deployment, Vercel deployment, Netlify, AWS, React to Next.js migration, Startup MVP, Landing page agency, Business website, E-commerce UI, CEO, Founder, Business Owner, Startup, B2B Web Services, Software House Egypt, Web Design Company Egypt')

  const fullTitle = title?.trim() || defaultTitle
  const finalDescription = description?.trim() || defaultDescription
  const finalKeywords = keywords?.trim() || defaultKeywords

  const breadcrumb = buildBreadcrumbList(siteUrl, pathNormalized, locale)

  const allServicesEn = [
    { name: 'Landing Page Design & Development', desc: 'High-converting premium landing pages with CRO focus' },
    { name: 'CRM System Development', desc: 'Custom CRM dashboards for client, sales, and operations management' },
    { name: 'API Integration', desc: 'RESTful / GraphQL API integration and secure data flow' },
    { name: 'i18n & RTL Multilingual Support', desc: 'Bilingual (Arabic/English) and global-ready websites' },
    { name: 'Headless CMS Integration', desc: 'Contentful, Sanity, Strapi-powered modern websites' },
    { name: 'Bug Fixing & UI Troubleshooting', desc: 'Cross-browser bug fixing, CSS, logic, and JS errors' },
    { name: 'Figma/XD to Next.js Conversion', desc: 'Pixel-perfect Figma/XD designs to production Next.js' },
    { name: 'Performance Optimization & Core Web Vitals', desc: 'Lighthouse 90+, Core Web Vitals, speed tuning' },
    { name: 'Admin Dashboard Development', desc: 'Data-driven React / Next.js admin panels and reports' },
    { name: 'Portfolio / Personal Websites', desc: 'Luxury personal portfolios for freelancers and founders' },
    { name: 'Static Websites & Jamstack', desc: 'Secure, zero-maintenance, SEO-friendly static sites' },
    { name: 'Custom UI Component Libraries', desc: 'Reusable accessible themed design systems at scale' },
    { name: 'Advanced Technical SEO Services', desc: 'Schema Markup, sitemaps, robots, canonical strategy' },
    { name: 'Dark Mode Implementation', desc: 'Smooth, persistent dark / light theme across apps' },
    { name: 'Smart Digital Business Cards', desc: 'Interactive NFC-ready digital business cards' },
    { name: 'Responsive HTML Email Templates', desc: 'Cross-client responsive email templates' },
    { name: 'Logo Design & Branding', desc: 'Modern minimal logos and brand identity kits' },
    { name: 'Responsive Web Design', desc: 'Mobile-first, pixel-perfect responsive layouts' },
    { name: 'Hosting, CI/CD & Deployment', desc: 'Vercel / Netlify / AWS deployment and pipelines' },
    { name: 'React → Next.js Migration Services', desc: 'Upgrade CRA/SPA apps into SEO-friendly Next.js' },
    { name: 'Humanized SEO Copy & Content', desc: 'User-first SEO content and humanized copywriting' }
  ]

  const allServicesAr = [
    { name: 'تصميم وتطوير صفحات الهبوط (Landing Pages)', desc: 'صفحات هبوط فاخرة عالية التحويل وتركيز على CRO' },
    { name: 'تطوير أنظمة إدارة علاقات العملاء (CRM)', desc: 'أنظمة CRM مخصصة لإدارة العملاء والمبيعات والعمليات' },
    { name: 'ربط واجهات برمجة التطبيقات (API Integration)', desc: 'ربط APIs RESTful / GraphQL وتدفق بيانات آمن' },
    { name: 'دعم اللغات المتعددة واتجاه RTL (i18n)', desc: 'مواقع ثنائية اللغة (عربي/إنجليزي) وجاهزة عالمياً' },
    { name: 'دمج أنظمة إدارة المحتوى (Headless CMS)', desc: 'مواقع حديثة مدعومة بـ Contentful / Sanity / Strapi' },
    { name: 'إصلاح الأخطاء البرمجية (Bug Fixing)', desc: 'إصلاح أخطاء المتصفحات وال CSS والمنطق وجافاسكربت' },
    { name: 'تحويل Figma/XD إلى Next.js', desc: 'تحويل دقة البكسل لتصاميم Figma/XD إلى كود Next.js' },
    { name: 'تحسين الأداء و Core Web Vitals', desc: 'سكور Lighthouse +90 و Core Web Vitals وتحسين السرعة' },
    { name: 'تطوير لوحات التحكم الإدارية', desc: 'لوحات تحكم وتقارير تفاعلية بـ React و Next.js' },
    { name: 'بناء المواقع الشخصية (Portfolio)', desc: 'مواقع شخصية فاخرة للمستقلين والمؤسسين' },
    { name: 'المواقع الثابتة و Jamstack', desc: 'مواقع آمنة بدون صيانة و SEO-friendly' },
    { name: 'مكتبات مكونات UI مخصصة', desc: 'أنظمة تصميم قابلة لإعادة الاستخدام وذات إمكانية وصول' },
    { name: 'خدمات SEO الفني المتقدم', desc: 'بيانات مهيكلة، Sitemap، Robots، واستراتيجية Canonical' },
    { name: 'تنفيذ الوضع الليلي (Dark Mode)', desc: 'تبديل سلس وثابت بين الوضع الليلي والنهاري' },
    { name: 'بطاقات الأعمال الذكية الرقمية', desc: 'بطاقات أعمال رقمية تفاعلية وجاهزة لـ NFC' },
    { name: 'قوالب البريد الإلكتروني (HTML Email)', desc: 'قوالب بريد متجاوبة تعمل على كل برامج البريد' },
    { name: 'تصميم الشعارات والهوية البصرية', desc: 'شعارات عصرية وبسيطة وهوية بصرية متكاملة' },
    { name: 'التصميم المتجاوب (Responsive Design)', desc: 'تصميم Mobile First ودقة بكسلية على كل الأجهزة' },
    { name: 'الاستضافة والنشر (Hosting & Deployment)', desc: 'نشر على Vercel / Netlify / AWS وبناء أنابيب CI/CD' },
    { name: 'ترقية React إلى Next.js', desc: 'تحويل تطبيقات CRA/SPA إلى Next.js صديقة SEO' },
    { name: 'كتابة المحتوى SEO الإنساني (Copy)', desc: 'محتوى SEO يُجمع بين جوجل وتجربة المستخدم' }
  ]

  const allServices = locale === 'ar' ? allServicesAr : allServicesEn

  const baseGraph = [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Omar Elshemy Portfolio & Software House Services',
      alternateName: [
        'Omar Elshemy Front-End',
        'Omar Elshemy SEO Agency',
        'عمر الشيمي مطور ويب',
        'عمر الشيمي شركة برمجيات'
      ],
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
      alternateName: ['عمر الشيمي', 'Omar Elshemy98', 'Omar Elshemy Front-End & SEO'],
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
        'SEO Content Specialist',
        'Humanized SEO Copywriter',
        'Operations Manager',
        'Tourism Pricing Specialist',
        'Web Developer',
        'React Developer',
        'Next.js Developer',
        'Software House Founder / Owner',
        'مطور واجهات أمامية',
        'مطور ويب',
        'متخصص تحسين محركات البحث',
        'متخصص محتوى SEO',
        'كاتب محتوى SEO إنساني',
        'مدير العمليات',
        'متخصص تسعير شركات السياحة'
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
          },
          skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
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
          },
          skills: ['Technical SEO', 'Core Web Vitals', 'Schema Markup', 'Keyword Research', 'SEO Content']
        },
        {
          '@type': 'Occupation',
          name: 'Operations Manager',
          occupationLocation: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Egypt',
              addressCountry: 'EG'
            }
          },
          skills: ['Operations', 'Process Optimization', 'Engineering Operations', 'Pricing Strategy']
        },
        {
          '@type': 'Occupation',
          name: 'Tourism Pricing Specialist',
          skills: ['Tourism Packaging', 'Pricing Strategy', 'Travel Industry', 'Tour Operator Pricing']
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
        'Off-Page SEO',
        'Schema Markup',
        'JSON-LD',
        'Google Search Console',
        'Google Analytics',
        'SEO Content Writing',
        'Humanized Copywriting',
        'Content Marketing',
        'Sitemap',
        'Robots.txt',
        'Canonical URLs',
        'Semantic HTML',
        'Lighthouse',
        'Landing Page Optimization',
        'CRO',
        'CRM Software',
        'Admin Dashboard',
        'API Integration',
        'REST API',
        'GraphQL',
        'Headless CMS',
        'Figma to Code',
        'Responsive Web Design',
        'Hosting and Deployment',
        'Operations Management',
        'Engineering Companies Operations',
        'Tourism Industry Pricing',
        'Tour Packages Pricing',
        'مطور واجهات أمامية',
        'مطور ويب',
        'تطوير واجهات المستخدم',
        'تصميم المواقع',
        'برمجة الويب',
        'تحسين محركات البحث',
        'سيو',
        'تحسين أداء المواقع',
        'البيانات المهيكلة',
        'كتابة محتوى SEO',
        'نسخ تسويقي إنساني',
        'صفحات هبوط',
        'أنظمة CRM',
        'لوحات التحكم',
        'ربط APIs',
        'دعم اللغات و RTL',
        'إدارة العمليات',
        'شركات هندسية',
        'تسعير السياحة',
        'باقات سياحية'
      ],
      sameAs: [
        'https://github.com/omarelshemy98',
        'https://www.linkedin.com/in/omar-elshemy',
        'https://twitter.com/omarelshemy',
        `${siteUrl}`
      ],
      worksFor: {
        '@id': `${siteUrl}/#organization`
      },
      brand: {
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
      },
      memberOf: [
        {
          '@type': 'Organization',
          name: 'Modern Trade for Engineering',
          roleName: 'Operations Manager'
        }
      ],
      makesOffer: allServices.map((s, idx) => ({
        '@type': 'Offer',
        position: idx + 1,
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.desc
        }
      }))
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#localbusiness`,
      name: 'Omar Elshemy — Software House & Digital Services',
      alternateName: ['Omar Elshemy Agency', 'عمر الشيمي حلول برمجية', 'Modern Trade Digital'],
      description: finalDescription,
      url: siteUrl,
      telephone: '+201026238072',
      email: 'omarelshemy010@gmail.com',
      priceRange: '$$',
      openingHours: 'Mo-Su 00:00-23:59',
      availableLanguage: ['English', 'Arabic'],
      areaServed: [
        { '@type': 'Country', name: 'Egypt' },
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Worldwide' }
      ],
      image: `${siteUrl}/images/profile-photo.png`,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`,
        width: 253,
        height: 263
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Alexandria',
        addressLocality: 'Alexandria',
        addressRegion: 'Alexandria',
        postalCode: '21500',
        addressCountry: 'EG'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '31.2001',
        longitude: '29.9187'
      },
      sameAs: [
        'https://github.com/omarelshemy98',
        'https://www.linkedin.com/in/omar-elshemy',
        'https://twitter.com/omarelshemy'
      ]
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#organization`,
      additionalType: ['Organization', 'Software House', 'Web Development Agency', 'SEO Agency', 'Digital Marketing Agency'],
      name: 'Omar Elshemy — Front-End Development, SEO, Software House & Digital Services',
      alternateName: [
        'Omar Elshemy Services',
        'Omar Elshemy Software House',
        'خدمات عمر الشيمي',
        'عمر الشيمي شركة برمجيات واستضافة و SEO'
      ],
      description:
        locale === 'ar'
          ? 'خدمات برمجية وتسويقية متكاملة (Software House) من عمر الشيمي: تطوير واجهات أمامية احترافية بـ React و Next.js و TypeScript، خدمات SEO الفني، كتابة محتوى SEO إنساني، تصميم صفحات هبوط، بناء لوحات تحكم و CRM، تحويل Figma/XD إلى Next.js، تحسين الأداء و Core Web Vitals، دعم اللغات و RTL، دمج Headless CMS، إصلاح أخطاء برمجية، تصميم هوية بصرية، استضافة ونشر. متاح لشركات الهندسة والسياحة والشركات الناشئة واصحاب الأعمال ورواد الأعمال في مصر والعالم.'
          : 'End-to-end Software House & Digital Services by Omar Elshemy: premium React & Next.js front-end engineering, Technical SEO, Humanized SEO Copywriting, landing pages, custom CRM & admin dashboards, Figma/XD to Next.js conversion, performance & Core Web Vitals tuning, i18n & RTL, Headless CMS, bug fixing, branding, hosting & deployment. Trusted by engineering companies, tourism operators, startups, founders, and business owners across Egypt and global markets.',
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
        { '@type': 'Country', name: 'Saudi Arabia' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Qatar' },
        { '@type': 'Country', name: 'Kuwait' },
        { '@type': 'Country', name: 'Bahrain' },
        { '@type': 'Country', name: 'Oman' },
        { '@type': 'Country', name: 'Jordan' },
        { '@type': 'Country', name: 'Lebanon' },
        { '@type': 'Country', name: 'Morocco' },
        { '@type': 'Country', name: 'Tunisia' },
        { '@type': 'Country', name: 'Algeria' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'Germany' },
        { '@type': 'Country', name: 'France' },
        { '@type': 'Country', name: 'Worldwide' }
      ],
      priceRange: '$$',
      openingHours: 'Mo-Su 00:00-23:59',
      availableLanguage: ['English', 'Arabic'],
      founder: { '@id': `${siteUrl}/#person` },
      employee: { '@id': `${siteUrl}/#person` },
      knowsLanguage: ['English', 'Arabic'],
      keywords: [
        'Software House Egypt',
        'Web Development Agency Egypt',
        'SEO Agency Egypt',
        'Front-End Developer',
        'SEO Specialist',
        'Landing Page Agency',
        'CRM Development',
        'Dashboard Development',
        'Figma to Next.js',
        'شركة برمجيات مصر',
        'وكالة تطوير الويب',
        'وكالة SEO',
        'صفحات هبوط',
        'أنظمة CRM',
        'لوحات تحكم'
      ],
      industry: [
        'Software Development',
        'Web Design',
        'Internet Marketing Services',
        'SEO Services',
        'Tourism Technology',
        'Engineering Technology',
        'Information Technology and Services'
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name:
          locale === 'ar'
            ? 'قائمة خدمات شركة البرمجيات الكاملة - الويب، SEO، والتصميم'
            : 'Complete Software House Service Catalog — Web, SEO & Design',
        itemListElement: allServices.map((s, idx) => ({
          '@type': 'Offer',
          position: idx + 1,
          itemOffered: {
            '@type': 'Service',
            name: s.name,
            description: s.desc,
            provider: { '@id': `${siteUrl}/#organization` },
            areaServed: [
              { '@type': 'Country', name: 'Egypt' },
              { '@type': 'Country', name: 'Worldwide' }
            ]
          }
        }))
      },
      makesOffer: allServices.map((s, idx) => ({
        '@type': 'Offer',
        position: idx + 1,
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.desc
        }
      }))
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
          author: { '@id': `${siteUrl}/#person` },
          copyrightHolder: { '@id': `${siteUrl}/#person` },
          lastReviewed: '2026-08-28',
          reviewedBy: {
            '@type': 'Person',
            name: 'Omar Elshemy'
          },
          mainEntity: {
            '@id': `${siteUrl}/#person`
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
      <meta name="google-site-verification" content="yTH1VahmD3v4mrUyDpaM_RH-hg9-We1ou08tr0VvhNE" />
      <meta name="bingbot" content="index, follow" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Omar Elshemy" />
      <meta name="application-name" content="Omar Elshemy Portfolio & Software House" />
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
      <meta name="topic" content={locale === 'ar' ? 'تطوير الويب، SEO، وخدمات شركة برمجيات' : 'Web Development, SEO, and Software House Services'} />
      <meta name="category" content={locale === 'ar' ? 'تكنولوجيا، تطوير ويب، سيو، خدمات برمجية' : 'Technology, Web Development, SEO, Software Services'} />
      <meta name="subject" content={finalKeywords} />
      <meta name="classification" content="Web Development, SEO, Portfolio, Software House, Digital Agency" />
      <meta name="copyright" content="Omar Elshemy © 2026" />
      <meta name="designer" content="Omar Elshemy" />
      <meta name="publisher" content="Omar Elshemy Software House" />
      <meta name="owner" content="Omar Elshemy" />
      <meta name="url" content={localizedCanonical} />
      <meta name="identifier-URL" content={localizedCanonical} />
      <meta name="pagename" content={fullTitle} />
      <meta name="audience" content={locale === 'ar' ? 'اصحاب الأعمال، مؤسسون، مدراء تنفيذيون، شركات هندسية، شركات سياحة، شركات ناشئة، مسوقون' : 'Business Owners, Founders, CEOs, CTOs, Engineering Companies, Tourism Companies, Startups, Marketers, Entrepreneurs'} />
      <meta name="og:audience" content={locale === 'ar' ? 'اصحاب الأعمال، مؤسسون، مدراء تنفيذيون، شركات هندسية، شركات سياحة، شركات ناشئة، مسوقون' : 'Business Owners, Founders, CEOs, CTOs, Engineering Companies, Tourism Companies, Startups, Marketers, Entrepreneurs'} />

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
          <meta property="og:image:alt" content="Omar Elshemy — Front-End Developer, SEO Specialist, Operations Manager" />
        </>
      ) : null}
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={locale === 'ar' ? 'en_US' : 'ar_EG'} />
      <meta property="og:site_name" content="Omar Elshemy Portfolio & Software House" />
      <meta property="og:see_also" content="https://github.com/omarelshemy98" />
      <meta property="og:see_also" content="https://www.linkedin.com/in/omar-elshemy" />
      <meta property="og:business:contact_data:street_address" content="Alexandria, Egypt" />
      <meta property="og:business:contact_data:locality" content="Alexandria" />
      <meta property="og:business:contact_data:country_name" content="Egypt" />
      <meta property="og:business:contact_data:phone_number" content="+201026238072" />
      <meta property="og:business:contact_data:website" content={siteUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalOgUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:image:alt" content="Omar Elshemy — Front-End Developer, SEO Specialist & Operations Manager" />
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

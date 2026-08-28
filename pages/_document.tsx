import { Html, Head, Main, NextScript } from 'next/document'

const DEFAULT_SITE_URL = 'https://omarelshemy.vercel.app'

export default function Document() {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="google-site-verification" content="B6Y6hvFNqApQczRDgzer7rFpaqoy77XszfxxjsBaFME" />
        <meta name="google-site-verification" content="OTHiQ-Nu5vdtegSuxVHqWVxqhXvXbfYymZP2NZ5Kmvg" />
        <meta name="theme-color" content="#0d1117" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="msapplication-TileColor" content="#0d1117" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Omar Elshemy" />
        <meta name="application-name" content="Omar Elshemy — Portfolio, Software House & Digital Services" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="target" content="global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="author" content="Omar Elshemy" />
        <meta name="designer" content="Omar Elshemy" />
        <meta name="publisher" content="Omar Elshemy Software House & Digital Services" />
        <meta name="copyright" content="Omar Elshemy © 2026" />
        <meta name="owner" content="Omar Elshemy" />
        <meta name="url" content={DEFAULT_SITE_URL} />
        <meta name="identifier-URL" content={DEFAULT_SITE_URL} />
        <meta name="city" content="Alexandria" />
        <meta name="country" content="Egypt" />
        <meta name="region" content="Alexandria" />
        <meta name="geo.position" content="31.2001;29.9187" />
        <meta name="geo.placename" content="Alexandria, Egypt" />
        <meta name="geo.region" content="EG-ALX" />
        <meta name="ICBM" content="31.2001, 29.9187" />
        <meta
          name="description"
          content="Omar Elshemy — Front-End Developer (React, Next.js, TypeScript), SEO Specialist, Humanized SEO Copywriter, SEO Content Specialist, and Operations Manager at Modern Trade for Engineering with tourism pricing expertise. Premium Software House services: Landing Pages, CRM, Admin Dashboards, API Integration, i18n & RTL, Headless CMS, Figma/XD to Next.js, Core Web Vitals, Dark Mode, Smart Business Cards, Logo & Branding, Hosting & Deployment, and React-to-Next.js migration for business owners, founders, CEOs, engineering, and tourism companies."
        />
        <meta
          name="keywords"
          content="Omar Elshemy, عمر الشيمي, Front-End Developer, مطور واجهات أمامية, SEO Specialist, متخصص SEO, SEO Content Specialist, Humanized SEO Copywriting, كتابة محتوى SEO إنساني, Operations Manager, مدير العمليات, Modern Trade for Engineering, Tourism Pricing Strategy, تسعير باقات السياحة, Software House Egypt, شركة برمجيات مصر, Digital Agency Egypt, وكالة رقمية مصر, Web Development Agency, وكالة تطوير الويب, SEO Agency Egypt, وكالة SEO, React Developer, Next.js Developer, TypeScript Developer, CRM Development, بناء CRM, Admin Dashboard Development, بناء لوحات تحكم إدارية, Landing Page Agency, وكالة صفحات الهبوط, Conversion Rate Optimization, Figma to Next.js, تحويل Figma إلى Next.js, Core Web Vitals, Schema Markup, JSON-LD, Technical SEO, SEO الفني, On-Page SEO, Off-Page SEO, Performance Optimization, تحسين أداء المواقع, API Integration, ربط APIs, Headless CMS, Contentful, Sanity, Strapi, i18n & RTL, موقع ثنائي اللغة, Multilingual website, Bug Fixing, إصلاح أخطاء برمجية, Static Websites, مواقع ثابتة, Custom UI Components, مكونات UI مخصصة, Design System, Dark Mode, الوضع الليلي, Smart Business Cards, بطاقات أعمال ذكية, HTML Email Templates, قوالب بريد إلكتروني, Logo Design, تصميم شعارات, Branding, هوية بصرية, Responsive Web Design, تصميم متجاوب, Mobile First, Hosting & Deployment, استضافة ونشر, Vercel, Netlify, AWS, CI/CD, React to Next.js Migration, ترقية React إلى Next.js, Engineering Company Website, مواقع شركات هندسة, Tourism Company Website, مواقع شركات سياحة, Startup MVP, مواقع شركات ناشئة, Founder Website, مواقع مؤسسين, Business Owner Website, مواقع اصحاب الأعمال, B2B Web Services, CEO, CTO, COO, Alexandria Web Developer, مطور ويب الإسكندرية, Egypt Web Developer, مطور ويب مصر, UAE Web Services, KSA Web Services, GCC Web Solutions, Web Design Egypt, تصميم مواقع مصر, Web Design Alexandria, تصميم مواقع الإسكندرية"
        />
        <meta name="subject" content="Premium Portfolio, Software House & Digital Services — Web Development, SEO, Branding, Hosting, Engineering & Tourism Technology" />
        <meta name="topic" content="Web Development, Technical SEO, SEO Content, CRM & Dashboards, Landing Pages, Branding, Hosting, Engineering Operations, Tourism Pricing" />
        <meta name="category" content="Technology, Web Development, SEO, Software Services, Digital Agency, Branding, Hosting, Engineering Technology, Tourism Technology" />
        <meta name="classification" content="Web Development, SEO, Portfolio, Software House, Digital Agency, Branding, Hosting, Engineering, Tourism Technology" />
        <meta name="abstract" content="Professional portfolio of Omar Elshemy — Front-End Developer, SEO Specialist, SEO Content Expert, Humanized Copywriter, Operations Manager at Modern Trade for Engineering, and Tourism Pricing Specialist. Premium end-to-end Software House & Digital Services for business owners, founders, C-suite, engineering & tourism companies across Egypt, KSA, UAE, GCC, and worldwide." />
        <meta name="summary" content="Omar Elshemy Portfolio & Software House — Front-End (React, Next.js, TypeScript), Technical SEO, Core Web Vitals, SEO Content & Humanized Copy, Landing Pages, CRM, Admin Dashboards, Figma to Code, Performance, Dark Mode, Smart Business Cards, Logo & Branding, Hosting & Deployment, React-to-Next.js Migration, Engineering Operations Consulting, and Tourism Pricing Strategy. Modern Trade for Engineering Operations Manager." />
        <meta name="audience" content="Business Owners, Founders, Entrepreneurs, CEO, CTO, COO, C-Suite, Startups, MVPs, Engineering Companies, Tourism Companies, Tour Operators, Travel Agencies, Digital Marketers, Product Managers, Marketing Directors" />
        <meta property="og:site_name" content="Omar Elshemy — Portfolio, Software House & Digital Services" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Omar Elshemy | Front-End Developer, SEO Specialist, Operations Manager — Premium Software House Services" />
        <meta
          property="og:description"
          content="Omar Elshemy — Front-End Developer (React, Next.js, TypeScript), SEO Specialist, SEO Content Expert, Humanized SEO Copywriter, Operations Manager at Modern Trade for Engineering, and Tourism Pricing Specialist. Delivering premium Software House solutions: Landing Pages, CRM systems, Admin Dashboards, API Integration, i18n & RTL, Headless CMS, Bug Fixing, Figma/XD to Next.js, Core Web Vitals, Dark Mode, Smart Business Cards, Logo Design & Branding, Responsive Web Design, Hosting & Deployment, and React-to-Next.js migration for founders, CEOs, business owners, engineering, and tourism companies worldwide."
        />
        <meta property="og:url" content={DEFAULT_SITE_URL} />
        <meta property="og:image" content={`${DEFAULT_SITE_URL}/images/profile-photo.png`} />
        <meta property="og:image:secure_url" content={`${DEFAULT_SITE_URL}/images/profile-photo.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1225" />
        <meta property="og:image:height" content="1283" />
        <meta property="og:image:alt" content="Omar Elshemy — Front-End Developer, SEO Specialist, Operations Manager, Tourism Pricing Expert" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="ar_EG" />
        <meta property="og:business:contact_data:street_address" content="Alexandria, Egypt" />
        <meta property="og:business:contact_data:locality" content="Alexandria" />
        <meta property="og:business:contact_data:country_name" content="Egypt" />
        <meta property="og:business:contact_data:phone_number" content="+201026238072" />
        <meta property="og:business:contact_data:website" content={DEFAULT_SITE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@omarelshemy" />
        <meta name="twitter:creator" content="@omarelshemy" />
        <meta name="twitter:title" content="Omar Elshemy | Front-End Developer, SEO Specialist, Operations Manager — Software House" />
        <meta
          name="twitter:description"
          content="Omar Elshemy — Front-End Developer (React / Next.js / TypeScript), SEO & SEO Content Expert, Humanized SEO Copywriter, Operations Manager at Modern Trade for Engineering, and Tourism Pricing Specialist. Premium Software House solutions: Landing Pages, CRM & Dashboards, Figma-to-Next.js, Core Web Vitals, Branding, Hosting, and Migration."
        />
        <meta name="twitter:image" content={`${DEFAULT_SITE_URL}/images/profile-photo.png`} />
        <meta name="twitter:image:alt" content="Omar Elshemy — Front-End Developer, SEO Specialist, Operations Manager, Tourism Pricing Expert" />
        <link rel="canonical" href={DEFAULT_SITE_URL} />
        <link rel="alternate" hrefLang="en" href={DEFAULT_SITE_URL} />
        <link rel="alternate" hrefLang="ar" href={`${DEFAULT_SITE_URL}/?lang=ar`} />
        <link rel="alternate" hrefLang="x-default" href={DEFAULT_SITE_URL} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href={DEFAULT_SITE_URL} />
        <link
          id="gf-montserrat"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
          media="print"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var l=document.getElementById('gf-montserrat');if(!l)return;function a(){l.media='all';}if(l.sheet&&l.sheet.cssRules&&l.sheet.cssRules.length)a();else l.addEventListener('load',a);})();"
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var locale = localStorage.getItem('portfolio-locale');
                  var isArabic = locale === 'ar';
                  document.documentElement.lang = isArabic ? 'ar' : 'en';
                  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
                } catch (e) {}
              })();
            `
          }}
        />
        <link
          id="fa-all-css"
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          media="print"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var l=document.getElementById('fa-all-css');if(!l)return;function a(){l.media='all';}if(l.sheet&&l.sheet.cssRules&&l.sheet.cssRules.length)a();else l.addEventListener('load',a);})();"
          }}
        />
      </Head>
      <body>
        <div className="main-bg-container">
          <div className="bg-blob blob-1"></div>
          <div className="bg-blob blob-2"></div>
        </div>

        <Main />
        <NextScript />
        <script src="/scripts/portfolio.js"></script>
      </body>
    </Html>
  )
}

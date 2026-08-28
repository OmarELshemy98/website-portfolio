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
        <meta name="application-name" content="Omar Elshemy Portfolio" />
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
        <meta name="publisher" content="Omar Elshemy" />
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
          content="Omar Elshemy is a Front-End Developer and SEO Specialist expert in React, Next.js, Tailwind CSS, TypeScript, Technical SEO, Core Web Vitals, and Schema Markup. Building modern, fast, responsive websites that rank high on Google."
        />
        <meta
          name="keywords"
          content="Omar Elshemy, Front-End Developer, SEO Specialist, React Developer, Next.js Developer, Web Developer, Alexandria, Egypt, Portfolio, Core Web Vitals, Technical SEO, Schema Markup, TypeScript, Tailwind CSS, عمر الشيمي, مطور واجهات أمامية, متخصص SEO, مطور ويب"
        />
        <meta name="subject" content="Web Development & SEO Services Portfolio" />
        <meta name="topic" content="Web Development and SEO" />
        <meta name="category" content="Technology, Web Development, SEO" />
        <meta name="classification" content="Web Development, SEO, Portfolio" />
        <meta name="abstract" content="Professional portfolio of Omar Elshemy — Front-End Developer & SEO Specialist based in Alexandria, Egypt. Available worldwide for freelance React and Next.js projects." />
        <meta name="summary" content="Omar Elshemy Portfolio — Front-End Developer & SEO Specialist. Services: React/Next.js Development, Technical SEO, Core Web Vitals, Figma to Code, Performance Optimization." />
        <meta property="og:site_name" content="Omar Elshemy Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Omar Elshemy | Front-End Developer & SEO Specialist | React & Next.js" />
        <meta
          property="og:description"
          content="Omar Elshemy is a Front-End Developer and SEO Specialist expert in React, Next.js, Core Web Vitals, and Technical SEO. Building high-ranking, fast, responsive websites."
        />
        <meta property="og:url" content={DEFAULT_SITE_URL} />
        <meta property="og:image" content={`${DEFAULT_SITE_URL}/images/profile-photo.png`} />
        <meta property="og:image:secure_url" content={`${DEFAULT_SITE_URL}/images/profile-photo.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1225" />
        <meta property="og:image:height" content="1283" />
        <meta property="og:image:alt" content="Omar Elshemy — Front-End Developer & SEO Specialist" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="ar_EG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@omarelshemy" />
        <meta name="twitter:creator" content="@omarelshemy" />
        <meta name="twitter:title" content="Omar Elshemy | Front-End Developer & SEO Specialist | React & Next.js" />
        <meta
          name="twitter:description"
          content="Omar Elshemy is a Front-End Developer and SEO Specialist expert in React, Next.js, Core Web Vitals, and Technical SEO. Building high-ranking, fast, responsive websites."
        />
        <meta name="twitter:image" content={`${DEFAULT_SITE_URL}/images/profile-photo.png`} />
        <meta name="twitter:image:alt" content="Omar Elshemy — Front-End Developer & SEO Specialist" />
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

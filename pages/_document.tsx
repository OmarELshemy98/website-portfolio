import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="google-site-verification"
          content="yTH1VahmD3v4mrUyDpaM_RH-hg9-We1ou08tr0VvhNE"
        />
        <meta name="theme-color" content="#0d1117" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="msapplication-TileColor" content="#0d1117" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Omar Elshemy" />
        <meta name="application-name" content="Omar Elshemy — Portfolio, Software House & Digital Services" />

        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="x-content-type-options" content="nosniff" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />

        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <link
          rel="preload"
          href="/images/responsive/background5-1380.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
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
      </Head>
      <body>
        <div className="main-bg-container">
          <div className="bg-blob blob-1"></div>
          <div className="bg-blob blob-2"></div>
        </div>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

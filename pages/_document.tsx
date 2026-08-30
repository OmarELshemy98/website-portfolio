import { Html, Head, Main, NextScript } from 'next/document'

const GOOGLE_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'

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
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; img-src 'self' data: https: blob:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https: ws: wss:; frame-ancestors 'self'; object-src 'none'; base-uri 'self'; form-action 'self';"
        />
        <meta
          httpEquiv="Permissions-Policy"
          content="camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()"
        />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />

        {/*
          Optimized resource hints — MAX 4 preconnects (critical origins only):
          1. fonts.googleapis.com  — Google Fonts CSS (render-critical)
          2. fonts.gstatic.com     — actual font files (render-critical)
          Everything else uses dns-prefetch (lighter) only when truly needed.
        */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/*
          Preload LCP-critical image (hero background) so the browser discovers it
          BEFORE the CSS parser does. Dramatically cuts LCP on repeat + first views.
        */}
        <link
          rel="preload"
          href="/images/responsive/background5-1380.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />

        {/*
          CRITICAL INLINE @font-face with metric overrides to eliminate CLS from font swap.
          These values tune the FALLBACK (system-ui) glyph box to match Montserrat's,
          so when Montserrat finishes swapping in, text reflow is invisible.
        */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @font-face {
                font-family: 'Montserrat';
                font-weight: 400;
                font-style: normal;
                font-display: swap;
                src: local('Montserrat'), local('Montserrat-Regular'), local('Segoe UI');
                ascent-override: 94%;
                descent-override: 26%;
                line-gap-override: 0%;
                size-adjust: 99.2%;
              }
              @font-face {
                font-family: 'Montserrat';
                font-weight: 700;
                font-style: normal;
                font-display: swap;
                src: local('Montserrat Bold'), local('Montserrat-Bold'), local('Segoe UI Bold');
                ascent-override: 94%;
                descent-override: 26%;
                line-gap-override: 0%;
                size-adjust: 99.2%;
              }
              html, body {
                font-family: 'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
            `
          }}
        />

        {/* Google Fonts — loaded asynchronously (non render-blocking) */}
        <link
          rel="preload"
          as="style"
          href={GOOGLE_FONTS_URL}
        />
        <link
          rel="stylesheet"
          href={GOOGLE_FONTS_URL}
          media="print"
          onLoad={(e) => {
            const t = e.currentTarget as HTMLLinkElement
            if (t.media !== 'all') t.media = 'all'
          }}
        />

        {/*
          Critical inline bootstrap: upgrades the deferred media="print" stylesheet
          to media="all" BEFORE React hydrates. Zero render-blocking guaranteed.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var links = document.getElementsByTagName('link');
                for (var i = 0; i < links.length; i++) {
                  if (links[i].rel === 'stylesheet' && links[i].media === 'print') {
                    links[i].media = 'all';
                  }
                }
              })();
            `
          }}
        />

        {/* Fallback for browsers/users with JS disabled */}
        <noscript>
          <link rel="stylesheet" href={GOOGLE_FONTS_URL} />
        </noscript>

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

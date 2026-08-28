import { Html, Head, Main, NextScript } from 'next/document'

const DEFAULT_SITE_URL = 'https://omarelshemy.vercel.app'

const GOOGLE_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
const FONT_AWESOME_URL =
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
const FONT_AWESOME_SRI =
  'sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=='

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
          content="default-src 'self'; img-src 'self' data: https: blob:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://www.googletagmanager.com; font-src 'self' data: https://fonts.gstatic.com https://cdnjs.cloudflare.com; connect-src 'self' https: ws: wss:; frame-ancestors 'self'; object-src 'none'; base-uri 'self'; form-action 'self';"
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
          Critical resource hints (optimized for < 4 preconnects):
          - Preconnect only to origins that deliver render-critical subresources EARLY
          - Everything else downgraded to dns-prefetch
        */}
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

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

        {/* 
          DEFERRING NON-CRITICAL EXTERNAL CSS (saves ~1,930 ms render-blocking).
          Pattern: <link rel="preload" as="style"> + <link media="print"> + inline bootstrap script upgrades media="print"→"all" BEFORE React hydrates.
          Works on every browser the instant the raw HTML is parsed (no React dependency).
        */}

        {/* Google Fonts */}
        <link rel="preload" as="style" href={GOOGLE_FONTS_URL} />
        <link
          rel="stylesheet"
          href={GOOGLE_FONTS_URL}
          media="print"
          onLoad={(e) => {
            const t = e.currentTarget as HTMLLinkElement
            if (t.media !== 'all') t.media = 'all'
          }}
        />

        {/* Font Awesome */}
        <link
          rel="preload"
          as="style"
          href={FONT_AWESOME_URL}
          integrity={FONT_AWESOME_SRI}
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href={FONT_AWESOME_URL}
          integrity={FONT_AWESOME_SRI}
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          media="print"
          onLoad={(e) => {
            const t = e.currentTarget as HTMLLinkElement
            if (t.media !== 'all') t.media = 'all'
          }}
        />

        {/* 
          Critical inline bootstrap: upgrades any deferred media="print" stylesheet
          to media="all" as soon as the browser parses this block (BEFORE React hydrates).
          This guarantees render-blocking removal even if React's onLoad handlers
          have not yet been attached.
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
          <link
            rel="stylesheet"
            href={FONT_AWESOME_URL}
            integrity={FONT_AWESOME_SRI}
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
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
        <script src="/scripts/portfolio.js"></script>
      </body>
    </Html>
  )
}

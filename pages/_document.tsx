import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <meta name="theme-color" content="#0d1117" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
        {/* Page Transition Overlay with Code Rain */}
        <div id="page-transition-overlay" className="fixed inset-0 bg-[#1a374d] z-9999 flex flex-col items-center justify-center overflow-hidden pointer-events-none opacity-0">
          <canvas id="code-rain-canvas" className="absolute top-0 left-0 w-full h-full z-0"></canvas>
          <div className="relative z-10 flex flex-col items-center text-white font-montserrat">
            <picture>
              <source srcSet="/images/logo.webp" type="image/webp" />
              <img
                src="/images/logo.png"
                alt="Omar Elshemy Logo"
                className="landing-logo-animate w-[180px] h-[180px] mb-4"
                width={180}
                height={180}
                decoding="async"
              />
            </picture>
            <div id="transition-page-name" className="text-3xl font-bold tracking-widest uppercase"></div>
            <div id="transition-loading-text" className="blink mt-4 text-sm opacity-70">Loading...</div>
          </div>
        </div>

        {/* Persistent Background blobs */}
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

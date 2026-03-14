import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </Head>
      <body>
        {/* Page Transition Overlay with Code Rain */}
        <div id="page-transition-overlay" className="fixed inset-0 bg-[#1a374d] z-[9999] flex flex-col items-center justify-center overflow-hidden pointer-events-none opacity-0">
          <canvas id="code-rain-canvas" className="absolute top-0 left-0 w-full h-full z-0"></canvas>
          <div className="relative z-10 flex flex-col items-center text-white font-montserrat">
            <img src="/images/logo.png" alt="Omar Elshemy Logo" className="landing-logo-animate w-[180px] h-[180px] mb-4" />
            <div id="transition-page-name" className="text-3xl font-bold tracking-widest uppercase"></div>
            <div className="blink mt-4 text-sm opacity-70">Loading...</div>
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

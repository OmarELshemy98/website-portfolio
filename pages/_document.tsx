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
        <link
          rel="preload"
          href="/images/responsive/profile-photo-420.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `
*,::before,::after{box-sizing:border-box}img{max-width:100%;height:auto;content-visibility:auto}
:root{--bg-dark:#181f2a;--bg-card:#232b3a;--neon:#00fff7;--neon-glow:0 0 24px #00fff7,0 0 48px #00fff744;--text-main:#fff;--text-muted:#b0b8c9;--accent:#00c3ff;--shadow:0 4px 32px 0 #000a;--radius:18px;--transition:0.4s cubic-bezier(.4,0,.2,1)}
.skip-to-main{position:absolute;transform:translate(-120%,0);top:.75rem;z-index:100000;padding:.5rem 1rem;background:var(--neon);color:#0d1117;font-weight:700;border-radius:8px;text-decoration:none;will-change:transform;transition:transform .15s ease}.skip-to-main:focus{transform:translate(0,0);left:.75rem;outline:2px solid #fff;outline-offset:2px}
html,body{height:100%;margin:0;padding:0;font-family:var(--font-montserrat),'Montserrat',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;background:var(--bg-dark);color:var(--text-main);box-sizing:border-box;overflow-x:hidden;width:100%}
body{min-height:100vh;background:#0d1117!important;overflow-x:hidden;position:relative}
main,section:not(.hero-section),.contact-page,.projects-section,.certificates-section,.skills-section,.about-section,.experience-section{padding-top:120px!important}
@media (max-width:1024px){main,section:not(.hero-section),.contact-page,.projects-section,.certificates-section,.skills-section,.about-section,.experience-section{padding-top:100px!important}}
.hero-section{padding-top:90px}
.main-bg-container{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;background:radial-gradient(circle at 50% 50%,#1a2a3a 0%,#0d1117 100%);overflow:hidden}
.bg-blob{position:absolute;width:600px;height:600px;background:radial-gradient(circle,rgba(0,255,247,.05) 0%,transparent 70%);border-radius:50%;filter:blur(80px);animation:float 20s infinite alternate;will-change:transform;contain:layout paint style}
.blob-1{top:-10%;left:-10%;animation-duration:25s}.blob-2{bottom:-10%;right:-10%;animation-duration:30s;background:radial-gradient(circle,rgba(0,195,255,.05) 0%,transparent 70%)}
@keyframes float{from{transform:translate(0,0) scale(1)}to{transform:translate(10vw,10vh) scale(1.2)}}
.navbar-container{position:fixed;top:20px;left:0;right:0;z-index:1000;padding:0 20px;pointer-events:none}
.main-navbar{max-width:1300px;margin:0 auto;height:55px;background:rgba(13,17,23,.7);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-radius:40px;border:1px solid rgba(0,255,247,.15);box-shadow:0 10px 30px rgba(0,0,0,.5),0 0 20px rgba(0,255,247,.05);transition:all .4s cubic-bezier(.4,0,.2,1);pointer-events:auto;direction:ltr}
.main-navbar.scrolled{height:50px;max-width:1200px;background:rgba(13,17,23,.9);border-color:rgba(0,255,247,.3);box-shadow:0 10px 40px rgba(0,0,0,.7),0 0 30px rgba(0,255,247,.1)}
.navbar-inner{height:100%;display:flex;align-items:center;justify-content:center;gap:20px;direction:ltr}
.nav-links{list-style:none;display:flex;gap:1.5rem;padding:0;margin:0;flex:none}
@media (max-width:1350px){.nav-links{gap:.8rem}.nav-item{font-size:.85rem;letter-spacing:1px}.main-navbar{max-width:95%}}
.nav-links.start{justify-content:flex-end;padding-inline-end:10px}.nav-links.end{justify-content:flex-start;padding-inline-start:10px}
.nav-item{color:rgba(255,255,255,.7);text-decoration:none;font-size:.95rem;font-weight:600;text-transform:uppercase;letter-spacing:1.5px;transition:all .3s ease;position:relative}
.nav-item.active{color:#fff;text-shadow:0 0 10px rgba(0,255,247,.4)}
.logo-container{position:relative;z-index:10}
.nav-logo-wrapper{display:block;transform:translateY(0);transition:transform .3s ease}
.nav-logo-wrapper:hover{transform:translateY(-5px)}
.logo-circle{position:relative;width:70px;height:70px;background:#0d1117;border-radius:50%;padding:4px;border:2px solid rgba(0,255,247,.3);box-shadow:0 5px 15px rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;transition:all .4s ease;overflow:hidden}
.logo-img{width:100%;height:100%;object-fit:contain;border-radius:50%;z-index:2;transition:transform .7s cubic-bezier(.4,0,.2,1)}
.logo-glow{position:absolute;inset:0;background:radial-gradient(circle at center,rgba(0,255,247,.2) 0%,transparent 70%);z-index:1;opacity:.5;transition:opacity .3s ease}
.main-navbar.scrolled .logo-circle{width:55px;height:55px;border-color:var(--neon);box-shadow:0 0 20px rgba(0,255,247,.3)}
.mobile-menu-btn{background:rgba(255,255,255,.05);border:1px solid rgba(0,255,247,.2);padding:10px;border-radius:12px;cursor:pointer;transition:all .3s ease;z-index:10001;position:relative}
.menu-icon{width:24px;height:18px;position:relative;display:flex;flex-direction:column;justify-content:space-between}
.menu-icon span{display:block;width:100%;height:2px;background:#fff;border-radius:2px;transition:all .3s ease}
@media (max-width:1024px){.navbar-container{top:10px;padding:0 10px}.main-navbar{height:65px;border-radius:20px}.logo-circle{width:65px;height:65px}}
.mobile-overlay{position:fixed;inset:0;background:rgba(13,17,23,.92);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px 2rem 60px;opacity:0;visibility:hidden;transition:all .5s ease;overflow:visible!important;min-height:100vh;height:auto}
.mobile-overlay.show-menu{opacity:1;visibility:visible}
.mobile-nav-list{list-style:none;padding:0;margin:0;text-align:center;display:flex;flex-direction:column;gap:1.8rem;width:100%;justify-content:center;align-items:center}
.mobile-nav-item{display:block;font-size:clamp(1.3rem,4vw,2rem);font-weight:800;color:#fff;text-decoration:none;margin:0;text-transform:uppercase;letter-spacing:2px;line-height:1.4;transition:all .3s ease;word-wrap:break-word;hyphens:auto}
.close-icon{position:absolute;top:25px;right:25px;font-size:3rem;color:#fff;cursor:pointer;z-index:10000}
.hero-section{position:relative;overflow:hidden;padding-top:0;padding-bottom:0;min-height:100vh;height:100vh;display:flex;align-items:center;justify-content:center;background:none;contain:layout paint;content-visibility:auto}
.animated-bg{position:absolute;inset:0;width:100%;height:100%;z-index:0;background:linear-gradient(120deg,#00fff7 0%,#232b3a 40%,#00c3ff 100%);background-size:200% 200%;animation:animatedGradient 16s ease-in-out infinite;opacity:.18;filter:blur(2px) brightness(1.08);will-change:background-position;contain:layout paint style}
.animated-bg::before,.animated-bg::after{content:'';position:absolute;border-radius:50%;filter:blur(32px);opacity:.55;pointer-events:none;will-change:transform;contain:layout paint style}
.animated-bg::before{width:420px;height:420px;left:-120px;top:10%;background:radial-gradient(circle at 30% 30%,#00fff7 0%,#00c3ff 80%,transparent 100%);animation:blobMove1 18s ease-in-out infinite alternate;transform:translate3d(0,0,0)}
.animated-bg::after{width:340px;height:340px;right:-100px;bottom:0;background:radial-gradient(circle at 70% 70%,#00c3ff 0%,#00fff7 80%,transparent 100%);animation:blobMove2 22s ease-in-out infinite alternate;transform:translate3d(0,0,0)}
@keyframes animatedGradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
@keyframes blobMove1{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(calc(60vw + 120px),30vh,0)}}
@keyframes blobMove2{0%,100%{transform:translate3d(0,0,0)}50%{transform:translate3d(calc(-60vw + 100px),-60vh,0)}}
.hero-content{position:relative;z-index:1;display:flex;align-items:center;gap:4rem;width:100%;max-width:1200px;justify-content:center;padding:0 2rem}
@media (max-width:992px){.hero-content{flex-direction:column-reverse;text-align:center;gap:2.5rem;padding-top:2rem;padding-bottom:2rem;height:auto;min-height:100vh}.hero-text h1{font-size:1.8rem}.hero-name{font-size:2rem}.hero-btns{justify-content:center;flex-wrap:wrap;gap:1rem}.hero-btns a,.hero-btns button{width:100%;max-width:280px}}
.hexagon-img{width:clamp(280px,35vw,420px);height:clamp(280px,35vw,420px);aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;position:relative;transition:all .5s cubic-bezier(.4,0,.2,1);animation:float-profile 6s ease-in-out infinite;flex-shrink:0;z-index:1;contain:layout paint}
@keyframes float-profile{0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}}
.hexagon-img::before,.hexagon-img::after{content:'';position:absolute;border-radius:50%;transition:all .5s ease;will-change:transform}
.hexagon-img::before{inset:-15px;border:clamp(3px,.8vw,5px) solid var(--neon);border-left-color:transparent;border-right-color:transparent;animation:rotate-ring 3s linear infinite;z-index:1;filter:drop-shadow(0 0 15px var(--neon))}
.hexagon-img::after{inset:-35px;border:2px dashed #00c3ff;border-top-color:transparent;border-bottom-color:transparent;animation:rotate-ring-reverse 10s linear infinite;z-index:0;opacity:.4;filter:blur(1px)}
@keyframes rotate-ring{from{transform:rotate(0)}to{transform:rotate(360deg)}}
@keyframes rotate-ring-reverse{from{transform:rotate(360deg)}to{transform:rotate(0)}}
.profile-img{width:85%;height:85%;object-fit:cover;border-radius:50%;position:relative;z-index:2;border:clamp(5px,1vw,8px) solid #1a1f2b;box-shadow:0 0 40px rgba(0,0,0,.7),inset 0 0 30px rgba(0,255,247,.2);background:#1a1f2b;aspect-ratio:1/1;transition:all .4s ease;filter:contrast(1.1) brightness(1.05);image-rendering:-webkit-optimize-contrast}
.hero-text{flex:1;min-width:260px}
.hero-text h1{font-size:2.2rem;font-weight:700;margin:0 0 1.2rem 0;color:#fff}
.hero-name{color:var(--neon);text-shadow:var(--neon-glow);font-size:2.5rem;font-weight:700}
.highlight{color:var(--neon);text-shadow:var(--neon-glow)}
.hero-text p{color:var(--text-muted);font-size:1.1rem;margin-bottom:1.5rem}
.hero-btns{display:flex;gap:1.2rem}
.btn.neon-btn{background:var(--neon);color:#181f2a;font-weight:700;border:none;border-radius:8px;padding:.7rem 2.2rem;font-size:1.1rem;box-shadow:0 0 16px #00fff799;cursor:pointer;transition:background .2s,color .2s,box-shadow .3s;text-decoration:none;display:inline-block}
.btn.neon-btn:hover,.btn.neon-btn:focus{background:#00c3ff;color:#fff;box-shadow:0 0 32px #00fff7cc}
.bg-particles{position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:-1;background:radial-gradient(circle at 50% 50%,rgba(0,255,247,.02) 0%,transparent 80%);contain:layout paint style}
@media (max-width:1024px){.hero-content{gap:3rem}.hexagon-img{width:320px;height:320px}}
@media (max-width:768px){.hero-section{height:auto;min-height:100vh;padding:120px 0 60px 0}.hero-content{flex-direction:column-reverse;text-align:center;gap:2rem}.hexagon-img{width:320px;height:320px;margin-bottom:2rem;animation:float-profile 5s ease-in-out infinite}.profile-img{border-width:6px;box-shadow:0 0 35px rgba(0,0,0,.6),inset 0 0 25px rgba(0,255,247,.15)}.hero-text h1{font-size:1.8rem}.hero-name{font-size:2rem}.hero-text p{font-size:1rem;padding:0 10px}.hero-btns{justify-content:center;flex-wrap:wrap;gap:1rem}.hero-btns a,.hero-btns button{width:100%;max-width:280px}}
@media (max-width:480px){.hexagon-img{width:300px;height:300px;inset:initial}}
@media (max-width:360px){.hexagon-img{width:260px;height:260px}}
.lang-btn{align-items:center;justify-content:center;min-width:52px;height:36px;border:1px solid rgba(0,255,247,.35);border-radius:999px;background:rgba(0,255,247,.08);color:#fff;font-weight:700;letter-spacing:.8px;transition:all .25s ease;cursor:pointer}
.lang-btn:hover{background:rgba(0,255,247,.2);border-color:var(--neon);box-shadow:0 0 12px rgba(0,255,247,.35)}
.footer-content-simple{display:flex;align-items:center;justify-content:space-between;margin-bottom:25px}
.footer-brand-simple{display:flex;align-items:center;gap:15px}
.footer-brand-simple .logo-circle{width:50px;height:50px}
.footer-name-simple{font-size:1.2rem;font-weight:800;color:#fff;margin:0}
.footer-tagline-simple{color:var(--text-muted);font-size:.8rem;margin:0}
.footer-bottom-simple{text-align:center;padding-top:20px;border-top:1px solid rgba(255,255,255,.05);color:var(--text-muted);font-size:.8rem}
.main-footer{position:relative;background:#0d1117;padding:40px 0 20px;overflow:hidden;border-top:1px solid rgba(0,255,247,.1)}
.reveal{opacity:0;transform:translateY(30px);transition:all .8s cubic-bezier(.4,0,.2,1)}.reveal.active{opacity:1;transform:translateY(0)}
[dir="rtl"] body{direction:rtl}
[dir="rtl"] .hero-content{flex-direction:row-reverse}
[dir="rtl"] .hero-text,[dir="rtl"] .about-text,[dir="rtl"] .project-description,[dir="rtl"] .experience-content,[dir="rtl"] .contact-page{text-align:right}
[dir="rtl"] .close-icon{right:auto;left:30px}
[dir="rtl"] .mobile-nav-list{text-align:right}
            `
          }}
        />

        <script src="/scripts/locale-init.js" />
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

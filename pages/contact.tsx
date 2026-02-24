import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar />
      <section id="social-media" className="social-media-section">
        <h2 className="section-title">Connect <span className="highlight">With Me!</span></h2>
        <div className="social-icons">
          <a href="https://github.com/omarelshemy98" className="social-icon github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.577 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.372.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.57.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/omar-elshemy" className="social-icon linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
            </svg>
          </a>
          <a href="https://wa.me/201026238072" className="social-icon whatsapp" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.366.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 6.318c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8 4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8zm0-18C6.477 2.7 2.7 6.477 2.7 12c0 5.523 3.777 9.3 9.3 9.3 5.523 0 9.3-3.777 9.3-9.3 0-5.523-3.777-9.3-9.3-9.3z"/>
            </svg>
          </a>
          <a href="mailto:omarelshemy010@gmail.com" className="social-icon gmail" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
            <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.99 7.99c.39.39 1.02.39 1.41 0L20 10.01V20H4z"/>
            </svg>
          </a>
          <a href="tel:01026238072" className="social-icon phone" target="_blank" rel="noopener noreferrer" aria-label="Phone">
            <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
              <path d="M6.54 3.77l2.2-.73a2 2 0 012.44 1.01l1.1 2.34a2 2 0 01-.45 2.32l-1.27 1.27a13.06 13.06 0 005.66 5.66l1.27-1.27a2 2 0 012.32-.45l2.34 1.1a2 2 0 011.01 2.44l-.73 2.2a2 2 0 01-2.11 1.36c-2.2-.22-7.13-2.13-10.6-5.6S2.59 8.07 2.37 5.87A2 2 0 013.73 3.77z"/>
            </svg>
          </a>
        </div>
      </section>
      <Footer />
    </>
  )
}

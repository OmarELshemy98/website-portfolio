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
      <section className="contact-section">
        <h2 className="section-title">Contact</h2>
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows={5}></textarea>
          <a className="btn service-btn" href="mailto:omarelshemy010@gmail.com">Send Email</a>
          <a className="btn neon-btn" href="https://wa.me/201026238072" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </section>
      <Footer />
    </>
  )
}

import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Services() {
  const services = [
    { title: 'Landing Pages', desc: 'Modern, responsive landing pages optimized for conversions.' },
    { title: 'Corporate Websites', desc: 'Clean, accessible company sites with SEO best practices.' },
    { title: 'UI Components', desc: 'Reusable UI building blocks tailored to your brand.' },
    { title: 'Performance Optimization', desc: 'Faster load times and better Core Web Vitals.' }
  ]
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <Navbar />
      <section className="services-section">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">⚡</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

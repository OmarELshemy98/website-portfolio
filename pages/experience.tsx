import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Experience() {
  const items = [
    { label: 'Years of Experience', value: 3 },
    { label: 'Projects Completed', value: 20 },
    { label: 'Certificates', value: 30 }
  ]
  return (
    <>
      <Head>
        <title>Experience</title>
      </Head>
      <Navbar />
      <section className="about-section">
        <h2 className="section-title">Experience</h2>
        <div className="portfolio-grid">
          {items.map((it, i) => (
            <div key={i} className="portfolio-item" style={{ padding: '1rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--neon)' }}>{it.value}</div>
              <div style={{ color: 'var(--text-muted)' }}>{it.label}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

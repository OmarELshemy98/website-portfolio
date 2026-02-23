import Head from 'next/head'
import type { GetStaticProps } from 'next'
import { certifications as allCerts, type Certification } from '@/data/certifications'

type Props = {
  certs: Certification[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      certs: allCerts
    }
  }
}

export default function Certifications({ certs }: Props) {
  const categories: Array<Certification['category']> = ['Udemy', 'SoloLearn', 'MaharaTech', 'Other']
  return (
    <>
      <Head>
        <title>Certificates</title>
      </Head>
      <nav className="main-navbar dark-navbar" role="navigation" aria-label="Main Navigation">
        <div className="navbar-inner">
          <div className="logo-text">
            <span className="logo-role">Front end developer</span><br />
            <span className="logo-name">Omar Elshemy</span>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/certifications" className="active">Certificates</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
        </div>
      </nav>
      <section className="certifications-section">
        {categories.map(cat => {
          const items = certs.filter(c => c.category === cat)
          return (
            <div key={cat} className="certificate-category">
              <h2 className="section-title">{cat}</h2>
              <div className="certificate-grid">
                {items.map(c => (
                  <div key={c.id} className="certificate-card" data-certificate-id={c.id}>
                    <img src={c.image} alt={c.title} className="certificate-image" loading="lazy" />
                    <div className="certificate-title">{c.title}</div>
                    <div className="certificate-meta">
                      <p className="certificate-description">{c.description}</p>
                      <p><strong>Issue date:</strong> {c.issueDate || '—'}</p>
                      <p><strong>Credential ID:</strong> {c.credentialId || '—'}</p>
                      <p><strong>Credential URL:</strong> {c.credentialUrl ? <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer">{c.credentialUrl}</a> : '—'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </section>
      <div id="certificateModal" className="certificate-modal">
        <div className="certificate-modal-content">
          <button id="certificateModalClose" className="close-button" aria-label="Close">×</button>
          <img id="certificateModalImage" alt="" />
        </div>
      </div>
      <script src="/scripts/certifications.js" defer></script>
    </>
  )
}

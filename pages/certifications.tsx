import Head from 'next/head'
import Script from 'next/script'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
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
  const categories: Array<{ id: Certification['category'], title: string }> = [
    { id: 'MaharaTech', title: 'Mahara-Tech (ITI Platform)' },
    { id: 'SoloLearn', title: 'SoloLearn' },
    { id: 'Udemy', title: 'Udemy' },
    { id: 'Other', title: 'Professional & Other Certificates' }
  ]
  
  return (
    <>
      <Head>
        <title>Certificates - Omar Elshemy | Frontend Developer</title>
      </Head>
      <Navbar />
      
      <section id="certificates" className="certificates-section">
        <h2 className="section-title">My <span className="highlight">Certificates</span></h2>
        
        {categories.map(cat => {
          const items = certs.filter(c => c.category === cat.id)
          if (items.length === 0) return null
          
          return (
            <div key={cat.id} className="certificate-category">
              <h3>{cat.title}</h3>
              <div className="certificates-list">
                {items.map(c => (
                  <div key={c.id} className="certificate-card" data-certificate={c.id}>
                    <img src={c.image} alt={c.title} loading="lazy" />
                    <div className="certificate-title">{c.title}</div>
                    <button 
                      className="read-more-btn"
                      data-cert-title={c.title}
                      data-cert-image={c.image}
                      data-cert-desc={c.description}
                      data-cert-date={c.issueDate}
                      data-cert-id-val={c.credentialId}
                      data-cert-url={c.credentialUrl}
                    >
                      Read More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </section>

      {/* Modal exactly like in the HTML */}
      <div className="modal-overlay" id="certificateModal">
        <div className="modal-content">
          <button className="modal-close" id="certificateModalClose">&times;</button>
          <img className="modal-image" id="certificateModalImage" src="" alt="" />
          <div className="modal-body">
            <h3 className="modal-title" id="certificateModalTitle"></h3>
            <p className="modal-description" id="certificateModalDescription"></p>
            <div id="modalExtraDetails" className="mt-4 text-sm text-gray-400 space-y-1">
              <p id="certificateModalDateContainer"><strong>Issue Date:</strong> <span id="certificateModalDate"></span></p>
              <p id="certificateModalIdContainer"><strong>Credential ID:</strong> <span id="certificateModalId"></span></p>
              <p id="certificateModalUrlContainer"><strong>Credential URL:</strong> <a id="certificateModalUrl" href="#" target="_blank" className="text-neon hover:underline"></a></p>
            </div>
          </div>
        </div>
      </div>

      <Script src="/scripts/certifications.js" strategy="afterInteractive" />
      <Footer />
    </>
  )
}

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
  const mainCategories: Array<Certification['category']> = ['Udemy', 'SoloLearn', 'MaharaTech', 'Other']
  
  return (
    <>
      <Head>
        <title>Certificates</title>
      </Head>
      <Navbar />
      <section className="certifications-section px-4 py-24 max-w-[1400px] mx-auto mt-20">
        {mainCategories.map((mainCat, index) => {
          const mainCatItems = certs.filter(c => c.category === mainCat)
          if (mainCatItems.length === 0) return null
          
          return (
            <div key={mainCat} className="mb-24 relative">
              {/* Section Separator Line */}
              {index > 0 && (
                <div className="absolute -top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent"></div>
              )}

              {/* Centered Main Title */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter inline-block relative group">
                  <span className="relative z-10">{mainCat} Platform</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-neon/20 -skew-x-12 group-hover:bg-neon/40 transition-all duration-500"></span>
                  {/* Decorative dots */}
                  <div className="flex justify-center gap-2 mt-4">
                    <div className="w-2 h-2 rounded-full bg-neon animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-75"></div>
                    <div className="w-2 h-2 rounded-full bg-neon animate-pulse delay-150"></div>
                  </div>
                </h2>
              </div>

              {mainCat === 'Udemy' ? (
                // Special handling for Udemy subcategories
                Object.entries(
                  mainCatItems.reduce((acc, item) => {
                    const sub = item.subcategory || 'General'
                    if (!acc[sub]) acc[sub] = []
                    acc[sub].push(item)
                    return acc
                  }, {} as Record<string, Certification[]>)
                ).map(([subTitle, subItems]) => (
                  <div key={subTitle} className="mb-16 last:mb-0">
                    <div className="flex items-center gap-4 mb-8">
                      <h3 className="text-xl font-bold text-neon/80 uppercase tracking-[0.2em] whitespace-nowrap pl-4 border-l-4 border-neon">
                        {subTitle}
                      </h3>
                      <div className="h-px w-full bg-neon/10"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                      {subItems.map(c => <CertificationCard key={c.id} c={c} />)}
                    </div>
                  </div>
                ))
              ) : (
                // Normal grid for other platforms
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {mainCatItems.map(c => <CertificationCard key={c.id} c={c} />)}
                </div>
              )}
            </div>
          )
        })}
      </section>

      {/* Modern Certificate Modal */}
      <div id="certificateModal" className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-dark/95 backdrop-blur-md opacity-0 pointer-events-none transition-opacity duration-300">
        <div className="relative w-full max-w-5xl bg-[#1a2332] rounded-3xl border border-neon/20 shadow-2xl overflow-hidden transform scale-95 transition-transform duration-300 flex flex-col md:flex-row max-h-[90vh]">
          <button id="certificateModalClose" className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-dark/50 text-white text-2xl hover:bg-neon hover:text-dark transition-all duration-300">×</button>
          
          {/* Image Side */}
          <div className="w-full md:w-3/5 bg-black/40 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-neon/10">
            <img id="certificateModalImage" className="max-w-full max-h-full object-contain shadow-2xl" src="" alt="" />
          </div>

          {/* Details Side */}
          <div className="w-full md:w-2/5 p-8 overflow-y-auto">
            <h2 id="certificateModalTitle" className="text-2xl font-black text-neon mb-6 leading-tight"></h2>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2 opacity-50">Description</h4>
                <p id="certificateModalDesc" className="text-text-muted text-base leading-relaxed"></p>
              </div>

              <div className="grid grid-cols-1 gap-6 pt-4">
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1 opacity-50">Issue Date</h4>
                  <p id="certificateModalDate" className="text-neon font-medium"></p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1 opacity-50">Credential ID</h4>
                  <p id="certificateModalId" className="text-neon font-mono text-sm break-all"></p>
                </div>
                <div id="certificateModalUrlContainer">
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1 opacity-50">Credential URL</h4>
                  <a id="certificateModalUrl" href="" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-neon underline break-all inline-block transition-colors"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script src="/scripts/certifications.js" strategy="afterInteractive" />
      <Footer />
    </>
  )
}

function CertificationCard({ c }: { c: Certification }) {
  return (
    <div 
      className="certificate-card group bg-dark/40 border border-neon/10 rounded-2xl overflow-hidden hover:border-neon/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,247,0.1)] flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-black/20">
        <img 
          src={c.image} 
          alt={c.title} 
          className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" 
          loading="lazy" 
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-4 line-clamp-2 min-h-[3.5rem] group-hover:text-neon transition-colors">
          {c.title}
        </h3>
        <button 
          className="read-more-btn mt-auto w-full py-2.5 rounded-xl border border-neon/30 text-neon font-bold text-sm hover:bg-neon hover:text-dark transition-all duration-300"
          data-cert-id={c.id}
          data-cert-title={c.title}
          data-cert-image={c.image}
          data-cert-desc={c.description}
          data-cert-date={c.issueDate || '—'}
          data-cert-id-val={c.credentialId || '—'}
          data-cert-url={c.credentialUrl || ''}
        >
          Read More
        </button>
      </div>
    </div>
  )
}

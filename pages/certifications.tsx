import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import type { GetStaticProps } from 'next'
import { certifications as allCerts, type Certification } from '../data/certifications'
import { useI18n } from '@/lib/i18n'

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
  const { locale } = useI18n()
  const isAr = locale === 'ar'
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedCert])

  const getArabicCertText = (cert: Certification) => {
    const monthMap: Record<string, string> = {
      january: 'يناير',
      february: 'فبراير',
      march: 'مارس',
      april: 'أبريل',
      may: 'مايو',
      june: 'يونيو',
      july: 'يوليو',
      august: 'أغسطس',
      september: 'سبتمبر',
      october: 'أكتوبر',
      november: 'نوفمبر',
      december: 'ديسمبر'
    }
    const safeDate = cert.issueDate || ''
    const date = safeDate.replace(
      /(january|february|march|april|may|june|july|august|september|october|november|december)/i,
      (match) => monthMap[match.toLowerCase()] || match
    )

    return {
      title: cert.titleAr || `شهادة ${cert.title}`,
      description: cert.descriptionAr || `شهادة احترافية موثقة في مجال ${cert.subcategory || 'تطوير الويب'} تثبت إتمام التدريب بنجاح واكتساب مهارات عملية قابلة للتطبيق في المشاريع.`,
      date
    }
  }

  const categories: Array<{ id: Certification['category'], title: string }> = [
    { id: 'AMIT', title: isAr ? 'دبلومة AMIT (البرمجة المتكاملة)' : 'AMIT Diploma (Full-Stack Development)' },
    { id: 'MaharaTech', title: isAr ? 'مهارة تك (منصة ITI)' : 'Mahara-Tech (ITI Platform)' },
    { id: 'SoloLearn', title: 'SoloLearn' },
    { id: 'Udemy', title: 'Udemy' },
    { id: 'Other', title: isAr ? 'شهادات احترافية أخرى' : 'Professional & Other Certificates' }
  ]

  const activeCertData = selectedCert ? (isAr ? getArabicCertText(selectedCert) : {
    title: selectedCert.title,
    description: selectedCert.description,
    date: selectedCert.issueDate
  }) : null
  
  return (
    <>
      <SEO page="certifications" />
      <Navbar />
      
      <section id="certificates" className="certificates-section pt-32 pb-20 px-4 max-w-[1200px] mx-auto min-h-screen">
        <h1 className="section-title text-center text-4xl font-bold mb-12">{isAr ? 'شهاداتي' : 'My'} <span className="highlight text-neon">{isAr ? 'الشهادات' : 'Certificates'}</span></h1>
        
        {(!certs || certs.length === 0) && (
          <div className="text-center py-20 text-gray-400">
            {isAr ? 'لا توجد شهادات حاليًا.' : 'No certificates found.'}
          </div>
        )}

        {categories.map(cat => {
          const items = certs.filter(c => c.category === cat.id)
          if (items.length === 0) return null
          
          return (
            <div key={cat.id} className="certificate-category mb-20">
              <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-neon pl-4">{cat.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((c, idx) => {
                  const localized = isAr ? getArabicCertText(c) : null
                  const title = localized?.title || c.title
                  return (
                  <div 
                    key={`${c.id}-${idx}`} 
                    className="certificate-card group bg-[#1a2332] rounded-2xl overflow-hidden border border-white/5 hover:border-neon/30 transition-all duration-500 shadow-xl flex flex-col h-full cursor-pointer" 
                    onClick={() => setSelectedCert(c)}
                  >
                    <div className="relative aspect-4/3 ">
                      <img 
                        src={c.image} 
                        alt={title} 
                        className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" 
                        loading="lazy" 
                      />
                    </div>
                    <div className="p-6 flex flex-col grow">
                      <h3 className="text-lg font-bold text-white mb-6 line-clamp-2 min-h-14 group-hover:text-neon transition-colors">
                        {title}
                      </h3>
                      <button 
                        className="read-more-btn mt-auto w-full py-3 rounded-xl border border-neon/30 text-neon font-bold text-sm hover:bg-neon hover:text-dark transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCert(c);
                        }}
                      >
                        {isAr ? 'اقرأ المزيد' : 'Read More'}
                      </button>
                    </div>
                  </div>
                )})}
              </div>
            </div>
          )
        })}
      </section>

      {/* PORTAL MODAL - UNIQUE CLASSES */}
      {mounted && createPortal(
        <div 
          className={`cert-portal-overlay ${selectedCert ? 'is-active' : ''}`} 
          onClick={(e) => {
            if ((e.target as HTMLElement).classList.contains('cert-portal-overlay')) setSelectedCert(null);
          }}
        >
          <div className="cert-portal-content">
            <button 
              className="cert-portal-close" 
              onClick={() => setSelectedCert(null)}
            >&times;</button>
            
            {selectedCert && (
              <div className="cert-portal-inner">
                <div className="cert-portal-img-container">
                   <img className="cert-portal-image" src={selectedCert.image} alt={activeCertData?.title} />
                </div>
                <div className="cert-portal-body">
                  <h3 className="cert-portal-title">{activeCertData?.title}</h3>
                  <div className="cert-portal-description-scroll">
                    <p className="cert-portal-description">{activeCertData?.description}</p>
                  </div>
                  <div className="cert-portal-details">
                    {selectedCert.issuingOrg && (
                      <p><strong>{isAr ? 'الجهة المانحة:' : 'Issuing Organization:'}</strong> <span className="text-neon">{selectedCert.issuingOrg}</span></p>
                    )}
                    {activeCertData?.date && (
                      <p><strong>{isAr ? 'تاريخ الإصدار:' : 'Issue Date:'}</strong> <span>{activeCertData.date}</span></p>
                    )}
                    {selectedCert.credentialId && (
                      <p><strong>{isAr ? 'رقم الشهادة:' : 'Credential ID:'}</strong> <span>{selectedCert.credentialId}</span></p>
                    )}
                    {selectedCert.credentialUrl && (
                      <div className="mt-6">
                         <a href={selectedCert.credentialUrl} target="_blank" rel="noopener noreferrer" className="cert-portal-link">
                           {isAr ? 'عرض الشهادة الأصلية' : 'View Verified Certificate'}
                         </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}

      <Footer />
    </>
  )
}

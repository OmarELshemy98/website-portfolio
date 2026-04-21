import Script from 'next/script'
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
      title: `شهادة ${cert.title}`,
      description: `شهادة احترافية موثقة في مجال ${cert.subcategory || 'تطوير الويب'} تثبت إتمام التدريب بنجاح واكتساب مهارات عملية قابلة للتطبيق في المشاريع.`,
      date
    }
  }

  const categories: Array<{ id: Certification['category'], title: string }> = [
    { id: 'MaharaTech', title: isAr ? 'مهارة تك (منصة ITI)' : 'Mahara-Tech (ITI Platform)' },
    { id: 'SoloLearn', title: 'SoloLearn' },
    { id: 'Udemy', title: 'Udemy' },
    { id: 'Other', title: isAr ? 'شهادات احترافية أخرى' : 'Professional & Other Certificates' }
  ]
  
  return (
    <>
      <SEO 
        title={isAr ? 'الشهادات الاحترافية | عمر الشيمي - خبرات موثقة' : 'Professional Certifications | Omar Elshemy - Verified Expertise'} 
        description={isAr ? 'استعرض الشهادات والإنجازات الاحترافية لعمر الشيمي من منصات مثل MaharaTech و SoloLearn و Udemy في مجال تطوير الواجهات.' : 'View the professional certifications and achievements of Omar Elshemy. Verified expertise from MaharaTech, SoloLearn, Udemy, and more in Front-End Development.'}
      />
      <Navbar />
      
      <section id="certificates" className="certificates-section pt-32 pb-20 px-4 max-w-[1200px] mx-auto min-h-screen">
        <h2 className="section-title text-center text-4xl font-bold mb-12">{isAr ? 'شهاداتي' : 'My'} <span className="highlight text-neon">{isAr ? 'الشهادات' : 'Certificates'}</span></h2>
        
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
              <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-neon pl-4">{cat.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((c, idx) => {
                  const localized = isAr ? getArabicCertText(c) : null
                  const title = localized?.title || c.title
                  const description = localized?.description || c.description
                  return (
                  <div key={`${c.id}-${idx}`} className="certificate-card group bg-[#1a2332] rounded-2xl overflow-hidden border border-white/5 hover:border-neon/30 transition-all duration-500 shadow-xl flex flex-col h-full" data-certificate={`${c.id}-${idx}`}>
                    <div className="relative aspect-[4/3] ">
                      <img 
                        src={c.image} 
                        alt={title} 
                        className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" 
                        loading="lazy" 
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="text-lg font-bold text-white mb-6 line-clamp-2 min-h-[3.5rem] group-hover:text-neon transition-colors">
                        {title}
                      </h4>
                      <button 
                        className="read-more-btn mt-auto w-full py-3 rounded-xl border border-neon/30 text-neon font-bold text-sm hover:bg-neon hover:text-dark transition-all duration-300"
                        data-cert-title={title}
                        data-cert-image={c.image}
                        data-cert-desc={description}
                        data-cert-date={localized?.date || c.issueDate}
                        data-cert-id-val={c.credentialId}
                        data-cert-url={c.credentialUrl}
                        data-cert-org={c.issuingOrg || cat.title}
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

      {/* Modal exactly like in the HTML */}
      <div className="modal-overlay" id="certificateModal">
        <div className="modal-content">
          <button className="modal-close" id="certificateModalClose">&times;</button>
          <img className="modal-image" id="certificateModalImage" src="" alt="" />
          <div className="modal-body">
            <h3 className="modal-title" id="certificateModalTitle"></h3>
            <p className="modal-description" id="certificateModalDescription"></p>
            <div id="modalExtraDetails" className="mt-4 text-sm text-gray-400 space-y-2">
              <p id="certificateModalOrgContainer"><strong>{isAr ? 'الجهة المانحة:' : 'Issuing Organization:'}</strong> <span id="certificateModalOrg" className="text-neon"></span></p>
              <p id="certificateModalDateContainer"><strong>{isAr ? 'تاريخ الإصدار:' : 'Issue Date:'}</strong> <span id="certificateModalDate"></span></p>
              <p id="certificateModalIdContainer"><strong>{isAr ? 'رقم الشهادة:' : 'Credential ID:'}</strong> <span id="certificateModalId"></span></p>
              <p id="certificateModalUrlContainer"><strong>{isAr ? 'رابط الشهادة:' : 'Credential URL:'}</strong> <a id="certificateModalUrl" href="#" target="_blank" className="text-neon hover:underline">{isAr ? 'عرض الشهادة' : 'View Certificate'}</a></p>
            </div>
          </div>
        </div>
      </div>

      <Script src="/scripts/certifications.js" strategy="afterInteractive" />
      <Footer />
    </>
  )
}

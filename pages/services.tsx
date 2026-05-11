import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import { useI18n } from '@/lib/i18n'
import OptimizedImg from '@/components/OptimizedImg'

export default function Services() {
  const { locale, t } = useI18n()
  const isAr = locale === 'ar'

  interface ServiceItem {
    title: string
    description: string
    image: string
    features: string[]
  }

  const services = t<ServiceItem[]>('services.items')

  return (
    <>
      <SEO 
        title={t('services.title') + ' | Omar Elshemy'} 
        description={t('services.subtitle')}
      />
      <Navbar />
      <main className="luxury-bg text-white min-h-screen font-montserrat overflow-x-hidden">
        
        {/* --- LUXURY HERO SECTION --- */}
        <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 px-4">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-neon-cyan/10 rounded-full blur-[150px] animate-pulse"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '3s' }}></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="glass-badge mb-8 reveal">
              <span className="text-neon-cyan text-xs font-black tracking-[0.3em] uppercase">
                {isAr ? 'حلول رقمية متكاملة' : 'Premium Digital Solutions'}
              </span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black mb-10 leading-[0.9] tracking-tighter reveal">
              <span className="block mb-4 text-white">{isAr ? 'خدمات' : 'Elite'}</span>
              <span className="elite-text">{isAr ? 'احترافية' : 'Services'}</span>
            </h1>

            <p className="text-xl md:text-3xl text-text-muted max-w-4xl mx-auto leading-relaxed font-medium reveal" style={{ animationDelay: '0.2s' }}>
              {t('services.subtitle')}
            </p>

            <div className="mt-16 flex flex-col items-center gap-6 reveal" style={{ animationDelay: '0.4s' }}>
               <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                 <span className="relative flex h-3 w-3">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-cyan"></span>
                 </span>
                 <span className="text-sm font-bold text-white/80 tracking-wide uppercase">
                   {isAr ? 'متاح للمشاريع الجديدة' : 'Available for new projects'}
                 </span>
               </div>
            </div>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 animate-bounce">
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white vertical-text">{isAr ? 'اسحب' : 'Scroll'}</span>
            <div className="w-[2px] h-16 bg-linear-to-b from-neon-cyan to-transparent"></div>
          </div>
        </section>

        {/* --- SERVICES SECTIONS --- */}
        <div className="relative">
          {services.map((service, index) => (
            <section 
              key={index} 
              className={`relative py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden ${index % 2 === 1 ? 'bg-white/[0.01]' : 'bg-transparent'}`}
            >
              {/* Background Number */}
              <div className={`absolute top-20 ${index % 2 === 1 ? 'left-10' : 'right-10'} text-[15rem] font-black text-white/[0.02] select-none leading-none z-0`}>
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="max-w-7xl mx-auto relative z-10">
                <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
                  
                  {/* Visual Side */}
                  <div className="w-full lg:w-1/2 group">
                    <div className="relative">
                      {/* Decorative elements around image */}
                      <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-neon-cyan/30 rounded-tl-3xl group-hover:-top-8 group-hover:-left-8 transition-all duration-500"></div>
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-accent/30 rounded-br-3xl group-hover:-bottom-8 group-hover:-right-8 transition-all duration-500"></div>
                      
                      {/* Main Image Container */}
                      <div className="relative overflow-hidden rounded-3xl bg-gray-900 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-all duration-700 group-hover:translate-y-[-10px] group-hover:shadow-neon-cyan/10 group-hover:shadow-2xl">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full aspect-[16/10] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#0b0f17] via-transparent to-transparent opacity-60"></div>
                        
                        {/* Overlay Icon or Badge */}
                        <div className="absolute top-6 right-6 px-4 py-2 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-neon-cyan text-xs font-black tracking-widest uppercase">
                          {isAr ? 'جودة ممتازة' : 'Premium Quality'}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-neon-cyan font-black text-sm tracking-[0.3em] uppercase">
                          <span className="w-10 h-[2px] bg-neon-cyan"></span>
                          {isAr ? `خدمة ${index + 1}` : `Service ${index + 1}`}
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.2] tracking-tight">
                          {service.title}
                        </h2>
                        <p className="text-lg md:text-xl text-text-muted leading-relaxed font-medium">
                          {service.description}
                        </p>
                      </div>
                      
                      {/* Professional Features Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 py-8 border-y border-white/5">
                        {service.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-4 group/item">
                            <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-neon-cyan/10 flex items-center justify-center text-neon-cyan group-hover/item:bg-neon-cyan group-hover/item:text-dark transition-all duration-300">
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-white/80 font-bold text-sm group-hover/item:text-neon-cyan transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Action Button */}
                      <div className="pt-4">
                        <button 
                          className="request-button group relative px-10 py-5 bg-linear-to-r from-neon-cyan to-accent text-dark font-black rounded-2xl transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(0,255,247,0.4)] flex items-center gap-3 overflow-hidden"
                        >
                          <span className="relative z-10">{t('common.requestService')}</span>
                          <svg className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          ))}
        </div>

        {/* --- CTA BOTTOM SECTION --- */}
        <section className="relative py-40 px-4 text-center overflow-hidden">
          <div className="absolute inset-0 bg-neon-cyan/[0.02]"></div>
          <div className="max-w-4xl mx-auto relative z-10 space-y-10">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              {isAr ? 'هل أنت مستعد لبدء مشروعك؟' : 'Ready to Start Your Project?'}
            </h2>
            <p className="text-xl md:text-2xl text-text-muted font-medium">
              {isAr ? 'دعنا نحول رؤيتك إلى حقيقة رقمية مذهلة.' : "Let's turn your vision into a stunning digital reality with expert precision."}
            </p>
            <div className="pt-6">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-4 px-12 py-6 bg-white text-dark font-black text-2xl rounded-3xl hover:bg-neon-cyan hover:shadow-[0_0_50px_rgba(0,255,247,0.6)] hover:scale-110 transition-all duration-500"
              >
                {isAr ? 'ابدأ الآن' : 'Get Started Now'}
              </a>
            </div>
          </div>
        </section>

        {/* Modal Structure Re-added (Keeping it functional) */}
        <div id="serviceModal" className="fixed inset-0 bg-black/95 hidden items-center justify-center p-4 z-9999 backdrop-blur-xl overflow-y-auto" style={{ display: 'none' }}>
          <div className="bg-[#151b26] rounded-[2.5rem] shadow-2xl border border-white/10 w-full max-w-2xl my-8 relative overflow-hidden">
            {/* Modal Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-neon-cyan to-accent"></div>
            
            <button className="close-button absolute top-8 right-8 text-white/50 text-4xl hover:text-white transition-colors z-10">&times;</button>
            
            <div className="p-10 md:p-14">
              <h2 className="text-4xl font-black text-center mb-4 text-white leading-tight">
                {isAr ? 'طلب' : 'Request'} <span id="modalServiceTitle" className="text-transparent bg-clip-text bg-linear-to-r from-neon-cyan to-accent">{isAr ? 'خدمة' : 'Service'}</span>
              </h2>
              <p className="text-center text-text-muted mb-12 font-medium">{isAr ? 'املأ البيانات وسأتواصل معك خلال 24 ساعة' : 'Fill in the details and I will contact you within 24 hours'}</p>
              
              <form id="serviceRequestForm" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-neon-cyan uppercase tracking-widest px-1">{isAr ? 'الاسم' : 'Full Name'}</label>
                    <input type="text" id="clientName" name="clientName" required placeholder={isAr ? 'اسمك الكريم' : 'Your name'} className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white focus:border-neon-cyan focus:bg-white/10 outline-none transition-all duration-300" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-neon-cyan uppercase tracking-widest px-1">{isAr ? 'البريد الإلكتروني' : 'Email Address'}</label>
                    <input type="email" id="clientEmail" name="clientEmail" required placeholder="name@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white focus:border-neon-cyan focus:bg-white/10 outline-none transition-all duration-300" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-neon-cyan uppercase tracking-widest px-1">{isAr ? 'وصف المشروع' : 'Project Description'}</label>
                  <textarea id="serviceDescription" name="serviceDescription" rows={4} required placeholder={isAr ? 'أخبرني المزيد عن مشروعك...' : 'Tell me more about your goals...'} className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white focus:border-neon-cyan focus:bg-white/10 outline-none transition-all duration-300 resize-none"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-neon-cyan uppercase tracking-widest px-1">{isAr ? 'رقم الهاتف' : 'Phone Number'}</label>
                    <input type="tel" id="mobileNumber" name="mobileNumber" required placeholder="+20 102..." className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white focus:border-neon-cyan focus:bg-white/10 outline-none transition-all duration-300" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-neon-cyan uppercase tracking-widest px-1">{isAr ? 'الجدول الزمني' : 'Timeline'}</label>
                    <select id="deliveryTimeframe" name="deliveryTimeframe" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-white focus:border-neon-cyan focus:bg-white/10 outline-none transition-all duration-300 cursor-pointer appearance-none">
                      <option value="">{isAr ? 'اختر المدة' : 'Select timeframe'}</option>
                      <option value="1-3 days">{isAr ? 'عاجل (1-3 أيام)' : 'Urgent (1-3 days)'}</option>
                      <option value="1-2 weeks">{isAr ? 'متوسط (1-2 أسبوع)' : 'Standard (1-2 weeks)'}</option>
                      <option value="1 month+">{isAr ? 'مشروع كبير (شهر+)' : 'Large Project (1 month+)'}</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="w-full py-6 bg-linear-to-r from-neon-cyan to-accent text-dark font-black text-xl rounded-2xl hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(0,255,247,0.4)] transition-all duration-300 uppercase tracking-widest">
                  {t('common.sendViaWhatsApp')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

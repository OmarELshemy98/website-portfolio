import { useRouter } from 'next/router'
import { useI18n } from '@/lib/i18n'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import { useEffect, useState } from 'react'

export default function RequestService() {
  const router = useRouter()
  const { serviceId } = router.query
  const { locale, t } = useI18n()
  const isAr = locale === 'ar'

  interface ServiceItem {
    title: string
    description: string
    image: string
    features: string[]
  }

  const services = t<ServiceItem[]>('services.items')
  const [service, setService] = useState<ServiceItem | null>(null)

  useEffect(() => {
    if (serviceId !== undefined && services) {
      const index = parseInt(serviceId as string)
      if (services[index]) {
        setService(services[index])
      }
    }
  }, [serviceId, services])

  if (!service && serviceId !== undefined) {
    return (
      <div className="min-h-screen luxury-bg flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-cyan"></div>
      </div>
    )
  }

  return (
    <>
      <SEO 
        title={`${isAr ? 'طلب خدمة' : 'Request Service'} | ${service?.title || ''}`} 
        description={service?.description || ''}
      />
      <Navbar />
      
      <main className="luxury-bg min-h-screen pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Side: Service Details */}
            <div className="space-y-8 sticky top-32">
              <div className="glass-badge inline-block">
                <span className="text-neon-cyan text-xs font-black tracking-widest uppercase px-4 py-1">
                  {isAr ? 'تفاصيل الخدمة المختارة' : 'Selected Service Details'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                {isAr ? 'طلب' : 'Request'} <span className="elite-text">{service?.title}</span>
              </h1>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-neon-cyan to-accent rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gray-900">
                  <img 
                    src={service?.image} 
                    alt={service?.title}
                    className="w-full aspect-video object-cover opacity-80"
                  />
                </div>
              </div>

              <p className="text-xl text-text-muted leading-relaxed font-medium">
                {service?.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {service?.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_10px_#00fff7]"></div>
                    <span className="text-sm font-bold text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Request Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-neon-cyan/10 to-accent/10 rounded-[3rem] blur-3xl -z-10"></div>
              <div className="bg-[#1a202c]/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl">
                <div className="mb-10 text-center lg:text-start">
                  <h2 className="text-2xl font-black text-white mb-2">{isAr ? 'ابدأ مشروعك الآن' : 'Start Your Project Now'}</h2>
                  <p className="text-text-muted">{isAr ? 'املأ البيانات وسأتواصل معك خلال 24 ساعة كحد أقصى.' : 'Fill in the details and I will contact you within 24 hours max.'}</p>
                </div>

                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get('name');
                    const email = formData.get('email');
                    const phone = formData.get('phone');
                    const message = formData.get('message');
                    const payment = formData.get('payment_method');
                    const timeline = formData.get('timeline');
                    const serviceTitle = service?.title || '';

                    const whatsappNumber = '201026238072';
                    const text = isAr 
                      ? `*طلب خدمة جديدة*\n\n*الخدمة:* ${serviceTitle}\n*الاسم:* ${name}\n*البريد:* ${email}\n*الهاتف:* ${phone}\n*طريقة الدفع:* ${payment}\n*الجدول الزمني:* ${timeline}\n\n*تفاصيل المشروع:*\n${message}`
                      : `*New Service Request*\n\n*Service:* ${serviceTitle}\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Payment:* ${payment}\n*Timeline:* ${timeline}\n\n*Project Details:*\n${message}`;
                    
                    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
                  }}
                  className="space-y-6"
                >
                  <input type="hidden" name="_to" value="omarelshemy010@gmail.com" />
                  <input type="hidden" name="service_title" value={service?.title || ''} />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-neon-cyan uppercase tracking-widest px-1">{isAr ? 'الاسم بالكامل' : 'Full Name'}</label>
                      <input type="text" name="name" required placeholder={isAr ? 'اسمك الكريم' : 'Your full name'} className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white focus:border-neon-cyan focus:bg-white/10 outline-none transition-all duration-300" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-neon-cyan uppercase tracking-widest px-1">{isAr ? 'البريد الإلكتروني' : 'Email Address'}</label>
                      <input type="email" name="email" required placeholder="name@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white focus:border-neon-cyan focus:bg-white/10 outline-none transition-all duration-300" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-neon-cyan uppercase tracking-widest px-1">{isAr ? 'رقم الواتساب / الهاتف' : 'WhatsApp / Phone'}</label>
                    <input type="tel" name="phone" required placeholder="+20 102..." className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white focus:border-neon-cyan focus:bg-white/10 outline-none transition-all duration-300" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-neon-cyan uppercase tracking-widest px-1">{isAr ? 'تفاصيل المشروع' : 'Project Details'}</label>
                    <textarea name="message" rows={4} required placeholder={isAr ? 'أخبرني المزيد عن متطلبات مشروعك، الأهداف، وأي تفاصيل تقنية...' : 'Tell me more about your project requirements, goals, and any technical details...'} className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white focus:border-neon-cyan focus:bg-white/10 outline-none transition-all duration-300 resize-none"></textarea>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-neon-cyan uppercase tracking-widest px-1">{isAr ? 'طريقة الدفع المفضلة' : 'Preferred Payment'}</label>
                      <select 
                        name="payment_method" 
                        defaultValue=""
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white focus:border-neon-cyan focus:bg-white/10 outline-none transition-all duration-300 cursor-pointer appearance-none"
                      >
                        <option value="" disabled className="bg-[#1a202c]">{isAr ? 'اختر الطريقة' : 'Select Method'}</option>
                        <option value="Vodafone Cash" className="bg-[#1a202c]">{isAr ? 'فودافون كاش (Vodafone Cash)' : 'Vodafone Cash'}</option>
                        <option value="InstaPay" className="bg-[#1a202c]">{isAr ? 'إنستا باي (InstaPay)' : 'InstaPay'}</option>
                        <option value="Bank Transfer" className="bg-[#1a202c]">{isAr ? 'تحويل بنكي (Bank Transfer)' : 'Bank Transfer'}</option>
                        <option value="PayPal" className="bg-[#1a202c]">{isAr ? 'بايبال (PayPal)' : 'PayPal'}</option>
                        <option value="Crypto" className="bg-[#1a202c]">{isAr ? 'عملات رقمية (Crypto)' : 'Crypto (USDT)'}</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-neon-cyan uppercase tracking-widest px-1">{isAr ? 'الجدول الزمني' : 'Timeline'}</label>
                      <select 
                        name="timeline" 
                        defaultValue="1-2 weeks"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 text-white focus:border-neon-cyan focus:bg-white/10 outline-none transition-all duration-300 cursor-pointer appearance-none"
                      >
                        <option value="1-3 days" className="bg-[#1a202c]">{isAr ? 'عاجل (1-3 أيام)' : 'Urgent (1-3 days)'}</option>
                        <option value="1-2 weeks" className="bg-[#1a202c]">{isAr ? 'متوسط (1-2 أسبوع)' : 'Standard (1-2 weeks)'}</option>
                        <option value="1 month+" className="bg-[#1a202c]">{isAr ? 'مشروع كبير (شهر+)' : 'Large Project (1 month+)'}</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="group relative w-full py-6 bg-white text-dark font-black rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(37,211,102,0.4)] overflow-hidden flex items-center justify-center gap-4"
                  >
                    <span className="relative z-10 text-xl tracking-widest uppercase">
                      {isAr ? 'إرسال عبر واتساب' : 'Send via WhatsApp'}
                    </span>
                    <div className="relative z-10 w-10 h-10 rounded-full bg-dark/5 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <i className="fab fa-whatsapp text-2xl text-[#25D366] group-hover:text-white transition-colors duration-500"></i>
                    </div>

                    {/* Hover Liquid Effect */}
                    <div className="absolute inset-0 bg-linear-to-r from-[#25D366] to-[#128C7E] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <div className="absolute inset-0 z-10 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <span className="text-xl tracking-widest uppercase text-white">
                        {isAr ? 'إرسال عبر واتساب' : 'Send via WhatsApp'}
                      </span>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center">
                        <i className="fab fa-whatsapp text-2xl text-white"></i>
                      </div>
                    </div>
                  </button>
                  
                  <p className="text-[10px] text-center text-text-muted/50 uppercase tracking-widest">
                    {isAr ? 'سيتم فتح محادثة واتساب مباشرة مع كافة التفاصيل.' : 'A WhatsApp chat will open directly with all the details.'}
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import { useI18n } from '@/lib/i18n'
import Head from 'next/head'

export default function Contact() {
  const { locale } = useI18n()
  const isAr = locale === 'ar'
  const siteUrl = 'https://omarelshemy.netlify.app'

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: isAr ? 'ما هي خدماتك الرئيسية؟' : 'What are your main services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isAr 
            ? 'أقدم خدمات تطوير واجهات أمامية احترافية تشامل: تكامل API، دعم i18n و RTL، تكامل Headless CMS، إصلاح الأخطاء، تحويل Figma إلى Next.js، وتحسين الأداء.'
            : 'I offer professional front-end development services including: API Integration, i18n & RTL Support, Headless CMS Integration, Bug Fixing, Figma to Next.js conversion, and Performance Optimization.'
        }
      },
      {
        '@type': 'Question',
        name: isAr ? 'هل أنت متاح للعمل الحر؟' : 'Are you available for freelance work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isAr 
            ? 'نعم، أنا متاح حاليًا للعمل الحر ومفتوح لفرص جديدة. يمكنك التواصل معي عبر البريد الإلكتروني أو واتساب.'
            : 'Yes, I am currently available for freelance work and open to new opportunities. You can reach me via email or WhatsApp.'
        }
      },
      {
        '@type': 'Question',
        name: isAr ? 'ما هي التقنيات التي تستخدمها؟' : 'What technologies do you use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isAr 
            ? 'أستخدم React، Next.js، TypeScript، JavaScript، HTML5، CSS3، Tailwind CSS، وأدوات حديثة أخرى لتطوير واجهات المستخدم.'
            : 'I use React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, and other modern tools for front-end development.'
        }
      },
      {
        '@type': 'Question',
        name: isAr ? 'كم تستغرق المشاريع عادة؟' : 'How long do projects typically take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isAr 
            ? 'يعتمد ذلك على حجم المشروع ومتطلباته. صفحات الهبوط البسيطة قد تستغرق 3-5 أيام، بينما التطبيقات المعقدة قد تستغرق 2-4 أسابيع.'
            : 'It depends on the project scope and requirements. Simple landing pages may take 3-5 days, while complex applications may take 2-4 weeks.'
        }
      },
      {
        '@type': 'Question',
        name: isAr ? 'كيف يمكنني التواصل معك؟' : 'How can I contact you?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isAr 
            ? 'يمكنك التواصل معي عبر البريد الإلكتروني: omarelshemy010@gmail.com أو عبر واتساب: +201026238072'
            : 'You can contact me via email: omarelshemy010@gmail.com or via WhatsApp: +201026238072'
        }
      }
    ]
  }

  return (
    <>
      <SEO 
        title={isAr ? 'تواصل | عمر الشيمي' : 'Contact | Omar Elshemy — Hire'} 
        description={isAr ? 'تواصل مع عمر الشيمي لفرص العمل الحر أو التعاون المهني أو الاستشارات التقنية في تطوير الواجهات الأمامية.' : 'Get in touch with Omar Elshemy for freelance opportunities, professional collaborations, or technical consultations in front-end development.'}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <Navbar />
      <main className="contact-page bg-dark text-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-neon glow-text">{isAr ? 'تواصل معي' : 'Get in Touch'}</h1>
          <p className="text-lg text-center text-text-muted mb-12 max-w-2xl mx-auto">
            {isAr
              ? 'أنا متاح حاليًا للعمل الحر ومفتوح لفرص جديدة. لو عندك مشروع أو حابب نتواصل، ابعتلي في أي وقت.'
              : "I'm currently available for freelance work and open to new opportunities. If you have a project in mind or just want to say hi, feel free to reach out!"}
          </p>

          <form id="contactForm" className="relative group bg-gray-900/40 p-10 rounded-3xl shadow-2xl border border-white/5 backdrop-blur-xl overflow-hidden">
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl group-hover:bg-neon-cyan/10 transition-all duration-700"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-400 ml-1">{isAr ? 'الاسم' : 'Your Name'}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan transition-all duration-300"
                    placeholder={isAr ? 'اكتب اسمك' : 'Omar Elshemy'}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-400 ml-1">{isAr ? 'البريد الإلكتروني' : 'Your Email'}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan transition-all duration-300"
                    placeholder={isAr ? 'example@email.com' : 'example@email.com'}
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-10">
                <label htmlFor="message" className="text-sm font-semibold text-gray-400 ml-1">{isAr ? 'رسالتك' : 'Your Message'}</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={6}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan transition-all duration-300 resize-none"
                  placeholder={isAr ? 'احكيلي عن مشروعك...' : 'Tell me about your project...'}
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit"
                  className="group/btn relative inline-flex items-center justify-center px-10 py-4 font-bold text-gray-900 transition-all duration-300 bg-neon-cyan rounded-2xl hover:bg-opacity-90 transform hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(72,255,205,0.3)] hover:shadow-[0_0_30px_rgba(72,255,205,0.5)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isAr ? 'إرسال الرسالة' : 'Send Message'}
                    <i className="fab fa-whatsapp text-xl"></i>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}

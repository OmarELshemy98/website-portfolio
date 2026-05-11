import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import { useI18n } from '@/lib/i18n'

export default function Experience() {
  const { locale } = useI18n()
  const isAr = locale === 'ar'

  return (
    <>
      <SEO 
        title={isAr ? 'الخبرات | عمر الشيمي' : 'Experience | Omar Elshemy — Front-End'} 
        description={isAr ? 'المسيرة المهنية لعمر الشيمي من المحاسبة التنفيذية والمبيعات إلى تطوير الواجهات الأمامية في Arcon Corporation.' : 'Professional journey of Omar Elshemy. From Corporate Accountant to Sales Executive, and now a dedicated Front-End Developer at Arcon Corporation.'}
      />
      <Navbar />
      <section id="experience" className="experience-section">
        <h1 className="section-title">{isAr ? 'الخبرات' : 'Work'} <span className="highlight">{isAr ? 'العملية' : 'Experience'}</span></h1>
        <div className="experience-container">
                        {/* Arcon corp */}
          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-company">
                <h2>{isAr ? 'مطوّر واجهات أمامية متوسط المستوى | React.js | Next.js | TypeScript | بناء تطبيقات ويب قابلة للتوسع وعالية الأداء' : 'Mid-Level Front-End Developer | React.js | Next.js | TypeScript | Building Scalable & High-Performance Web Applications'}</h2>
                <h3>Arcon Corporation</h3>
              </div>
              <div className="experience-period">
                <span className="period">{isAr ? 'يوليو 2024 - حتى الآن' : 'JULY 2024 - PRESENT'}</span>
              </div>
            </div>
            <div className="experience-content">
              <ul>
                <li>{isAr ? 'تطوير وصيانة واجهات ويب متجاوبة وعالية الأداء باستخدام React.js وNext.js وTypeScript.' : 'Developed and maintained responsive and high-performance web interfaces using React.js, Next.js, and TypeScript.'}</li>
                <li>{isAr ? 'بناء أنظمة مكونات قابلة لإعادة الاستخدام، مما أدى إلى تحسين سرعة التطوير بنسبة 25%.' : 'Built reusable component systems, improving development speed by 25%.'}</li>
                <li>{isAr ? 'تكامل واجهات RESTful APIs وتحسين مؤشرات Core Web Vitals من خلال التحميل الكسول وتقسيم الشيفرة.' : 'Integrated RESTful APIs and enhanced Core Web Vitals with lazy loading and code splitting.'}</li>
                <li>{isAr ? 'التعاون في سبرينتات Agile مع المصممين ومهندسي الواجهة الخلفية لتقديم ميزات جاهزة للإنتاج.' : 'Collaborated in Agile sprints with designers and backend engineers to deliver production-ready features.'}</li>
              </ul>
            </div>
          </div>
          {/* Freelance */}
          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-company">
                <h2>{isAr ? 'مطوّر واجهات أمامية مستقل | React.js | Next.js | TypeScript | تصميم وتطوير حلول ويب مخصصة للعملاء' : 'Freelance Front-End Developer | React.js | Next.js | TypeScript | Crafting Custom Web Solutions for Clients'}</h2>
                <h3>{isAr ? 'عمل حر' : 'Freelance'}</h3>
              </div>
              <div className="experience-period">
                <span className="period">{isAr ? 'سبتمبر 2024 - حتى الآن' : 'SEPTEMBER 2024 - PRESENT'}</span>
              </div>
            </div>
            <div className="experience-content">
              <ul>
                <li>{isAr ? 'تصميم وتطوير مواقع وتطبيقات ويب حديثة باستخدام React.js، Next.js، وTypeScript.' : 'Designed and developed modern websites and web applications using React.js, Next.js, and TypeScript.'}</li>
                <li>{isAr ? 'تقديم حلول مخصصة للعملاء تلبي احتياجاتهم التجارية وتعزز من تجربة المستخدم.' : 'Delivered tailored client solutions that meet business needs and enhance user experience.'}</li>
                <li>{isAr ? 'تحسين أداء التطبيقات من خلال ممارسات التحميل الكسول، تقسيم الشيفرة، وتحسين Core Web Vitals.' : 'Optimized application performance through lazy loading, code splitting, and Core Web Vitals best practices.'}</li>
                <li>{isAr ? 'إدارة المشاريع بشكل مستقل، من جمع المتطلبات إلى التسليم النهائي والصيانة.' : 'Managed projects independently from requirements gathering to final delivery and maintenance.'}</li>
              </ul>
            </div>
          </div>
            {/* chubb life insurance */}
          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-company">
                <h2>{isAr ? 'مستشار تأمين' : 'Insurance Advisor'}</h2>
                <h3>CHUBB LIFE INSURANCE</h3>
              </div>
              <div className="experience-period">
                <span className="period">{isAr ? 'يوليو 2024 - سبتمبر 2024' : 'JULY 2024 - SEPTEMBER 2024'}</span>
              </div>
            </div>
            <div className="experience-content">
              <ul>
                <li>{isAr ? 'إجراء استشارات مالية وتقديم حلول تأمين واستثمار مخصصة.' : 'Conducted financial consultations and provided tailored insurance and investment solutions.'}</li>
                <li>{isAr ? 'تعزيز العلاقات مع العملاء من خلال التواصل الواضح والرؤى المستندة إلى البيانات.' : 'Strengthened client relationships through clear communication and data-driven insights.'}</li>
              </ul>
            </div>
          </div>
          {/* modern trade */}
   <div className="experience-item">
            <div className="experience-header">
              <div className="experience-company">
                <h2>{isAr ? 'مطوّر واجهات أمامية مبتدئ | React.js | Tailwind CSS | تصميم لوحات معلومات وصفحات هبوط متجاوبة' : 'Junior Front-End Developer | React.js | Tailwind CSS | Designing Responsive Dashboards & Landing Pages'}</h2>
                <h3>Modern Trade for Engineering (MTE)</h3>
              </div>
              <div className="experience-period">
                <span className="period">{isAr ? 'مايو 2022 - ديسمبر 2023' : 'MAY 2022 - DECEMBER 2023'}</span>
              </div>
            </div>
            <div className="experience-content">
              <ul>
                <li>{isAr ? 'تصميم وتنفيذ لوحات معلومات وصفحات هبوط متجاوبة باستخدام React.js وTailwind CSS.' : 'Designed and implemented responsive dashboards and landing pages using React.js and Tailwind CSS.'}</li>
                <li>{isAr ? 'تحسين سرعة تحميل الموقع بنسبة 35% من خلال تحسين الأداء وتحسينات SEO.' : 'Enhanced website load speed by 35% through performance optimization and SEO improvements.'}</li>
                <li>{isAr ? 'ضمان إمكانية الوصول (A11y) والتوافق عبر المتصفحات المختلفة.' : 'Ensured accessibility (A11y) and cross-browser compatibility.'}</li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-company">
                <h2>{isAr ? 'محاسب شركات' : 'Corporate Accountant'}</h2>
                <h3>MABARET AL ASAFRA HOSPITAL</h3>
              </div>
              <div className="experience-period">
                <span className="period">{isAr ? 'أبريل 2020 - فبراير 2021' : 'APRIL 2020 - FEBRUARY 2021'}</span>
              </div>
            </div>
            <div className="experience-content">
              <ul>
                <li>{isAr ? 'إعداد تقارير مالية شهرية تُظهر المؤشرات الرئيسية والاتجاهات للإدارة.' : 'Prepared monthly financial reports, highlighting key metrics and trends for management review.'}</li>
                <li>{isAr ? 'دعم عمليات الحسابات الدائنة والمدينة، بما في ذلك معالجة الفواتير والتحصيل.' : 'Supported accounts payable and receivable functions, including invoice processing and payment collections.'}</li>
                <li>{isAr ? 'الحفاظ على دقة السجلات المالية وضمان الالتزام بالمعايير المحاسبية.' : 'Maintained accurate records of financial transactions, ensuring data integrity and compliance with accounting standards.'}</li>
                <li>{isAr ? 'تسوية كشوفات البنوك وحسابات الأستاذ العام ومعالجة الفروقات بسرعة.' : 'Reconciled bank statements and general ledger accounts, resolving discrepancies promptly.'}</li>
                <li>{isAr ? 'المساعدة في إعداد الإقرارات الضريبية والمتطلبات التنظيمية وفق اللوائح.' : 'Assisted in preparing tax returns and regulatory filings, ensuring compliance with local and federal regulations.'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

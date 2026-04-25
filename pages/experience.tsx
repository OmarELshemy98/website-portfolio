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
          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-company">
                <h2>{isAr ? 'مطوّر واجهات أمامية' : 'Front End Developer'}</h2>
                <h3>Arcon Corporation</h3>
              </div>
              <div className="experience-period">
                <span className="period">{isAr ? 'سبتمبر 2024 - حتى الآن' : 'SEPTEMBER 2024 - PRESENT'}</span>
              </div>
            </div>
            <div className="experience-content">
              <ul>
                <li>{isAr ? 'تطوير مواقع متجاوبة باستخدام HTML وCSS وJavaScript لتحسين تجربة المستخدم.' : 'Built responsive websites using HTML, CSS, and JavaScript to improve user experience.'}</li>
                <li>{isAr ? 'التعاون مع الفريق لتنفيذ مزايا جديدة وتحسين أداء الموقع.' : 'Collaborated with team members to implement new features, boosting site performance.'}</li>
                <li>{isAr ? 'المساهمة في إصلاح الأخطاء وتحديث الموقع للحفاظ على أفضل كفاءة.' : 'Assisted in bug fixes and site updates to ensure optimal functionality.'}</li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-company">
                <h2>{isAr ? 'مسؤول مبيعات' : 'Sales Executive'}</h2>
                <h3>CHUBB LIFE INSURANCE</h3>
              </div>
              <div className="experience-period">
                <span className="period">{isAr ? 'مايو 2024 - سبتمبر 2024' : 'MAY 2024 - SEPTEMBER 2024'}</span>
              </div>
            </div>
            <div className="experience-content">
              <ul>
                <li>{isAr ? 'مساعدة العملاء في اختيار وثائق التأمين على الحياة المناسبة لاحتياجاتهم.' : 'Assist clients with selecting life insurance policies tailored to their needs.'}</li>
                <li>{isAr ? 'تقديم استشارات متخصصة حول منتجات التمويل وإرشاد العملاء خلال إجراءات التقديم.' : 'Provide expert advice on loan products, guiding clients through the application process.'}</li>
                <li>{isAr ? 'إجراء تقييمات مالية واقتراح المنتجات الأنسب لكل عميل.' : 'Conduct financial assessments and recommend suitable financial products.'}</li>
                <li>{isAr ? 'التعاون مع فريق البنك لضمان سير العمل بسلاسة وتقديم خدمة عملاء ممتازة.' : 'Collaborate with bank staff to ensure smooth operations and excellent customer service.'}</li>
                <li>{isAr ? 'الحفاظ على سجلات دقيقة لتفاعلات العملاء والمعاملات المالية.' : 'Maintain detailed records of client interactions and financial transactions.'}</li>
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

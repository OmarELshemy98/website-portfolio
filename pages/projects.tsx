import Script from 'next/script'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import type { GetStaticProps } from 'next'
import { projects as allProjects, type Project } from '@/data/projects'
import { useI18n } from '@/lib/i18n'

type Props = {
  projects: Project[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      projects: allProjects
    }
  }
}

export default function Projects({ projects }: Props) {
  const { locale } = useI18n()
  const isAr = locale === 'ar'
  const arProjectCopy: Record<string, { title: string; description: string; tech: string }> = {
    'crew-social-platform': {
      title: 'Crew | منصة تواصل اجتماعي عصرية',
      description: 'Crew هي منصة تواصل اجتماعي عصرية وذات تصميم فاخر تجمع بين الشبكات الاجتماعية والتقنيات المتقدمة. تقدم منصة Crew تجربة مستخدم ممتعة تجمع بين مشاركة المنشورات والصور، شريط القصص، مكالمات فيديو وصوت عالية الجودة عبر Agora.io، دردشات جماعية، وتحكم كامل للمدير. تم بناء المشروع من الصفر مع تركيز كبير على سرعة التحميل، تجربة المستخدم السلسة، وتحسين محركات البحث لظهور في نتائج جوجل.',
      tech: 'React 19, React-Redux (Toolkit), React-Router, React-Bootstrap, Framer Motion, Vite, Node.js, Express.js, MongoDB (Mongoose), Cloudinary (Media Hosting), Agora.io (Video/Voice Calls), Helmet.js'
    },
    'arcon-corp': {
      title: 'ARCON - حلول رائدة لمستقبل متطور',
      description: 'موقع احترافي يعرض حلول ARCON في التصنيع والهندسة والأتمتة مع تركيز على الأمن السيبراني والروبوتات وأنظمة التدريب.',
      tech: 'Next.js, React.js, Bootstrap 5, CSS Modules, JavaScript ES6+, تحسين الصور, Font Awesome, HTML5'
    },
    'axiom': {
      title: 'موقع Axiom AI Solutions',
      description: 'واجهة متكاملة عالية الأداء تعكس هوية الشركة وتعرض حلولها الهندسية والتقنية بشكل جذاب ومتجاوب.',
      tech: 'Next.js, React, TypeScript, Bootstrap 5, Responsive Design, SEO'
    },
    'modern-trade-corporate': {
      title: 'Modern Trade for Engineering (MTE)',
      description: 'منصة شركة ثنائية اللغة تجمع الجمهور العربي والإنجليزي بتجربة سلسة وتصميم حديث مع دعم SEO قوي.',
      tech: 'HTML5, CSS3, JavaScript, Tailwind CSS, Multilingual Support, SEO, Responsive Design'
    },
    'medyour': {
      title: 'Medyour – منصة رعاية صحية رقمية',
      description: 'موقع متجاوب بدعم لغتين وتنقل سلس لتقديم تجربة استخدام واضحة وسريعة.',
      tech: 'HTML5, CSS3, Vanilla JS'
    },
    'labsforhome': {
      title: 'Labs For Home – تعلم العلوم التفاعلي',
      description: 'تطبيق ويب تعليمي متجاوب بمحاكاة تفاعلية ووحدات تعليمية مناسبة للطلاب والمدارس.',
      tech: 'Next.js, TypeScript, CSS Modules, PostCSS'
    },
    'egyptian-robotics': {
      title: 'موقع ERRCSF',
      description: 'موقع متجاوب للاتحاد المصري للروبوتات مع تسجيل متعدد الخطوات ونوافذ تفاعلية.',
      tech: 'HTML5, CSS3, Tailwind CSS, Vanilla JS'
    },
    'front-end-portfolio': {
      title: 'معرض أعمال احترافي للواجهات الأمامية',
      description: 'موقعي الشخصي كعرض حي للخبرة في الواجهات الأمامية مع أداء قوي، بنية نظيفة، وتجربة مستخدم احترافية.',
      tech: 'Next.js, React.js, TypeScript, Tailwind CSS, ES6+, Performance, Responsive Design, SEO'
    },
    'dh-consult': {
      title: 'ConsultCo – موقع خدمات استشارية',
      description: 'موقع ديناميكي جذاب يعرض معلومات الشركة والخدمات والمشاريع مع صفحة تواصل متكاملة.',
      tech: 'HTML5, Tailwind CSS, Vanilla JS'
    },
    'ti-educational': {
      title: 'موقع تعليمي لـ Kitmeer',
      description: 'موقع تعليمي متجاوب لعرض المنتجات والحلول الخاصة بالقطاع الأكاديمي.',
      tech: 'HTML5, CSS3, Vanilla JS'
    },
    'todo-app': {
      title: 'تطبيق إدارة المهام To-Do',
      description: 'تطبيق بسيط وفعال لإنشاء المهام اليومية وتنظيمها ومتابعتها.',
      tech: 'HTML5, CSS3, Vanilla JS'
    },
    'student-dashboard': {
      title: 'لوحة كورسات الرياضيات',
      description: 'لوحة ويب لإدارة وعرض المحتوى التعليمي الخاص بمقررات الرياضيات.',
      tech: 'HTML5, CSS3, Vanilla JS'
    },
    'medyour-card': {
      title: 'بطاقة أعمال رقمية Medyour',
      description: 'منصة بطاقات رقمية متجاوبة مع QR فريد وسهولة مشاركة بيانات التواصل.',
      tech: 'HTML5, CSS3, Vanilla JS'
    },
    'modern-trade-mte': {
      title: 'بطاقة أعمال رقمية Modern Trade',
      description: 'بطاقة أعمال رقمية وبروفايل شركة MTE بتصميم متجاوب وتجربة عرض سلسة.',
      tech: 'HTML5, CSS3, Vanilla JS, Tailwind CSS'
    },
    'luxury-apartment': {
      title: 'عرض شقق فاخرة',
      description: 'موقع عرض عقاري حديث بمعارض تفاعلية وتصميم أنيق يركز على التجربة البصرية.',
      tech: 'HTML5, CSS3, Vanilla JS'
    }
  }

  return (
    <>
      <SEO 
        title={isAr ? 'المشاريع | عمر الشيمي' : 'Projects | Omar Elshemy — Portfolio'} 
        description={isAr ? 'مجموعة مشاريع تطوير ويب تشمل تصميمات متجاوبة وتطبيقات تفاعلية وحلول حديثة مبنية بـ React و Next.js.' : 'A showcase of web development projects by Omar Elshemy. Featuring responsive designs, interactive web apps, and modern front-end solutions built with React and Next.js.'}
      />
      <Navbar />
      <section className="projects-section">
        <div className="projects-container">
          <h1 className="text-center text-3xl md:text-5xl font-black text-white mb-14 px-4 pt-8 max-w-4xl mx-auto leading-tight">
            {isAr ? (
              <>
                معرض <span className="text-neon">المشاريع</span>
              </>
            ) : (
              <>
                Project <span className="text-neon">Portfolio</span>
              </>
            )}
          </h1>
          {projects.map(p => {
            const localized = isAr ? arProjectCopy[p.id] : undefined
            const title = localized?.title ?? p.title
            const description = localized?.description ?? p.description
            const tech = localized?.tech ?? p.tech

            return (
            <div key={p.id} className="project-item" data-project-id={p.id}>
              <div className="project-info">
                <h2 className="project-title">{title}</h2>
                <div className="project-details">
                  <p className="project-description">{description}</p>
                  
                  <div className="project-tags flex flex-wrap gap-2 mt-4 mb-6">
                    {tech.split(',').map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-neon/10 border border-neon/30 text-neon text-xs font-bold rounded-full">
                        {tag.trim()}
                      </span>
                    ))}
                  </div>

                  <div className="project-link-container">
                    <a href={p.link.startsWith('http') ? p.link : `https://${p.link}`} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="project-external-link">
                      {isAr ? 'زيارة المشروع' : 'Visit Project'} <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              {p.images && p.images.length > 0 && (
                <div className="project-visuals">
                  <div className="project-carousel" data-project-id={p.id}>
                    <button className="carousel-prev" aria-label={isAr ? 'السابق' : 'Previous'}>
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <div className="carousel-track">
                      {p.images.map((src, idx) => (
                        <img key={idx} src={src} alt={`${title} ${idx + 1}`} className="carousel-image" loading="lazy" />
                      ))}
                    </div>
                    <button className="carousel-next" aria-label={isAr ? 'التالي' : 'Next'}>
                      <i className="fas fa-chevron-right"></i>
                    </button>
                    <div className="carousel-indicators"></div>
                  </div>
                </div>
              )}
            </div>
            )
          })}
        </div>
      </section>
      <Script src="/scripts/projects.js" strategy="afterInteractive" />
      <Footer />
    </>
  )
}

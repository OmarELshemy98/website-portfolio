import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import { useI18n } from '@/lib/i18n'
import { useEffect, useState } from 'react'

export default function Skills() {
  const { locale } = useI18n()
  const isAr = locale === 'ar'
  const [animateBars, setAnimateBars] = useState(false)

  useEffect(() => {
    setAnimateBars(false)
    const timer = window.setTimeout(() => setAnimateBars(true), 80)
    return () => window.clearTimeout(timer)
  }, [locale])

  const skillCategories = [
    {
      title: isAr ? 'أساسيات الواجهة الأمامية' : 'Frontend Core',
      skills: [
        { name: isAr ? "HTML5 / واجهات دلالية" : "HTML5 / Semantic UI", level: 98, icon: "fab fa-html5" },
        { name: isAr ? "CSS3 / Flexbox / Grid" : "CSS3 / Flexbox / Grid", level: 95, icon: "fab fa-css3-alt" },
        { name: isAr ? "جافاسكريبت (ES6+)" : "JavaScript (ES6+)", level: 92, icon: "fab fa-js" },
        { name: isAr ? "تايب سكريبت" : "TypeScript", level: 88, icon: "fas fa-code" },
      ]
    },
    {
      title: isAr ? 'الأطر والمكتبات' : 'Frameworks & Libs',
      skills: [
        { name: isAr ? "React.js / Hooks" : "React.js / Hooks", level: 94, icon: "fab fa-react" },
        { name: isAr ? "Next.js (SSG/SSR)" : "Next.js (SSG/SSR)", level: 90, icon: "fas fa-bolt" },
        { name: isAr ? "Vue.js / Vuex" : "Vue.js / Vuex", level: 82, icon: "fab fa-vuejs" },
        { name: isAr ? "Redux / Toolkit" : "Redux / Toolkit", level: 85, icon: "fas fa-layer-group" },
      ]
    },
    {
      title: isAr ? 'تقنيات التنسيق' : 'Styling Engines',
      skills: [
        { name: isAr ? "Tailwind CSS" : "Tailwind CSS", level: 96, icon: "fas fa-wind" },
        { name: isAr ? "SASS / SCSS" : "SASS / SCSS", level: 90, icon: "fab fa-sass" },
        { name: isAr ? "المكوّنات المنسقة" : "Styled Components", level: 85, icon: "fas fa-paint-brush" },
        { name: isAr ? "Bootstrap 5" : "Bootstrap 5", level: 88, icon: "fab fa-bootstrap" },
      ]
    },
    {
      title: isAr ? 'التصميم والأدوات' : 'Design & Tools',
      skills: [
        { name: isAr ? "تحويل Figma إلى كود" : "Figma to Code", level: 95, icon: "fab fa-figma" },
        { name: isAr ? "Git / GitHub" : "Git / GitHub", level: 90, icon: "fab fa-github" },
        { name: isAr ? "تصميم متجاوب" : "Responsive Design", level: 98, icon: "fas fa-mobile-alt" },
        { name: isAr ? "Adobe XD" : "Adobe XD", level: 80, icon: "fas fa-pen-nib" },
      ]
    },
    {
      title: isAr ? 'التحسين و SEO' : 'Optimization & SEO',
      skills: [
        { name: isAr ? "أفضل ممارسات SEO" : "SEO Best Practices", level: 85, icon: "fas fa-search" },
        { name: isAr ? "أداء الويب" : "Web Performance", level: 90, icon: "fas fa-tachometer-alt" },
        { name: isAr ? "إمكانية الوصول (A11y)" : "Accessibility (A11y)", level: 82, icon: "fas fa-user-check" },
        { name: isAr ? "اختبارات وحدات (Jest)" : "Unit Testing (Jest)", level: 75, icon: "fas fa-vial" },
      ]
    },
    {
      title: isAr ? 'النشر وأنظمة إدارة المحتوى' : 'Deployment & CMS',
      skills: [
        { name: isAr ? "Netlify / Vercel" : "Netlify / Vercel", level: 92, icon: "fas fa-cloud-upload-alt" },
        { name: isAr ? "Firebase / Supabase" : "Firebase / Supabase", level: 80, icon: "fas fa-database" },
        { name: isAr ? "WordPress / Headless" : "WordPress / Headless", level: 78, icon: "fab fa-wordpress" },
        { name: isAr ? "npm / Yarn / Vite" : "npm / Yarn / Vite", level: 94, icon: "fab fa-npm" },
      ]
    }
  ]

  return (
    <>
      <SEO page="skills" />
      <Navbar />
      <section id="skills" className="skills-section py-24 px-4 min-h-screen bg-[#0d1117]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              {isAr ? 'الترسانة' : 'Technical'} <span className="text-neon-cyan">{isAr ? 'التقنية' : 'Arsenal'}</span>
            </h1>
            <div className="w-24 h-1.5 bg-neon-cyan mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} className="skill-category-card group bg-[#161b22] p-8 rounded-4xl border border-white/5 hover:border-neon-cyan/30 transition-all duration-500 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-neon-cyan/10 transition-all"></div>
                
                <h2 className="text-xl font-black text-neon-cyan mb-10 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-neon-cyan/10 flex items-center justify-center text-sm">0{catIndex + 1}</span>
                  {category.title}
                </h2>
                
                <div className="space-y-10">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-4">
                          <div className="text-2xl text-gray-500 group-hover:text-neon-cyan transition-colors duration-500">
                            <i className={skill.icon}></i>
                          </div>
                          <span className="font-bold text-gray-200 text-base">{skill.name}</span>
                        </div>
                        <span className="text-neon-cyan font-mono font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-black/40 rounded-full h-2 relative p-0.5">
                        <div 
                          className="skill-progress bg-linear-to-r from-neon-cyan to-accent h-full rounded-full transition-all duration-1000 ease-out relative" 
                          data-level={skill.level}
                          style={{ width: animateBars ? `${skill.level}%` : '0%' }}
                        >
                          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_#00fff7]"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

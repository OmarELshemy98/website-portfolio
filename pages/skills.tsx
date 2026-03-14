import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

export default function Skills() {
  const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Vue.js", level: 70 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Figma to Code", level: 95 },
  ]

  return (
    <>
      <SEO 
        title="My Skills" 
        description="Explore the technical skills and expertise of Omar Elshemy, ranging from core web technologies like HTML and CSS to modern frameworks like React and Next.js."
      />
      <Navbar />
      <section id="skills" className="skills-section py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-12">Technical <span className="highlight">Skills</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-white">{skill.name}</span>
                  <span className="text-neon">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                  <div 
                    className="skill-progress bg-neon h-full transition-all duration-1000" 
                    data-level={skill.level}
                    style={{ width: '0%' }}
                  ></div>
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

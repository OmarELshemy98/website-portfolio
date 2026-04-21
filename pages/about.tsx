import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import { useI18n } from '@/lib/i18n'

export default function About() {
  const { locale } = useI18n()
  const isAr = locale === 'ar'

  return (
    <>
      <SEO 
        title={isAr ? 'من أنا | عمر الشيمي - مطوّر واجهات أمامية' : 'About Omar Elshemy | Front-End Developer & UI/UX Specialist'} 
        description={isAr ? 'تعرف على رحلة عمر الشيمي في تطوير الواجهات الأمامية وخبرته في React و Next.js وبناء تجارب رقمية متمحورة حول المستخدم.' : "Learn about Omar Elshemy's journey as a Front-End Developer. Expertise in React, Next.js, and crafting user-centered digital experiences."}
      />
      <Navbar />
      <section id="about" className="about-section">
        <div className="about-inner">
          <div className="about-text">
            <h2 className="section-title">{isAr ? 'من' : 'About'} <span className="highlight">{isAr ? 'أنا' : 'Me'}</span></h2>
            <p>
              {isAr
                ? 'أنا مطوّر واجهات أمامية بحب أحوّل الأفكار لتجارب رقمية تفاعلية. رحلتي في المجال مبنية على الفضول، الإبداع، والاهتمام بالتفاصيل عشان كل عنصر يطلع بأفضل شكل.'
                : "I'm a digital craftsman who transforms ideas into interactive realities. My journey in front-end development is fueled by curiosity, creativity, and a relentless pursuit of pixel-perfect design. I don't just build websites; I create digital experiences that connect, inspire, and delight users across every device."}
            </p>
            <p>
              {isAr
                ? 'بستخدم HTML5 و CSS3 و JavaScript و React و Vue.js لبناء حلول قوية وجميلة في نفس الوقت. سواء صفحة هبوط أو تطبيق ويب ديناميكي، هدفي دائمًا يكون الجمع بين الأداء العالي وتجربة المستخدم الممتازة.'
                : "With a toolkit packed with HTML5, CSS3, JavaScript, React, and Vue.js, I blend code and creativity to deliver solutions that are as beautiful as they are functional. Whether it's a sleek landing page, a dynamic web app, or a seamless user interface, I believe every detail matters. My approach is rooted in UI/UX best practices, ensuring every project is not just well-coded, but truly user-centered."}
            </p>
            <p>
              {isAr
                ? 'التعاون نقطة القوة عندي. بحب أحوّل التحديات المعقدة لحلول واضحة وسهلة التطوير مع فرق التصميم والباك إند. اشتغلت على مشاريع لعملاء مختلفين وساعدتهم يظهروا بشكل احترافي في العالم الرقمي.'
                : "Collaboration is my superpower. I thrive on turning complex challenges into elegant, maintainable solutions, working hand-in-hand with designers and back-end teams. From startups to established brands, I've helped clients stand out in the digital world with innovative, high-performance web experiences. Let's build something extraordinary together!"}
            </p>
          </div>
          <div className="about-info portrait-card">
            <div className="portrait-profile-pic">
              <img src="/images/profile-photo.jpg" alt="Profile Photo" style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 15px rgba(0, 255, 247, 0.3)', marginBottom: '1rem', border: '2px solid var(--neon)' }} />
            </div>
            <h2 style={{ color: 'var(--neon)', textShadow: '0 0 10px rgba(0, 255, 247, 0.5)' }}>{isAr ? 'معلومات أساسية' : 'Basic Information'}</h2>
            <table>
              <tbody>
                <tr><td>{isAr ? 'البريد:' : 'Email:'}</td><td className="email-cell"><a href="mailto:omarelshemy010@gmail.com" style={{ textDecoration: 'none' }}>omarelshemy010@gmail.com</a></td></tr>
                <tr><td>{isAr ? 'لينكدإن:' : 'LinkedIn:'}</td><td><a href="https://www.linkedin.com/in/omar-elshemy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>linkedin.com/in/omar-elshemy</a></td></tr>
                <tr><td>{isAr ? 'واتساب:' : 'WhatsApp:'}</td><td><a href="https://wa.me/201026238072" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>01026238072</a></td></tr>
                <tr><td>{isAr ? 'الهاتف:' : 'Phone:'}</td><td>01204777405</td></tr>
                <tr><td>{isAr ? 'العنوان:' : 'Address:'}</td><td>{isAr ? 'الإسكندرية' : 'Alexandria'}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

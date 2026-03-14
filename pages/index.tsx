import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

export default function Home() {
  return (
    <>
      <SEO 
        title="Omar Elshemy | Front End Developer"
        description="Omar Elshemy is a passionate Front End Developer based in Egypt, specialized in creating modern, responsive, and user-friendly web experiences using React and Next.js."
      />
      <Navbar />
      <section id="hero" className="hero-section">
        <div className="animated-bg"></div>
        <div className="hero-content px-4 md:px-0">
          <div className="hero-text text-center md:text-left">
            <h1>
              <span>Hello, It&apos;s Me</span><br />
              <span className="hero-name">Omar Elshemy</span><br />
              <span>And I&apos;m a <span className="highlight">Front End Developer</span></span>
            </h1>
            <p className="max-w-xl mx-auto md:mx-0">I am a professional <strong>Front End Developer</strong> dedicated to crafting high-quality, scalable, and interactive web applications that deliver exceptional user experiences. With expertise in modern technologies like React and Next.js, I bridge the gap between design and functionality.</p>
            
            <div className="mt-8 space-y-4 text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed">
              <p>
                As a specialized <strong>Front End Developer</strong>, I focus on creating digital solutions that are not only visually stunning but also highly performant and accessible. My approach combines clean coding practices with a deep understanding of user behavior, ensuring that every website I build provides a seamless journey for the visitor.
              </p>
              <p>
                In today&apos;s digital landscape, a website is more than just a business card; it&apos;s a powerful tool for growth. Whether you are looking for a Custom Web Application, a responsive landing page, or a complete redesign of your existing platform, I provide tailored services that align with your business goals. I take pride in being an <strong>Omar Elshemy</strong> who delivers excellence in every line of code.
              </p>
              <p>
                My technical stack includes industry-leading frameworks such as React.js and Next.js, which allow me to build lightning-fast, SEO-friendly websites. I am committed to continuous learning and staying updated with the latest trends in web development, ensuring that my clients always receive the most modern and effective solutions available in the market.
              </p>
              <p>
                Beyond technical skills, I believe in clear communication and collaboration. Working as a freelancer allows me to give personal attention to each project, treating your business goals as my own. From initial concept to final deployment on platforms like Netlify, I am with you every step of the way to ensure your digital success as a top-tier <strong>Front End Developer</strong>.
              </p>
            </div>
          </div>
          <div className="hexagon-img hidden md:flex">
            <img src="/images/profile-photo.jpg" alt="Omar Elshemy - Front End Developer" className="profile-img" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

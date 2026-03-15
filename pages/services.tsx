import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

export default function Services() {
  const services = [
    {
      title: "Custom Web Development",
      description: "Building high-performance, scalable websites using React, Next.js (SSR/SSG), and TypeScript. I focus on clean code and robust architecture tailored to your needs.",
      icon: "🚀"
    },
    {
      title: "Figma to React Conversion",
      description: "Transforming your Figma or Adobe XD designs into pixel-perfect, responsive React/Next.js components with Tailwind CSS for rapid and consistent styling.",
      icon: "🎨"
    },
    {
      title: "Performance & SEO Optimization",
      description: "Optimizing Core Web Vitals, implementing SEO best practices, and ensuring lightning-fast load times to boost your search engine rankings and user retention.",
      icon: "⚡"
    },
    {
      title: "Responsive & Adaptive Design",
      description: "Ensuring your website looks stunning and functions perfectly on every device, from mobile phones to large-scale desktop displays using modern CSS techniques.",
      icon: "📱"
    },
    {
      title: "SPA & Modern Web Apps",
      description: "Developing fast, interactive single-page applications with seamless transitions and advanced state management using Redux Toolkit or React Query.",
      icon: "🌐"
    },
    {
      title: "API & Backend Integration",
      description: "Seamlessly connecting your frontend to RESTful/GraphQL APIs, and integrating backend services like Firebase, Supabase, or Headless CMS solutions.",
      icon: "🔗"
    },
    {
      title: "E-commerce Solutions",
      description: "Creating modern, conversion-focused online stores with secure payment gateway integrations like Stripe, focusing on smooth checkout experiences.",
      icon: "🛒"
    },
    {
      title: "UI/UX & Accessibility",
      description: "Enhancing user interfaces with a focus on usability and web accessibility (A11y) to ensure your digital products are inclusive and easy to use for everyone.",
      icon: "✨"
    },
    {
      title: "Support & Maintenance",
      description: "Providing ongoing technical support, debugging, and regular updates to keep your web applications secure, up-to-date, and performing at their best.",
      icon: "🛠️"
    },
    {
      title: "Next.js Migration",
      description: "Upgrading your existing React or HTML/CSS websites to Next.js to take advantage of Server-Side Rendering (SSR) and Static Site Generation (SSG) for better SEO and speed.",
      icon: "🔄"
    },
    {
      title: "Admin Dashboards",
      description: "Building powerful, data-driven admin panels and dashboards with interactive charts, tables, and management tools to help you run your business efficiently.",
      icon: "📊"
    },
    {
      title: "Landing Page Design",
      description: "Crafting high-converting landing pages focused on capturing leads and driving sales, with engaging animations and a clear call-to-action (CTA).",
      icon: "🎯"
    }
  ]

  return (
    <>
      <SEO 
        title="Freelance Services | Front-End Developer" 
        description="Professional freelance front-end development services. Specializing in React, Next.js, Figma to Code, and Performance Optimization for modern web applications."
      />
      <Navbar />
      <main className="bg-dark text-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neon-cyan glow-text">Freelance Front-End Services</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              I provide high-quality, professional front-end development services to help you transform your ideas into modern, fast, and user-centric web experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-stretch">
            {services.map((service, index) => (
              <div 
                key={index}
                className="service-card group relative bg-gray-900/40 border border-neon-cyan/20 rounded-2xl p-8 text-center hover:border-neon-cyan/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(72,255,205,0.15)] backdrop-blur-md flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-cyan/5 rounded-full blur-3xl group-hover:bg-neon-cyan/10 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-neon-cyan transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
                
                <button 
                  className="request-button relative z-10 w-full py-3 px-6 rounded-xl font-bold text-neon-cyan border-2 border-neon-cyan/50 hover:bg-neon-cyan hover:text-gray-900 hover:border-neon-cyan transition-all duration-300 overflow-hidden group/btn"
                >
                  <span className="relative z-10">Request Service</span>
                  <div className="absolute inset-0 bg-neon-cyan transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div id="serviceModal" className="fixed inset-0 bg-black/80 hidden items-center justify-center p-4 z-[9999] backdrop-blur-md overflow-y-auto" style={{ display: 'none' }}>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-neon-cyan/30 w-full max-w-2xl my-8 relative">
          <button 
            className="close-button absolute top-4 right-4 text-white text-3xl hover:text-neon-cyan transition-colors z-10"
          >
            &times;
          </button>
          
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center mb-2 text-white">Request <span id="modalServiceTitle" className="text-neon-cyan">Service</span></h2>
            
            <form id="serviceRequestForm" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neon-cyan mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="clientName"
                    name="clientName"
                    required 
                    placeholder="Enter your name" 
                    className="w-full bg-gray-900/60 border-2 border-neon-cyan/30 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-neon-cyan outline-none transition duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neon-cyan mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="clientEmail"
                    name="clientEmail"
                    required 
                    placeholder="name@example.com" 
                    className="w-full bg-gray-900/60 border-2 border-neon-cyan/30 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-neon-cyan outline-none transition duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neon-cyan mb-2">Project Requirements</label>
                <textarea 
                  id="serviceDescription"
                  name="serviceDescription"
                  rows={4} 
                  required 
                  placeholder="Describe your project goals and specific features..." 
                  className="w-full bg-gray-900/60 border-2 border-neon-cyan/30 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-neon-cyan outline-none transition duration-300"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neon-cyan mb-2">Mobile Number</label>
                  <input 
                    type="tel" 
                    id="mobileNumber"
                    name="mobileNumber"
                    required 
                    placeholder="e.g., 01012345678" 
                    className="w-full bg-gray-900/60 border-2 border-neon-cyan/30 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-neon-cyan outline-none transition duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neon-cyan mb-2">Desired Timeframe</label>
                  <select 
                    id="deliveryTimeframe"
                    name="deliveryTimeframe"
                    className="w-full bg-gray-900/60 border-2 border-neon-cyan/30 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-neon-cyan outline-none transition duration-300 cursor-pointer"
                  >
                    <option value="">Select timeframe (Optional)</option>
                    <option value="1-3 days">1-3 days (Express)</option>
                    <option value="3-7 days">3-7 days</option>
                    <option value="1-2 weeks">1-2 weeks</option>
                    <option value="1 month+">1 month+</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-neon-cyan text-gray-900 font-bold py-4 rounded-xl hover:bg-opacity-90 transform hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(72,255,205,0.4)]"
              >
                Send Request via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

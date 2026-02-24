import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Services() {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <Navbar />
      <section id="services" className="services-section">
        <h2 className="section-title">Services<span className="highlight"> </span></h2>
        <div className="services-grid">
          <div className="service-card" data-service-title="Custom Website Development">
            <h3 className="text-2xl font-bold mb-3 text-[#00fff7]">Custom Website Development</h3>
            <p className="text-gray-400 mb-6">Bring your unique vision to life with a bespoke, high-performance website tailored to your needs. From concept to launch, I build responsive and scalable web solutions.</p>
            <button className="request-button">Request Service</button>
          </div>
          <div className="service-card" data-service-title="UI/UX to Code Conversion">
            <h3 className="text-2xl font-bold mb-3 text-[#00fff7]">UI/UX to Code Conversion</h3>
            <p className="text-gray-400 mb-6">Transform your design mockups (Figma, Adobe XD, Sketch) into pixel-perfect, interactive web experiences with clean, semantic HTML, CSS, and JavaScript.</p>
            <button className="request-button">Request Service</button>
          </div>
          <div className="service-card" data-service-title="Website Performance Optimization">
            <h3 className="text-2xl font-bold mb-3 text-[#00fff7]">Website Performance Optimization</h3>
            <p className="text-gray-400 mb-6">Boost your site&apos;s speed, improve loading times, and enhance user engagement with expert performance tuning, code splitting, and asset optimization.</p>
            <button className="request-button">Request Service</button>
          </div>
          <div className="service-card" data-service-title="Responsive Web Design">
            <h3 className="text-2xl font-bold mb-3 text-[#00fff7]">Responsive Web Design</h3>
            <p className="text-gray-400 mb-6">Ensure your website looks stunning and functions flawlessly on every device, from mobile phones and tablets to desktops, providing a seamless user experience.</p>
            <button className="request-button">Request Service</button>
          </div>
          <div className="service-card" data-service-title="Front-End Maintenance & Support">
            <h3 className="text-2xl font-bold mb-3 text-[#00fff7]">Front-End Maintenance &amp; Support</h3>
            <p className="text-gray-400 mb-6">Keep your website up-to-date, secure, and bug-free with ongoing maintenance, feature updates, and technical support for your front-end applications.</p>
            <button className="request-button">Request Service</button>
          </div>
          <div className="service-card" data-service-title="Interactive UI Components">
            <h3 className="text-2xl font-bold mb-3 text-[#00fff7]">Interactive UI Components</h3>
            <p className="text-gray-400 mb-6">Develop custom, reusable, and highly interactive UI components using React or Vue.js to enhance your web application&apos;s user interface and functionality.</p>
            <button className="request-button">Request Service</button>
          </div>
          <div className="service-card" data-service-title="API Integration (Frontend)">
            <h3 className="text-2xl font-bold mb-3 text-[#00fff7]">API Integration (Frontend)</h3>
            <p className="text-gray-400 mb-6">Connect your web application to external services and databases by expertly integrating RESTful APIs, third-party libraries, and payment gateways.</p>
            <button className="request-button">Request Service</button>
          </div>
          <div className="service-card" data-service-title="Website Redesign & Modernization">
            <h3 className="text-2xl font-bold mb-3 text-[#00fff7]">Website Redesign &amp; Modernization</h3>
            <p className="text-gray-400 mb-6">Revitalize your outdated website with a modern, engaging design and updated technology stack to improve aesthetics, functionality, and user retention.</p>
            <button className="request-button">Request Service</button>
          </div>
          <div className="service-card" data-service-title="Web Accessibility (A11y) Consulting">
            <h3 className="text-2xl font-bold mb-3 text-[#00fff7]">Web Accessibility (A11y) Consulting</h3>
            <p className="text-gray-400 mb-6">Ensure your website is usable by everyone, including individuals with disabilities, by implementing WCAG guidelines and best practices for accessibility.</p>
            <button className="request-button">Request Service</button>
          </div>
          <div className="service-card" data-service-title="CMS Frontend Development">
            <h3 className="text-2xl font-bold mb-3 text-[#00fff7]">CMS Frontend Development</h3>
            <p className="text-gray-400 mb-6">Build dynamic and customizable frontends for popular Content Management Systems like WordPress (headless), Strapi, or Contentful, ensuring seamless content delivery.</p>
            <button className="request-button">Request Service</button>
          </div>
          <div className="service-card" data-service-title="Web Animation & Interactivity">
            <h3 className="text-2xl font-bold mb-3 text-[#00fff7]">Web Animation &amp; Interactivity</h3>
            <p className="text-gray-400 mb-6">Enhance user engagement and visual appeal with custom web animations, interactive elements, and captivating transitions using CSS, SVG, and JavaScript libraries.</p>
            <button className="request-button">Request Service</button>
          </div>
          <div className="service-card" data-service-title="Frontend Consulting & Strategy">
            <h3 className="text-2xl font-bold mb-3 text-[#00fff7]">Frontend Consulting &amp; Strategy</h3>
            <p className="text-gray-400 mb-6">Receive expert guidance on frontend architecture, technology stack selection, code best practices, and performance strategies to optimize your web development process.</p>
            <button className="request-button">Request Service</button>
          </div>
        </div>
      </section>

      <div id="serviceModal" className="modal-overlay">
        <div className="modal-content">
          <button className="close-button">&times;</button>
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Request <span id="modalServiceTitle" className="text-[#00fff7]">Service</span></h2>
          <form id="serviceRequestForm" className="space-y-5">
            <div className="form-group">
              <label htmlFor="clientName">Your Name:</label>
              <input type="text" id="clientName" name="clientName" required placeholder="Enter your full name" />
            </div>
            <div className="form-group">
              <label htmlFor="clientEmail">Your Email:</label>
              <input type="email" id="clientEmail" name="clientEmail" required placeholder="name@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="serviceDescription">Tell me about your project &amp; requirements:</label>
              <textarea id="serviceDescription" name="serviceDescription" rows={5} required placeholder="Describe what you need, your goals, and any specific features."></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="fileUpload">Upload relevant files (e.g., design mockups, examples):</label>
              <input
                type="file"
                id="fileUpload"
                name="fileUpload"
                accept="image/*, .pdf, .doc, .docx"
                className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#00fff7] file:text-gray-900 hover:file:bg-[#00e0d8] cursor-pointer"
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobileNumber">Your Mobile Number (for WhatsApp/call):</label>
              <input type="tel" id="mobileNumber" name="mobileNumber" pattern="[0-9]{10,15}" required placeholder="e.g., 01012345678" />
            </div>
            <div className="form-group">
              <label htmlFor="paymentMethod">Preferred Payment Method:</label>
              <select id="paymentMethod" name="paymentMethod" required className="cursor-pointer">
                <option value="">Select an option</option>
                <option value="Vodafone Cash">Vodafone Cash</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="deliveryTimeframe">Desired Delivery Timeframe:</label>
              <select id="deliveryTimeframe" name="deliveryTimeframe" className="cursor-pointer">
                <option value="">Select timeframe (Optional)</option>
                <option value="1-3 days">1-3 days</option>
                <option value="3-7 days">3-7 days</option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="2-4 weeks">2-4 weeks</option>
                <option value="1 month+">1 month+</option>
                <option value="Custom">Custom (please specify in description)</option>
              </select>
            </div>
            <button type="submit" className="form-submit-button">Submit Request</button>
          </form>
          <div id="formMessage" className="message hidden"></div>
        </div>
      </div>
      <Footer />
    </>
  )
}

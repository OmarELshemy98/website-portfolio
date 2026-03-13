import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>
      <Navbar />
      <main className="contact-page bg-dark text-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-neon glow-text">Get in Touch</h1>
          <p className="text-lg text-center text-text-muted mb-12 max-w-2xl mx-auto">
            I&apos;m currently available for freelance work and open to new opportunities. If you have a project in mind or just want to say hi, feel free to reach out!
          </p>

          <form id="contactForm" className="relative group bg-gray-900/40 p-10 rounded-3xl shadow-2xl border border-white/5 backdrop-blur-xl overflow-hidden">
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl group-hover:bg-neon-cyan/10 transition-all duration-700"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-400 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan transition-all duration-300"
                    placeholder="Omar Elshemy"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-400 ml-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan transition-all duration-300"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-10">
                <label htmlFor="message" className="text-sm font-semibold text-gray-400 ml-1">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={6}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/50 focus:border-neon-cyan transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit"
                  className="group/btn relative inline-flex items-center justify-center px-10 py-4 font-bold text-gray-900 transition-all duration-300 bg-neon-cyan rounded-2xl hover:bg-opacity-90 transform hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(72,255,205,0.3)] hover:shadow-[0_0_30px_rgba(72,255,205,0.5)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message
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

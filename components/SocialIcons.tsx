import React from 'react'
import { GithubIcon, LinkedinIcon, EnvelopeIcon, WhatsappIcon } from './Icons'

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-6">
      <a 
        href="https://github.com/omarelshemy98" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group relative w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-900/50 border border-white/10 text-gray-400 hover:text-neon-cyan transition-all duration-500 overflow-hidden"
        aria-label="GitHub"
      >
        <div className="absolute inset-0 bg-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <GithubIcon className="w-6 h-6 relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
      </a>
      <a 
        href="https://www.linkedin.com/in/omar-elshemy" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group relative w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-900/50 border border-white/10 text-gray-400 hover:text-neon-cyan transition-all duration-500 overflow-hidden"
        aria-label="LinkedIn"
      >
        <div className="absolute inset-0 bg-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <LinkedinIcon className="w-6 h-6 relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
      </a>
      <a 
        href="mailto:omarelshemy010@gmail.com" 
        className="group relative w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-900/50 border border-white/10 text-gray-400 hover:text-neon-cyan transition-all duration-500 overflow-hidden"
        aria-label="Email"
      >
        <div className="absolute inset-0 bg-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <EnvelopeIcon className="w-6 h-6 relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
      </a>
      <a 
        href="https://wa.me/201026238072" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="group relative w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-900/50 border border-white/10 text-gray-400 hover:text-neon-cyan transition-all duration-500 overflow-hidden"
        aria-label="WhatsApp"
      >
        <div className="absolute inset-0 bg-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <WhatsappIcon className="w-6 h-6 relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
      </a>
    </div>
  )
}

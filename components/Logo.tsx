import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2 hover:no-underline transition-all duration-300">
      <div className="relative flex items-center justify-center bg-dark/80 rounded-full p-1 border border-neon/30 group-hover:border-neon transition-colors animate-[pulse_4s_ease-in-out_infinite]">
        <img 
          src="/images/logo.png" 
          alt="Logo" 
          className="w-7 h-7 md:w-9 md:h-9 object-contain transition-transform duration-700 group-hover:rotate-[360deg]"
        />
      </div>
      
      <div className="flex flex-col ml-1 leading-tight">
        <span className="text-sm md:text-base font-bold text-white tracking-tight group-hover:text-neon transition-colors duration-300">
          Omar <span className="text-neon">Elshemy</span>
        </span>
        <span className="text-[7px] md:text-[8px] text-text-muted font-bold uppercase tracking-[0.2em] opacity-70">
          Front-End Developer
        </span>
      </div>
    </Link>
  )
}

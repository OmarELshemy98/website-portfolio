import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2 hover:no-underline transition-all duration-300">
      <div className="relative flex items-center justify-center bg-dark/80 rounded-full p-1 transition-colors animate-[pulse_4s_ease-in-out_infinite]">
        <img 
          src="/images/logo.png" 
          alt="Logo" 
          className="w-18 h-18 md:w-20 md:h-20 object-contain transition-transform duration-700 group-hover:rotate-[360deg]"
        />
      </div>
    </Link>
  )
}

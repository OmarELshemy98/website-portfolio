import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogUrl?: string
}

export default function SEO({ 
  title, 
  description = "Omar Elshemy is a professional Front End Developer specializing in building modern, responsive, and high-performance web applications using React, Next.js, and TypeScript. Explore my portfolio for freelance services and web development projects.",
  keywords = "Omar Elshemy, Front End Developer, Web Developer, React Developer, Next.js Expert, TypeScript Developer, UI/UX Designer, Freelance Web Developer, Portfolio, JavaScript Developer, Egypt Web Developer, Alexandria, New Cairo",
  ogImage = "/images/profile-photo.jpg",
  ogUrl = "https://omarelshemy.com" 
}: SEOProps) {
  const baseTitle = "Omar Elshemy | Professional Front End Developer Portfolio"
  const fullTitle = title ? `${title} | Omar Elshemy - Front End Developer` : baseTitle

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Omar Elshemy" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      <link rel="canonical" href={ogUrl} />
      <link rel="icon" href="/favicon.png" type="image/png" />
    </Head>
  )
}

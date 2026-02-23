import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const logos = [
  '/images/logo/html.png',
  '/images/logo/css.png',
  '/images/logo/js.png',
  '/images/logo/react.png',
  '/images/logo/next-js.png',
  '/images/logo/ts.png',
  '/images/logo/tailwind.png',
  '/images/logo/redux.png',
  '/images/logo/npm.png',
  '/images/logo/github.png',
  '/images/logo/git.png',
  '/images/logo/eslint.png',
  '/images/logo/prettier.png',
  '/images/logo/ui-ux.png',
  '/images/logo/responsive.png'
]

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills</title>
      </Head>
      <Navbar />
      <section className="skills-section">
        <h2 className="section-title">Skills</h2>
        <div className="portfolio-grid">
          {logos.map((src, i) => (
            <div key={i} className="portfolio-item">
              <img src={src} alt="Skill" />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

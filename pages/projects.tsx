import Head from 'next/head'
import Script from 'next/script'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { GetStaticProps } from 'next'
import { projects as allProjects, type Project } from '@/data/projects'

type Props = {
  projects: Project[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      projects: allProjects
    }
  }
}

export default function Projects({ projects }: Props) {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Navbar />
      <section className="projects-section">
        <div className="projects-container">
          {projects.map(p => (
            <div key={p.id} className="project-item" data-project-id={p.id}>
              <div className="project-info">
                <h2 className="project-title">{p.title}</h2>
                <div className="project-details">
                  <p className="project-description">{p.description}</p>
                  <p className="project-tech"><strong>Skills:</strong> {p.tech}</p>
                  <div className="project-link-container">
                    <a href={p.link.startsWith('http') ? p.link : `https://${p.link}`} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="project-external-link">
                      Visit Project <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              {p.images && p.images.length > 0 && (
                <div className="project-visuals">
                  <div className="project-carousel" data-project-id={p.id}>
                    <button className="carousel-prev" aria-label="Previous">‹</button>
                    <div className="carousel-track">
                      {p.images.map((src, idx) => (
                        <img key={idx} src={src} alt={`${p.title} ${idx + 1}`} className="carousel-image" loading="lazy" />
                      ))}
                    </div>
                    <button className="carousel-next" aria-label="Next">›</button>
                    <div className="carousel-indicators"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <Script src="/scripts/projects.js" strategy="afterInteractive" />
      <Footer />
    </>
  )
}

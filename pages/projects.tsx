import Head from 'next/head'
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
      <nav className="main-navbar dark-navbar" role="navigation" aria-label="Main Navigation">
        <div className="navbar-inner">
          <div className="logo-text">
            <span className="logo-role">Front end developer</span><br />
            <span className="logo-name">Omar Elshemy</span>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/certifications">Certificates</a></li>
            <li><a href="/projects" className="active">Projects</a></li>
          </ul>
        </div>
      </nav>
      <section className="projects-section">
        <div className="projects-list">
          {projects.map(p => (
            <div key={p.id} className="project-card" data-project-id={p.id}>
              <h3 className="project-title">{p.title}</h3>
              <div className="project-carousel" data-project-id={p.id}>
                <button className="carousel-prev" aria-label="Previous">‹</button>
                <div className="carousel-track">
                  {p.images.length > 0 ? p.images.map((src, idx) => (
                    <img key={idx} src={src} alt={`${p.title} ${idx + 1}`} className="carousel-image" loading="lazy" />
                  )) : (
                    <div className="carousel-empty">No images available</div>
                  )}
                </div>
                <button className="carousel-next" aria-label="Next">›</button>
                <div className="carousel-indicators"></div>
              </div>
              <p className="project-description">{p.description}</p>
              <p className="project-tech"><strong>Skills:</strong> {p.tech}</p>
              <p className="project-link"><a href={p.link} target="_blank" rel="noopener noreferrer">{p.link}</a></p>
            </div>
          ))}
        </div>
      </section>
      <script src="/scripts/projects.js" defer></script>
    </>
  )
}

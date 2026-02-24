import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills</title>
      </Head>
      <Navbar />
      <section id="skills" className="skills-section">
        <div className="skills-header">
          <h2 className="section-title">My <span className="highlight">Skills</span></h2>
        </div>
        <div className="skills-container">
          <div className="skills-category">
            <h3 className="category-title">🛠️ Core Technologies</h3>
            <div className="skills-grid">
              <div className="skill-item" data-skill="HTML5">
                <div className="skill-icon">
                  <img src="/images/logo/html.png" alt="HTML5 Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>HTML5</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="95"></div></div>
                  <span className="skill-percentage">95%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="CSS3">
                <div className="skill-icon">
                  <img src="/images/logo/css.png" alt="CSS3 Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>CSS3</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="90"></div></div>
                  <span className="skill-percentage">90%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="JavaScript">
                <div className="skill-icon">
                  <img src="/images/logo/js.png" alt="JavaScript Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>JavaScript</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="85"></div></div>
                  <span className="skill-percentage">85%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="TypeScript">
                <div className="skill-icon">
                  <img src="/images/logo/ts.png" alt="TypeScript Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>TypeScript</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="80"></div></div>
                  <span className="skill-percentage">80%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">⚛️ Frameworks & Libraries</h3>
            <div className="skills-grid">
              <div className="skill-item" data-skill="React">
                <div className="skill-icon">
                  <img src="/images/logo/react.png" alt="React Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>React</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="88"></div></div>
                  <span className="skill-percentage">88%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="Next.js">
                <div className="skill-icon">
                  <img src="/images/logo/next-js.png" alt="Next.js Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Next.js</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="82"></div></div>
                  <span className="skill-percentage">82%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="Redux">
                <div className="skill-icon">
                  <img src="/images/logo/redux.png" alt="Redux Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Redux</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="80"></div></div>
                  <span className="skill-percentage">80%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="React Query">
                <div className="skill-icon">
                  <img src="/images/logo/react-query.png" alt="React Query Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>React Query</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="75"></div></div>
                  <span className="skill-percentage">75%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="Context API">
                <div className="skill-icon">
                  <img src="/images/logo/react.png" alt="React Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Context API</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="85"></div></div>
                  <span className="skill-percentage">85%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">🎨 UI Frameworks & Styling</h3>
            <div className="skills-grid">
              <div className="skill-item" data-skill="Bootstrap">
                <div className="skill-icon">
                  <img src="/images/logo/bootstrap.png" alt="Bootstrap Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Bootstrap</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="90"></div></div>
                  <span className="skill-percentage">90%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="Tailwind CSS">
                <div className="skill-icon">
                  <img src="/images/logo/tailwind.png" alt="Tailwind CSS Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Tailwind CSS</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="85"></div></div>
                  <span className="skill-percentage">85%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="Material UI">
                <div className="skill-icon">
                  <img src="/images/logo/mui.png" alt="Material UI Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Material UI</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="80"></div></div>
                  <span className="skill-percentage">80%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="Styled Components">
                <div className="skill-icon">
                  <img src="/images/logo/styled-components.png" alt="Styled Components Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Styled Components</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="80"></div></div>
                  <span className="skill-percentage">80%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="Framer Motion">
                <div className="skill-icon">
                  <img src="/images/logo/framer-motion.png" alt="Framer Motion Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Framer Motion</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="75"></div></div>
                  <span className="skill-percentage">75%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">🔧 Tools & Technologies</h3>
            <div className="skills-grid">
              <div className="skill-item" data-skill="Git">
                <div className="skill-icon">
                  <img src="/images/logo/git.png" alt="Git Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Git</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="95"></div></div>
                  <span className="skill-percentage">95%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="GitHub">
                <div className="skill-icon">
                  <img src="/images/logo/github.png" alt="GitHub Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>GitHub</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="92"></div></div>
                  <span className="skill-percentage">92%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="Responsive Design">
                <div className="skill-icon">
                  <img src="/images/logo/responsive.png" alt="Responsive Design Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Responsive Design</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="95"></div></div>
                  <span className="skill-percentage">95%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="UI/UX">
                <div className="skill-icon">
                  <img src="/images/logo/ui-ux.png" alt="UI/UX Design Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>UI/UX Design</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="85"></div></div>
                  <span className="skill-percentage">85%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="Performance">
                <div className="skill-icon">
                  <img src="/images/logo/performance-optimization.png" alt="Performance Optimization Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Performance Optimization</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="80"></div></div>
                  <span className="skill-percentage">80%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="SEO">
                <div className="skill-icon">
                  <img src="/images/logo/seo.png" alt="SEO Optimization Logo" style={{ width: 54, height: 54, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>SEO Optimization</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="85"></div></div>
                  <span className="skill-percentage">85%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="Accessibility">
                <div className="skill-icon">
                  <img src="/images/logo/web-accessibility.png" alt="Web Accessibility Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Web Accessibility</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="82"></div></div>
                  <span className="skill-percentage">82%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="Testing">
                <div className="skill-icon">
                  <img src="/images/logo/testing-qa.png" alt="Testing & QA Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Testing & QA</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="78"></div></div>
                  <span className="skill-percentage">78%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="Figma">
                <div className="skill-icon">
                  <img src="/images/logo/figma.png" alt="Figma Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Figma</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="85"></div></div>
                  <span className="skill-percentage">85%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="npm">
                <div className="skill-icon">
                  <img src="/images/logo/npm.png" alt="Npm Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Npm</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="90"></div></div>
                  <span className="skill-percentage">90%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="yarn">
                <div className="skill-icon">
                  <img src="/images/logo/yarn.png" alt="Yarn Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Yarn</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="90"></div></div>
                  <span className="skill-percentage">90%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="Vite">
                <div className="skill-icon">
                  <img src="/images/logo/vite.png" alt="Vite Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Vite</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="82"></div></div>
                  <span className="skill-percentage">82%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">⚡ Modern JavaScript & APIs</h3>
            <div className="skills-grid">
              <div className="skill-item" data-skill="ES6+ Features">
                <div className="skill-icon">
                  <img src="/images/logo/es6.png" alt="ES6+ Features Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>ES6+ Features</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="90"></div></div>
                  <span className="skill-percentage">90%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="ES6 Modules">
                <div className="skill-icon">
                  <img src="/images/logo/es6.png" alt="ES6+ Features Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>ES6 Modules</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="85"></div></div>
                  <span className="skill-percentage">85%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="Async/Await">
                <div className="skill-icon">
                  <img src="/images/logo/async-await.png" alt="Async/Await Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Async/Await</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="88"></div></div>
                  <span className="skill-percentage">88%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="Web APIs">
                <div className="skill-icon">
                  <img src="/images/logo/web-api.png" alt="Web APIs Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Web APIs</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="82"></div></div>
                  <span className="skill-percentage">82%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">⌨️ Development Tools</h3>
            <div className="skills-grid">
              <div className="skill-item" data-skill="ESLint">
                <div className="skill-icon">
                  <img src="/images/logo/eslint.png" alt="ESLint Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>ESLint</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="85"></div></div>
                  <span className="skill-percentage">85%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="Prettier">
                <div className="skill-icon">
                  <img src="/images/logo/prettier.png" alt="Prettier Logo" style={{ width: 64, height: 64, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Prettier</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="88"></div></div>
                  <span className="skill-percentage">88%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">🔗 Backend Integration</h3>
            <div className="skills-grid">
              <div className="skill-item" data-skill="Server-Side Rendering">
                <div className="skill-icon">
                  <img src="/images/logo/ssr.png" alt="Server-Side Rendering Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Server-Side Rendering</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="80"></div></div>
                  <span className="skill-percentage">80%</span>
                </div>
              </div>
              <div className="skill-item" data-skill="SSG">
                <div className="skill-icon">
                  <img src="/images/logo/ssg.png" alt="Static Site Generation Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                </div>
                <div className="skill-info">
                  <h4>Static Site Generation</h4>
                  <div className="skill-bar"><div className="skill-progress" data-level="85"></div></div>
                  <span className="skill-percentage">85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

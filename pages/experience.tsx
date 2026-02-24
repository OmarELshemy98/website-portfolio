import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience</title>
      </Head>
      <Navbar />
      <section id="experience" className="experience-section">
        <h2 className="section-title">Work <span className="highlight">Experience</span></h2>
        <div className="experience-container">
          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-company">
                <h3>Front End Developer</h3>
                <h4>Arcon Corporation</h4>
              </div>
              <div className="experience-period">
                <span className="period">SEPTEMBER 2024 - PRESENT</span>
              </div>
            </div>
            <div className="experience-content">
              <ul>
                <li>Built responsive websites using HTML, CSS, and JavaScript to improve user experience.</li>
                <li>Collaborated with team members to implement new features, boosting site performance.</li>
                <li>Assisted in bug fixes and site updates to ensure optimal functionality.</li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-company">
                <h3>Sales Executive</h3>
                <h4>CHUBB LIFE INSURANCE</h4>
              </div>
              <div className="experience-period">
                <span className="period">MAY 2024 - SEPTEMBER 2024</span>
              </div>
            </div>
            <div className="experience-content">
              <ul>
                <li>Assist clients with selecting life insurance policies tailored to their needs.</li>
                <li>Provide expert advice on loan products, guiding clients through the application process.</li>
                <li>Conduct financial assessments and recommend suitable financial products.</li>
                <li>Collaborate with bank staff to ensure smooth operations and excellent customer service.</li>
                <li>Maintain detailed records of client interactions and financial transactions.</li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="experience-company">
                <h3>Corporate Accountant</h3>
                <h4>MABARET AL ASAFRA HOSPITAL</h4>
              </div>
              <div className="experience-period">
                <span className="period">APRIL 2020 - FEBRUARY 2021</span>
              </div>
            </div>
            <div className="experience-content">
              <ul>
                <li>Prepared monthly financial reports, highlighting key metrics and trends for management review.</li>
                <li>Supported accounts payable and receivable functions, including invoice processing and payment collections.</li>
                <li>Maintained accurate records of financial transactions, ensuring data integrity and compliance with accounting standards.</li>
                <li>Reconciled bank statements and general ledger accounts, resolving discrepancies promptly.</li>
                <li>Assisted in preparing tax returns and regulatory filings, ensuring compliance with local and federal regulations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

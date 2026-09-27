import './App.css'
import './Technology.css'
import ffsProfile from './assets/FFS-Profile.png'

const products = [
  {
    title: 'Carrier Command Portal',
    status: 'FFS Platform',
    text: 'A carrier operations workspace for loads, documents, trucks, drivers, reporting, payment visibility, performance analytics, and back-office coordination.'
  },
  {
    title: 'Load Hub',
    status: 'In Development',
    text: 'A freight visibility and load-search environment designed to bring approved data sources, lane opportunities, and carrier-specific workflows into one place.'
  },
  {
    title: 'AI Market Intelligence',
    status: 'Private Beta',
    text: 'Market-watch tools for lane trends, rate intelligence, reload planning, market alerts, carrier history, and decision support for dispatch operations.'
  },
  {
    title: 'Driver Operations Technology',
    status: 'FFS Platform',
    text: 'Driver-facing tools for load status updates, pickup and delivery communication, document workflows, BOL/POD handling, and day-to-day dispatch coordination.'
  },
  {
    title: 'Forge Sign',
    status: 'In Development',
    text: 'A document preparation and electronic-signing workflow designed for business agreements, multi-signer documents, signing order, and reusable field placement.'
  },
  {
    title: 'Custom Transportation Software',
    status: 'Available for Consultation',
    text: 'Custom dashboards, internal tools, workflow automation, reporting systems, API integrations, and operating software built around real transportation workflows.'
  }
]

function Technology() {
  return (
    <main className="site-shell tech-page">
      <section className="tech-hero">
        <nav className="nav tech-nav">
          <a href="/" className="tech-brand">
            <img src={ffsProfile} alt="Frontline Forge Solutions" className="nav-logo" />
            <span>Frontline Forge Solutions</span>
          </a>
          <div className="hero-actions" style={{ marginTop: 0 }}>
            <a href="/hours" className="btn btn-dark">Hours</a>
            <a href="/" className="btn btn-dark">Carrier Services</a>
            <a href="https://calendly.com/elijah-freight/30min" target="_blank" rel="noreferrer" className="nav-cta">Technology Consultation</a>
          </div>
        </nav>

        <div className="tech-hero-grid">
          <div>
            <p className="eyebrow">FFS Technology & Software Solutions</p>
            <h1>TRANSPORTATION TECHNOLOGY BUILT FROM REAL CARRIER OPERATIONS.</h1>
            <p className="hero-text">
              Frontline Forge Solutions develops operational software, automation, and data tools around the real problems carriers, dispatch teams, and small fleets deal with every day.
            </p>
            <div className="hero-actions">
              <a href="#platforms" className="btn btn-gold">Explore FFS Technology</a>
              <a href="#integrations" className="btn btn-dark">API & Integrations</a>
            </div>
          </div>

          <div className="tech-console" aria-label="FFS technology capabilities">
            <div className="console-top"><span>FFS TECHNOLOGY</span><span className="console-live">ACTIVE DEVELOPMENT</span></div>
            <div className="console-grid">
              <div><small>OPERATIONS</small><strong>Carrier Command</strong></div>
              <div><small>FREIGHT DATA</small><strong>Load Hub</strong></div>
              <div><small>INTELLIGENCE</small><strong>Market Watch</strong></div>
              <div><small>DRIVER TOOLS</small><strong>DriverLink</strong></div>
              <div><small>DOCUMENTS</small><strong>Forge Sign</strong></div>
              <div><small>INTEGRATIONS</small><strong>API Layer</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section tech-intro">
        <p className="eyebrow">Built Inside Operations</p>
        <h2>Software should reduce friction, not create another dashboard to babysit.</h2>
        <p>
          FFS technology is designed around carrier communication, load movement, paperwork, dispatch management, performance visibility, and back-office coordination. We build tools to make transportation teams faster, more organized, and easier to manage.
        </p>
      </section>

      <section className="section" id="platforms">
        <p className="eyebrow">Platforms & Products</p>
        <h2>The FFS technology stack.</h2>
        <div className="tech-product-grid">
          {products.map((product) => (
            <article className="tech-product" key={product.title}>
              <span className="tech-status">{product.status}</span>
              <h3>{product.title}</h3>
              <p>{product.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section tech-band" id="integrations">
        <div>
          <p className="eyebrow">API & Integration Partnerships</p>
          <h2>Built to connect with the systems transportation companies already use.</h2>
        </div>
        <p>
          FFS is developing integration capability for freight-market data, load search, tracking, factoring, accounting, document storage, communications, and other transportation technology providers. Availability depends on provider approval, licensing, and API access.
        </p>
      </section>

      <section className="section">
        <p className="eyebrow">Custom Development</p>
        <h2>Transportation workflows can be turned into software.</h2>
        <div className="service-grid">
          {[
            'Internal Operations Dashboards',
            'Carrier & Fleet Portals',
            'API Integrations',
            'Workflow Automation',
            'Reporting & Analytics',
            'Driver Communication Tools',
            'Document & Signing Workflows',
            'Market Intelligence Systems',
            'Custom Back-Office Tools',
          ].map((service) => (
            <div className="service" key={service}><span>+</span>{service}</div>
          ))}
        </div>
      </section>

      <section className="section tech-audience">
        <p className="eyebrow">Who We Build For</p>
        <h2>Carriers, fleets, dispatch operations, and transportation teams.</h2>
        <div className="cards">
          <div className="card">Owner-operators and small carriers that need better operating visibility.</div>
          <div className="card">Growing fleets that need centralized workflows and reporting.</div>
          <div className="card">Transportation businesses that need custom internal tools or integrations.</div>
        </div>
      </section>

      <section className="section consult tech-consult">
        <div>
          <p className="eyebrow">Technology Consultation</p>
          <h2>Have a transportation workflow that needs a better system?</h2>
          <p>Talk with FFS about internal tools, software development, automation, carrier systems, or integration opportunities.</p>
        </div>
        <div className="tech-cta-panel">
          <strong>Frontline Forge Solutions Technology</strong>
          <p>Transportation-first software development and operational systems.</p>
          <a href="https://calendly.com/elijah-freight/30min" target="_blank" rel="noreferrer" className="btn btn-gold">Request a Technology Consultation</a>
        </div>
      </section>

      <footer>
        <img src={ffsProfile} alt="FFS mark" />
        <div>
          <p>Frontline Forge Solutions — carrier operations, transportation technology, and software solutions.</p>
          <a href="/hours" style={{ color: '#d89c2e', fontWeight: 800 }}>Hours of Operation</a>
        </div>
      </footer>
    </main>
  )
}

export default Technology

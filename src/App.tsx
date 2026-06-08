import './App.css'
import ffsFull from './assets/FFS-Full.png'
import ffsProfile from './assets/FFS-Profile.png'
import heroBg from './assets/backgrounds/hero-bg.png'

function App() {
  return (
    <main className="site-shell">
      <section
        className="hero"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(0,0,0,.82), rgba(0,0,0,.92)),
            url(${heroBg})
          `
        }}
      >
        <div className="hero-glow" />

        <nav className="nav">
          <img src={ffsProfile} alt="FFS logo" className="nav-logo" />
          <a href="#consultation" className="nav-cta">Book Consultation</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Forge Freight Support</p>
            <h1>DISPATCH SUPPORT BUILT FOR OWNER-OPERATORS WHO NEED TO STAY MOVING.</h1>
            <p className="hero-text">
              Professional freight dispatch support for small carriers, hotshot drivers,
              and owner-operators who need cleaner communication, stronger load flow,
              and organized support behind the scenes.
            </p>
            <div className="hero-actions">
              <a href="#consultation" className="btn btn-gold">Book a Free Consultation</a>
              <a href="#services" className="btn btn-dark">Explore Services</a>
            </div>
          </div>

          <div className="hero-card">
            <img src={ffsFull} alt="Forge Freight Support" />
          </div>
        </div>
      </section>

      <section className="section problem">
        <p className="eyebrow">The Problem</p>
        <h2>Empty miles, scattered paperwork, and missed follow-up cost drivers money.</h2>
        <div className="cards">
          <div className="card">Tired of sitting empty between loads?</div>
          <div className="card">Losing time chasing brokers and rate confirmations?</div>
          <div className="card">Need cleaner dispatch organization and communication?</div>
        </div>
      </section>

      <section className="section" id="services">
        <p className="eyebrow">Services</p>
        <h2>Remote freight support built for independent drivers and small fleets.</h2>
        <div className="service-grid">
          {[
            'Load Searching Support',
            'Broker Communication',
            'Rate Confirmation Tracking',
            'Carrier Packet Assistance',
            'Route & Load Planning',
            'Weekly Dispatch Support',
          ].map((service) => (
            <div className="service" key={service}>
              <span>*</span>
              {service}
            </div>
          ))}
        </div>
      </section>

      <section className="section pricing">
        <p className="eyebrow">Flexible Setup</p>
        <h2>Flat-rate and percentage-based support options available.</h2>
        <p>
          Every driver runs different lanes and freight types. We'll review your setup
          and build a support plan that fits your operation.
        </p>
      </section>

      <section className="section consult" id="consultation">
        <div>
          <p className="eyebrow">Start Here</p>
          <h2>Book a free FFS consultation.</h2>
          <p>Tell us about your truck, lanes, and the type of dispatch support you need.</p>
        </div>

        <form className="form">
          <input placeholder="Name" />
          <input placeholder="Phone Number" />
          <input placeholder="Email Address" />
          <input placeholder="Truck Type" />
          <textarea placeholder="What kind of support are you looking for?" />
          <button type="button">Request Consultation</button>
        </form>
      </section>

      <footer>
        <img src={ffsProfile} alt="FFS mark" />
        <p>
          Forge Freight Support - Professional remote dispatch support for owner-operators
          and small carriers.
        </p>
      </footer>
    </main>
  )
}

export default App

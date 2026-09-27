import './App.css'
import './Hours.css'
import ffsProfile from './assets/FFS-Profile.png'

const activeLoadSupport = [
  'Broker communication',
  'Pickup or delivery issues',
  'Appointment changes',
  'Delays and service interruptions',
  'Detention or layover communication',
  'Breakdown-related notifications',
  'Rejected or refused freight situations',
  'Urgent paperwork affecting delivery',
]

const afterHoursExclusions = [
  'After-hours load searching',
  'After-hours load booking',
  'Routine administrative requests',
  'General account questions',
  'Onboarding requests',
  'Non-urgent paperwork',
  'Settlement questions',
]

function Hours() {
  return (
    <main className="site-shell hours-page">
      <section className="hours-hero">
        <nav className="nav hours-nav">
          <a href="/" className="hours-brand">
            <img src={ffsProfile} alt="Frontline Forge Solutions" className="nav-logo" />
            <span>Frontline Forge Solutions</span>
          </a>
          <div className="hero-actions" style={{ marginTop: 0 }}>
            <a href="/" className="btn btn-dark">Carrier Services</a>
            <a href="/technology" className="btn btn-dark">Technology</a>
            <a href="https://calendly.com/elijah-freight/30min" target="_blank" rel="noreferrer" className="nav-cta">Book Consultation</a>
          </div>
        </nav>

        <div className="hours-hero-grid">
          <div>
            <p className="eyebrow">Frontline Forge Solutions</p>
            <h1>HOURS OF OPERATION</h1>
            <p className="hero-text">
              Structured dispatch, carrier support, and active-load coverage designed to keep your operation moving while making service availability clear.
            </p>
            <div className="hours-notice">
              <strong>Important:</strong> Load booking hours and operational support hours are separate. Support for an active load does not mean FFS is available to search for or book new freight outside posted booking hours.
            </div>
            <p className="hours-timezone">All operating hours are listed in Eastern Time (ET).</p>
          </div>

          <div className="hours-summary" aria-label="FFS weekly operating hours">
            <div className="hours-summary-title">Weekly Service Schedule</div>
            <div className="hours-row"><span>Mon–Fri Dispatch</span><strong>7:00 AM – 7:00 PM</strong></div>
            <div className="hours-row"><span>Mon–Fri Regular Service</span><strong>8:00 AM – 9:00 PM</strong></div>
            <div className="hours-row"><span>Saturday Load Booking</span><strong>8:00 AM – 3:00 PM</strong></div>
            <div className="hours-row"><span>Sunday</span><strong>Closed*</strong></div>
            <small>*Active loads continue to receive operational support.</small>
          </div>
        </div>
      </section>

      <section className="section hours-section">
        <p className="eyebrow">Monday – Friday</p>
        <h2>Dispatch & Regular Service Hours</h2>
        <div className="hours-card-grid two-col">
          <article className="hours-card">
            <span className="hours-badge">Dispatch Service</span>
            <h3>7:00 AM – 7:00 PM ET</h3>
            <p>Load searching, load booking support, rate negotiation support, broker communication, lane planning, load coordination, and dispatch-related carrier communication.</p>
            <p>New load searching and booking requests received outside dispatch hours will be handled during the next available booking period.</p>
          </article>
          <article className="hours-card">
            <span className="hours-badge">Regular Service</span>
            <h3>8:00 AM – 9:00 PM ET</h3>
            <p>Carrier support, administrative assistance, paperwork support, load updates, compliance-related support, account questions, settlement and document assistance, and general FFS service requests.</p>
            <p>Non-urgent requests should be submitted during regular service hours whenever possible.</p>
          </article>
        </div>
      </section>

      <section className="section hours-section hours-alt">
        <p className="eyebrow">Weekend Operations</p>
        <h2>Saturday & Sunday Coverage</h2>
        <div className="hours-card-grid two-col">
          <article className="hours-card">
            <span className="hours-badge">Saturday</span>
            <h3>8:00 AM – 3:00 PM ET</h3>
            <p>Load searching and booking services are available during this period. After 3:00 PM, FFS does not provide new load searching or booking services.</p>
            <p>Carriers operating under an active load will continue to receive operational support as needed.</p>
          </article>
          <article className="hours-card">
            <span className="hours-badge">Sunday</span>
            <h3>Closed</h3>
            <p>FFS is closed Sundays for regular operations, dispatch services, load searching, and new load bookings.</p>
            <p>Carriers operating under an active load will continue to receive necessary operational support through pickup, transit, and delivery.</p>
          </article>
        </div>
      </section>

      <section className="section hours-section">
        <p className="eyebrow">Active Loads</p>
        <h2>Operational Support Continues</h2>
        <p className="hours-lead">An active load is a shipment that has already been booked and is awaiting pickup, at pickup, in transit, at delivery, or awaiting final delivery completion.</p>
        <div className="hours-list-grid">
          {activeLoadSupport.map((item) => <div className="hours-list-item" key={item}><span>+</span>{item}</div>)}
        </div>
      </section>

      <section className="section hours-section hours-emergency">
        <p className="eyebrow">24/7 Emergency Access</p>
        <h2>After-Hours Operational Support</h2>
        <p className="hours-lead">Carriers enrolled in a service level that includes 24/7 Emergency Access may receive operational assistance outside normal service hours for active loads. Emergency access is intended for time-sensitive situations that could directly affect pickup, transportation, or delivery of an already-booked load.</p>
        <div className="hours-warning">
          <strong>No after-hours load bookings.</strong>
          <p>24/7 Emergency Access does not include:</p>
          <div className="hours-exclusion-grid">
            {afterHoursExclusions.map((item) => <div key={item}>{item}</div>)}
          </div>
        </div>
        <p className="hours-fineprint">Emergency access provides FFS operational support; however, FFS cannot guarantee the immediate availability or response of brokers, shippers, receivers, warehouses, or other third parties outside their normal operating hours.</p>
      </section>

      <section className="section hours-section hours-holiday">
        <p className="eyebrow">Holiday Operations</p>
        <h2>Closed Unless Otherwise Announced</h2>
        <p>Frontline Forge Solutions is closed on recognized holidays unless otherwise announced. Regular dispatch, load searching, new load booking, administrative services, and general carrier services will be unavailable during holiday closures.</p>
        <p>Carriers operating under an active load will continue to receive necessary operational support. If FFS operates modified or special holiday hours, those hours will be communicated to active carriers in advance whenever possible.</p>
      </section>

      <section className="section hours-section hours-service-notice">
        <p className="eyebrow">Service Notice</p>
        <h2>Operational Hours May Occasionally Change</h2>
        <p>Posted service hours may be temporarily adjusted due to holidays, emergencies, system interruptions, severe weather, or other operational circumstances. Significant changes will be communicated to affected carriers when applicable.</p>
      </section>

      <footer className="hours-footer">
        <img src={ffsProfile} alt="FFS mark" />
        <div>
          <p>Frontline Forge Solutions — Dispatch Management • Carrier Support • Freight Operations</p>
          <a href="/hours">Hours of Operation</a>
        </div>
      </footer>
    </main>
  )
}

export default Hours

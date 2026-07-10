import { useState } from 'react';

import calendarIcon from '../assets/icons/calendar.svg';
import destinationIcon from '../assets/icons/destination.svg';
import pickupIcon from '../assets/icons/pickup.svg';
import busIcon from '../assets/icons/Icon.svg';
import hotelIcon from '../assets/icons/Icon-1.svg';

import flightIcon from '../assets/services/flight.svg';
import rideIcon from '../assets/services/ride.svg';
import travelerIcon from '../assets/services/traveler.svg';
import whyPaymentIcon from '../assets/services/why-payment.svg';

import heroSectionImage from '../assets/image/hint.webp';
import promoImage from '../assets/image/hero.webp';
import logoImage from '../assets/image/JALDIRIDE 2.png';

import processGridIcon from '../assets/process/process-grid.svg';

import platformDesktopIcon from '../assets/platform/platform-desktop.svg';
import platformPhoneIcon from '../assets/platform/platform-phone.svg';

import whyBoltIcon from '../assets/why-us/why-bolt.svg';
import whyRidersIcon from '../assets/why-us/why-riders.svg';
import whyShieldIcon from '../assets/why-us/why-shield.svg';
import whySupportIcon from '../assets/why-us/why-support.svg';

function SvgIcon({ src, alt = '', size = 18, className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden={alt ? undefined : 'true'}
      className={`svg-icon ${className}`.trim()}
      width={size}
      height={size}
    />
  )
}

const travelModes = [
  { id: 'ride', label: 'Ride', badge: null, icon: rideIcon, activeColor: '#ffffff', idleColor: '#ffffff' },
  { id: 'bus', label: 'Bus', badge: null, icon: busIcon, activeColor: '#ffffff', idleColor: '#6f6875' },
  { id: 'hotels', label: 'Hotels', badge: 'COMING SOON', icon: hotelIcon, activeColor: '#ffffff', idleColor: '#6f6875' },
  { id: 'flights', label: 'Flights', badge: 'COMING SOON', icon: flightIcon, activeColor: '#ffffff', idleColor: '#6f6875' },
]

const fields = [
  { label: 'Pickup Point', placeholder: 'Enter Origin', icon: pickupIcon, color: '#ff7a00' },
  { label: 'Destination', placeholder: 'Enter Drop-off', icon: destinationIcon, color: '#22c55e' },
  { label: 'Departure Date', placeholder: 'mm/dd', icon: calendarIcon, color: '#7a7582' },
  { label: 'Travelers', placeholder: '1 Passenger', icon: travelerIcon, color: '#7a7582' },
]

const whyCards = [
  {
    title: 'Live Tracking',
    description: 'Watch your ride in real-time on the map. Always know exactly where your driver is.',
    icon: pickupIcon,
  },
  {
    title: 'OTP Verification',
    description: 'Every ride confirmed with a one-time password. Your safety is our first priority.',
    icon: whyShieldIcon,
  },
  {
    title: 'Secure Payments',
    description: 'Multiple payment options with bank-grade encryption on every transaction.',
    icon: whyPaymentIcon,
  },
  {
    title: 'Verified Riders',
    description: 'Every driver is background-checked, licensed, and rated by real passengers.',
    icon: whyRidersIcon,
  },
  {
    title: '24x7 Support',
    description: 'Round-the-clock customer support ready to help with any issue, anytime.',
    icon: whySupportIcon,
  },
  {
    title: 'Fast Booking',
    description: 'Book a ride in under 30 seconds. Matched to the nearest available driver instantly.',
    icon: whyBoltIcon,
  },
]

const platformCards = [
  {
    title: 'Desktop Website',
    description: 'Full-featured web experience for booking, managing rides, and tracking journeys.',
    icon: platformDesktopIcon,
    image: promoImage,
  },
  {
    title: 'User App',
    description: 'Book rides on the go with our sleek iOS and Android app designed for passengers.',
    icon: platformPhoneIcon,
    image: heroSectionImage,
  },
  {
    title: 'Rider App',
    description: 'Dedicated driver app with earnings dashboard, navigation, and live ride requests.',
    icon: whyRidersIcon,
    image: heroSectionImage,
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Choose Service',
    description: 'Select Ride, Bus, or wait for Hotels and Flights. Pick what fits your journey.',
    icon: processGridIcon,
  },
  {
    number: '02',
    title: 'Book Instantly',
    description: 'Enter your pickup, destination, and date. Confirm in seconds with no friction.',
    icon: whyBoltIcon,
  },
  {
    number: '03',
    title: 'Track Live',
    description: 'Watch your ride arrive on the map in real time. Every step, fully visible.',
    icon: pickupIcon,
  },
  {
    number: '04',
    title: 'Travel Safely',
    description: 'OTP-verified boarding, rated drivers, and 24/7 support for peace of mind.',
    icon: whyShieldIcon,
  },
]

const driverHighlights = [
  {
    title: 'Flexible Hours',
    description: 'Drive whenever you want. Set your own schedule, no fixed shifts.',
    icon: whySupportIcon,
  },
  {
    title: 'Transparent Earnings',
    description: 'See exactly what you earn per trip. No hidden deductions, ever.',
    icon: whyPaymentIcon,
  },
  {
    title: 'Easy Onboarding',
    description: 'Get approved quickly with fast verification and simple document submission.',
    icon: whyShieldIcon,
  },
]

const driverStats = [
  { label: 'Active Drivers', value: '10K+', icon: whyRidersIcon },
  { label: 'Avg Daily Earnings', value: 'â‚¹800+', icon: whyPaymentIcon },
  { label: 'Approval Time', value: '48h', icon: whySupportIcon },
]

const comingSoonItems = [
  {
    title: 'Hotel Booking',
    badge: 'Q3 2025',
    description: 'Browse thousands of verified hotels and guesthouses. Best rates, instant confirmation.',
    icon: hotelIcon,
    progress: 65,
  },
  {
    title: 'Flight Booking',
    badge: 'Q4 2025',
    description: 'Search and book flights across all major airlines. Real-time prices, no hidden fees.',
    icon: flightIcon,
    progress: 40,
  },
  {
    title: 'Mobile App',
    badge: 'Coming Soon',
    description: 'The full JaldiRide experience in your pocket. iOS and Android, all features, zero friction.',
    icon: platformPhoneIcon,
    progress: 25,
  },
]

const footerColumns = [
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press', 'Blog'],
  },
  {
    title: 'Services',
    links: ['Book a Ride', 'Bus Booking', 'Hotels (Soon)', 'Flights (Soon)'],
  },
  {
    title: 'Drivers',
    links: ['Become a Rider', 'Driver App', 'Earnings', 'Support'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Safety'],
  },
]

export default function Home({ onNavigate = () => {} }) {
  const [activeMode, setActiveMode] = useState('ride')

  const handleModeClick = (modeId) => {
    if (modeId === 'hotels' || modeId === 'flights') {
      onNavigate('service', { service: modeId })
      return
    }

    setActiveMode(modeId)
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">
          <img className="brand-logo" src={logoImage} alt="" aria-hidden="true" />
          <span className="brand-text">
            <strong>JaldiRide</strong> <span>Connect</span>
          </span>
        </div>

        <nav className="nav-links" aria-label="Primary navigation">
          <a className="is-active" href="#services">Services</a>
          <a href="#app">App</a>
          <a href="#riders">Riders</a>
        </nav>

        <button className="book-now" type="button" onClick={() => onNavigate('login')}>
          Book Now
        </button>
      </header>

      <main className="hero-section" id="services">
        <div className="hero-background-image" aria-hidden="true" style={{ '--hero-background-image': `url(${heroSectionImage})` }} />
        <div className="hero-sky" aria-hidden="true" />
        <div className="hero-buildings hero-buildings-left" aria-hidden="true" />
        <div className="hero-buildings hero-buildings-right" aria-hidden="true" />
        <div className="hero-road" aria-hidden="true" />
        <div className="hero-sun" aria-hidden="true" />

        <section className="hero-content">
          <div className="hero-title-wrap">
            <h1>
              <span className="hero-line hero-line-top">Every Journey Starts</span>
              <span className="hero-line hero-line-bottom">
                <span className="hero-with">With</span> <span className="hero-brand-word">JaldiRide</span>
              </span>
            </h1>
          </div>
          <p className="subcopy">
            Book rides instantly. Travel smarter. Hotels and flights launching soon for the modern global professional.
          </p>

          <div className="booking-card" id="app">
            <div className="mode-row" role="tablist" aria-label="Travel mode">
              {travelModes.map((mode) => (
                <button
                  key={mode.id}
                  className={`mode-pill ${activeMode === mode.id ? 'is-active' : ''}`}
                  type="button"
                  role="tab"
                  aria-selected={activeMode === mode.id}
                  onClick={() => handleModeClick(mode.id)}
                >
                  <SvgIcon
                    src={mode.icon}
                    size={mode.id === 'ride' ? 18 : 17}
                    className={`mode-icon ${mode.id === 'ride' && activeMode === mode.id ? 'is-ride-active' : ''}`}
                  />
                  <span>{mode.label}</span>
                  {mode.badge ? <small>{mode.badge}</small> : null}
                </button>
              ))}
            </div>

            <div className="booking-divider" />

            <div className="fields-grid">
              {fields.map((field) => (
                <label key={field.label} className="field">
                  <span className="field-label">{field.label}</span>
                  <span className="field-control">
                    <SvgIcon src={field.icon} size={17} />
                    <input type="text" placeholder={field.placeholder} />
                  </span>
                </label>
              ))}

              <button className="search-button" type="button" onClick={() => onNavigate('search')}>
                <span>{activeMode === 'bus' ? 'Find Bus' : 'Find Ride'}</span>
                <span aria-hidden="true">-&gt;</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <section className="why-section" id="riders">
        <div className="why-shell">
          <span className="why-badge">Why Choose Us</span>
          <h2 className="why-title">
            Why <span>JaldiRide</span>
          </h2>
          <p className="why-subcopy">
            Built for modern travelers who demand speed, safety, and simplicity every single ride.
          </p>

          <div className="why-grid-wrap">
            <div className="why-connector" aria-hidden="true" />
            <div className="why-cards-grid">
              {whyCards.map((card) => (
                <article className="why-card" key={card.title}>
                  <span className="why-icon-wrap">
                    <SvgIcon src={card.icon} size={16} className="why-icon" />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="why-promo-row">
            <article className="promo-image-card" style={{ '--promo-image': `url(${promoImage})` }}>
              <div className="promo-overlay" />
              <div className="promo-content">
                <h3>Smart Terminals</h3>
                <p>Exclusive access to premium lounges and digital check-ins at 500+ locations.</p>
              </div>
            </article>

            <article className="promo-safety-card">
              <span className="promo-safety-icon-wrap">
                <SvgIcon src={whyShieldIcon} size={18} className="promo-safety-icon" />
              </span>
              <h3>Safety First</h3>
              <p>Real-time GPS tracking and 24/7 emergency assistance for every journey.</p>
              <strong>100%</strong>
              <small>Verified Fleet</small>
            </article>
          </div>
        </div>
      </section>

      <section className="platform-section" id="platforms">
        <div className="platform-shell">
          <span className="section-label">Our Platforms</span>
          <h2 className="section-title">One Ecosystem, Every Device</h2>
          <p className="section-subcopy">Seamlessly connected across web, passenger, and driver experiences.</p>

          <div className="platform-grid">
            {platformCards.map((card) => (
              <article className="platform-card" key={card.title}>
                <div className="platform-image" style={{ '--platform-image': `url(${card.image})` }}>
                  <span className="platform-live">Live</span>
                </div>
                <div className="platform-content">
                  <span className="platform-icon-wrap">
                    <SvgIcon src={card.icon} size={14} className="platform-icon" />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="process-block">
            <span className="section-label">Simple Process</span>
            <h2 className="section-title">How It Works</h2>
            <p className="section-subcopy">From open to booked in under a minute. That&apos;s the JaldiRide promise.</p>

            <div className="process-grid">
              {processSteps.map((step) => (
                <article className="process-card" key={step.number}>
                  <span className="process-icon-wrap">
                    <SvgIcon src={step.icon} size={14} className="process-icon" />
                  </span>
                  <small>{step.number}</small>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="driver-opportunity-section" id="drivers-opportunity">
        <div className="driver-opportunity-bg" aria-hidden="true" />
        <div className="driver-opportunity-shell">
          <div className="driver-main-grid">
            <article className="driver-copy-block">
              <span className="driver-label">Driver Opportunity</span>
              <h2>
                Become a Rider.
                <span>Earn on Your Own Terms.</span>
              </h2>
              <p>Join thousands of drivers earning with JaldiRide. Complete freedom, real income, and a team that supports you every mile.</p>
              <button type="button" className="driver-cta">Apply to Drive â†’</button>
            </article>

            <div className="driver-feature-stack">
              {driverHighlights.map((item) => (
                <article className="driver-feature-card" key={item.title}>
                  <span className="driver-feature-icon-wrap">
                    <SvgIcon src={item.icon} size={16} className="driver-feature-icon" />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="driver-stats-row">
            {driverStats.map((stat) => (
              <article className="driver-stat-card" key={stat.label}>
                <span className="driver-stat-icon-wrap">
                  <SvgIcon src={stat.icon} size={16} className="driver-stat-icon" />
                </span>
                <div>
                  <strong>{stat.value}</strong>
                  <small>{stat.label}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="coming-soon-section" id="coming-soon">
        <div className="coming-soon-shell">
          <span className="section-label">On The Horizon</span>
          <h2 className="section-title">Coming Soon</h2>
          <p className="section-subcopy">We&apos;re building the complete travel ecosystem. Stay ahead, be first to know.</p>

          <div className="coming-grid">
            {comingSoonItems.map((item) => (
              <article className="coming-card" key={item.title}>
                <span className="coming-icon-wrap">
                  <SvgIcon src={item.icon} size={16} className="coming-icon" />
                </span>
                <div className="coming-title-row">
                  <h3>{item.title}</h3>
                  <span className="coming-chip">{item.badge}</span>
                </div>
                <p>{item.description}</p>
                <div className="coming-progress-meta">
                  <span>Development progress</span>
                  <strong>{item.progress}%</strong>
                </div>
                <div className="coming-progress-track">
                  <span style={{ width: `${item.progress}%` }} />
                </div>
              </article>
            ))}
          </div>

          <article className="coming-notify-card">
            <h3>Be the first to know when we launch.</h3>
            <p>Get notified the moment we launch these premium travel features.</p>
            <form className="coming-notify-form" onSubmit={(event) => event.preventDefault()}>
              <input type="email" placeholder="Enter your email" aria-label="Email" />
              <button type="submit">Notify Me</button>
            </form>
          </article>
        </div>
      </section>

      <section className="app-footer-section" id="download-app">
        <div className="app-download-shell">
          <article className="app-download-card">
            <div className="app-download-copy">
              <span className="app-download-label">Mobile Experience</span>
              <h2>Download the JaldiRide App</h2>
              <p>Your entire travel journey in one tap. Book, track, and manage rides directly from your phone.</p>
              <div className="app-store-row">
                <button type="button" className="store-btn">ï£¿ App Store</button>
                <button type="button" className="store-btn">â–¶ Google Play</button>
              </div>
            </div>

            <div className="app-download-art">
              <div className="qr-card">
                <div className="qr-block" />
                <small>Scan to download app</small>
              </div>
              <div className="phone-mockup">
                <div className="phone-notch" />
                <div className="phone-content">
                  <img className="phone-logo" src={logoImage} alt="" aria-hidden="true" />
                  <strong>JaldiRide</strong>
                  <small>Your ride awaits</small>
                </div>
              </div>
            </div>
          </article>
        </div>

        <footer className="site-footer">
          <div className="footer-shell">
            <div className="footer-top-grid">
              <article className="footer-brand-col">
                <div className="footer-brand-row">
                  <img className="brand-logo" src={logoImage} alt="" aria-hidden="true" />
                  <strong>JaldiRide</strong>
                </div>
                <p>Making every journey faster, smarter, and more reliable across Pakistan and beyond.</p>
                <ul>
                  <li>hello@jaldiride.com</li>
                  <li>+92 300 000 0000</li>
                  <li>Lahore, Pakistan</li>
                </ul>
              </article>

              {footerColumns.map((col) => (
                <article key={col.title} className="footer-link-col">
                  <h3>{col.title}</h3>
                  <ul>
                    {col.links.map((link) => (
                      <li key={link}><a href="#">{link}</a></li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="footer-bottom-row">
              <small>Â© 2026 JaldiRide Connect. All rights reserved.</small>
              <div className="footer-socials" aria-label="Social links">
                <a href="#" aria-label="X">X</a>
                <a href="#" aria-label="Instagram">â—Ž</a>
                <a href="#" aria-label="Facebook">f</a>
                <a href="#" aria-label="LinkedIn">in</a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  )
}




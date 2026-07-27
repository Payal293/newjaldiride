import { useState, useEffect } from 'react';

import calendarIcon from '../assets/icons/calendar.svg';
import destinationIcon from '../assets/icons/destination.svg';
import pickupIcon from '../assets/icons/pickup.svg';
import busIcon from '../assets/icons/Icon.svg';
import hotelIcon from '../assets/icons/Icon-1.svg';
import arrowRightIcon from '../assets/icons/arrow-right.svg';

import rideIcon from '../assets/services/ride.svg';
import flightIcon from '../assets/services/flight1.svg';
import travelerIcon from '../assets/services/traveler.svg';
import locationIcon from '../assets/services/location.svg';
import whyPaymentIcon from '../assets/services/why-payment.svg';

import hotelBookingIcon from '../assets/driver/hotel booking.svg';
import flightBookingIcon from '../assets/driver/Flight booking.svg';
import mobileAppIcon from '../assets/driver/Mobile app.svg';

import flexibleHoursIcon from '../assets/driver/flexible-hours.svg';
import transparentEarningsIcon from '../assets/driver/transparent-earnings.svg';
import easyOnboardingIcon from '../assets/driver/easy-onboarding.svg';

import activeDriversIcon from '../assets/driver/active-drivers.svg';
import earningsIcon from '../assets/driver/earnings.svg';
import approvalIcon from '../assets/driver/approval.svg';

import driverBg from '../assets/driver/driver-bg.jpg';

import appleLogo from '../assets/driver/applelogo.png';
import googlePlayLogo from '../assets/driver/googleplay.png';

import emailIcon from '../assets/driver/email.svg';
import phoneIcon from '../assets/driver/phone.svg';
import footerLocationIcon from '../assets/driver/location.svg';

import xIcon from '../assets/driver/X.svg';
import cameraIcon from '../assets/driver/camera.svg';
import facebookIcon from '../assets/driver/facebook.svg';
import linkedInIcon from '../assets/driver/linked in.svg';

import rideBg from '../assets/image/ride.png';
import busBg from '../assets/image/bus.jpg';
import hotelBg from '../assets/image/hotelimg.jpg';
import flightBg from '../assets/image/flight.jpg';

import promoImage from '../assets/image/hero.webp';
import logoImage from '../assets/image/JALDIRIDE 2.png';
import hheroImage from '../assets/image/hhero.png';


const backgrounds = {
  ride: rideBg,
  bus: busBg,
  hotels: hotelBg,
  flights: flightBg,
};

import processGridIcon from '../assets/process/process-grid.svg';
import chooseServiceIcon from '../assets/process/choose-service.svg';
import bookInstantlyIcon from '../assets/process/book-instantly.svg';
import trackLiveIcon from '../assets/process/track-live.svg';
import travelSafelyIcon from '../assets/process/travel-safely.svg';


import platformDesktopIcon from '../assets/platform/platform-desktop.svg';
import platformPhoneIcon from '../assets/platform/platform-phone.svg';
import platformRiderIcon from '../assets/platform/platform-ride.svg';


import whyBoltIcon from '../assets/why-us/why-bolt.svg';
import whyRidersIcon from '../assets/why-us/why-riders.svg';
import whyShieldIcon from '../assets/why-us/why-shield.svg';
import whySupportIcon from '../assets/why-us/why-support.svg';

function SvgIcon({ src, alt = '', size = 18, width, height, className = '' }) {
  const w = width || size;
  const h = height || size;
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden={alt ? undefined : 'true'}
      className={`svg-icon ${className}`.trim()}
      width={w}
      height={h}
      style={{ width: `${w}px`, height: `${h}px` }}
    />
  )
}

const travelModes = [
  { id: 'ride', label: 'Ride', badge: null, icon: rideIcon, activeColor: '#ffffff', idleColor: '#ffffff', width: 18, height: 16 },
  { id: 'bus', label: 'Bus', badge: null, icon: busIcon, activeColor: '#ffffff', idleColor: '#6f6875', width: 16, height: 19 },
  { id: 'hotels', label: 'Hotels', badge: 'COMING SOON', icon: hotelIcon, activeColor: '#ffffff', idleColor: '#6f6875', width: 22, height: 15 },
  { id: 'flights', label: 'Flights', badge: 'COMING SOON', icon: flightIcon, activeColor: '#ffffff', idleColor: '#6f6875', width: 20, height: 20 },
]

const fields = [
  { label: 'Pickup Point', placeholder: 'Enter Origin', icon:locationIcon, color: '#ff7a00', width: 16, height: 20 },
  { label: 'Destination', placeholder: 'Enter Drop-off', icon: destinationIcon, color: '#22c55e', width: 18, height: 18 },
  { label: 'Departure Date', placeholder: 'mm/dd', icon: calendarIcon, color: '#7a7582', width: 18, height: 20 },
  { label: 'Travelers', placeholder: '1 Passenger', icon: travelerIcon, color: '#7a7582', width: 18, height: 18 },
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
    image: hheroImage,
  },
  {
    title: 'Rider App',
    description: 'Dedicated driver app with earnings dashboard, navigation, and live ride requests.',
    icon: platformRiderIcon,
    image: hheroImage,
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Choose Service',
    description: 'Select Ride, Bus, or wait for Hotels and Flights. Pick what fits your journey.',
    icon: chooseServiceIcon,
  },
  {
    number: '02',
    title: 'Book Instantly',
    description: 'Enter your pickup, destination, and date. Confirm in seconds with no friction.',
    icon:  bookInstantlyIcon,
  },
  {
    number: '03',
    title: 'Track Live',
    description: 'Watch your ride arrive on the map in real time. Every step, fully visible.',
    icon: trackLiveIcon,
  },
  {
    number: '04',
    title: 'Travel Safely',
    description: 'OTP-verified boarding, rated drivers, and 24/7 support for peace of mind.',
    icon: travelSafelyIcon,
  },
]

const driverHighlights = [
  {
    title: 'Flexible Hours',
    description: 'Drive whenever you want. Set your own schedule, no fixed shifts.',
    icon: flexibleHoursIcon,
  },
  {
    title: 'Transparent Earnings',
    description: 'See exactly what you earn per trip. No hidden deductions, ever.',
    icon: transparentEarningsIcon,
  },
  {
    title: 'Easy Onboarding',
    description: 'Get approved quickly with fast verification and simple document submission.',
    icon: easyOnboardingIcon,
  },
]

const driverStats = [
  { label: 'Active Drivers', value: '10K+', icon: activeDriversIcon},
  { label: 'Avg Daily Earnings', value: '₹800+', icon:earningsIcon },
  { label: 'Approval Time', value: '48h', icon: approvalIcon },
]

const comingSoonItems = [
  {
    title: 'Hotel Booking',
    badge: 'Q3 2025',
    description: 'Browse thousands of verified hotels and guesthouses. Best rates, instant confirmation.',
    icon: hotelBookingIcon,
    progress: 65,
  },
  {
    title: 'Flight Booking',
    badge: 'Q4 2025',
    description: 'Search and book flights across all major airlines. Real-time prices, no hidden fees.',
    icon: flightBookingIcon,
    progress: 40,
  },
  {
    title: 'Mobile App',
    badge: 'Coming Soon',
    description: 'The full JaldiRide experience in your pocket. iOS and Android — all features, zero friction.',
    icon: mobileAppIcon,
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

export default function Home({ onNavigate = () => {}, initialMode = 'ride' }) {
  const [activeMode, setActiveMode] = useState(initialMode)

  useEffect(() => {
    setActiveMode(initialMode)
  }, [initialMode])

  const handleModeClick = (modeId) => {
    setActiveMode(modeId)
  }

  return (
    <div className="page-shell">
  <main className={`hero-section is-${activeMode}`} id="services">

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

      <button
        className="book-now"
        type="button"
        onClick={() => onNavigate('login')}
      >
        Book Now
      </button>
    </header>

    <div className="hero-background-wrapper">
      {Object.entries(backgrounds).map(([mode, bgUrl]) => (
        <div
          key={mode}
          className={`hero-background-image ${
            activeMode === mode ? 'is-active' : ''
          }`}
          style={{ backgroundImage: `url(${bgUrl})` }}
          aria-hidden="true"
        />
      ))}
    </div>
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
                <div key={mode.id} className="mode-pill-wrapper">
                  {mode.badge && activeMode !== mode.id ? (
                    <span className="mode-pill-badge">{mode.badge}</span>
                  ) : null}
                  <button
                    className={`mode-pill ${activeMode === mode.id ? 'is-active' : ''}`}
                    type="button"
                    role="tab"
                    aria-selected={activeMode === mode.id}
                    onClick={() => handleModeClick(mode.id)}
                  >
                    <SvgIcon
                      src={mode.icon}
                      width={mode.width}
                      height={mode.height}
                      className="mode-icon"
                    />
                    <span>{mode.label}</span>
                  </button>
                </div>
              ))}
            </div>

            <div className="booking-divider" />

            {activeMode === 'hotels' || activeMode === 'flights' ? (
              <div className="coming-soon-container">
                <div className="coming-soon-content">
                  <SvgIcon 
                    src={activeMode === 'hotels' ? hotelIcon : flightIcon} 
                    width={activeMode === 'hotels' ? 44 : 40}
                    height={activeMode === 'hotels' ? 30 : 40}
                    className="coming-soon-center-icon"
                  />
                  <h3>{activeMode === 'hotels' ? 'Hotel Booking' : 'Flight Booking'}</h3>
                  <p>Launching soon — something amazing is coming.</p>
                  <span className="coming-soon-badge-pill">
                    <span className="dot" />
                    <span>Coming Soon</span>
                  </span>
                </div>
              </div>
            ) : (
              <div className="fields-grid">
                {fields.map((field) => (
                  <label key={field.label} className="field">
                    <span className="field-label">{field.label}</span>
                    <span className="field-control">
                      <SvgIcon src={field.icon} width={field.width} height={field.height} />
                      <input type="text" placeholder={field.placeholder} />
                    </span>
                  </label>
                ))}

                <button className="search-button" type="button" onClick={() => onNavigate('search')}>
                  <span>{activeMode === 'bus' ? 'Find Bus' : 'Find Ride'}</span>
                  <span aria-hidden="true">-&gt;</span>
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <section className="why-section" id="riders">
        <div className="why-shell">
          <span className="why-badge">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: '6px', verticalAlign: 'middle', transform: 'translateY(-1px)' }} xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.29289C12.0976 6.68342 12.0976 7.31658 11.7071 7.70711L7.70711 11.7071C7.31658 12.0976 6.68342 12.0976 6.29289 11.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L7 9.58579L10.2929 6.29289C10.6834 5.90237 11.3166 5.90237 11.7071 6.29289Z" />
            </svg>
            Why Choose Us
          </span>
          <h2 className="why-title">
            Why <span>JaldiRide</span>
          </h2>
          <p className="why-subcopy">
            Built for modern travelers who demand speed, safety, and simplicity every single ride.
          </p>

          <div className="why-grid-wrap">
            <div className="why-cards-grid">
              {whyCards.map((card) => (
                <article className="why-card" key={card.title}>
                  <span className="why-icon-wrap">
                    <SvgIcon src={card.icon} size={22} className="why-icon" />
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
  <div className="promo-safety-top">
    <span className="promo-safety-icon-wrap">
      <SvgIcon
    src={whyShieldIcon}
    size={26}
    className="promo-safety-icon"
       />
    </span>

    <h3>Safety First</h3>

    <p>
      Real-time GPS tracking and 24/7 emergency assistance for every journey.
    </p>
  </div>

  <div className="promo-safety-bottom">
    <strong>100%</strong>
    <small>VERIFIED FLEET</small>
  </div>
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

<section
  className="driver-opportunity-section"
  id="drivers-opportunity"
  style={{ backgroundImage: `url(${driverBg})` }}
>        <div className="driver-opportunity-bg" aria-hidden="true" />
        <div className="driver-opportunity-shell">
          <div className="driver-main-grid">
            <article className="driver-copy-block">
              <span className="driver-label">Driver Opportunity</span>
              <h2 className="driver-title">
                Become a Rider.
                 <span>Earn on Your Own Terms.</span>
              </h2>
              <p>Join thousands of drivers earning with JaldiRide. Complete freedom, real income, and a team that supports you every mile.</p>
             <button className="driver-cta">
               <span>Apply to Drive</span>

                  <img
                  src={arrowRightIcon}
                  alt=""
                  className="driver-cta-arrow"
                   />
              </button>
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
          <p className="section-subcopy">We&apos;re building the complete travel ecosystem. Stay ahead — be first to know.</p>

          <div className="coming-grid">
            {comingSoonItems.map((item) => (
              <article className="coming-card" key={item.title}>
                <span className="coming-icon-wrap">
                  <SvgIcon src={item.icon} size={22} className="coming-icon" />
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
              <span className="app-download-label">
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginRight: '6px', verticalAlign: 'middle', transform: 'translateY(-1px)' }}>
                  <rect x="1" y="1" width="8" height="14" rx="1.5" />
                  <line x1="4.5" y1="13" x2="5.5" y2="13" strokeLinecap="round" />
                </svg>
                MOBILE EXPERIENCE
              </span>
              <h2>Download the JaldiRide App</h2>
              <p>Your entire travel journey in one tap. Book, track, and manage rides directly from your phone.</p>
              <div className="app-store-row">
                <button type="button" className="store-btn">
                  <img src={appleLogo} alt="" className="store-icon" />
                  <div className="store-btn-text">
                    <span className="store-btn-subtitle">DOWNLOAD ON THE</span>
                    <span className="store-btn-title">App Store</span>
                  </div>
                </button>
                <button type="button" className="store-btn">
                  <img src={googlePlayLogo} alt="" className="store-icon" />
                  <div className="store-btn-text">
                    <span className="store-btn-subtitle">GET IT ON</span>
                    <span className="store-btn-title">Google Play</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="app-download-art">
              <div className="rings-container">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
              </div>
              
              <div className="qr-container">
                <div className="qr-card">
                  <svg className="qr-code-svg" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="7" height="7" fill="#000000" />
                    <rect x="1" y="1" width="5" height="5" fill="#FFFFFF" />
                    <rect x="2" y="2" width="3" height="3" fill="#000000" />
                    
                    <rect x="14" y="0" width="7" height="7" fill="#000000" />
                    <rect x="15" y="1" width="5" height="5" fill="#FFFFFF" />
                    <rect x="16" y="2" width="3" height="3" fill="#000000" />
                    
                    <rect x="0" y="14" width="7" height="7" fill="#000000" />
                    <rect x="1" y="15" width="5" height="5" fill="#FFFFFF" />
                    <rect x="2" y="16" width="3" height="3" fill="#000000" />
                    
                    <rect x="14" y="14" width="5" height="5" fill="#000000" />
                    <rect x="15" y="15" width="3" height="3" fill="#FFFFFF" />
                    <rect x="16" y="16" width="1" height="1" fill="#000000" />
                    
                    <rect x="9" y="0" width="1" height="3" fill="#000000" />
                    <rect x="11" y="1" width="2" height="1" fill="#000000" />
                    <rect x="8" y="3" width="2" height="2" fill="#000000" />
                    <rect x="11" y="4" width="1" height="3" fill="#000000" />
                    <rect x="8" y="6" width="1" height="2" fill="#000000" />
                    
                    <rect x="0" y="9" width="3" height="1" fill="#000000" />
                    <rect x="4" y="8" width="1" height="2" fill="#000000" />
                    <rect x="2" y="11" width="2" height="1" fill="#000000" />
                    <rect x="6" y="10" width="2" height="3" fill="#000000" />
                    
                    <rect x="9" y="8" width="3" height="3" fill="#000000" />
                    <rect x="10" y="9" width="1" height="1" fill="#FFFFFF" />
                    <rect x="13" y="9" width="1" height="2" fill="#000000" />
                    <rect x="15" y="8" width="2" height="1" fill="#000000" />
                    <rect x="18" y="9" width="1" height="3" fill="#000000" />
                    
                    <rect x="8" y="13" width="2" height="1" fill="#000000" />
                    <rect x="11" y="12" width="2" height="2" fill="#000000" />
                    <rect x="9" y="15" width="2" height="1" fill="#000000" />
                    <rect x="8" y="17" width="3" height="2" fill="#000000" />
                    
                    <rect x="14" y="11" width="3" height="1" fill="#000000" />
                    <rect x="16" y="12" width="1" height="2" fill="#000000" />
                    <rect x="19" y="15" width="2" height="1" fill="#000000" />
                    <rect x="19" y="17" width="1" height="3" fill="#000000" />
                    <rect x="14" y="19" width="4" height="1" fill="#000000" />
                  </svg>
                </div>
                <span className="qr-label">Scan to<br />download the<br />app</span>
              </div>

              <div className="phone-mockup">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="phone-bolt-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <strong className="phone-app-name">JaldiRide</strong>
                  <small className="phone-app-tagline">Your ride awaits</small>
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
                <ul className="footer-contact-list">
                  <li>
                    <SvgIcon src={emailIcon} size={14} className="footer-contact-icon" />
                    <span>hello@jaldiride.com</span>
                  </li>
                  <li>
                    <SvgIcon src={phoneIcon} size={14} className="footer-contact-icon" />
                    <span>+92 300 000 0000</span>
                  </li>
                  <li>
                    <SvgIcon src={footerLocationIcon} size={14} className="footer-contact-icon" />
                    <span>Lahore, Pakistan</span>
                  </li>
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
              <small>{"\u00A9"} 2026 JaldiRide Connect. All rights reserved.</small>
              <div className="footer-socials" aria-label="Social links">
                <a href="#" aria-label="X"><SvgIcon src={xIcon} size={16} /></a>
                <a href="#" aria-label="Instagram"><SvgIcon src={cameraIcon} size={16} /></a>
                <a href="#" aria-label="Facebook"><SvgIcon src={facebookIcon} size={16} /></a>
                <a href="#" aria-label="LinkedIn"><SvgIcon src={linkedInIcon} size={16} /></a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  )
}




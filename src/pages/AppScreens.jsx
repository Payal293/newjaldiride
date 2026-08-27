import { useState } from 'react'
import heroImage from '../assets/image/hero.webp'
import flightImage from '../assets/image/flight.jpg'
import hotelImage from '../assets/image/hotelimg.jpg'
import busHeroImage from '../assets/services/bus.png'
import flightSuiteImage from '../assets/services/flight.png'
import hotelSuiteImage from '../assets/services/hotel.png'
import carServiceImage from '../assets/services/car.png'
import logoImage from '../assets/image/JALDIRIDE 2.png'
import rideIcon from '../assets/services/ride.svg'
import flightIcon from '../assets/services/flight1.svg'
import busIcon from '../assets/icons/Icon.svg'
import hotelIcon from '../assets/icons/Icon-1.svg'
import arrowRightIcon from "../assets/icons/arrow-right.svg";
import carIcon from "../assets/login/car icon.svg";
import emailIcon from "../assets/login/email icon.svg";
import canSee from "../assets/login/cansee.svg";
import googleIcon from "../assets/login/google.svg";
import appleIcon from "../assets/login/apple.svg";

import loginImage1 from "../assets/login/login image 1.jpg";
import loginImage2 from "../assets/login/login image 2.jpg";
import loginImage3 from "../assets/login/login image 3.jpg";
import searchIcon from "../assets/dashboard/search icon.svg";
import bellIcon from "../assets/dashboard/bellicon.svg";
import methodAddIcon from "../assets/method/add.svg";
import methodAppleImage from "../assets/method/apple.jpg";
import methodCardIcon from "../assets/method/Icon.svg";
import methodChaseIcon from "../assets/method/chase.svg";
import methodDeleteIcon from "../assets/method/delete.svg";
import methodGoogleImage from "../assets/method/google.jpg";
import methodManageIcon from "../assets/method/manage.svg";
import methodPenIcon from "../assets/method/pen.svg";
import dashboardCalendarIcon from "../assets/dashboard/celender.svg";
import dashboardLocationIcon from "../assets/dashboard/lc.svg";
import profileImg from "../assets/dashboard/profile.jpg";
import goldMemberIcon from "../assets/dashboard/gold member.svg";
import dashboardRideIcon from "../assets/dashboard/ride.svg";
import dashboardBusIcon from "../assets/dashboard/bus.svg";
import dashboardHotelIcon from "../assets/dashboard/hotel.svg";
import dashboardFlightIcon from "../assets/dashboard/flight.svg";
import wifiIcon from "../assets/dashboard/wifi.svg";
import trackIcon from "../assets/dashboard/track.svg";
import shareIcon from "../assets/dashboard/share.svg";
import phoneEndIcon from "../assets/dashboard/phone icon.svg";
import journeyMap from "../assets/dashboard/map.png";

import flightDashIcon from "../assets/dashboard/flight dash.svg";
import rideDashIcon from "../assets/dashboard/ride dash.svg";
import offerImage from "../assets/image/ride.png";

import paymentIcon from "../assets/dashboard/payment.svg";
import securityIcon from "../assets/dashboard/security.svg";
import priorityIcon from "../assets/dashboard/priority.svg";
import plusIcon from "../assets/dashboard/plus sign.svg";
import bookingDetailImage from "../assets/bookings/booking detail.jpg";
import bookingCarImage from "../assets/bookings/car.svg";
import bookingRideIcon from "../assets/bookings/ride.svg";
import bookingTimeIcon from "../assets/bookings/time.svg";
import bookingLocationIcon from "../assets/bookings/location.svg";
import bookingPickupIcon from "../assets/bookings/pick up.svg";
import bookingDropIcon from "../assets/bookings/drop.svg";
import bookingSeatIcon from "../assets/bookings/seat.svg";
import paymentRideIcon from "../assets/payment/ride.svg";
import paymentDistanceIcon from "../assets/payment/distance.svg";
import paymentNetIcon from "../assets/payment/net.svg";
import paymentLockIcon from "../assets/payment/lock.svg";
import paymentSecureIcon from "../assets/payment/secure.svg";
import paymentPciIcon from "../assets/payment/pci.svg";
import paymentRightIcon from "../assets/payment/right.svg";
import bankDigitalIcon from "../assets/bank/Digital.svg";
import bankCreditsIcon from "../assets/bank/credits.svg";
import bankGooglePayIcon from "../assets/bank/google pay.svg";
import bankIcon from "../assets/bank/banks.svg";
import phonePeIcon from "../assets/bank/phonepe.svg";
import paytmIcon from "../assets/bank/paytm.svg";
import successCopyIcon from "../assets/success/copy.svg";
import successHomeIcon from "../assets/success/home.svg";
import successPremiumRideIcon from "../assets/success/light.svg";
import successTrackIcon from "../assets/success/track.svg";


function BrandButton({ onNavigate }) {
  return (
    <button
  className="app-brand login-brand"
  type="button"
  onClick={() => onNavigate("home")}
>
  <img src={logoImage} alt="" aria-hidden="true" />

  <span>
    JaldiRide <strong>Connect</strong>
  </span>
</button>
  )
}

function AppHeader({ active = 'Home', onNavigate, showSearch = true, navItems }) {
  const [searchValue, setSearchValue] = useState('')
  const [searchError, setSearchError] = useState('')
  const items = navItems || [
    ['Home', 'dashboard'],
    ['Bookings', 'bookings'],
    ['Rewards', 'rewards'],
  ]

  const handleHeaderSearch = (event) => {
    event.preventDefault()

    const query = searchValue.trim().toLowerCase()
    if (!query) {
      setSearchError('Please search ride, bus, flight or hotel.')
      return
    }

    if (/bus/.test(query)) {
      setSearchError('')
      onNavigate('search-bus')
      return
    }

    if (/(ride|cab|taxi|car|sedan|bike)/.test(query)) {
      setSearchError('')
      onNavigate('search')
      return
    }

    if (/(hotel|room|stay)/.test(query)) {
      setSearchError('')
      onNavigate('search-hotel')
      return
    }

    if (/(flight|fly|airport|plane)/.test(query)) {
      setSearchError('')
      onNavigate('search-flight')
      return
    }

    setSearchError('No matching service found. Try ride, bus, flight or hotel.')
  }

  return (
    <header className="jr-header">
      <BrandButton onNavigate={onNavigate} />
      <nav aria-label="App navigation">
        {items.map(([label, page]) => (
          <button
            key={label}
            className={active === label ? 'is-active' : ''}
            type="button"
            onClick={() => onNavigate(page)}
          >
            {label}
          </button>
        ))}
      </nav>
      <div className="jr-header-actions">
  {showSearch ? (
    <form className="header-search-wrap" onSubmit={handleHeaderSearch}>
      <div className="header-search">
        <button type="submit" aria-label="Search">
          <img src={searchIcon} alt="" aria-hidden="true" />
        </button>
        <input
          type="search"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value)
            if (searchError) setSearchError('')
          }}
          placeholder="Where to next?"
        />
      </div>
      {searchError ? <span className="header-search-error">{searchError}</span> : null}
    </form>
  ) : null}

  <button className="notification-icon" type="button" onClick={() => onNavigate('notifications')} aria-label="Notifications">
  <img src={bellIcon} alt="" aria-hidden="true" />
</button>

  <button className="avatar" type="button" onClick={() => onNavigate('profile')} aria-label="Profile">
  <img src={profileImg} alt="" aria-hidden="true" />
</button>
</div>
    </header>
  )
}

export function BookingFlowSidebar({ activeStep, children }) {
  const steps = [
    { id: 'search', label: 'Search' },
    { id: 'select', label: 'Select' },
    { id: 'details', label: 'Details' },
    { id: 'payment', label: 'Payment' },
    { id: 'confirmation', label: 'Confirmation' },
  ]

  return (
    <aside className="booking-flow-sidebar">
      <section className="booking-flow-title">
        <h1>Booking Flow</h1>
        <p>Complete your journey</p>
      </section>

      <nav aria-label="Booking flow steps">
        {steps.map(({ id, label }) => (
          <button key={id} className={id === activeStep ? 'is-active' : ''} type="button">
            <BookingFlowIcon name={id} />
            {label}
          </button>
        ))}
      </nav>

      {children}
    </aside>
  )
}

function BookingFlowIcon({ name }) {
  const icons = {
    search: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M10.8 17.1a6.3 6.3 0 1 0 0-12.6 6.3 6.3 0 0 0 0 12.6ZM15.4 15.4 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    select: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 16V8.8c0-.9.7-1.6 1.6-1.6h12.8c.9 0 1.6.7 1.6 1.6V16" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6.5 16h11M8 11.2h8M8.2 18.8h7.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    details: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 3.5h7l3 3V20H7V3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M14 3.5V7h3M9.5 11h5M9.5 14h5M9.5 17h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    payment: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 7h16v10H4V7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M4 10h16M7 15h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    confirmation: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="m8.4 12.1 2.2 2.2 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }
  return <span className="booking-flow-icon" aria-hidden="true">{icons[name]}</span>
}

function SearchHeader({ onNavigate }) {
  const items = [
    ['Explore', 'dashboard'],
    ['Search', 'search'],
    ['My Rides', 'bookings'],
  ]

  return (
    <header className="search-header">
      <BrandButton onNavigate={onNavigate} />

      <div className="search-header-right">
        <nav aria-label="Search navigation">
          {items.map(([label, page]) => (
            <button
              key={label}
              className={label === 'Search' ? 'is-active' : ''}
              type="button"
              onClick={() => onNavigate(page)}
            >
              {label}
            </button>
          ))}
        </nav>

        <button className="notification-icon" type="button" onClick={() => onNavigate('notifications')} aria-label="Notifications">
          <img src={bellIcon} alt="" aria-hidden="true" />
        </button>

        <button className="help-icon" type="button" onClick={() => onNavigate('notifications')} aria-label="Help">?</button>

        <button className="avatar" type="button" onClick={() => onNavigate('profile')} aria-label="Profile">
          <img src={profileImg} alt="" aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}

function PaymentHeader({ onNavigate }) {
  return (
    <header className="payment-header">
      <BrandButton onNavigate={onNavigate} />

      <nav aria-label="Payment navigation">
        <button className="is-active" type="button">Payment</button>
        <button type="button" onClick={() => onNavigate('support')}>Support</button>
      </nav>

      <div className="payment-header-actions">
        <button className="notification-icon" type="button" onClick={() => onNavigate('notifications')} aria-label="Notifications">
          <img src={bellIcon} alt="" aria-hidden="true" />
        </button>
        <button className="help-icon" type="button" onClick={() => onNavigate('notifications')} aria-label="Help">?</button>
        <button className="avatar" type="button" onClick={() => onNavigate('profile')} aria-label="Profile">
          <img src={profileImg} alt="" aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}

const serviceContent = {
  hotels: {
    label: 'Hotels',
    title: 'Hotel Booking',
    description: 'Launching soon, something amazing is coming.',
    icon: hotelIcon,
    image: hotelImage,
  },
  flights: {
    label: 'Flights',
    title: 'Flight Booking',
    description: 'Launching soon, something amazing is coming.',
    icon: flightIcon,
    image: flightImage,
  },
}

const formatMoney = (amount, options = {}) => {
  const { decimals = 0 } = options
  return `\u20B9${amount.toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`
}

export function ServiceComingSoonPage({ service = 'hotels', onNavigate }) {
  const current = serviceContent[service] || serviceContent.hotels
  const modes = [
  { id: 'ride', label: 'Ride', icon: rideIcon },
  { id: 'bus', label: 'Bus', icon: busIcon },
  { id: 'hotels', label: 'Hotels', icon: hotelIcon },
  { id: 'flights', label: 'Flights', icon: flightIcon },
]

  return (
    <div className={`service-page is-${current.label.toLowerCase()}`}>
      <header className="service-nav">
        <BrandButton onNavigate={onNavigate} />
        <nav aria-label="Service navigation">
          <button className="is-active" type="button">Services</button>
          <button type="button" onClick={() => onNavigate('dashboard')}>App</button>
          <button type="button" onClick={() => onNavigate('search')}>Riders</button>
        </nav>
        <button className="book-now" type="button" onClick={() => onNavigate('login')}>Book Now</button>
      </header>

      <main className="service-hero" style={{ '--service-bg': `url(${current.image})` }}>
        <section className="service-hero-content">
          <h1>
            Every Journey Starts
            <span>With <strong>JaldiRide</strong></span>
          </h1>
          <p>Book rides instantly. Travel smarter. Hotels and flights launching soon for the modern global professional.</p>

          <div className="service-soon-card">
            <div className="service-tabs">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  className={current.label.toLowerCase() === mode.id ? 'is-active' : ''}
                  type="button"
                  onClick={() => (mode.id === 'hotels' ? onNavigate('search-hotel') : mode.id === 'flights' ? onNavigate('search-flight') : mode.id === 'bus' ? onNavigate('search-bus') : onNavigate('home'))}
                >
                  <img src={mode.icon} alt="" aria-hidden="true" />
                  {mode.label}
                </button>
              ))}
            </div>
            <div className="service-soon-body">
              <img src={current.icon} alt="" aria-hidden="true" />
              <h2>{current.title}</h2>
              <p>{current.description}</p>
              <span><b>ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢</b> Coming Soon</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export function LoginPage({ onNavigate }) {
  return (
    <main className="login-page">
      <section className="login-hero">
        <BrandButton onNavigate={onNavigate} />
        <article>
          <h1>Elite urban mobility, refined for you.</h1>
          <p>Join thousands of professionals who choose JaldiRide for their daily commute and luxury travel needs. Smart, fast, and sophisticated.</p>
          <div className="rating-row">
  <img src={loginImage1} alt="" />
  <img src={loginImage2} alt="" />
  <img src={loginImage3} alt="" />

  <strong>
    4.9/5 Rating
    <small>from 20k+ active users</small>
  </strong>
</div>
        </article>
       <div className="live-status">
  <img src={carIcon} alt="" />

  <strong>
    Live Status
    <small>3,420 Drivers Online</small>
  </strong>
</div>
      </section>

      <section className="login-form-panel">
        <form onSubmit={(event) => { event.preventDefault(); onNavigate('dashboard') }}>
          <h2>Welcome Back</h2>
          <p>Please enter your details to sign in.</p>
         <label>
  Email Address

  <div className="input-wrapper">
    <input
      type="email"
      placeholder="name@company.com"
    />

    <img src={emailIcon} alt="" />
  </div>
</label>
<label>
  Password

  <a href="#">Forgot Password?</a>

  <div className="input-wrapper">
    <input
      type="password"
      placeholder="********"
    />

    <img src={canSee} alt="" />
  </div>
</label>          <label className="check-row"><input type="checkbox" />Remember me for 30 days</label>
          <button type="submit">Sign In -&gt;</button>
          <div className="or-line">Or continue with</div>
          <div className="social-row">
            <button type="button">
  <img src={googleIcon} alt="" />

  Google
</button>
            <button type="button">
  <img src={appleIcon} alt="" />

  Apple
</button>
          </div>
          <p className="create-line">Don't have an account? <button type="button" onClick={() => onNavigate('dashboard')}>Create Account</button></p>
        </form>
      </section>
    </main>
  )
}
<div className="login-footer-links">
  <a href="#">Privacy Policy</a>
  <a href="#">Terms of Service</a>
  <a href="#">Help Center</a>
</div>

export function DashboardPage({ onNavigate }) {
const services = [
  ['Ride', dashboardRideIcon],
  ['Bus', dashboardBusIcon],
  ['Hotels', dashboardHotelIcon],
  ['Flights', dashboardFlightIcon],
]
const bookings = [
  {
    title: 'BOM -> LHR, Flight UK201',
    meta: 'OCT 12, 2023 - Confirmed',
    price: formatMoney(42500),
    icon: flightDashIcon,
  },
  {
    title: 'Airport Transfer - Toyota Camry',
    meta: 'OCT 10, 2023 - Completed',
    price: formatMoney(1200),
    icon: rideDashIcon,
  },
]
const shortcuts = [
  ['Payment Methods', paymentIcon],
  ['Security & Privacy', securityIcon],
  ['Priority Support', priorityIcon],
]
  return (
    <main className="jr-app-page">
      <AppHeader active="Home" onNavigate={onNavigate} />
      <section className="dashboard-shell">
        <div className="dashboard-title">
          <div>
            <h1>Good morning, Arjun</h1>
            <p>Where are you heading today? You have <span>1 active journey.</span></p>
          </div>
          <div className="member-badge">
  <img src={goldMemberIcon} alt="" aria-hidden="true" />
  <div>
    <span>GOLD MEMBER</span>
    <strong>2,450 Points</strong>
  </div>
</div>
        </div>
        <div className="service-shortcuts">
          {services.map(([label, icon]) => (
            <button key={label} type="button" onClick={() => (label === 'Hotels' ? onNavigate('search-hotel') : label === 'Flights' ? onNavigate('search-flight') : label === 'Bus' ? onNavigate('search-bus') : onNavigate('search'))}>
              <img src={icon} alt="" aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>
        <div className="dashboard-grid">
         <section className="active-journey">
            <div className="journey-header">
              <div className="journey-title">
                <img src={wifiIcon} alt="" aria-hidden="true" />
                <h2>Active Journey</h2>
              </div>

              <span className="journey-status">IN PROGRESS</span>
            </div>

            <div className="journey-card">
              <div className="mini-map">
                <img src={journeyMap} alt="Journey Map" />
              </div>

              <div className="journey-details">
                <small>DESTINATION</small>
                <h3>Gateway to India, Mumbai</h3>
                <p>
                  <img src={shareIcon} alt="" aria-hidden="true" />
                  Arriving in 12 mins
                </p>

                <div className="journey-actions">
                  <button
                    className="track-btn"
                    type="button"
                    onClick={() => onNavigate("booking")}
                  >
                    <img src={trackIcon} alt="" aria-hidden="true" />
                    Track Ride
                  </button>

                  <button className="phone-btn" type="button">
                    <img src={phoneEndIcon} alt="" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
</section>

<article className="offer-card" style={{ '--offer-bg': `url(${offerImage})` }}>

  <span className="offer-tag">
    EXCLUSIVE OFFER
  </span>

  <h3>
    Upgrade to Black Member
    <br />
    for zero cancellations.
  </h3>

  <button type="button">
    Learn More
  </button>

</article>
          <section className="recent-card">
            <h2>
              Recent Bookings
              <button type="button" onClick={() => onNavigate('bookings')}>View All</button>
            </h2>
            <div className="booking-list-mini">
              {bookings.map((booking) => (
                <article key={booking.title}>
                  <span className="booking-mini-icon">
                    <img src={booking.icon} alt="" aria-hidden="true" />
                  </span>
                  <div>
                    <strong>{booking.title}</strong>
                    <small>{booking.meta}</small>
                  </div>
                  <b>{booking.price}</b>
                </article>
              ))}
            </div>
          </section>
          <aside className="settings-card">
            <h2>Settings Shortcut</h2>
            {shortcuts.map(([label, icon]) => (
              <button 
                key={label} 
                type="button" 
                onClick={() => {
                  if (label === 'Payment Methods') onNavigate('profile-payments');
                  if (label === 'Security & Privacy') onNavigate('security');
                  if (label === 'Priority Support') onNavigate('support');
                }}
              >
                <span>
                  <img src={icon} alt="" aria-hidden="true" />
                  {label}
                </span>
                <b>&rsaquo;</b>
              </button>
            ))}
            <button className="sign-out" type="button" onClick={() => onNavigate('home')}>Sign Out</button>
          </aside>
        </div>
        <button className="dashboard-fab" type="button" onClick={() => onNavigate('search')} aria-label="Add new booking">
          <img src={plusIcon} alt="" aria-hidden="true" />
        </button>
      </section>
    </main>
  )
}

export function SearchPage({ onNavigate }) {
  const rides = [
    {
      title: 'Executive Sedan',
      subtitle: 'Mercedes S-Class or similar',
      price: 1250,
      rating: '4.9',
      seats: '4 Seats',
      arrival: '3 mins away',
      image: offerImage,
    },
    {
      title: 'Elite SUV',
      subtitle: 'BMW X5 or similar',
      price: 1800,
      rating: '4.8',
      seats: '6 Seats',
      luggage: '4 Bags',
      arrival: '5 mins away',
      image: carServiceImage,
      badge: 'Popular',
    },
    {
      title: 'Green Executive',
      subtitle: 'Premium EV (Tesla or similar)',
      price: 1450,
      rating: '5.0',
      seats: '4 Seats',
      arrival: '8 mins away',
      image: bookingDetailImage,
      eco: true,
      selected: true,
    },
  ]
  const steps = [
    ['search', 'Search'],
    ['select', 'Select'],
    ['details', 'Details'],
    ['payment', 'Payment'],
    ['confirmation', 'Confirmation'],
  ]

  return (
    <main className="ride-select-page">
      <header className="ride-select-topbar">
        <button className="ride-select-back" type="button" onClick={() => onNavigate('dashboard')} aria-label="Back to dashboard">
          <RideSelectIcon name="back" />
        </button>
        <button className="ride-select-brand" type="button" onClick={() => onNavigate('home')}>JaldiRide Connect</button>
        <nav aria-label="Ride navigation">
          <button type="button" onClick={() => onNavigate('dashboard')}>Home</button>
          <button type="button" onClick={() => onNavigate('bookings')}>Bookings</button>
          <button type="button" onClick={() => onNavigate('rewards')}>Rewards</button>
        </nav>
        <div className="ride-select-actions">
          <button type="button" onClick={() => onNavigate('search')} aria-label="Search rides">
            <RideSelectIcon name="search" />
          </button>
          <button type="button" aria-label="Notifications">
            <RideSelectIcon name="bell" />
          </button>
          <button type="button" className="ride-select-avatar" onClick={() => onNavigate('profile')} aria-label="Profile">
            <img src={profileImg} alt="" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className="ride-select-layout">
        <BookingFlowSidebar activeStep="select">
          <section className="ride-flow-filters">
            <h2>Filters</h2>
            <p>Category</p>
            <label><input type="checkbox" defaultChecked /> All Premium</label>
            <label><input type="checkbox" /> Executive Sedan</label>
            <label><input type="checkbox" /> Elite SUV</label>
            <p>Max Price</p>
            <div className="ride-price-track" />
            <div className="ride-price-range">
              <span>{formatMoney(500)}</span>
              <span>{formatMoney(2500)}</span>
            </div>
          </section>
        </BookingFlowSidebar>

        <section className="ride-select-content">
          <p className="ride-select-eyebrow">Available Rides</p>
          <h2>Select a premium vehicle for your journey to Connaught Place.</h2>

          <div className="ride-select-list">
            {rides.map((ride) => (
              <article className={`ride-option-card${ride.selected ? ' is-selected' : ''}`} key={ride.title}>
                <div className="ride-option-image">
                  <img src={ride.image} alt="" aria-hidden="true" />
                  {ride.badge ? <span>{ride.badge}</span> : null}
                </div>
                <div className="ride-option-info">
                  <div>
                    <h3>{ride.title} {ride.eco ? <em>Eco</em> : null}</h3>
                    <p>{ride.subtitle}</p>
                  </div>
                  <div className="ride-option-meta">
                    <span><RideSelectIcon name="passenger" /> {ride.seats}</span>
                    {ride.luggage ? <span><RideSelectIcon name="bag" /> {ride.luggage}</span> : null}
                    <span><RideSelectIcon name="clock" /> {ride.arrival}</span>
                  </div>
                </div>
                <div className="ride-option-rating">
                  <RideSelectIcon name="star" />
                  {ride.rating}
                </div>
                <strong>{formatMoney(ride.price)}</strong>
                <button type="button" onClick={() => onNavigate('ride-details')}>Select</button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

function RideSelectIcon({ name }) {
  const icons = {
    back: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M15 5 8 12l7 7M9 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    search: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M10.8 17.1a6.3 6.3 0 1 0 0-12.6 6.3 6.3 0 0 0 0 12.6ZM15.4 15.4 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    bell: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M18 9.8a6 6 0 0 0-12 0c0 7.2-2.3 7-2.3 7h16.6s-2.3.2-2.3-7ZM9.8 20a2.4 2.4 0 0 0 4.4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5 4.1 19 2.6" stroke="#ff7a00" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    select: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 16V8.8c0-.9.7-1.6 1.6-1.6h12.8c.9 0 1.6.7 1.6 1.6V16" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6.5 16h11M8 11.2h8M8.2 18.8h7.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    details: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 3.5h7l3 3V20H7V3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M14 3.5V7h3M9.5 11h5M9.5 14h5M9.5 17h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    payment: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 7h16v10H4V7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M4 10h16M7 15h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    confirmation: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="m8.4 12.1 2.2 2.2 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    passenger: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM5.5 19.5a6.5 6.5 0 0 1 13 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    bag: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M8 8V6.5A2.5 2.5 0 0 1 10.5 4h3A2.5 2.5 0 0 1 16 6.5V8M5.5 8h13v11h-13V8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="m12 3.8 2.2 4.5 5 .7-3.6 3.5.8 5-4.4-2.3-4.4 2.3.8-5L4.8 9l5-.7L12 3.8Z" fill="currentColor" />
      </svg>
    ),
  }

  return <span className="ride-select-icon" aria-hidden="true">{icons[name]}</span>
}

export function RideResultsPage({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('Filters')
  const rides = [
    {
      title: 'Prime Sedan',
      subtitle: '4-Seater - AC - EV',
      price: 420,
      fare: 'Final Fare',
      time: '14:15 - 14:45',
      journey: '30 min journey',
      rating: '4.9 - 1.2k ratings',
      button: 'Book Ride',
      badge: 'Best Value',
      icon: 'car',
      category: 'ev',
      buttonStyle: 'orange',
    },
    {
      title: 'Quick Bike',
      subtitle: '1-Seater - Rapid',
      price: 145,
      fare: 'Fastest arrival',
      time: '14:05 - 14:22',
      journey: '17 min journey',
      rating: '4.7 - 850 ratings',
      button: 'Confirm Bike',
      badge: 'Fastest',
      icon: 'bike',
      category: 'earliest',
      buttonStyle: 'purple',
    },
    {
      title: 'Express Bus',
      subtitle: 'AC Luxury Coach',
      price: 45,
      fare: 'Shared',
      time: '14:20 - 15:05',
      journey: '45 min journey',
      rating: '12 seats available',
      button: 'View Schedule',
      icon: 'bus',
      category: 'price',
      buttonStyle: 'outline',
      tone: 'gold',
    },
    {
      title: 'Executive LUX',
      subtitle: 'Premium Sedan - Wifi Business Class',
      price: 850,
      fare: 'Premium',
      time: '14:10 - 14:50',
      journey: '40 min journey',
      rating: '5.0 - Elite Driver',
      button: 'Book Luxury',
      icon: 'lux',
      category: 'luxury',
      buttonStyle: 'muted',
    },
    {
      title: 'Jaldi Mini',
      subtitle: 'Compact - Eco',
      price: 310,
      fare: 'Standard Fare',
      time: '14:30 - 15:05',
      journey: '35 min journey',
      rating: '4.5 - 2k+ ratings',
      button: 'Book Mini',
      icon: 'mini',
      category: 'ev',
      buttonStyle: 'purple',
    },
  ]
  const filters = ['Filters', 'Price: Low to High', 'Earliest Arrival', 'EV Only']
  const visibleRides = rides
    .filter((ride) => {
      if (activeFilter === 'EV Only') return ride.category === 'ev'
      return true
    })
    .sort((a, b) => {
      if (activeFilter === 'Price: Low to High') return a.price - b.price
      if (activeFilter === 'Earliest Arrival') return a.time.localeCompare(b.time)
      return 0
    })

  return (
    <main className="ride-results-page">
      <header className="ride-results-header">
        <button className="ride-results-brand" type="button" onClick={() => onNavigate('home')}>JaldiRide Connect</button>
        <nav aria-label="Ride results navigation">
          <button type="button" onClick={() => onNavigate('dashboard')}>Explore</button>
          <button className="is-active" type="button">Search</button>
          <button type="button" onClick={() => onNavigate('bookings')}>My Rides</button>
        </nav>
        <div className="ride-results-actions">
          <button type="button" aria-label="Notifications"><RideResultsIcon name="bell" /></button>
          <button type="button" aria-label="Help"><RideResultsIcon name="help" /></button>
          <button className="ride-results-avatar" type="button" onClick={() => onNavigate('profile')} aria-label="Profile">
            <img src={profileImg} alt="" aria-hidden="true" />
          </button>
        </div>
      </header>

      <section className="ride-results-shell">
        <div className="ride-results-head">
          <div>
            <p>Available Rides</p>
            <h1>Results for Mumbai Hub to BKC</h1>
            <span>24 rides found - Today, 14:00 PM</span>
          </div>
          <div className="ride-results-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? 'is-active' : ''}
                type="button"
                onClick={() => setActiveFilter(filter)}
              >
                {filter === 'Filters' ? <RideResultsIcon name="filter" /> : null}
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="ride-results-grid">
          {visibleRides.map((ride) => (
            <article className="ride-result-card" key={ride.title}>
              {ride.badge ? <span className={`ride-result-badge${ride.badge === 'Fastest' ? ' is-purple' : ''}`}>{ride.badge}</span> : null}
              <div className="ride-result-top">
                <span className={`ride-result-icon${ride.tone === 'gold' ? ' is-gold' : ''}`}>
                  <RideResultsIcon name={ride.icon} />
                </span>
                <div>
                  <h2>{ride.title}</h2>
                  <p>{ride.subtitle}</p>
                </div>
                <strong>
                  <span className={ride.buttonStyle === 'orange' ? 'is-orange' : ''}>{formatMoney(ride.price)}</span>
                  <small>{ride.fare}</small>
                </strong>
              </div>
              <p className="ride-result-time">
                <RideResultsIcon name="clock" />
                <span>{ride.time}<small>{ride.journey}</small></span>
              </p>
              <p className="ride-result-rating">
                <RideResultsIcon name={ride.icon === 'bus' ? 'seat' : 'shield'} />
                {ride.rating}
              </p>
              <button
                className={`ride-result-action is-${ride.buttonStyle}`}
                type="button"
                onClick={() => onNavigate(ride.icon === 'bus' ? 'search-bus' : 'ride-details')}
              >
                {ride.button}
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function RideResultsIcon({ name }) {
  const icons = {
    filter: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M5 7h14M8 12h8M10 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    bell: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M18 10a6 6 0 1 0-12 0c0 6.8-2.2 6.8-2.2 6.8h16.4S18 16.8 18 10ZM9.8 20a2.4 2.4 0 0 0 4.4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    help: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9.7 9a2.4 2.4 0 0 1 4.6 1c0 1.7-2.3 2-2.3 3.6M12 17h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    car: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="m5 13 1.7-5h10.6l1.7 5M5 13h14v5H5v-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M7.5 18v1.5M16.5 18v1.5M7.5 15.5h.01M16.5 15.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    bike: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M6.5 17.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17.5 17.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8.8 14h3.4l2.2-4h-3.1M12.2 14l-2-5H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bus: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v11.5H4.5V6A1.5 1.5 0 0 1 6 4.5Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 8h10M7 12h10M7 19v1M17 19v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    lux: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="m4.5 14 1.8-5.2h11.4L19.5 14v4.5h-15V14Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 5.5h6M7.5 16h.01M16.5 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    mini: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M6 14 7.4 9h9.2L18 14v4H6v-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M8 18v1M16 18v1M8.5 15.8h.01M15.5 15.8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 21s7-3.4 7-10.2V5.5L12 3 5 5.5v5.3C5 17.6 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="m9.4 12 1.8 1.8 3.6-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    seat: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 4v7.5c0 1.1.9 2 2 2h5.5c1.4 0 2.5 1.1 2.5 2.5V20M7 20h11M9 13.5 7 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }

  return <span className="ride-results-icon-svg" aria-hidden="true">{icons[name]}</span>
}

export function SearchBusPage({ onNavigate }) {
  const [tripType, setTripType] = useState('one-way')
  const [passengers, setPassengers] = useState('1 Passenger')

  return (
    <main className="search-bus-page">
      <header className="search-bus-topbar">
        <button className="search-bus-back" type="button" onClick={() => onNavigate('dashboard')} aria-label="Back to dashboard">
          <span aria-hidden="true">&larr;</span>
        </button>
        <h1>Inter-City Bus</h1>
        <ol className="search-bus-steps" aria-label="Booking progress">
          <li className="is-active">1</li>
          <li>2</li>
          <li>3</li>
        </ol>
      </header>

      <section className="search-bus-shell">
        <article className="search-bus-promo" style={{ '--bus-promo-bg': `url(${busHeroImage})` }}>
          <div>
            <h2>Premium Journeys</h2>
            <p>Experience seamless inter-city travel.</p>
          </div>
        </article>

        <form
          className="search-bus-card"
          onSubmit={(event) => {
            event.preventDefault()
            onNavigate('bus-results')
          }}
        >
          <div className="search-bus-card-head">
            <h2>Search Bus</h2>
            <p>Enter your travel details below.</p>
          </div>

          <div className="bus-trip-toggle" role="tablist" aria-label="Trip type">
            <button
              className={tripType === 'one-way' ? 'is-active' : ''}
              type="button"
              role="tab"
              aria-selected={tripType === 'one-way'}
              onClick={() => setTripType('one-way')}
            >
              One Way
            </button>
            <button
              className={tripType === 'round-trip' ? 'is-active' : ''}
              type="button"
              role="tab"
              aria-selected={tripType === 'round-trip'}
              onClick={() => setTripType('round-trip')}
            >
              Round Trip
            </button>
          </div>

          <div className="bus-route-fields">
            <label className="bus-field">
              <span>From</span>
              <span className="bus-input-wrap">
                <span className="bus-input-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 3.5L4.5 7.7v8.6L12 20.5l7.5-4.2V7.7L12 3.5Z" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M12 9.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6Z" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
                </span>
                <input type="text" placeholder="Departure City" />
              </span>
            </label>

            <button className="bus-swap-btn" type="button" aria-label="Swap departure and destination">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M8 5h9l-3-3M16 19H7l3 3M17 5v11M7 19V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <label className="bus-field">
              <span>To</span>
              <span className="bus-input-wrap">
                <span className="bus-input-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" stroke="currentColor" strokeWidth="1.7" />
                    <path d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" stroke="currentColor" strokeWidth="1.7" />
                  </svg>
                </span>
                <input type="text" placeholder="Destination City" />
              </span>
            </label>
          </div>

          <div className="bus-detail-grid">
            <label className="bus-field">
              <span>Date</span>
              <span className="bus-input-wrap">
                <span className="bus-input-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M7 3v3M17 3v3M4.5 9h15M6 5.5h12A1.5 1.5 0 0 1 19.5 7v11A1.5 1.5 0 0 1 18 19.5H6A1.5 1.5 0 0 1 4.5 18V7A1.5 1.5 0 0 1 6 5.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </span>
                <input type="text" placeholder="mm/dd/yyyy" />
              </span>
            </label>

            <label className="bus-field">
              <span>Passengers</span>
              <span className="bus-input-wrap">
                <span className="bus-input-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 20a7.5 7.5 0 0 1 15 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </span>
                <select value={passengers} onChange={(event) => setPassengers(event.target.value)}>
                  <option>1 Passenger</option>
                  <option>2 Passengers</option>
                  <option>3 Passengers</option>
                  <option>4 Passengers</option>
                </select>
              </span>
            </label>
          </div>

          <button className="search-bus-submit" type="submit">
            Search Buses <span aria-hidden="true">-&gt;</span>
          </button>
        </form>
      </section>

      <footer className="search-bus-footer">
        <small>&copy; 2026 JaldiRide Connect. Premium Urban Mobility.</small>
        <nav aria-label="Footer links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Help Center</a>
        </nav>
      </footer>
    </main>
  )
}

export function BusResultsPage({ onNavigate }) {
  const steps = [
    ['search', 'Search'],
    ['select', 'Select'],
    ['details', 'Details'],
    ['payment', 'Payment'],
    ['confirmation', 'Confirmation'],
  ]
  const buses = [
    {
      operator: 'JaldiRide Premium',
      type: 'Volvo AC Multi-Axle',
      depart: '08:00 AM',
      arrive: '14:00 PM',
      duration: '6h 00m',
      price: 2500,
      seats: '12 Seats Left',
      tone: 'purple',
    },
    {
      operator: 'GreenLine Express',
      type: 'BharatBenz AC Sleeper',
      depart: '09:30 AM',
      arrive: '15:00 PM',
      duration: '5h 30m',
      price: 1800,
      seats: '4 Seats Left',
      tone: 'green',
    },
    {
      operator: 'CityConnect Standard',
      type: 'Non-AC Seater',
      depart: '11:00 AM',
      arrive: '17:15 PM',
      duration: '6h 15m',
      price: 800,
      seats: '24 Seats Left',
      tone: 'muted',
    },
  ]

  return (
    <main className="bus-results-page">
      <header className="bus-results-topbar">
        <button className="bus-results-back" type="button" onClick={() => onNavigate('search-bus')} aria-label="Back to search bus">
          <BusResultsIcon name="back" />
        </button>
        <button className="bus-results-brand" type="button" onClick={() => onNavigate('home')}>JaldiRide Connect</button>
        <nav aria-label="Bus results navigation">
          <button type="button" onClick={() => onNavigate('dashboard')}>Home</button>
          <button type="button" onClick={() => onNavigate('bookings')}>Bookings</button>
          <button type="button" onClick={() => onNavigate('rewards')}>Rewards</button>
        </nav>
        <div className="bus-results-actions">
          <button type="button" aria-label="Search">
            <BusResultsIcon name="search" />
          </button>
          <button type="button" aria-label="Notifications">
            <BusResultsIcon name="bell" />
          </button>
          <button className="bus-results-avatar" type="button" onClick={() => onNavigate('profile')} aria-label="Profile">
            <img src={profileImg} alt="" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className="bus-results-layout">
        <aside className="bus-flow-sidebar">
          <section className="bus-flow-title">
            <h1>Booking Flow</h1>
            <p>Complete your journey</p>
          </section>

          <nav aria-label="Bus booking flow steps">
            {steps.map(([id, label]) => (
              <button key={id} className={id === 'select' ? 'is-active' : ''} type="button">
                <BusResultsIcon name={id} />
                {label}
              </button>
            ))}
          </nav>
        </aside>

        <section className="bus-results-content">
          <div className="bus-results-head">
            <div>
              <h2>Available Buses</h2>
              <p>Mumbai to Pune • 24 Oct 2024</p>
            </div>
            <div className="bus-results-controls">
              <button type="button">
                <BusResultsIcon name="filter" />
                Filter
              </button>
              <button type="button">
                <BusResultsIcon name="sort" />
                Sort
              </button>
            </div>
          </div>

          <div className="bus-results-list">
            {buses.map((bus) => (
              <article className="bus-result-card" key={bus.operator}>
                <span className={`bus-result-icon is-${bus.tone}`}>
                  <BusResultsIcon name="bus" />
                </span>

                <div className="bus-result-provider">
                  <h3>{bus.operator}</h3>
                  <p>{bus.type}</p>
                </div>

                <div className="bus-result-time">
                  <strong>{bus.depart}</strong>
                  <span>Mumbai</span>
                </div>

                <div className="bus-result-duration">
                  <span>{bus.duration}</span>
                  <i aria-hidden="true" />
                  <BusResultsIcon name="arrow" />
                </div>

                <div className="bus-result-time">
                  <strong>{bus.arrive}</strong>
                  <span>Pune</span>
                </div>

                <div className="bus-result-price">
                  <strong>{formatMoney(bus.price)}</strong>
                  <span>{bus.seats}</span>
                  <button type="button" onClick={() => onNavigate('bus-details')}>View Seats</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

function BusResultsIcon({ name }) {
  const icons = {
    back: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M15 5 8 12l7 7M9 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    search: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M10.8 17.1a6.3 6.3 0 1 0 0-12.6 6.3 6.3 0 0 0 0 12.6ZM15.4 15.4 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    bell: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M18 9.8a6 6 0 0 0-12 0c0 7.2-2.3 7-2.3 7h16.6s-2.3.2-2.3-7ZM9.8 20a2.4 2.4 0 0 0 4.4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5 4.1 19 2.6" stroke="#ff7a00" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    filter: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M5 7h14M8 12h8M10 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    sort: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 6h10M9 12h6M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    select: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M5 6h14v12H5V6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M7.5 10h9M7.5 14h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    details: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 3.5h7l3 3V20H7V3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M14 3.5V7h3M9.5 11h5M9.5 14h5M9.5 17h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    payment: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 7h16v10H4V7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M4 10h16M7 15h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    confirmation: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="m8.4 12.1 2.2 2.2 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bus: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M6.2 4.8h11.6c.94 0 1.7.76 1.7 1.7v9.8H4.5V6.5c0-.94.76-1.7 1.7-1.7Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7.5 8.5h9M7.5 12h9M7.5 18.5v1M16.5 18.5v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    arrow: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M8 12h8M13 9l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }

  return <span className="bus-results-icon-svg" aria-hidden="true">{icons[name]}</span>
}

export function BusDetailsPage({ onNavigate }) {
  const amenities = [
    ['seat', 'Reclining Seats'],
    ['plug', 'Charging Ports'],
    ['meal', 'Refreshments'],
    ['wifi', 'Free Wi-Fi'],
  ]

  return (
    <main className="bus-details-page">
      <header className="bus-details-topbar">
        <div className="bus-details-title">
          <button type="button" onClick={() => onNavigate('bus-results')} aria-label="Back to available buses">
            <BusDetailsIcon name="back" />
          </button>
          <h1>Bus Details</h1>
        </div>
        <button className="bus-details-brand" type="button" onClick={() => onNavigate('home')}>JaldiRide Connect</button>
      </header>

      <section className="bus-details-shell">
        <div className="bus-details-main">
          <article className="bus-details-hero">
            <img src={busHeroImage} alt="" aria-hidden="true" />
            <span>Premium Fleet</span>
          </article>

          <section className="bus-details-copy">
            <h2>Executive Shuttle Service</h2>
            <p><BusDetailsIcon name="star" /> 4.8 <span>(120 Reviews)</span> <i aria-hidden="true" /> Premium Intercity Coach</p>
          </section>

          <article className="bus-amenities-card">
            <h3>Amenities included</h3>
            <div className="bus-amenities-grid">
              {amenities.map(([icon, label]) => (
                <div className="bus-amenity-item" key={label}>
                  <span><BusDetailsIcon name={icon} /></span>
                  <strong>{label}</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="bus-cancel-card">
            <h3><BusDetailsIcon name="info" /> Cancellation Policy</h3>
            <p>Free cancellation up to 24 hours before departure. Cancellations made within 24 hours may incur a fee.</p>
          </article>
        </div>

        <aside className="bus-journey-summary">
          <h2>Journey Summary</h2>

          <div className="bus-summary-route">
            <article>
              <span className="is-origin"><BusDetailsIcon name="dot" /></span>
              <div>
                <strong>New York</strong>
                <small>08:00 AM</small>
              </div>
            </article>
            <article>
              <span className="is-destination"><BusDetailsIcon name="dot" /></span>
              <div>
                <strong>Washington DC</strong>
                <small>12:30 PM</small>
              </div>
            </article>
          </div>

          <div className="bus-date-pill">
            <p>Travel Date <strong>Oct 24, 2024</strong></p>
            <p>Availability <span>12 Seats Left</span></p>
          </div>

          <div className="bus-fare-lines">
            <p>Base Fare <strong>{formatMoney(150, { decimals: 2 })}</strong></p>
            <p>Taxes & Fees <strong>{formatMoney(18.5, { decimals: 2 })}</strong></p>
          </div>

          <div className="bus-total-row">
            <span>Total Price</span>
            <strong>{formatMoney(168.5, { decimals: 2 })}</strong>
          </div>

          <button className="bus-seat-btn" type="button" onClick={() => onNavigate('booking')}>
            Continue to Seat Selection <BusDetailsIcon name="arrow" />
          </button>
        </aside>
      </section>

      <footer className="bus-details-footer">
        <div>
          <strong>JaldiRide Connect</strong>
          <p>&copy; 2024 JaldiRide Connect. All rights reserved. Premium Urban Mobility.</p>
        </div>
        <nav aria-label="Bus details footer links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Partner Program</a>
          <a href="#">Help Center</a>
        </nav>
      </footer>
    </main>
  )
}

function BusDetailsIcon({ name }) {
  const icons = {
    back: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M15 5 8 12l7 7M9 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="m12 3.8 2.2 4.45 4.9.72-3.55 3.45.84 4.88L12 15l-4.39 2.3.84-4.88L4.9 8.97l4.9-.72L12 3.8Z" fill="currentColor" />
      </svg>
    ),
    seat: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 4v8.2c0 1.1.9 2 2 2h5.7c1.3 0 2.3 1 2.3 2.3V20M7 20h11M9 14.2 7 20M10.5 4h2.4c.95 0 1.7.75 1.7 1.7v6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    plug: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M9 3.8v5M15 3.8v5M7 8.8h10v3.4a5 5 0 0 1-10 0V8.8ZM12 17.2V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    meal: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M6.5 4v7M9 4v7M6.5 7.5H9M7.8 11v9M15.5 4v16M15.5 4c2.1 1.7 3.1 3.5 3.1 5.4 0 1.6-1.1 2.8-3.1 3.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    wifi: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M5.1 9.4a10.8 10.8 0 0 1 13.8 0M8.2 12.4a6.1 6.1 0 0 1 7.6 0M10.9 15.2a1.8 1.8 0 0 1 2.2 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 18.3h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    info: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 10.5v5M12 7.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    dot: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="5" fill="currentColor" />
      </svg>
    ),
    arrow: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M6 12h12M14 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }

  return <span className="bus-details-icon" aria-hidden="true">{icons[name]}</span>
}

export function SearchFlightPage({ onNavigate }) {
  const [tripType, setTripType] = useState('round-trip')
  const [passengers, setPassengers] = useState('2 Adults')
  const [cabinClass, setCabinClass] = useState('Business')

  return (
    <main className="search-flight-page">
      <header className="search-flight-topbar">
        <button className="search-flight-back" type="button" onClick={() => onNavigate('dashboard')} aria-label="Back to dashboard">
          <span aria-hidden="true">&larr;</span>
        </button>
        <div className="search-flight-title">
          <h1>Elite Flight Suite</h1>
          <p>Premium Urban Mobility Partner</p>
        </div>
        <ol className="search-flight-steps" aria-label="Flight booking progress">
          {['Search', 'Select', 'Details', 'Payment', 'Confirmation'].map((step, index) => (
            <li key={step} className={index === 0 ? 'is-active' : ''}>
              <span>{index + 1}</span>
              <b>{step}</b>
            </li>
          ))}
        </ol>
      </header>

      <section className="search-flight-shell">
        <article className="search-flight-promo">
          <img src={flightSuiteImage} alt="" aria-hidden="true" />
          <div>
            <span>Premium Routes</span>
            <h2>Elevate Your Journey</h2>
            <p>Experience seamless booking with JaldiRide Connect's curated global network.</p>
          </div>
        </article>

        <div className="search-flight-form-wrap">
          <form
            className="search-flight-card"
            onSubmit={(event) => {
              event.preventDefault()
              onNavigate('flight-results')
            }}
          >
            <div className="flight-trip-toggle" role="tablist" aria-label="Flight trip type">
              {[
                ['round-trip', 'Round Trip'],
                ['one-way', 'One Way'],
                ['multi-city', 'Multi-City'],
              ].map(([id, label]) => (
                <button
                  key={id}
                  className={tripType === id ? 'is-active' : ''}
                  type="button"
                  role="tab"
                  aria-selected={tripType === id}
                  onClick={() => setTripType(id)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flight-route-grid">
              <label className="flight-field">
                <span>From</span>
                <span className="flight-input-wrap">
                  <FlightUiIcon name="plane" />
                  <input type="text" defaultValue="San Francisco (SFO)" />
                </span>
              </label>

              <button className="flight-swap-btn" type="button" aria-label="Swap airports">
                <FlightUiIcon name="swap" />
              </button>

              <label className="flight-field">
                <span>To</span>
                <span className="flight-input-wrap">
                  <FlightUiIcon name="plane" />
                  <input type="text" defaultValue="Tokyo (HND)" />
                </span>
              </label>
            </div>

            <div className="flight-detail-grid">
              <label className="flight-field">
                <span>Departure Date</span>
                <span className="flight-input-wrap">
                  <FlightUiIcon name="calendar" />
                  <input type="text" defaultValue="Oct 24, 2024" />
                </span>
              </label>

              <label className="flight-field">
                <span>Return Date</span>
                <span className="flight-input-wrap">
                  <FlightUiIcon name="return-date" />
                  <input type="text" defaultValue="Nov 02, 2024" />
                </span>
              </label>

              <label className="flight-field">
                <span>Passengers</span>
                <span className="flight-input-wrap">
                  <FlightUiIcon name="passenger" />
                  <select value={passengers} onChange={(event) => setPassengers(event.target.value)}>
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                    <option>4 Adults</option>
                  </select>
                </span>
              </label>

              <label className="flight-field">
                <span>Cabin Class</span>
                <span className="flight-input-wrap">
                  <FlightUiIcon name="seat" />
                  <select value={cabinClass} onChange={(event) => setCabinClass(event.target.value)}>
                    <option>Economy</option>
                    <option>Premium Economy</option>
                    <option>Business</option>
                    <option>First</option>
                  </select>
                </span>
              </label>
            </div>

            <div className="flight-card-divider" />

            <button className="search-flight-submit" type="submit">
              Search Flights <span aria-hidden="true">-&gt;</span>
            </button>
          </form>

          <button className="flight-recent" type="button">
            <FlightUiIcon name="recent" />
            <span>Recent: SFO to LHR (Oct 10 - Oct 20)</span>
          </button>
        </div>
      </section>

      <footer className="search-flight-footer">
        <small>&copy; 2026 JaldiRide Connect. Premium Urban Mobility.</small>
        <nav aria-label="Footer links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Help Center</a>
        </nav>
      </footer>
    </main>
  )
}

function FlightUiIcon({ name }) {
  const icons = {
    plane: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3.5 15.5 21 18l-1.1-2.7-6.4-2.5 3.8-7.4-2.4-.4-5.1 6.2-4.9-1.9-1.1 1.5 3.8 3.1-3.1 3.6Z" fill="currentColor" />
      </svg>
    ),
    swap: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 8h10l-3-3M17 16H7l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 3v3M17 3v3M4.5 9h15M6 5.5h12A1.5 1.5 0 0 1 19.5 7v11A1.5 1.5 0 0 1 18 19.5H6A1.5 1.5 0 0 1 4.5 18V7A1.5 1.5 0 0 1 6 5.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    'return-date': (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 3v3M17 3v3M4.5 9h15M6 5.5h12A1.5 1.5 0 0 1 19.5 7v11A1.5 1.5 0 0 1 18 19.5H6A1.5 1.5 0 0 1 4.5 18V7A1.5 1.5 0 0 1 6 5.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M15.5 12.5H9l2-2M8.5 15.5H15l-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    passenger: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 20a7.5 7.5 0 0 1 15 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    seat: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 4v7.5c0 1.1.9 2 2 2h5.5c1.4 0 2.5 1.1 2.5 2.5V20M7 20h11M9 13.5 7 20M10.5 4h2.3c1 0 1.8.8 1.8 1.8v5.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    recent: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 12a8 8 0 1 0 2.35-5.65L4 8.7M4 4.8v3.9h3.9M12 8v4l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }

  return <span className="flight-ui-icon" aria-hidden="true">{icons[name]}</span>
}

export function FlightResultsPage({ onNavigate }) {
  const flights = [
    {
      airline: 'AirJaldi',
      code: 'AJ-202',
      depart: '10:00',
      departAirport: 'DEL (T3)',
      duration: '2h 30m',
      stops: 'Non-stop',
      stopTone: 'green',
      arrive: '12:30',
      arriveAirport: 'BOM (T2)',
      price: '8,500',
      icon: 'plane',
      selected: true,
    },
    {
      airline: 'Indigo',
      code: '6E-415',
      depart: '14:15',
      departAirport: 'DEL (T1)',
      duration: '2h 10m',
      stops: 'Non-stop',
      stopTone: 'green',
      arrive: '16:25',
      arriveAirport: 'BOM (T2)',
      price: '9,200',
      icon: 'indigo',
      selected: false,
    },
    {
      airline: 'AirJaldi',
      code: 'AJ-101 / 304',
      depart: '08:00',
      departAirport: 'DEL (T3)',
      duration: '5h 45m',
      stops: '1 Stop (AMD)',
      stopTone: 'orange',
      arrive: '13:45',
      arriveAirport: 'BOM (T1)',
      price: '7,800',
      icon: 'plane',
      disabled: true,
    },
  ]

  return (
    <main className="flight-results-page">
      <header className="flight-results-topbar">
        <button className="flight-results-back" type="button" onClick={() => onNavigate('search-flight')} aria-label="Back to flight search">
          <FlightResultsIcon name="back" />
        </button>
        <h1>Select Flight</h1>
        <ol className="flight-results-steps" aria-label="Flight booking progress">
          {['Search', 'Select', 'Details', 'Payment'].map((step, index) => (
            <li key={step} className={index === 1 ? 'is-active' : index === 0 ? 'is-complete' : ''}>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </header>

      <section className="flight-results-shell">
        <div className="flight-results-route">
          <div>
            <p>Outbound Flight</p>
            <h2>
              DEL <FlightResultsIcon name="route-plane" /> BOM
            </h2>
            <span>Wed, Oct 25 &bull; 1 Passenger &bull; Economy</span>
          </div>
          <button type="button" onClick={() => onNavigate('search-flight')}>Modify Search</button>
        </div>

        <div className="flight-results-filters" aria-label="Flight filters">
          <button className="is-active" type="button">Cheapest First</button>
          <button type="button">Fastest</button>
          <button type="button">Non-stop Only</button>
          <button type="button"><FlightResultsIcon name="filter" /> More Filters</button>
        </div>

        <div className="flight-results-list">
          {flights.map((flight) => (
            <article className={`flight-result-card${flight.disabled ? ' is-disabled' : ''}`} key={`${flight.airline}-${flight.code}`}>
              <div className="flight-airline">
                <span className={`flight-airline-icon is-${flight.icon}`}>
                  <FlightResultsIcon name={flight.icon} />
                </span>
                <div>
                  <h3>{flight.airline}</h3>
                  <p>{flight.code}</p>
                </div>
              </div>

              <div className="flight-time-block">
                <strong>{flight.depart}</strong>
                <span>{flight.departAirport}</span>
              </div>

              <div className={`flight-duration is-${flight.stopTone}`}>
                <span>{flight.duration}</span>
                <div aria-hidden="true">
                  <i />
                </div>
                <b>{flight.stops}</b>
              </div>

              <div className="flight-time-block">
                <strong>{flight.arrive}</strong>
                <span>{flight.arriveAirport}</span>
              </div>

              <div className="flight-result-price">
                <span>Per Adult</span>
                <strong>&#8377;{flight.price}</strong>
                <button className={flight.selected ? 'is-selected' : ''} type="button" onClick={() => onNavigate('flight-details')} disabled={flight.disabled}>
                  Select Flight
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function FlightResultsIcon({ name }) {
  const icons = {
    back: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M15 5 8 12l7 7M9 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    'route-plane': (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3.5 15.5 21 18l-1.1-2.7-6.4-2.5 3.8-7.4-2.4-.4-5.1 6.2-4.9-1.9-1.1 1.5 3.8 3.1-3.1 3.6Z" fill="currentColor" />
      </svg>
    ),
    plane: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3.5 15.5 21 18l-1.1-2.7-6.4-2.5 3.8-7.4-2.4-.4-5.1 6.2-4.9-1.9-1.1 1.5 3.8 3.1-3.1 3.6Z" fill="currentColor" />
      </svg>
    ),
    indigo: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M6.2 5.5h10.9l1.8 5.2-6.8 7.8H4.8L6.2 5.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="m11.8 10.3 3.1-2.4-.8 3.7 2.7 2.1-3.6.2-1.3 3.2-1.3-3.2-3.6-.2 2.7-2.1-.8-3.7 2.9 2.4Z" fill="currentColor" />
      </svg>
    ),
    filter: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M5 7h14M8 12h8M10 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  }

  return <span className="flight-results-icon" aria-hidden="true">{icons[name]}</span>
}

export function FlightDetailsPage({ onNavigate }) {
  const amenities = [
    ['bed', 'Flat-Bed Seat'],
    ['dining', 'Gourmet Dining'],
    ['lounge', 'Lounge Access'],
    ['wifi', 'High-Speed Wi-Fi'],
    ['screen', 'In-Flight Ent.'],
    ['bag', 'Priority Baggage'],
  ]

  return (
    <main className="flight-details-page">
      <header className="flight-details-topbar">
        <div className="flight-details-title">
          <button type="button" onClick={() => onNavigate('flight-results')} aria-label="Back to select flight">
            <FlightDetailsIcon name="back" />
          </button>
          <h1>Flight Details</h1>
        </div>
        <button className="flight-details-brand" type="button" onClick={() => onNavigate('home')}>JaldiRide Connect</button>
      </header>

      <section className="flight-details-shell">
        <div className="flight-details-main">
          <article className="flight-details-hero">
            <img src={flightSuiteImage} alt="" aria-hidden="true" />
          </article>

          <article className="flight-route-card">
            <div className="flight-route-card-head">
              <div>
                <h2>AeroLux Airways</h2>
                <p>Flight ALX 4042</p>
              </div>
              <span>Elite Business</span>
            </div>

            <div className="flight-route-code-row">
              <div>
                <strong>JFK</strong>
                <span>New York</span>
                <small>10:00 AM</small>
              </div>
              <div className="flight-route-line">
                <FlightDetailsIcon name="plane" />
                <span>7h 45m</span>
              </div>
              <div>
                <strong>LHR</strong>
                <span>London</span>
                <small>10:45 PM</small>
              </div>
            </div>
          </article>

          <article className="flight-amenities-card">
            <h3>Premium Amenities</h3>
            <div className="flight-amenities-grid">
              {amenities.map(([icon, label]) => (
                <div className="flight-amenity-item" key={label}>
                  <span><FlightDetailsIcon name={icon} /></span>
                  <strong>{label}</strong>
                </div>
              ))}
            </div>
          </article>
        </div>

        <aside className="flight-booking-summary">
          <h2>Booking Summary</h2>

          <div className="flight-summary-lines">
            <p>Route <strong>JFK to LHR</strong></p>
            <p>Date <strong>Oct 24, 2024</strong></p>
            <p>Cabin Class <strong>Elite Business</strong></p>
            <p>Baggage <strong>2 x 32kg</strong></p>
          </div>

          <div className="flight-summary-fares">
            <p>Base Fare <strong>{formatMoney(3200, { decimals: 2 })}</strong></p>
            <p>Taxes & Fees <strong>{formatMoney(385.5, { decimals: 2 })}</strong></p>
          </div>

          <div className="flight-summary-total">
            <span>Total Price</span>
            <strong>{formatMoney(3585.5, { decimals: 2 })}</strong>
          </div>

          <button className="flight-booking-btn" type="button" onClick={() => onNavigate('booking')}>
            Continue to Booking
          </button>
          <small>Secure transaction via JaldiRide Connect</small>
        </aside>
      </section>

      <footer className="flight-details-footer">
        <div>
          <strong>JaldiRide Connect</strong>
          <p>&copy; 2024 JaldiRide Connect. All rights reserved. Premium Urban Mobility.</p>
        </div>
        <nav aria-label="Flight details footer links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Partner Program</a>
          <a href="#">Help Center</a>
        </nav>
      </footer>
    </main>
  )
}

function FlightDetailsIcon({ name }) {
  const icons = {
    back: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M15 5 8 12l7 7M9 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    plane: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3.5 15.5 21 18l-1.1-2.7-6.4-2.5 3.8-7.4-2.4-.4-5.1 6.2-4.9-1.9-1.1 1.5 3.8 3.1-3.1 3.6Z" fill="currentColor" />
      </svg>
    ),
    bed: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4.5 17.5v-9M19.5 17.5v-4.2c0-1-.8-1.8-1.8-1.8H9.5v6M4.5 13.5h15M7.2 11.5a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    dining: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 5.5 17 15.5M17 5.5 7 15.5M12 18.5v1.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
    lounge: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M6.5 11.5V8.8c0-.95.75-1.7 1.7-1.7h7.6c.95 0 1.7.75 1.7 1.7v2.7M5 12h14v6H5v-6ZM7 18v2M17 18v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    wifi: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M5.1 9.4a10.8 10.8 0 0 1 13.8 0M8.2 12.4a6.1 6.1 0 0 1 7.6 0M10.9 15.2a1.8 1.8 0 0 1 2.2 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 18.3h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    screen: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M5 6.5h14v9.8H5V6.5ZM9 20h6M12 16.3V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bag: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M8.5 8V6.8A2.8 2.8 0 0 1 11.3 4h1.4a2.8 2.8 0 0 1 2.8 2.8V8M6.5 8h11L19 19.5H5L6.5 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 11.5h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  }

  return <span className="flight-details-icon" aria-hidden="true">{icons[name]}</span>
}

export function SearchHotelPage({ onNavigate }) {
  const [guests, setGuests] = useState(2)
  const [rooms, setRooms] = useState(1)

  const updateCounter = (setter, value, min) => {
    setter((current) => Math.max(min, current + value))
  }

  return (
    <main className="search-hotel-page">
      <header className="search-hotel-topbar">
        <button className="search-hotel-back" type="button" onClick={() => onNavigate('dashboard')} aria-label="Back to dashboard">
          <span aria-hidden="true">&larr;</span>
        </button>
        <h1>Curated Stays</h1>
        <ol className="search-hotel-steps" aria-label="Hotel booking progress">
          {[1, 2, 3].map((step) => (
            <li key={step} className={step === 1 ? 'is-active' : ''}>
              {step}
            </li>
          ))}
        </ol>
      </header>

      <section className="search-hotel-shell">
        <article className="search-hotel-promo" style={{ '--hotel-suite-bg': `url(${hotelImage})` }}>
          <div>
            <span>Premium Stays</span>
            <h2>Curated Stays</h2>
            <p>Find your perfect stay.</p>
          </div>
        </article>

        <form
          className="search-hotel-card"
          onSubmit={(event) => {
            event.preventDefault()
            onNavigate('hotel-results')
          }}
        >
          <label className="hotel-field hotel-field-wide">
            <span>Destination City</span>
            <span className="hotel-input-wrap">
              <HotelUiIcon name="location" />
              <input type="text" placeholder="Where are you going?" />
            </span>
          </label>

          <div className="hotel-detail-grid">
            <label className="hotel-field">
              <span>Check-in Date</span>
              <span className="hotel-input-wrap">
                <HotelUiIcon name="calendar" />
                <input type="text" placeholder="mm/dd/yyyy" />
              </span>
            </label>

            <label className="hotel-field">
              <span>Check-out Date</span>
              <span className="hotel-input-wrap">
                <HotelUiIcon name="calendar" />
                <input type="text" placeholder="mm/dd/yyyy" />
              </span>
            </label>

            <label className="hotel-field">
              <span>Guests</span>
              <span className="hotel-counter">
                <button type="button" onClick={() => updateCounter(setGuests, -1, 1)} aria-label="Remove guest">-</button>
                <strong>{guests} Guests</strong>
                <button type="button" onClick={() => updateCounter(setGuests, 1, 1)} aria-label="Add guest">+</button>
              </span>
            </label>

            <label className="hotel-field">
              <span>Rooms</span>
              <span className="hotel-counter">
                <button type="button" onClick={() => updateCounter(setRooms, -1, 1)} aria-label="Remove room">-</button>
                <strong>{rooms} Room{rooms > 1 ? 's' : ''}</strong>
                <button type="button" onClick={() => updateCounter(setRooms, 1, 1)} aria-label="Add room">+</button>
              </span>
            </label>
          </div>

          <button className="search-hotel-submit" type="submit">
            <HotelUiIcon name="search" />
            Search Hotels
          </button>
        </form>
      </section>

      <footer className="search-hotel-footer">
        <small>&copy; 2026 JaldiRide Connect. Premium Urban Mobility.</small>
        <nav aria-label="Footer links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Help Center</a>
        </nav>
      </footer>
    </main>
  )
}

export function HotelResultsPage({ onNavigate }) {
  const hotels = [
    {
      name: 'The Grand Palace',
      location: 'Mumbai Central',
      rating: '4.8/5',
      price: '12,000',
      total: '36,000 Total Stay',
      image: hotelSuiteImage,
      amenities: ['wifi', 'pool', 'flame'],
    },
    {
      name: 'Sea View Resort',
      location: 'Marine Drive, Mumbai',
      rating: '4.6/5',
      price: '9,500',
      total: '28,500 Total Stay',
      image: hotelImage,
      amenities: ['wifi', 'expand'],
    },
    {
      name: 'Oasis Boutique',
      location: 'Bandra West, Mumbai',
      rating: '4.9/5',
      price: '15,000',
      total: '45,000 Total Stay',
      image: hotelImage,
      amenities: ['wifi', 'pool', 'dining'],
    },
  ]

  return (
    <main className="hotel-results-page">
      <header className="hotel-results-topbar">
        <button className="hotel-results-back" type="button" onClick={() => onNavigate('search-hotel')} aria-label="Back to hotel search">
          <HotelResultsIcon name="back" />
        </button>
        <button className="hotel-results-brand" type="button" onClick={() => onNavigate('home')}>JaldiRide Connect</button>
        <ol className="hotel-results-steps" aria-label="Hotel booking progress">
          {['Search', 'Select', 'Details'].map((step, index) => (
            <li key={step} className={index === 1 ? 'is-active' : index === 0 ? 'is-complete' : ''}>
              <span>{index === 0 ? <HotelResultsIcon name="check" /> : index + 1}</span>
              <b>{step}</b>
            </li>
          ))}
        </ol>
      </header>

      <section className="hotel-results-shell">
        <div className="hotel-results-head">
          <h1>Select Your Hotel</h1>
          <p>Showing premium stays in Mumbai</p>
        </div>

        <div className="hotel-results-grid">
          {hotels.map((hotel) => (
            <article className="hotel-result-card" key={hotel.name}>
              <div className="hotel-result-image">
                <img src={hotel.image} alt="" aria-hidden="true" />
                <span className="hotel-rating-pill">
                  <HotelResultsIcon name="star" />
                  {hotel.rating}
                </span>
              </div>

              <div className="hotel-result-body">
                <h2>{hotel.name}</h2>
                <p className="hotel-location">
                  <HotelResultsIcon name="pin" />
                  {hotel.location}
                </p>

                <div className="hotel-amenities" aria-label={`${hotel.name} amenities`}>
                  {hotel.amenities.map((amenity) => (
                    <span key={amenity} title={amenity}>
                      <HotelResultsIcon name={amenity} />
                    </span>
                  ))}
                </div>

                <div className="hotel-result-divider" />

                <div className="hotel-price-row">
                  <div>
                    <span>From</span>
                    <strong>&#8377;{hotel.price}<small>/night</small></strong>
                    <p>&#8377;{hotel.total}</p>
                  </div>
                  <button type="button" onClick={() => onNavigate('hotel-details')}>View Hotel</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="hotel-results-footer">
        <strong>JaldiRide Connect</strong>
        <small>&copy; 2024 JaldiRide Connect. Premium Urban Mobility.</small>
      </footer>
    </main>
  )
}

function HotelResultsIcon({ name }) {
  const icons = {
    back: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M15 5 8 12l7 7M9 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    check: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="m7 12 3 3 7-7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="m12 4 2.14 4.34 4.79.7-3.46 3.37.82 4.77L12 14.92l-4.29 2.26.82-4.77-3.46-3.37 4.79-.7L12 4Z" fill="currentColor" />
      </svg>
    ),
    pin: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 21s5.8-5.15 5.8-10.7a5.8 5.8 0 0 0-11.6 0C6.2 15.85 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 12.1a2.05 2.05 0 1 0 0-4.1 2.05 2.05 0 0 0 0 4.1Z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    wifi: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M5.1 9.4a10.8 10.8 0 0 1 13.8 0M8.2 12.4a6.1 6.1 0 0 1 7.6 0M10.9 15.2a1.8 1.8 0 0 1 2.2 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 18.3h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    pool: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 16.4c1.4-1 2.6-1 4 0s2.6 1 4 0 2.6-1 4 0 2.6 1 4 0M4 20c1.4-1 2.6-1 4 0s2.6 1 4 0 2.6-1 4 0 2.6 1 4 0M9 13V5.8c0-1.2 1-2.2 2.2-2.2h.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 8h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    flame: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12.4 21c-3.7 0-6.1-2.5-6.1-5.8 0-2.8 1.7-4.4 3.5-6.5.7 1.6 1.9 2.5 3.2 2.7-.5-2.8.8-5.3 2.2-7 1.9 2 3.5 4.5 3.5 7.8 0 5.4-3.5 8.8-6.3 8.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
    expand: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M8 4H4v4M16 4h4v4M4 16v4h4M20 16v4h-4M9 9 4.8 4.8M15 9l4.2-4.2M9 15l-4.2 4.2M15 15l4.2 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    dining: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 3v8M4.8 3v8M9.2 3v8M4.8 11h4.4M7 11v10M16.5 3v18M16.5 3c2.1 1.3 3.4 3.2 3.4 5.8 0 2.2-1.2 3.9-3.4 4.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }

  return <span className="hotel-results-icon" aria-hidden="true">{icons[name]}</span>
}

function HotelUiIcon({ name }) {
  const icons = {
    location: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 21s6.2-5.45 6.2-11.2a6.2 6.2 0 1 0-12.4 0C5.8 15.55 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 12.15a2.35 2.35 0 1 0 0-4.7 2.35 2.35 0 0 0 0 4.7Z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 3.5v3M17 3.5v3M4.5 9.5h15M6.2 5.8h11.6c.94 0 1.7.76 1.7 1.7v10.3c0 .94-.76 1.7-1.7 1.7H6.2c-.94 0-1.7-.76-1.7-1.7V7.5c0-.94.76-1.7 1.7-1.7Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 13h2.2M13.8 13H16M8 16h2.2M13.8 16H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    search: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M10.8 17.1a6.3 6.3 0 1 0 0-12.6 6.3 6.3 0 0 0 0 12.6ZM15.4 15.4 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  }

  return <span className="hotel-ui-icon" aria-hidden="true">{icons[name]}</span>
}

export function HotelDetailsPage({ onNavigate }) {
  const amenities = [
    ['pool', 'Infinity Pool'],
    ['spa', 'Luxury Spa'],
    ['dining', 'Fine Dining'],
    ['concierge', '24/7 Concierge'],
  ]

  return (
    <main className="hotel-details-page">
      <header className="hotel-details-topbar">
        <div className="hotel-details-title">
          <button type="button" onClick={() => onNavigate('hotel-results')} aria-label="Back to hotels">
            <HotelDetailsIcon name="back" />
          </button>
          <h1>Hotels Details</h1>
        </div>
        <button className="hotel-details-brand" type="button" onClick={() => onNavigate('home')}>JaldiRide Connect</button>
      </header>

      <section className="hotel-details-shell">
        <div className="hotel-details-main">
          <article className="hotel-details-hero">
            <img src={hotelImage} alt="" aria-hidden="true" />
            <span><HotelDetailsIcon name="star" /> 5.0 Rating (9.8/10 Reviews)</span>
          </article>

          <article className="hotel-details-card">
            <h2>Ascent Boutique Resort</h2>
            <p><HotelDetailsIcon name="pin" /> Alpine Way</p>

            <div className="hotel-details-divider" />

            <h3>Premium Amenities</h3>
            <div className="hotel-details-amenities">
              {amenities.map(([icon, label]) => (
                <div className="hotel-details-amenity" key={label}>
                  <span><HotelDetailsIcon name={icon} /></span>
                  <strong>{label}</strong>
                </div>
              ))}
            </div>
          </article>
        </div>

        <aside className="hotel-booking-summary">
          <h2>Booking Summary</h2>

          <div className="hotel-summary-lines">
            <p><span><HotelDetailsIcon name="calendar" /> Stay Dates</span> <strong>Jan 28 - Jan 30</strong></p>
            <p><span><HotelDetailsIcon name="guests" /> Guests</span> <strong>2 Adults</strong></p>
            <p><span><HotelDetailsIcon name="bed" /> Selected Room</span> <strong>Executive King Suite</strong></p>
          </div>

          <div className="hotel-summary-fares">
            <p>Nightly Rate (2x) <strong>{formatMoney(450, { decimals: 2 })}</strong></p>
            <p>Taxes & Fees <strong>{formatMoney(125, { decimals: 2 })}</strong></p>
          </div>

          <div className="hotel-summary-total">
            <span>Total</span>
            <strong>{formatMoney(1025, { decimals: 2 })}</strong>
          </div>

          <button className="hotel-reserve-btn" type="button" onClick={() => onNavigate('booking')}>
            Reserve Room
          </button>
          <small>You won't be charged yet.</small>
        </aside>
      </section>

      <footer className="hotel-details-footer">
        <div>
          <strong>JaldiRide Connect</strong>
          <p>&copy; 2024 JaldiRide Connect. All rights reserved. Premium Urban Mobility.</p>
        </div>
        <nav aria-label="Hotel details footer links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Partner Program</a>
          <a href="#">Help Center</a>
        </nav>
      </footer>
    </main>
  )
}

function HotelDetailsIcon({ name }) {
  const icons = {
    back: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M15 5 8 12l7 7M9 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="m12 4 2.14 4.34 4.79.7-3.46 3.37.82 4.77L12 14.92l-4.29 2.26.82-4.77-3.46-3.37 4.79-.7L12 4Z" fill="currentColor" />
      </svg>
    ),
    pin: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 21s5.8-5.15 5.8-10.7a5.8 5.8 0 0 0-11.6 0C6.2 15.85 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 12.1a2.05 2.05 0 1 0 0-4.1 2.05 2.05 0 0 0 0 4.1Z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    pool: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 16.4c1.4-1 2.6-1 4 0s2.6 1 4 0 2.6-1 4 0 2.6 1 4 0M4 20c1.4-1 2.6-1 4 0s2.6 1 4 0 2.6-1 4 0 2.6 1 4 0M9 13V5.8c0-1.2 1-2.2 2.2-2.2h.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 8h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    spa: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 20c-4.1-1.8-6.8-4.7-7.7-8.7 3.6-.3 6.2 1.1 7.7 4.2 1.5-3.1 4.1-4.5 7.7-4.2-.9 4-3.6 6.9-7.7 8.7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M12 15.5C10.7 12.5 11 9 12 5c1 4 1.3 7.5 0 10.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
    dining: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 3v8M4.8 3v8M9.2 3v8M4.8 11h4.4M7 11v10M16.5 3v18M16.5 3c2.1 1.3 3.4 3.2 3.4 5.8 0 2.2-1.2 3.9-3.4 4.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    concierge: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4.5 14.5h15M6.5 14.5a5.5 5.5 0 0 1 11 0M12 6v3M9.5 6h5M6.2 18.5h11.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 3.5v3M17 3.5v3M4.5 9.5h15M6.2 5.8h11.6c.94 0 1.7.76 1.7 1.7v10.3c0 .94-.76 1.7-1.7 1.7H6.2c-.94 0-1.7-.76-1.7-1.7V7.5c0-.94.76-1.7 1.7-1.7Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    guests: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M9.5 11.2a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8ZM3.8 19.2a5.7 5.7 0 0 1 11.4 0M16 11.5a3 3 0 1 0-.7-5.9M17.3 14.3a5 5 0 0 1 3 4.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    bed: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4.5 17.5v-9M19.5 17.5v-4.2c0-1-.8-1.8-1.8-1.8H9.5v6M4.5 13.5h15M7.2 11.5a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }

  return <span className="hotel-details-icon" aria-hidden="true">{icons[name]}</span>
}

export function RideDetailsPage({ onNavigate }) {
  const amenities = [
    ['chauffeur', 'CHAUFFEUR', 'orange'],
    ['wifi', 'CONNECTIVITY', 'purple'],
    ['climate', 'CLIMATE CONTROL', 'green'],
    ['leather', 'PREMIUM LEATHER', 'gold'],
  ]

  return (
    <main className="ride-details-page">
      <div className="ride-details-wrapper">
        <section className="ride-details-main-content">
          <article className="ride-details-hero">
            <img src={offerImage} alt="" aria-hidden="true" />
            <span className="premium-pill">PREMIUM CLASS</span>
          </article>

          <div className="ride-details-heading">
            <div className="heading-left">
              <h2>Executive Sedan</h2>
              <p><RideDetailsIcon name="star" /> 4.9 <span>(128 Reviews)</span></p>
            </div>
            <span className="ride-seats-pill"><RideDetailsIcon name="users" /> 4 Seats</span>
          </div>

          <div className="ride-amenities-grid">
            {amenities.map(([icon, label, tone]) => (
              <article className="ride-amenity-card" key={label}>
                <span className={`amenity-icon is-${tone}`}><RideDetailsIcon name={icon} /></span>
                <strong>{label}</strong>
              </article>
            ))}
          </div>

          <article className="ride-cancel-card">
            <h3><RideDetailsIcon name="info" /> Cancellation Policy</h3>
            <p>Free cancellation up to 24 hours before pickup. A 50% fee applies for cancellations made within 24 hours. No-shows will be charged the full fare.</p>
          </article>
        </section>

        <aside className="ride-booking-card">
          <div className="booking-route">
            <div className="drop-icon-wrap">
               <RideDetailsIcon name="target" />
            </div>
            <div className="drop-info">
               <p>DROP-OFF</p>
               <strong>International Airport</strong>
               <small>Est. arrival 09:45 AM</small>
            </div>
          </div>
          
          <div className="ride-estimate-pill">
            <div className="est-left">
               <RideDetailsIcon name="clock" />
               <span>Est. Time</span>
            </div>
            <strong>45 mins</strong>
          </div>

          <div className="ride-fare-lines">
            <div className="fare-line">
               <span>Base Fare</span>
               <strong>₹75.00</strong>
            </div>
            <div className="fare-line">
               <span>Taxes & Fees</span>
               <strong>₹8.50</strong>
            </div>
          </div>
          
          <div className="ride-divider" />

          <div className="ride-total-row">
            <span>Total Price</span>
            <strong>₹83.50</strong>
          </div>

          <button className="ride-book-btn" type="button" onClick={() => onNavigate('payment')}>
            Book Ride &rarr;
          </button>
        </aside>
      </div>

      <footer className="ride-details-footer">
        <div className="footer-content">
          <div className="footer-left">
            <strong>JaldiRide Connect</strong>
            <p>&copy; 2024 JaldiRide Connect. All rights reserved. Premium Urban Mobility.</p>
          </div>
          <nav aria-label="Ride details footer links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Partner Program</a>
            <a href="#">Help Center</a>
          </nav>
        </div>
      </footer>
    </main>
  )
}

function RideDetailsIcon({ name }) {
  const icons = {
    back: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M15 5 8 12l7 7M9 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="m12 3.8 2.2 4.45 4.9.72-3.55 3.45.84 4.88L12 15l-4.39 2.3.84-4.88L4.9 8.97l4.9-.72L12 3.8Z" fill="currentColor" />
      </svg>
    ),
    users: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M9.5 11.2a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8ZM3.8 19.2a5.7 5.7 0 0 1 11.4 0M16 11.5a3 3 0 1 0-.7-5.9M17.3 14.3a5 5 0 0 1 3 4.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    chauffeur: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M8 8.2a4 4 0 0 1 8 0v2.3H8V8.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M6.5 11h11v8.5h-11V11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 15.5h6M12 13v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    wifi: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M5.1 9.4a10.8 10.8 0 0 1 13.8 0M8.2 12.4a6.1 6.1 0 0 1 7.6 0M10.9 15.2a1.8 1.8 0 0 1 2.2 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 18.3h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    climate: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 4v16M5.1 8l13.8 8M18.9 8 5.1 16M8 5.5 12 8l4-2.5M8 18.5l4-2.5 4 2.5M4.2 11l3.8 2.2v4.3M19.8 11 16 13.2v4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    leather: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M7 4v7.5c0 1.1.9 2 2 2h5.5c1.4 0 2.5 1.1 2.5 2.5V20M7 20h11M9 13.5 7 20M10.5 4h2.3c1 0 1.8.8 1.8 1.8v5.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    info: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 10.5v5M12 7.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    dot: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="4.5" fill="currentColor" />
      </svg>
    ),
    target: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    arrow: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M6 12h12M14 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }

  return <span className="ride-details-icon" aria-hidden="true">{icons[name]}</span>
}

export function BookingDetailsPage({ onNavigate }) {
  const bookingNavItems = [
    ['Home', 'dashboard'],
    ['Bookings', 'bookings'],
    ['Profile', 'profile'],
    ['Settings', 'security'],
  ]

  return (
    <main className="jr-app-page">
      <AppHeader active="Bookings" onNavigate={onNavigate} showSearch={false} navItems={bookingNavItems} />
      <section className="booking-detail-shell">
        <p className="eyebrow">Review Journey</p>
        <h1>Booking Details</h1>
        <div className="booking-layout">
          <div>
            <article className="map-panel" style={{ '--map-bg': `url(${bookingDetailImage})` }}>
              <span className="traffic-pill"><i />Live Traffic Updated</span>
              <div className="journey-metrics">
                <p>
                  <span className="metric-icon is-duration"><img src={bookingTimeIcon} alt="" aria-hidden="true" /></span>
                  <span><small>Est. Duration</small><strong>42 Mins</strong></span>
                </p>
                <p>
                  <span className="metric-icon is-distance"><img src={bookingLocationIcon} alt="" aria-hidden="true" /></span>
                  <span><small>Distance</small><strong>12.4 km</strong></span>
                </p>
              </div>
            </article>
            <article className="route-card">
              <p>
                <span className="route-icon is-pickup"><img src={bookingPickupIcon} alt="" aria-hidden="true" /></span>
                <span><strong>Pickup Point</strong>Bandra West, Hill Road<small>Near Elco Market, Mumbai - 400050</small></span>
              </p>
              <span className="route-connector" aria-hidden="true" />
              <p>
                <span className="route-icon is-drop"><img src={bookingDropIcon} alt="" aria-hidden="true" /></span>
                <span><strong>Drop-off Destination</strong>Chhatrapati Shivaji Terminal<small>Platform 1 Exit, Fort, Mumbai - 400001</small></span>
              </p>
            </article>
          </div>
          <aside className="fare-card">
            <div className="vehicle-card">
              <img src={bookingCarImage} alt="JaldiPrime Sedan" />
              <div>
                <h2>JaldiPrime Sedan</h2>
                <p><img src={bookingSeatIcon} alt="" aria-hidden="true" />4 Seats &bull; AC &bull; EV</p>
              </div>
              <span>Premium</span>
              <div className="vehicle-meta">
                <p><small>Driver Rating</small><strong><span className="rating-star">&#9733;</span> 4.9 <span>(1.2k)</span></strong></p>
                <p><small>Waiting Time</small><strong>~ 4 Mins</strong></p>
              </div>
            </div>
            <div className="fare-box">
              <h3>Fare Breakdown</h3>
              <p>Base Fare <strong>{formatMoney(145, { decimals: 2 })}</strong></p>
              <p>Distance (12.4 km) <strong>{formatMoney(248, { decimals: 2 })}</strong></p>
              <p>Convenience Fee <strong>{formatMoney(35, { decimals: 2 })}</strong></p>
              <p>Taxes & GST (18%) <strong>{formatMoney(77.04, { decimals: 2 })}</strong></p>
              <h2>Total Fare <strong>{formatMoney(505.04, { decimals: 2 })}</strong></h2>
              <form className="promo-form">
                <input type="text" placeholder="Have a promo code?" />
                <button type="button">Apply</button>
              </form>
              <button className="payment-cta" type="button" onClick={() => onNavigate('payment')}>Proceed to Payment <span>&#8594;</span></button>
              <small className="terms-line">By clicking proceed, you agree to our <a href="#">Terms of Service</a></small>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

function RewardsUiIcon({ name }) {
  const icons = {
    dashboard: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
    bookings: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M5 7h14M7 3v4M17 3v4M5 11h14v10H5z" />
      </svg>
    ),
    'elite-club': (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7.5l1.1 2.3 2.5.4-1.8 1.7.4 2.5-2.2-1.2-2.2 1.2.4-2.5-1.8-1.7 2.5-.4z" />
      </svg>
    ),
    concierge: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 3a9 9 0 1 0 9 9" />
        <path d="M12 7v5l3 2" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    history: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </svg>
    ),
    support: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" />
        <path d="M9.5 9.5a2.5 2.5 0 0 1 4.2 1.8c0 1.7-2.2 2-2.2 3.7" />
        <circle cx="12" cy="17" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
    'sign-out': (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M10 7V5a2 2 0 0 1 2-2h7v18h-7a2 2 0 0 1-2-2v-2" />
        <path d="M3 12h11M7 8l-4 4 4 4" />
      </svg>
    ),
  }

  return <span className="rewards-ui-icon" aria-hidden="true">{icons[name]}</span>
}

function EliteClubPanelContent() {
  const perks = [
    {
      title: 'Lounge Access',
      text: 'Complimentary access to 500+ global airport lounges.',
      icon: flightDashIcon,
      tone: 'purple',
    },
    {
      title: 'Priority Pickup',
      text: 'Zero wait times with dedicated elite pickup zones.',
      icon: trackIcon,
      tone: 'orange',
    },
    {
      title: 'Elite Chauffeur',
      text: 'Certified professional drivers for every premium ride.',
      icon: rideDashIcon,
      tone: 'purple',
    },
    {
      title: 'Concierge Service',
      text: '24/7 personal assistance for travel and lifestyle.',
      icon: priorityIcon,
      tone: 'orange',
    },
  ]

  const historyRows = [
    ['Airport Transfer - LHR', 'Oct 12, 2023', '+450 pts', 'Credited'],
    ['Premium Sedan - Mumbai', 'Oct 08, 2023', '+280 pts', 'Credited'],
    ['Concierge Booking', 'Oct 01, 2023', '+120 pts', 'Credited'],
  ]

  return (
    <div className="rewards-panel">
      <article className="rewards-hero-row">
        <div className="rewards-hero-copy">
          <span className="rewards-hero-tag">ELITE CLUB MEMBER</span>
          <h1>Black Tier Member</h1>
          <p>You are among the top 1% of our global commuters. Enjoy exclusive benefits tailored for your lifestyle.</p>
        </div>
        <article className="rewards-points-card">
          <span>TOTAL LOYALTY POINTS</span>
          <strong>12,450 <small>pts</small></strong>
          <div className="rewards-tier-row">
            <span>BLACK TIER</span>
            <span>PLATINUM TIER</span>
          </div>
          <div className="rewards-progress"><i /></div>
          <small>2,550 pts until your next upgrade</small>
        </article>
      </article>

      <div className="rewards-section-head">
        <h2>Your Exclusive Perks</h2>
        <button type="button">View All Benefits</button>
      </div>

      <div className="rewards-perks-grid">
        {perks.map((perk) => (
          <article className="rewards-perk-card" key={perk.title}>
            <span className={`rewards-perk-icon is-${perk.tone}`}>
              <img src={perk.icon} alt="" aria-hidden="true" />
            </span>
            <h3>{perk.title}</h3>
            <p>{perk.text}</p>
          </article>
        ))}
      </div>

      <div className="rewards-lower-grid">
        <section className="rewards-history-card">
          <h2>Recent Activity</h2>
          <div className="rewards-history-table">
            <div className="rewards-history-head">
              <span>Activity</span>
              <span>Date</span>
              <span>Points</span>
              <span>Status</span>
            </div>
            {historyRows.map(([activity, date, points, status]) => (
              <div className="rewards-history-row" key={activity}>
                <strong>{activity}</strong>
                <span>{date}</span>
                <b>{points}</b>
                <em>{status}</em>
              </div>
            ))}
          </div>
          <button type="button">View Full History</button>
        </section>

        <section className="rewards-roadmap-card">
          <h2>Tier Roadmap</h2>
          <article className="rewards-roadmap-step">
            <span />
            <div>
              <strong>Gold Tier</strong>
              <p>Unlocked at 5,000 points</p>
            </div>
          </article>
          <article className="rewards-roadmap-step is-black">
            <span />
            <div>
              <strong>Black Tier</strong>
              <p>Your current elite status</p>
            </div>
          </article>
          <article className="rewards-roadmap-step is-active">
            <span />
            <div>
              <strong>Platinum Tier</strong>
              <p>Unlock at 15,000 points</p>
            </div>
          </article>
          <div className="rewards-roadmap-callout">
            <strong>Almost there</strong>
            <p>Earn 2,550 more points to unlock Platinum benefits.</p>
          </div>
          <button type="button">Explore Platinum Perks</button>
        </section>
      </div>

      <article className="rewards-banner" style={{ '--rewards-bg': `url(${offerImage})` }}>
        <div>
          <h2>Upgrade to Platinum</h2>
          <p>Unlock global airport lounge access, private chauffeurs, and zero cancellation fees.</p>
        </div>
        <button type="button">Learn More</button>
      </article>
    </div>
  )
}

function EliteDashboardPanelContent({ onNavigate }) {
  const services = [
    ['Ride', dashboardRideIcon],
    ['Bus', dashboardBusIcon],
    ['Hotels', dashboardHotelIcon],
    ['Flights', dashboardFlightIcon],
  ]
  const bookings = [
    {
      title: 'BOM -> LHR, Flight UK201',
      meta: 'OCT 12, 2023 - Confirmed',
      price: formatMoney(42500),
      icon: flightDashIcon,
    },
    {
      title: 'Airport Transfer - Toyota Camry',
      meta: 'OCT 10, 2023 - Completed',
      price: formatMoney(1200),
      icon: rideDashIcon,
    },
  ]

  return (
    <div className="rewards-panel rewards-embedded-dashboard">
      <div className="dashboard-title">
        <div>
          <h1>Good morning, James</h1>
          <p>Where are you heading today? You have <span>1 active journey.</span></p>
        </div>
        <div className="member-badge">
          <img src={goldMemberIcon} alt="" aria-hidden="true" />
          <div>
            <span>BLACK TIER</span>
            <strong>12,450 Points</strong>
          </div>
        </div>
      </div>
      <div className="service-shortcuts">
        {services.map(([label, icon]) => (
          <button key={label} type="button" onClick={() => (label === 'Hotels' ? onNavigate('search-hotel') : label === 'Flights' ? onNavigate('search-flight') : label === 'Bus' ? onNavigate('search-bus') : onNavigate('search'))}>
            <img src={icon} alt="" aria-hidden="true" />
            {label}
          </button>
        ))}
      </div>
      <section className="recent-card">
        <h2>
          Recent Bookings
          <button type="button">View All</button>
        </h2>
        <div className="booking-list-mini">
          {bookings.map((booking) => (
            <article key={booking.title}>
              <span className="booking-mini-icon">
                <img src={booking.icon} alt="" aria-hidden="true" />
              </span>
              <div>
                <strong>{booking.title}</strong>
                <small>{booking.meta}</small>
              </div>
              <b>{booking.price}</b>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

function EliteConciergePanelContent() {
  const messages = [
    {
      id: 1,
      type: 'assistant',
      time: '09:12 AM',
      text: 'Good morning, Mr. Harrington. Your flight to London has been confirmed for 3:00 PM. I\'ve also pre-arranged your airport transfer for 12:30 PM.',
    },
    {
      id: 2,
      type: 'user',
      time: '09:15 AM',
      text: 'Excellent. Could you also ensure there\'s a reservation at The Ledbury for 8:00 PM tonight?',
    },
    {
      id: 3,
      type: 'assistant',
      time: '09:20 AM',
      text: 'Consider it done. Your chauffeur, Michael, will be ready at the arrivals hall with your preferred chilled sparkling water.',
    },
  ]

  return (
    <div className="rewards-panel rewards-embedded-concierge">
      <section className="concierge-chat-column">
        <div className="concierge-chat-header">
          <div className="concierge-agent">
            <span className="concierge-agent-avatar">
              <img src={profileImg} alt="" aria-hidden="true" />
            </span>
            <div>
              <h1>Sarah — Executive Concierge</h1>
              <p><span className="is-online" />Online</p>
            </div>
          </div>
          <div className="concierge-chat-actions">
            <button type="button" aria-label="Call concierge">⌂</button>
            <button type="button" aria-label="Video call">▣</button>
            <button type="button" aria-label="More options">⋮</button>
          </div>
        </div>

        <div className="concierge-feed">
          <span className="concierge-today-pill">TODAY</span>
          {messages.map((message) => (
            <article key={message.id} className={`concierge-message is-${message.type}`}>
              <span className="concierge-message-avatar">
                <img src={profileImg} alt="" aria-hidden="true" />
              </span>
              <div className="concierge-message-body">
                <p>{message.text}</p>
                <small>{message.time}</small>
              </div>
            </article>
          ))}
        </div>

        <form className="concierge-composer" onSubmit={(event) => event.preventDefault()}>
          <button type="button" aria-label="Add attachment">+</button>
          <button type="button" aria-label="Add emoji">☺</button>
          <input type="text" placeholder="Message your concierge..." />
          <button type="button" aria-label="Voice input">⌁</button>
          <button type="submit" aria-label="Send message">→</button>
        </form>
      </section>
    </div>
  )
}

export function RewardsPage({ onNavigate }) {
  const [activeSection, setActiveSection] = useState('elite-club')

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'bookings', label: 'Bookings' },
    { id: 'elite-club', label: 'Elite Club' },
    { id: 'concierge', label: 'Concierge' },
    { id: 'history', label: 'History' },
  ]

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPanel = () => {
    if (activeSection === 'dashboard') {
      return <EliteDashboardPanelContent onNavigate={onNavigate} />
    }
    if (activeSection === 'bookings') {
      return <BookingsPanelContent onNavigate={onNavigate} initialTab="upcoming" embedded />
    }
    if (activeSection === 'history') {
      return <BookingsPanelContent onNavigate={onNavigate} initialTab="history" embedded />
    }
    if (activeSection === 'concierge') {
      return <EliteConciergePanelContent />
    }
    if (activeSection === 'support') {
      return <SupportPanelContent embedded />
    }
    return <EliteClubPanelContent />
  }

  return (
    <main className="rewards-page">
      <header className="rewards-header">
        <button className="rewards-brand" type="button" onClick={() => onNavigate('dashboard')} aria-label="JaldiRide home">
          <img src={logoImage} alt="" aria-hidden="true" />
          <span>JaldiRide</span>
        </button>

        <form className="rewards-search" onSubmit={(event) => event.preventDefault()}>
          <button type="submit" aria-label="Search rewards">
            <img src={searchIcon} alt="" aria-hidden="true" />
          </button>
          <input type="search" placeholder="Search rewards, destinations..." />
        </form>

        <div className="rewards-header-actions">
          <button className="notification-icon" type="button" onClick={() => onNavigate('notifications')} aria-label="Notifications">
            <img src={bellIcon} alt="" aria-hidden="true" />
          </button>
          <button className="help-icon" type="button" onClick={() => handleSectionChange('support')} aria-label="Support">⚙</button>
          <div className="rewards-user-chip">
            <strong>James Harrington</strong>
            <small>Black Tier</small>
          </div>
          <button className="avatar rewards-avatar" type="button" onClick={() => onNavigate('profile')} aria-label="Profile">
            <img src={profileImg} alt="" aria-hidden="true" />
          </button>
        </div>
      </header>

      <section className="rewards-layout">
        <aside className="rewards-sidebar">
          <div className="rewards-sidebar-brand">
            <strong>JaldiRide</strong>
            <span>ELITE MOBILITY</span>
          </div>

          <nav aria-label="Elite navigation">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                className={activeSection === item.id ? 'is-active' : ''}
                type="button"
                onClick={() => handleSectionChange(item.id)}
              >
                <RewardsUiIcon name={item.id} />
                {item.label}
              </button>
            ))}
          </nav>

          <button className="rewards-upgrade-button" type="button">Upgrade to Platinum</button>

          <div className="rewards-sidebar-footer">
            <button
              className={activeSection === 'support' ? 'is-active' : ''}
              type="button"
              onClick={() => handleSectionChange('support')}
            >
              <RewardsUiIcon name="support" />
              Support
            </button>
            <button type="button" onClick={() => onNavigate('home')}>
              <RewardsUiIcon name="sign-out" />
              Sign Out
            </button>
          </div>
        </aside>

        <div className="rewards-main" key={activeSection}>
          {renderPanel()}
        </div>
      </section>
    </main>
  )
}

export function PaymentPage({ onNavigate }) {
  const [activeMethod, setActiveMethod] = useState('card')
  const [activeWallet, setActiveWallet] = useState('google')
  const [activeBank, setActiveBank] = useState('HDFC Bank')
  const walletOptions = [
    ['google', 'Google Pay', bankGooglePayIcon],
    ['phonepe', 'PhonePe', phonePeIcon],
    ['paytm', 'Paytm', paytmIcon],
  ]
  const popularBanks = ['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank']

  const handlePaymentKeyDown = (event, method) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setActiveMethod(method)
    }
  }

  return (
    <main className="jr-app-page payment-page">
      <PaymentHeader onNavigate={onNavigate} />
      <section className="payment-shell">
        <div className="payment-grid">
          <section className="payment-left">
            <article className="confirm-card">
              <div>
                <h1>Confirm Payment</h1>
                <p>Trip to Downtown Business District</p>
              </div>
              <strong>{formatMoney(842, { decimals: 2 })}</strong>
              <div className="confirm-metrics">
                <span><img src={paymentRideIcon} alt="" /><small>Ride Type</small><b>Premium Sedan</b></span>
                <span><img src={paymentDistanceIcon} alt="" /><small>Distance</small><b>14.2 km</b></span>
              </div>
            </article>
 
            <p className="payment-label">Choose Payment Method</p>
            <div 
              className={`payment-method ${activeMethod === 'card' ? 'is-active' : ''}`}
              onClick={() => setActiveMethod('card')}
              onKeyDown={(event) => handlePaymentKeyDown(event, 'card')}
              role="button"
              tabIndex={0}
              aria-pressed={activeMethod === 'card'}
            >
              <span className="payment-method-icon" style={{ '--method-icon-url': `url(${bankCreditsIcon})` }} aria-hidden="true" />
              <div className="payment-method-copy"><h2>Credit / Debit Card</h2><p>Ending in 4242 &bull; Expires 12/26</p></div>
              {activeMethod === 'card' ? <img className="selected-icon" src={paymentRightIcon} alt="" aria-hidden="true" /> : <b>&rsaquo;</b>}
              {activeMethod === 'card' ? (
                <div className="payment-cvv-row">
                  <label>CVV<input type="password" placeholder="•••" /></label>
                  <small>Verified by Visa & Mastercard SecureCode</small>
                </div>
              ) : null}
            </div>
            <div 
              className={`payment-method ${activeMethod === 'digital' ? 'is-active' : ''}`} 
              onClick={() => setActiveMethod('digital')}
              onKeyDown={(event) => handlePaymentKeyDown(event, 'digital')}
              role="button"
              tabIndex={0}
              aria-pressed={activeMethod === 'digital'}
            >
              <span className="payment-method-icon" style={{ '--method-icon-url': `url(${bankDigitalIcon})` }} aria-hidden="true" />
              <div className="payment-method-copy"><h2>Digital Wallets</h2><p>{activeMethod === 'digital' ? 'Select your preferred wallet' : 'Google Pay, PhonePe, Paytm'}</p></div>
              {activeMethod === 'digital' ? <img className="selected-icon" src={paymentRightIcon} alt="" aria-hidden="true" /> : <b>&rsaquo;</b>}
              {activeMethod === 'digital' ? (
                <div className="wallet-options" aria-label="Wallet options">
                  {walletOptions.map(([id, label, icon]) => (
                    <div 
                      key={id} 
                      className={`wallet-option ${activeWallet === id ? 'is-selected' : ''}`}
                      onClick={(e) => { e.stopPropagation(); setActiveWallet(id); }}
                      role="button"
                      tabIndex={0}
                    >
                      <span><img src={icon} alt="" aria-hidden="true" /></span>
                      <strong>{label}</strong>
                      {activeWallet === id ? <img className="wallet-check" src={paymentRightIcon} alt="" aria-hidden="true" /> : null}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <div 
              className={`payment-method ${activeMethod === 'net' ? 'is-active' : ''}`} 
              onClick={() => setActiveMethod('net')}
              onKeyDown={(event) => handlePaymentKeyDown(event, 'net')}
              role="button"
              tabIndex={0}
              aria-pressed={activeMethod === 'net'}
            >
              <span className="payment-method-icon" style={{ '--method-icon-url': `url(${bankIcon})` }} aria-hidden="true" />
              <div className="payment-method-copy"><h2>Net Banking</h2><p>Choose from 40+ banks</p></div>
              {activeMethod === 'net' ? <img className="selected-icon" src={paymentRightIcon} alt="" aria-hidden="true" /> : <b>&rsaquo;</b>}
              {activeMethod === 'net' ? (
                <div className="net-banking-panel">
                  <h3>Popular Banks</h3>
                  <div className="popular-bank-grid">
                    {popularBanks.map((bank) => (
                      <div 
                        key={bank} 
                        className={activeBank === bank ? 'is-selected' : ''}
                        onClick={(e) => { e.stopPropagation(); setActiveBank(bank); }}
                        role="button"
                        tabIndex={0}
                      >
                        <span><img src={bankIcon} alt="" aria-hidden="true" /></span>
                        {bank}
                      </div>
                    ))}
                  </div>
                  <h3>Other Banks</h3>
                  <label className="other-bank-select" onClick={(event) => event.stopPropagation()}>
                    <span aria-hidden="true" />
                    <select defaultValue="">
                      <option value="" disabled>Search for other banks</option>
                      <option>Bank of Baroda</option>
                      <option>Canara Bank</option>
                      <option>Kotak Mahindra Bank</option>
                    </select>
                  </label>
                </div>
              ) : null}
            </div>
          </section>
 
          <aside className="payment-summary">
            <article className="payment-hero-card" style={{ '--payment-bg': `url(${heroImage})` }}>
              <h2>Arrive in Style</h2>
              <p>Your premium ride is just one tap away.</p>
            </article>
            <div className="payment-total">
              <p>Subtotal <strong>{formatMoney(780, { decimals: 2 })}</strong></p>
              <p>Service Fee <strong>{formatMoney(45, { decimals: 2 })}</strong></p>
              <p>Taxes (GST) <strong>{formatMoney(17, { decimals: 2 })}</strong></p>
              <h2>Total Amount <strong>{formatMoney(842, { decimals: 2 })}</strong></h2>
              <button type="button" onClick={() => onNavigate('success')}><img src={paymentLockIcon} alt="" aria-hidden="true" />Pay Now</button>
              <div className="payment-security-row">
                <span><img src={paymentSecureIcon} alt="" aria-hidden="true" />Secure SSL</span>
                <span><img src={paymentPciIcon} alt="" aria-hidden="true" />PCI Compliant</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

function SupportHeader({ onNavigate }) {
  const items = [
    ['Home', 'dashboard'],
    ['My Rides', 'bookings'],
    ['Support', 'support'],
  ]

  return (
    <header className="support-header">
      <BrandButton onNavigate={onNavigate} />
      <nav aria-label="Support navigation">
        {items.map(([label, page]) => (
          <button
            key={label}
            className={label === 'Support' ? 'is-active' : ''}
            type="button"
            onClick={() => onNavigate(page)}
          >
            {label}
          </button>
        ))}
      </nav>
      <div className="support-header-actions">
        <button className="notification-icon" type="button" onClick={() => onNavigate('notifications')} aria-label="Notifications">
          <img src={bellIcon} alt="" aria-hidden="true" />
        </button>
        <button className="help-icon" type="button" aria-label="Help">?</button>
        <button className="avatar" type="button" onClick={() => onNavigate('profile')} aria-label="Profile">
          <img src={profileImg} alt="" aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}

function SupportPanelContent({ embedded = false }) {
  const categories = [
    {
      title: 'Ride Issues',
      text: 'Missing items, driver feedback, or route concerns from your recent travels.',
      icon: bookingRideIcon,
      tone: 'orange',
    },
    {
      title: 'Payment & Billing',
      text: 'Refund requests, invoice downloads, or updating your digital wallet settings.',
      icon: paymentIcon,
      tone: 'blue',
    },
    {
      title: 'Safety & Security',
      text: 'Emergency contacts, health protocols, and identity verification support.',
      icon: securityIcon,
      tone: 'red',
    },
    {
      title: 'Technical Support',
      text: 'Troubleshooting app glitches, map inaccuracies, or account access errors.',
      icon: methodManageIcon,
      tone: 'purple',
    },
    {
      title: 'Corporate Solutions',
      text: 'Business travel management, tax reporting, and multi-user dashboard help.',
      icon: bankIcon,
      tone: 'green',
    },
    {
      title: 'Account Privacy',
      text: 'Data portability, privacy settings, and communication preferences.',
      icon: priorityIcon,
      tone: 'yellow',
    },
  ]

  const faqs = [
    'What is the refund policy for cancelled rides?',
    'How can I schedule a ride for someone else?',
    'Is my personal data encrypted and secure?',
  ]

  return (
    <section className={`support-content ${embedded ? 'is-embedded' : ''}`}>
      <div className="support-hero">
        <h1>How can we help <span>James?</span></h1>
        <form className="support-search" onSubmit={(event) => event.preventDefault()}>
          <span aria-hidden="true" />
          <input type="search" placeholder="Search for rides, payments, safety protocols..." />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="support-category-grid">
        {categories.map((category) => (
          <button className="support-category-card" type="button" key={category.title}>
            <span className={`support-category-icon is-${category.tone}`}>
              <img src={category.icon} alt="" aria-hidden="true" />
            </span>
            <strong>{category.title}</strong>
            <p>{category.text}</p>
          </button>
        ))}
      </div>

      <section className="support-faq">
        <div className="support-faq-head">
          <h2>Frequently Asked Questions</h2>
          <button type="button">View All <span aria-hidden="true">→</span></button>
        </div>
        <div className="support-faq-list">
          {faqs.map((faq) => (
            <button type="button" key={faq}>
              {faq}
              <span aria-hidden="true">⌄</span>
            </button>
          ))}
        </div>
      </section>
    </section>
  )
}

export function SupportPage({ onNavigate }) {
  return (
    <main className="support-page">
      <SupportHeader onNavigate={onNavigate} />

      <section className="support-shell">
        <aside className="support-sidebar">
          <div className="support-profile-title">
            <h2>Profile Hub</h2>
            <p>Professional Traveler</p>
          </div>

          <nav aria-label="Profile hub">
            {[
              { label: 'Personal Info', route: 'profile', icon: 'profile' },
              { label: 'Payment Methods', route: 'profile-payments', icon: paymentIcon },
              { label: 'Notifications', route: 'notifications', icon: bellIcon },
              { label: 'Security', route: 'security', icon: securityIcon },
            ].map((item) => (
              <button key={item.label} type="button" onClick={() => onNavigate(item.route)}>
                {item.icon === 'profile' ? (
                  <span className="profile-menu-icon is-person" aria-hidden="true" />
                ) : (
                  <img src={item.icon} alt="" aria-hidden="true" />
                )}
                {item.label}
              </button>
            ))}
          </nav>

          <article className="direct-assistance">
            <h2>Direct Assistance</h2>
            <p>Talk to our experts directly for rapid resolution.</p>
            <button type="button">
              <span aria-hidden="true">↯</span>
              Live Chat
            </button>
          </article>
        </aside>

        <SupportPanelContent onNavigate={onNavigate} />
      </section>

      <button className="support-chat-fab" type="button" aria-label="Open chat" />
    </main>
  )
}

export function ConciergePage({ onNavigate }) {
  const topNav = [
    { label: 'Rides', action: () => onNavigate('home') },
    { label: 'Stays', action: () => onNavigate('search-hotel') },
    { label: 'Flights', action: () => onNavigate('search-flight') },
    { label: 'Concierge', action: () => onNavigate('concierge'), active: true },
  ]

  const sidebar = [
    { label: 'Dashboard', route: 'dashboard', icon: dashboardRideIcon },
    { label: 'Bookings', route: 'bookings', icon: bookingRideIcon },
    { label: 'Elite Club', route: 'rewards', icon: goldMemberIcon },
    { label: 'Concierge', route: 'concierge', icon: priorityIcon, active: true },
    { label: 'History', route: 'bookings', icon: dashboardCalendarIcon },
  ]

  const suggestions = [
    {
      label: 'Suggest Restaurants',
      text: 'Top-rated near your arrival',
      icon: paymentIcon,
    },
    {
      label: 'Leisure Activities',
      text: 'Exclusive London events today',
      icon: securityIcon,
    },
    {
      label: 'Express Check-in',
      text: 'Priority boarding for BA-210',
      icon: priorityIcon,
    },
  ]

  const messages = [
    {
      id: 1,
      type: 'assistant',
      time: '09:12 AM',
      text: 'Good morning, Mr. Anderson. I hope you\'re having a productive start to your day. Your flight to London has been confirmed for 3:00 PM. I\'ve also pre-arranged your airport transfer for 12:30 PM.',
    },
    {
      id: 2,
      type: 'user',
      time: '09:15 AM',
      text: 'Excellent work, Sarah. Could you also ensure there\'s a reservation at The Ledbury for 8:00 PM tonight? Preferably a corner table.',
    },
    {
      id: 3,
      type: 'assistant',
      time: '09:20 AM',
      text: 'Consider it done. I\'ve already secured the reservation for you. Your chauffeur, Michael, will be ready at the arrivals hall with your preferred chilled sparkling water and the morning\'s financial journals.',
    },
  ]

  return (
    <main className="concierge-page">
      <header className="concierge-header">
        <button className="concierge-brand" type="button" onClick={() => onNavigate('dashboard')} aria-label="JaldiRide home">
          <img src={logoImage} alt="" aria-hidden="true" />
          <span>JaldiRide</span>
        </button>

        <nav className="concierge-top-nav" aria-label="Primary">
          {topNav.map((item) => (
            <button
              key={item.label}
              className={item.active ? 'is-active' : ''}
              type="button"
              onClick={item.action}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="concierge-header-actions">
          <form className="concierge-search" onSubmit={(event) => event.preventDefault()}>
            <button type="submit" aria-label="Search services">
              <img src={searchIcon} alt="" aria-hidden="true" />
            </button>
            <input type="search" placeholder="Search services..." />
          </form>
          <button className="notification-icon" type="button" onClick={() => onNavigate('notifications')} aria-label="Notifications">
            <img src={bellIcon} alt="" aria-hidden="true" />
          </button>
          <button className="help-icon" type="button" onClick={() => onNavigate('support')} aria-label="Help">?</button>
          <button className="avatar concierge-avatar" type="button" onClick={() => onNavigate('profile')} aria-label="Profile">
            <img src={profileImg} alt="" aria-hidden="true" />
          </button>
        </div>
      </header>

      <section className="concierge-shell">
        <aside className="concierge-sidebar">
          <article className="concierge-profile-card">
            <span className="concierge-member-label">ELITE MEMBER</span>
            <h2>Welcome, Executive</h2>
            <p>JaldiRide Elite Member</p>
          </article>

          <nav aria-label="Concierge navigation">
            {sidebar.map((item) => (
              <button
                key={item.label}
                className={item.active ? 'is-active' : ''}
                type="button"
                onClick={() => onNavigate(item.route)}
              >
                <span className="concierge-menu-icon" aria-hidden="true">
                  <img src={item.icon} alt="" aria-hidden="true" />
                </span>
                {item.label}
              </button>
            ))}
          </nav>

          <article className="concierge-upgrade-card">
            <span>Upgrade to Platinum</span>
            <p>Unlock global airport lounge access and private chauffeurs.</p>
          </article>

          <div className="concierge-sidebar-footer">
            <button type="button" onClick={() => onNavigate('support')}>Help</button>
            <button type="button" onClick={() => onNavigate('home')}>Logout</button>
          </div>
        </aside>

        <section className="concierge-chat-column">
          <div className="concierge-chat-header">
            <div className="concierge-agent">
              <span className="concierge-agent-avatar">
                <img src={profileImg} alt="" aria-hidden="true" />
              </span>
              <div>
                <h1>Sarah — Executive Concierge</h1>
                <p><span className="is-online" />Online</p>
              </div>
            </div>

            <div className="concierge-chat-actions">
              <button type="button" aria-label="Call concierge">⌂</button>
              <button type="button" aria-label="Video call">▣</button>
              <button type="button" aria-label="More options">⋮</button>
            </div>
          </div>

          <div className="concierge-feed">
            <span className="concierge-today-pill">TODAY</span>

            {messages.map((message) => (
              <article key={message.id} className={`concierge-message is-${message.type}`}>
                <span className="concierge-message-avatar">
                  <img src={profileImg} alt="" aria-hidden="true" />
                </span>
                <div className="concierge-message-body">
                  <p>{message.text}</p>
                  <small>{message.time}</small>
                </div>
              </article>
            ))}

            <article className="concierge-media-card">
              <img src={offerImage} alt="Premium ride preview" />
              <div>
                <h2>Airport transfer confirmed</h2>
                <p>Mercedes-Benz S-Class waiting at arrivals with Michael D.</p>
              </div>
            </article>
          </div>

          <form className="concierge-composer" onSubmit={(event) => event.preventDefault()}>
            <button type="button" aria-label="Add attachment">+</button>
            <button type="button" aria-label="Add emoji">☺</button>
            <input type="text" placeholder="Message your concierge..." />
            <button type="button" aria-label="Voice input">⌁</button>
            <button type="submit" aria-label="Send message">→</button>
          </form>
        </section>

        <aside className="concierge-right-rail">
          <article className="concierge-journey-card">
            <span className="concierge-status-pill">EN ROUTE</span>
            <img className="concierge-journey-image" src={offerImage} alt="Current journey" />
            <h2>Mercedes-Benz S-Class</h2>
            <p className="concierge-journey-meta">Luxus Class • Plate: JLD-001</p>

            <div className="concierge-driver-row">
              <span className="concierge-driver-avatar">
                <img src={profileImg} alt="" aria-hidden="true" />
              </span>
              <div>
                <strong>Michael D.</strong>
                <small>4.9 • Elite Certified</small>
              </div>
              <button type="button" aria-label="Call driver">☎</button>
            </div>

            <div className="concierge-journey-actions">
              <button type="button">Track Arrival</button>
              <button type="button">Details</button>
            </div>
          </article>

          <section className="concierge-suggestions">
            <span className="concierge-rail-label">SARAH'S SUGGESTIONS</span>
            {suggestions.map((suggestion) => (
              <button key={suggestion.label} className="concierge-suggestion-card" type="button">
                <span className="concierge-suggestion-icon">
                  <img src={suggestion.icon} alt="" aria-hidden="true" />
                </span>
                <span>
                  <strong>{suggestion.label}</strong>
                  <small>{suggestion.text}</small>
                </span>
              </button>
            ))}
          </section>

          <article className="concierge-priority-card">
            <span className="concierge-rail-label">CONCIERGE PRIORITY</span>
            <h2>Sarah is managing 2 other tasks for you.</h2>
            <div className="concierge-priority-tags">
              <span>LDN</span>
              <span>RST</span>
            </div>
          </article>
        </aside>
      </section>
    </main>
  )
}

function ProfileLayout({ active, title, subtitle, children, onNavigate }) {
  const menu = [
    { label: 'Personal Info', route: 'profile', icon: 'profile' },
    { label: 'Payment Methods', route: 'profile-payments', icon: paymentIcon },
    { label: 'Notifications', route: 'notifications', icon: bellIcon },
    { label: 'Security', route: 'security', icon: securityIcon },
  ]

  return (
    <main className="jr-app-page">
      <AppHeader active="Profile" onNavigate={onNavigate} />
      <section className="profile-shell">
        <aside className="profile-sidebar">
          <nav aria-label="Profile settings">
            {menu.map((item) => (
              <button key={item.label} className={active === item.label ? 'is-active' : ''} type="button" onClick={() => onNavigate(item.route)}>
                {item.icon === 'profile' ? (
                  <span className="profile-menu-icon is-person" aria-hidden="true" />
                ) : (
                  <img src={item.icon} alt="" aria-hidden="true" />
                )}
                {item.label}
              </button>
            ))}
          </nav>
          <article>
            <h2>Need help?</h2>
            <p>Our support team is available 24/7 for you.</p>
            <button type="button" onClick={() => onNavigate('support')}>Contact Support</button>
          </article>
        </aside>

        <div className="profile-main">
          <section className={`profile-panel ${active === 'Payment Methods' ? 'is-payment-methods' : ''}`}>
            <div className="profile-heading">
              <div>
                <h1>{title}</h1>
                <p>{subtitle}</p>
              </div>
              {active === 'Personal Info' ? <span>Verified Account</span> : null}
            </div>
            {children}
          </section>
        </div>
      </section>
    </main>
  )
}

export function MyBookingsPage({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('upcoming')
  const trips = [
    {
      tier: 'Business Class',
      tierTone: 'business',
      tripId: '#JR-8829',
      destination: 'To: International Airport Terminal 3',
      date: 'Oct 24, 2023',
      time: '08:30 AM',
      location: 'Grand Plaza Towers, Zone 4',
      status: 'Confirmed',
      icon: rideDashIcon,
      iconTone: 'business',
    },
    {
      tier: 'Premium Eco',
      tierTone: 'premium',
      tripId: '#JR-9012',
      destination: 'To: Tech City Innovation Hub',
      date: 'Oct 26, 2023',
      time: '09:15 AM',
      location: 'Downtown Creative District',
      status: 'Scheduled',
      icon: successPremiumRideIcon,
      iconTone: 'premium',
    },
  ]

  const pastTrips = [
    {
      tier: 'Business Class',
      tierTone: 'business',
      tripId: '#JR-8291',
      destination: 'To: Grand Hotel, Downtown',
      date: 'Oct 12, 2023',
      time: '04:15 PM',
      location: 'Airport Terminal 2',
      status: 'Completed',
      icon: rideDashIcon,
      iconTone: 'business',
    },
    {
      tier: 'Premium Eco',
      tierTone: 'premium',
      tripId: '#JR-7934',
      destination: 'To: Central Station',
      date: 'Sep 28, 2023',
      time: '08:00 AM',
      location: 'North Suburbs, Sector 5',
      status: 'Completed',
      icon: successPremiumRideIcon,
      iconTone: 'premium',
    },
  ]

  const cancelledTrips = [
    {
      tier: 'Airport Transfer',
      tierTone: 'business',
      tripId: '#JR-7714',
      destination: 'To: Chhatrapati Shivaji Maharaj International Airport',
      date: 'Oct 18, 2023',
      time: '06:45 AM',
      location: 'Bandra Kurla Complex, Mumbai',
      status: 'Cancelled',
      icon: rideDashIcon,
      iconTone: 'business',
      cancelledOn: 'Cancelled on Oct 17, 2023',
      refund: 'Refund processed',
    },
    {
      tier: 'Premium Ride',
      tierTone: 'premium',
      tripId: '#JR-7462',
      destination: 'To: Pune Business Park',
      date: 'Oct 14, 2023',
      time: '11:30 AM',
      location: 'Lower Parel, Mumbai',
      status: 'Cancelled',
      icon: successPremiumRideIcon,
      iconTone: 'premium',
      cancelledOn: 'Cancelled on Oct 14, 2023',
      refund: 'No charge applied',
    },
    {
      tier: 'City Ride',
      tierTone: 'business',
      tripId: '#JR-7019',
      destination: 'To: Juhu Beach Hotel',
      date: 'Oct 05, 2023',
      time: '07:10 PM',
      location: 'Powai Lake Road, Mumbai',
      status: 'Cancelled',
      icon: bookingRideIcon,
      iconTone: 'business',
      cancelledOn: 'Cancelled on Oct 04, 2023',
      refund: 'Refund processed',
    },
  ]

  const tabs = [
    ['upcoming', 'Upcoming Trips'],
    ['history', 'Past History'],
    ['cancelled', 'Cancelled'],
  ]
  const bookingsNavItems = [
    ['Home', 'dashboard'],
    ['Bookings', 'bookings'],
    ['Profile', 'profile'],
    ['Settings', 'security'],
  ]
  const displayTrips = activeTab === 'upcoming' ? trips : activeTab === 'history' ? pastTrips : cancelledTrips

  return (
    <main className="jr-app-page is-bookings">
      <AppHeader active="Bookings" onNavigate={onNavigate} showSearch={false} navItems={bookingsNavItems} />
      <section className="my-bookings-shell">
        <div className="bookings-head">
          <div><p className="eyebrow">Management Center</p><h1>{activeTab === 'cancelled' ? 'Cancelled Bookings' : 'My Bookings'}</h1><p>{activeTab === 'cancelled' ? 'Review cancelled trips, refund status, and rebook when plans change.' : 'Manage your luxury commutes and historical travel data.'}</p></div>
          <div><input placeholder="Search trips..." /><button type="button" onClick={() => onNavigate('search')}>+ New Booking</button></div>
        </div>
        <nav className="booking-tabs" aria-label="Booking views">
          {tabs.map(([tab, label]) => (
            <button key={tab} className={activeTab === tab ? 'is-active' : ''} type="button" onClick={() => setActiveTab(tab)} aria-selected={activeTab === tab}>{label}</button>
          ))}
        </nav>
        {activeTab === 'cancelled' ? (
          <section className="cancelled-bookings-panel" aria-label="Cancelled bookings">
            <div className="cancelled-summary">
              <article>
                <span>{cancelledTrips.length}</span>
                <p>Total cancelled bookings</p>
              </article>
              <article>
                <span>2</span>
                <p>Refunds processed</p>
              </article>
              <article>
                <span>1</span>
                <p>No charge applied</p>
              </article>
            </div>
          </section>
        ) : null}
        <div className="booking-list">
          {displayTrips.map((trip) => (
            <article key={trip.tripId}>
              <span className={`trip-icon is-${trip.iconTone}`}>
                <img src={trip.icon} alt="" aria-hidden="true" />
              </span>
              <div className="trip-details">
                <div className="trip-title-row">
                  <small className={`trip-tier is-${trip.tierTone}`}>{trip.tier}</small>
                  <p>Trip ID: {trip.tripId}</p>
                </div>
                <h2>{trip.destination}</h2>
                <p className="trip-meta">
                  <span><img src={dashboardCalendarIcon} alt="" aria-hidden="true" />{trip.date} <b>{trip.time}</b></span>
                  <span><img src={dashboardLocationIcon} alt="" aria-hidden="true" />{trip.location}</span>
                </p>
                {activeTab === 'cancelled' ? <p className="cancelled-trip-note">{trip.cancelledOn} <strong>{trip.refund}</strong></p> : null}
              </div>
              <div className="trip-actions">
                <strong className={`trip-status is-${trip.status.toLowerCase()}`}>
                  {trip.status === 'Confirmed' ? <i aria-hidden="true" /> : null}
                  {trip.status}
                </strong>
                <div className="trip-actions-buttons">
                  <button type="button" onClick={() => (trip.status === 'Cancelled' ? onNavigate('search') : undefined)}>{trip.status === 'Confirmed' || trip.status === 'Scheduled' ? 'Modify' : trip.status === 'Completed' ? 'Rate Trip' : 'Book Again'}</button>
                  <button type="button" onClick={() => onNavigate('booking')}>{trip.status === 'Confirmed' ? 'Track Live' : trip.status === 'Scheduled' ? 'Edit Route' : trip.status === 'Completed' ? 'View Receipt' : 'Details'}</button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <button className="load-history" type="button">Load Older History <span aria-hidden="true">⌄</span></button>
      </section>
    </main>
  )
}

export function ProfilePage({ onNavigate }) {
  return (
    <ProfileLayout active="Personal Info" title="Personal Information" subtitle="Manage your account details and how we contact you." onNavigate={onNavigate}>
      <div className="profile-form">
        <label>Full Name<input defaultValue="Arjun Malhotra" /></label>
        <label>Phone Number<input defaultValue="+91 98765 43210" /></label>
        <label className="wide">Email Address<input defaultValue="arjun.m@jalditravel.com" /></label>
        <label className="wide">Emergency Contact (Optional)<input placeholder="Add contact for safety" /></label>
        <div className="profile-actions"><button type="button"><img src={successCopyIcon} alt="" aria-hidden="true" />Save Changes</button><button type="button">Discard Changes</button></div>
      </div>
      <div className="profile-info-cards">
        <article>
          <span className="profile-card-icon"><img src={bookingRideIcon} alt="" aria-hidden="true" /></span>
          <h2>Ride Preferences</h2>
          <p>Set your favorite vehicle types and silent ride options.</p>
          <button type="button">Configure <img src={arrowRightIcon} alt="" aria-hidden="true" /></button>
        </article>
        <article>
          <span className="profile-card-icon is-secure"><img src={paymentSecureIcon} alt="" aria-hidden="true" /></span>
          <h2>Security Status</h2>
          <p>Your account is protected by 2FA. Last login: 2 hours ago.</p>
          <button className="is-secure" type="button" onClick={() => onNavigate('security')}>Manage Security <img src={paymentSecureIcon} alt="" aria-hidden="true" /></button>
        </article>
      </div>
    </ProfileLayout>
  )
}

export function ProfilePaymentsPage({ onNavigate }) {
  return (
    <ProfileLayout active="Payment Methods" title="Payment Methods" subtitle="Securely manage your cards, wallets, and bank accounts for faster bookings." onNavigate={onNavigate}>
      <div className="payment-methods-title-row">
        <h2>Saved Cards</h2>
        <button type="button"><img src={methodAddIcon} alt="" aria-hidden="true" />Add New Card</button>
      </div>

      <div className="saved-cards">
        <article className="method-card is-primary">
          <div className="method-card-top">
            <span className="method-card-icon"><img src={methodCardIcon} alt="" aria-hidden="true" /></span>
            <b>Primary</b>
          </div>
          <h2>Visa Classic</h2>
          <strong>&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;<br />4242</strong>
          <div className="method-card-foot">
            <small>Expiry <b>12/26</b></small>
            <span>
              <button type="button" aria-label="Edit Visa Classic"><img src={methodPenIcon} alt="" aria-hidden="true" /></button>
              <button type="button" aria-label="Delete Visa Classic"><img src={methodDeleteIcon} alt="" aria-hidden="true" /></button>
            </span>
          </div>
        </article>

        <article className="method-card">
          <div className="method-card-top">
            <span className="method-card-icon is-muted"><img src={methodCardIcon} alt="" aria-hidden="true" /></span>
          </div>
          <h2>Mastercard Platinum</h2>
          <strong>&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;<br />8899</strong>
          <div className="method-card-foot">
            <small>Expiry <b>05/28</b></small>
            <span>
              <button className="set-primary-btn" type="button">Set as Primary</button>
              <button className="is-muted" type="button" aria-label="Delete Mastercard Platinum"><img src={methodDeleteIcon} alt="" aria-hidden="true" /></button>
            </span>
          </div>
        </article>

        <button className="add-method-card" type="button">
          <img src={methodAddIcon} alt="" aria-hidden="true" />
          <strong>Add New Method</strong>
          <span>Cards, UPI or Wallets</span>
        </button>
      </div>

      <div className="payment-methods-grid">
        <section className="digital-wallets">
          <h2>Digital Wallets</h2>
          <article>
            <img className="wallet-logo" src={methodAppleImage} alt="" aria-hidden="true" />
            <div>
              <h3>Apple Pay</h3>
              <p><i />Connected - Linked to iCloud</p>
            </div>
            <button type="button">Disconnect</button>
          </article>
          <article>
            <img className="wallet-logo" src={methodGoogleImage} alt="" aria-hidden="true" />
            <div>
              <h3>Google Pay</h3>
              <p><i />Connected - user@gmail.com</p>
            </div>
            <button type="button">Disconnect</button>
          </article>
        </section>

        <section className="linked-bank-card">
          <h2>Linked Bank Accounts</h2>
          <article>
            <div className="bank-head">
              <span><img src={methodChaseIcon} alt="" aria-hidden="true" /></span>
              <div>
                <h3>Chase Manhattan Bank</h3>
                <p>Savings Account ending in *9011</p>
              </div>
            </div>
            <button type="button"><img src={methodManageIcon} alt="" aria-hidden="true" />Manage Direct Debit</button>
          </article>
        </section>
      </div>

      <article className="security-strip">
        <span><img src={paymentSecureIcon} alt="" aria-hidden="true" /></span>
        <div>
          <h2>Bank-Grade Security</h2>
          <p>All transactions are encrypted with 256-bit SSL and comply with PCI-DSS standards.</p>
        </div>
      </article>
    </ProfileLayout>
  )
}

export function NotificationsPage({ onNavigate }) {
  return (
    <ProfileLayout active="Notifications" title="Notification Preferences" subtitle="Choose how you want to stay updated with JaldiRide." onNavigate={onNavigate}>
      <div className="preference-list">
        <h2>Trip Updates</h2>
        <p>Real-time ride alerts and status updates.</p>
        <Preference label="Push Notifications" text="Instant alerts on your device" on />
        <Preference label="Email Notifications" text="Detailed trip receipts and summaries" on />
        <h2>Promotions</h2>
        <p>Exclusive offers and discounts.</p>
        <Preference label="SMS Notifications" text="Flash deals and promo codes" />
        <h2>Account Activity</h2>
        <p>Security and login alerts.</p>
        <Preference label="Security Alerts" text="Login notifications and 2FA codes" on />
        <button type="button">Save Preferences</button>
      </div>
    </ProfileLayout>
  )
}

function Preference({ label, text, on = false }) {
  return <div className="preference-row"><div><strong>{label}</strong><small>{text}</small></div><span className={on ? 'is-on' : ''} /></div>
}

export function SecurityPage({ onNavigate }) {
  return (
    <ProfileLayout active="Security" title="Security & Privacy" subtitle="Protect your account and manage your privacy settings." onNavigate={onNavigate}>
      <div className="security-form">
        <section className="security-password-card">
          <span className="security-section-icon is-lock"><img src={paymentLockIcon} alt="" aria-hidden="true" /></span>
          <div>
            <h2>Password Protection</h2>
            <p>Update your password regularly to keep your account secure.</p>
            <div>
              <label>Current Password<input type="password" placeholder="Enter current password" /></label>
              <label>New Password<input type="password" placeholder="Enter new password" /></label>
            </div>
            <button type="button">Update Password</button>
          </div>
        </section>
        <article className="two-factor-card">
          <span className="security-section-icon is-shield"><img src={paymentSecureIcon} alt="" aria-hidden="true" /></span>
          <div>
            <h2>Two-Factor Authentication</h2>
            <p>Add an extra layer of security to your account by requiring a code from your phone in addition to your password.</p>
          </div>
          <span className="toggle is-on" />
        </article>
      </div>
      <article className="login-activity">
        <h2>Recent Login Activity</h2>
        <div className="login-device-row">
          <span className="device-icon is-macbook" aria-hidden="true" />
          <div>
            <h3>MacBook Pro</h3>
            <p>Chrome - Mumbai, India</p>
          </div>
          <strong className="is-current">Current</strong>
        </div>
        <div className="login-device-row">
          <span className="device-icon is-phone"><img src={phoneEndIcon} alt="" aria-hidden="true" /></span>
          <div>
            <h3>iPhone 15 Pro</h3>
            <p>JaldiRide App - 2 hours ago</p>
          </div>
          <button type="button" onClick={() => onNavigate('home')}>Logout</button>
        </div>
      </article>
    </ProfileLayout>
  )
}

export function SuccessPage({ onNavigate }) {
  const [copied, setCopied] = useState(false)
  const bookingId = 'JRC-9920-XLT'

  const handleCopyBookingId = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(bookingId)
      } else {
        const input = document.createElement('textarea')
        input.value = bookingId
        input.setAttribute('readonly', '')
        input.style.position = 'fixed'
        input.style.opacity = '0'
        document.body.appendChild(input)
        input.select()
        document.execCommand('copy')
        document.body.removeChild(input)
      }
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1400)
    } catch {
      setCopied(false)
    }
  }

  return (
    <main className="success-page">
      <section className="success-card">
        <div className="bg-circle bg-circle-1" />
        <div className="bg-circle bg-circle-2" />
        <div className="confetti" />
        <div className="check-mark" aria-hidden="true" />
        <h1>Success!</h1>
        <p className="success-text">
          Your luxury commute is officially secured. Get ready
          <br />
          for a premium JaldiRide Connect experience.
        </p>
        <div className="success-meta">
          <div className="meta-item">
            <span>BOOKING ID</span>
            <strong>
              {bookingId}
              <button className="copy-booking-btn" type="button" onClick={handleCopyBookingId} aria-label="Copy booking ID">
                <img src={successCopyIcon} alt="" aria-hidden="true" />
                {copied ? <em>Done</em> : null}
              </button>
            </strong>
          </div>
          <div className="divider" />
          <div className="meta-item">
            <span>SERVICE TYPE</span>
            <strong>
              <img className="service-icon" src={successPremiumRideIcon} alt="" aria-hidden="true" />
              Premium Electric
            </strong>
          </div>
        </div>
        <div className="success-actions">
          <button
            className="track-btn"
            type="button"
            onClick={() => onNavigate("bookings")}
          >
            Track Journey <img src={successTrackIcon} alt="" aria-hidden="true" />
          </button>
          <button
            className="home-btn"
            type="button"
            onClick={() => onNavigate("dashboard")}
          >
            Return Home <img src={successHomeIcon} alt="" aria-hidden="true" />
          </button>
        </div>
        <div className="partner-section">
          <h5>PARTNER EXCELLENCE</h5>
          <div className="partner-users">
            <img src="https://i.pravatar.cc/40?img=11" alt="" />
            <img src="https://i.pravatar.cc/40?img=12" alt="" />
            <img src="https://i.pravatar.cc/40?img=13" alt="" />
            <span className="count">+15K</span>
          </div>
          <p className="trusted">
            Trusted by 15,000+ urban professionals
          </p>
        </div>
      </section>
    </main>
  )
}


export function BusBookingPage({ onNavigate }) {
  return (
    <main className="jr-app-page booking-stage-page">
      <BookingTopBar activeStep="booking" onNavigate={onNavigate} onBack={() => onNavigate('bus-details')} />
      <div className="booking-page-layout">
        <BookingFlowSidebar activeStep="booking" />
        <section className="booking-detail-shell">
          <p className="eyebrow">Review Journey</p>
          <h1>Bus Booking Details</h1>
          <div className="booking-layout">
            <aside className="fare-card" style={{width: '100%', maxWidth: '600px', margin: '0 auto'}}>
              <div className="fare-box">
                <h3>Fare Breakdown</h3>
                <p>Base Fare <strong>₹1,500.00</strong></p>
                <p>Taxes & Fees <strong>₹150.00</strong></p>
                <h2>Total Fare <strong>₹1,650.00</strong></h2>
                <form className="promo-form">
                  <input type="text" placeholder="Have a promo code?" />
                  <button type="button">Apply</button>
                </form>
                <button className="payment-cta" type="button" onClick={() => onNavigate('payment')}>Proceed to Payment <span>&#8594;</span></button>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  )
}

export function FlightBookingPage({ onNavigate }) {
  return (
    <main className="jr-app-page booking-stage-page">
      <BookingTopBar activeStep="booking" onNavigate={onNavigate} onBack={() => onNavigate('flight-details')} />
      <div className="booking-page-layout">
        <BookingFlowSidebar activeStep="booking" />
        <section className="booking-detail-shell">
          <p className="eyebrow">Review Journey</p>
          <h1>Flight Booking Details</h1>
          <div className="booking-layout">
            <aside className="fare-card" style={{width: '100%', maxWidth: '600px', margin: '0 auto'}}>
              <div className="fare-box">
                <h3>Fare Breakdown</h3>
                <p>Base Fare <strong>₹8,500.00</strong></p>
                <p>Taxes & Fees <strong>₹1,250.00</strong></p>
                <h2>Total Fare <strong>₹9,750.00</strong></h2>
                <form className="promo-form">
                  <input type="text" placeholder="Have a promo code?" />
                  <button type="button">Apply</button>
                </form>
                <button className="payment-cta" type="button" onClick={() => onNavigate('payment')}>Proceed to Payment <span>&#8594;</span></button>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  )
}

export function HotelBookingPage({ onNavigate }) {
  return (
    <main className="jr-app-page booking-stage-page">
      <BookingTopBar activeStep="booking" onNavigate={onNavigate} onBack={() => onNavigate('hotel-details')} />
      <div className="booking-page-layout">
        <BookingFlowSidebar activeStep="booking" />
        <section className="booking-detail-shell">
          <p className="eyebrow">Review Booking</p>
          <h1>Hotel Booking Details</h1>
          <div className="booking-layout">
            <aside className="fare-card" style={{width: '100%', maxWidth: '600px', margin: '0 auto'}}>
              <div className="fare-box">
                <h3>Fare Breakdown</h3>
                <p>Nightly Rate (2x) <strong>₹450.00</strong></p>
                <p>Taxes & Fees <strong>₹125.00</strong></p>
                <h2>Total Fare <strong>₹1,025.00</strong></h2>
                <form className="promo-form">
                  <input type="text" placeholder="Have a promo code?" />
                  <button type="button">Apply</button>
                </form>
                <button className="payment-cta" type="button" onClick={() => onNavigate('payment')}>Proceed to Payment <span>&#8594;</span></button>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  )
}

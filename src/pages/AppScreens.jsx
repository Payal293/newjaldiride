import { useState } from 'react'
import heroImage from '../assets/image/hero.webp'
import flightImage from '../assets/image/flight.jpg'
import hotelImage from '../assets/image/hotelimg.jpg'
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
import filterSearchIcon from "../assets/search/filter.svg";
import searchRideIcon from "../assets/search/search ride.svg";
import bikeSearchIcon from "../assets/search/bike search.svg";
import busSearchIcon from "../assets/search/bus search.svg";
import premiumRideIcon from "../assets/search/premium ride.svg";
import ridesSearchIcon from "../assets/search/rides.svg";
import timeSearchIcon from "../assets/search/time search.svg";
import saveSearchIcon from "../assets/search/save search.svg";
import seatSearchIcon from "../assets/search/Icon.svg";
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
import paymentDigitalIcon from "../assets/payment/digital.svg";
import paymentNetIcon from "../assets/payment/net.svg";
import paymentLockIcon from "../assets/payment/lock.svg";
import paymentSecureIcon from "../assets/payment/secure.svg";
import paymentPciIcon from "../assets/payment/pci.svg";
import paymentRightIcon from "../assets/payment/right.svg";
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

function AppHeader({ active = 'Home', onNavigate, showSearch = true }) {
  const [searchValue, setSearchValue] = useState('')
  const [searchError, setSearchError] = useState('')
  const items = [
    ['Home', 'dashboard'],
    ['Bookings', 'bookings'],
    ['Profile', 'profile'],
    ['Settings', 'security'],
  ]

  const handleHeaderSearch = (event) => {
    event.preventDefault()

    const query = searchValue.trim().toLowerCase()
    if (!query) {
      setSearchError('Please search ride, bus, flight or hotel.')
      return
    }

    if (/(ride|cab|taxi|car|sedan|bike|bus)/.test(query)) {
      setSearchError('')
      onNavigate('search')
      return
    }

    if (/(hotel|room|stay)/.test(query)) {
      setSearchError('')
      onNavigate('service', { service: 'hotels' })
      return
    }

    if (/(flight|fly|airport|plane)/.test(query)) {
      setSearchError('')
      onNavigate('service', { service: 'flights' })
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
        <button type="button" onClick={() => onNavigate('notifications')}>Support</button>
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
                  onClick={() => (mode.id === 'hotels' || mode.id === 'flights' ? onNavigate('service', { service: mode.id }) : onNavigate('home'))}
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
            <button key={label} type="button" onClick={() => (label === 'Hotels' || label === 'Flights' ? onNavigate('service', { service: label.toLowerCase() }) : onNavigate('search'))}>
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
                  if (label === 'Priority Support') onNavigate('notifications');
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
      icon: searchRideIcon,
      category: 'ev',
      buttonStyle: 'orange',
    },
    {
      title: 'Quick Bike',
      subtitle: '1-Seater - Rapid',
      price: 45,
      fare: 'Fastest arrival',
      time: '14:05 - 14:22',
      journey: '17 min journey',
      rating: '4.7 - 850 ratings',
      button: 'Confirm Bike',
      badge: 'Fastest',
      icon: bikeSearchIcon,
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
      ratingIcon: seatSearchIcon,
      button: 'View Schedule',
      icon: busSearchIcon,
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
      icon: premiumRideIcon,
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
      icon: ridesSearchIcon,
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
    <main className="jr-app-page">
      <SearchHeader onNavigate={onNavigate} />
      <section className="search-shell">
        <p className="eyebrow">Available Rides</p>
        <h1>Results for Mumbai Hub to BKC</h1>
        <p>24 rides found - Today, 14:00 PM</p>
        <div className="filter-row">
          {filters.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? 'is-active' : ''}
              type="button"
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'Filters' ? <img src={filterSearchIcon} alt="" aria-hidden="true" /> : null}
              {filter}
            </button>
          ))}
        </div>
        <div className="ride-results">
          {visibleRides.map((ride) => (
            <article className="ride-card" key={ride.title}>
              {ride.badge ? <span className={`ride-badge ${ride.badge === 'Fastest' ? 'is-purple' : ''}`}>{ride.badge}</span> : null}
              <div className="ride-top">
                <span className={`ride-icon ${ride.tone === 'gold' ? 'is-gold' : ''}`}>
                  <img src={ride.icon} alt="" aria-hidden="true" />
                </span>
                <div>
                  <h2>{ride.title}</h2>
                  <p>{ride.subtitle}</p>
                </div>
                <strong>
                  <span style={ride.button === 'Book Ride' ? { color: '#FF7A00' } : {}}>
                    {formatMoney(ride.price)}
                  </span>
                  <small>{ride.fare}</small>
                </strong>
              </div>
              <p className="ride-time">
                <img src={timeSearchIcon} alt="" aria-hidden="true" />
                <span>{ride.time}<small>{ride.journey}</small></span>
              </p>
              <p className="ride-rating">
                <img src={ride.ratingIcon || saveSearchIcon} alt="" aria-hidden="true" />
                {ride.rating}
              </p>
              <button className={`ride-action is-${ride.buttonStyle}`} type="button" onClick={() => onNavigate('booking')}>{ride.button}</button>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
export function BookingDetailsPage({ onNavigate }) {
  return (
    <main className="jr-app-page">
      <AppHeader active="Bookings" onNavigate={onNavigate} showSearch={false} />
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

export function PaymentPage({ onNavigate }) {
  const [activeMethod, setActiveMethod] = useState(null)
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
              <span className="card-icon" aria-hidden="true"><span /></span>
              <div><h2>Credit / Debit Card</h2><p>Ending in 4242 &bull; Expires 12/26</p></div>
              <img className="selected-icon" src={paymentRightIcon} alt="" aria-hidden="true" />
              {activeMethod === 'card' ? (
                <>
                  <label>CVV<input type="password" placeholder="•••" /></label>
                  <small>Verified by Visa & Mastercard SecureCode</small>
                </>
              ) : null}
            </div>
            <button 
              className={`payment-method ${activeMethod === 'digital' ? 'is-active' : ''}`} 
              type="button"
              onClick={() => setActiveMethod('digital')}
              aria-pressed={activeMethod === 'digital'}
            >
              <img className="method-icon" src={paymentDigitalIcon} alt="" aria-hidden="true" />
              <div><h2>Digital Wallets</h2><p>Google Pay, PhonePe, Paytm</p></div>
              <b>&rsaquo;</b>
            </button>
            <button 
              className={`payment-method ${activeMethod === 'net' ? 'is-active' : ''}`} 
              type="button"
              onClick={() => setActiveMethod('net')}
              aria-pressed={activeMethod === 'net'}
            >
              <img className="method-icon" src={paymentNetIcon} alt="" aria-hidden="true" />
              <div><h2>Net Banking</h2><p>Choose from 40+ banks</p></div>
              <b>&rsaquo;</b>
            </button>
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
            <button type="button" onClick={() => onNavigate('notifications')}>Contact Support</button>
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
  const displayTrips = activeTab === 'upcoming' ? trips : activeTab === 'history' ? pastTrips : cancelledTrips

  return (
    <main className="jr-app-page is-bookings">
      <AppHeader active="Bookings" onNavigate={onNavigate} showSearch={false} />
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
            Booking History <img src={successTrackIcon} alt="" aria-hidden="true" />
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

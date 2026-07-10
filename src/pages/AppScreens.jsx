import heroImage from '../assets/image/hero.webp'
import cityImage from '../assets/image/hint.webp'
import logoImage from '../assets/image/JALDIRIDE 2.png'
import rideIcon from '../assets/services/ride.svg'
import flightIcon from '../assets/services/flight.svg'
import busIcon from '../assets/icons/Icon.svg'
import hotelIcon from '../assets/icons/Icon-1.svg'

function BrandButton({ onNavigate }) {
  return (
    <button className="app-brand" type="button" onClick={() => onNavigate('home')}>
      <img src={logoImage} alt="" aria-hidden="true" />
      <span>JaldiRide Connect</span>
    </button>
  )
}

function AppHeader({ active = 'Home', onNavigate }) {
  const items = [
    ['Home', 'dashboard'],
    ['Bookings', 'bookings'],
    ['Profile', 'profile'],
    ['Settings', 'security'],
  ]

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
        <button type="button" onClick={() => onNavigate('search')}>Search</button>
        <span>?</span>
        <span className="avatar" />
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
    image: heroImage,
  },
  flights: {
    label: 'Flights',
    title: 'Flight Booking',
    description: 'Launching soon, something amazing is coming.',
    icon: flightIcon,
    image: cityImage,
  },
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
    <div className="service-page">
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
              <span><b>•</b> Coming Soon</span>
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
            <span />
            <span />
            <span />
            <strong>4.9/5 Rating<small>from 20k+ active users</small></strong>
          </div>
        </article>
        <div className="live-status">
          <span>Bus</span>
          <strong>Live Status<small>3,420 Drivers Online</small></strong>
        </div>
      </section>

      <section className="login-form-panel">
        <form onSubmit={(event) => { event.preventDefault(); onNavigate('dashboard') }}>
          <h2>Welcome Back</h2>
          <p>Please enter your details to sign in.</p>
          <label>Email Address<input type="email" placeholder="name@company.com" /></label>
          <label>Password<a href="#">Forgot Password?</a><input type="password" placeholder="********" /></label>
          <label className="check-row"><input type="checkbox" />Remember me for 30 days</label>
          <button type="submit">Sign In -&gt;</button>
          <div className="or-line">Or continue with</div>
          <div className="social-row">
            <button type="button">Google</button>
            <button type="button">Apple</button>
          </div>
          <p className="create-line">Don't have an account? <button type="button" onClick={() => onNavigate('dashboard')}>Create Account</button></p>
        </form>
      </section>
    </main>
  )
}

export function DashboardPage({ onNavigate }) {
  const services = [
    ['Ride', rideIcon],
    ['Bus', busIcon],
    ['Hotels', hotelIcon],
    ['Flights', flightIcon],
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
          <strong>Gold Member<small>2,450 Points</small></strong>
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
            <h2>Active Journey <span>In Progress</span></h2>
            <div className="journey-card">
              <div className="mini-map" />
              <div><small>Destination</small><h3>Gateway to India, Mumbai</h3><p>Arriving in 12 mins</p></div>
              <button type="button" onClick={() => onNavigate('booking')}>Track Ride</button>
            </div>
          </section>
          <article className="offer-card"><h3>Upgrade to Black Member for zero cancellations.</h3><button type="button">Learn More</button></article>
          <section className="recent-card"><h2>Recent Bookings <button type="button" onClick={() => onNavigate('search')}>View All</button></h2><p>BOM - LHR, Flight UK201 <strong>Rs42,500</strong></p><p>Airport Transfer - Toyota Camry <strong>Rs1,200</strong></p></section>
          <aside className="settings-card"><h2>Settings Shortcut</h2><button>Payment Methods</button><button>Security & Privacy</button><button>Priority Support</button><button className="sign-out" onClick={() => onNavigate('home')}>Sign Out</button></aside>
        </div>
      </section>
    </main>
  )
}

export function SearchPage({ onNavigate }) {
  const rides = [
    ['Prime Sedan', '4-Seater • AC • EV', 'Rs420', '14:15 - 14:45', 'Book Ride', 'Best Value'],
    ['Quick Bike', '1-Seater • Rapid', 'Rs145', '14:05 - 14:22', 'Confirm Bike', 'Fastest'],
    ['Express Bus', 'AC Luxury Coach', 'Rs45', '14:20 - 15:05', 'View Schedule', ''],
    ['Executive LUX', 'Premium Sedan • Wifi Business Class', 'Rs850', '14:10 - 14:50', 'Book Luxury', ''],
    ['Jaldi Mini', 'Compact • Eco', 'Rs310', '14:30 - 15:05', 'Book Mini', ''],
  ]

  return (
    <main className="jr-app-page">
      <AppHeader active="Bookings" onNavigate={onNavigate} />
      <section className="search-shell">
        <p className="eyebrow">Available Rides</p>
        <h1>Results for Mumbai Hub to BKC</h1>
        <p>24 rides found • Today, 14:00 PM</p>
        <div className="filter-row"><button>Filters</button><button>Price: Low to High</button><button>Earliest Arrival</button><button>EV Only</button></div>
        <div className="ride-results">
          {rides.map((ride) => (
            <article className="ride-card" key={ride[0]}>
              {ride[5] ? <span className="ride-badge">{ride[5]}</span> : null}
              <div className="ride-top"><span className="ride-icon">T</span><div><h2>{ride[0]}</h2><p>{ride[1]}</p></div><strong>{ride[2]}</strong></div>
              <p className="ride-time">{ride[3]}<small>30 min journey</small></p>
              <p className="ride-rating">4.9 • 1.2k ratings</p>
              <button type="button" onClick={() => onNavigate('booking')}>{ride[4]}</button>
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
      <AppHeader active="Bookings" onNavigate={onNavigate} />
      <section className="booking-detail-shell">
        <p className="eyebrow">Review Journey</p>
        <h1>Booking Details</h1>
        <div className="booking-layout">
          <div>
            <article className="map-panel" style={{ '--map-bg': `url(${heroImage})` }}>
              <span>Live Traffic Updated</span>
              <div><strong>42 Mins</strong><strong>12.4 km</strong></div>
            </article>
            <article className="route-card">
              <p><strong>Pickup Point</strong>Bandra West, Hill Road<small>Near Elco Market, Mumbai - 400050</small></p>
              <p><strong>Drop-off Destination</strong>Chhatrapati Shivaji Terminal<small>Platform 1 Exit, Fort, Mumbai - 400001</small></p>
            </article>
          </div>
          <aside className="fare-card">
            <div className="vehicle-card"><img src={heroImage} alt="" /><h2>JaldiPrime Sedan</h2><p>4 Seats • AC • EV</p></div>
            <div className="fare-box"><h3>Fare Breakdown</h3><p>Base Fare <strong>Rs145.00</strong></p><p>Distance (12.4 km) <strong>Rs248.00</strong></p><p>Convenience Fee <strong>Rs35.00</strong></p><p>Taxes & GST (18%) <strong>Rs77.04</strong></p><h2>Total Fare <strong>Rs505.04</strong></h2><button type="button" onClick={() => onNavigate('payment')}>Proceed to Payment -&gt;</button></div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export function PaymentPage({ onNavigate }) {
  return (
    <main className="jr-app-page">
      <AppHeader active="Payment" onNavigate={onNavigate} />
      <section className="payment-shell">
        <div className="payment-grid">
          <section className="payment-left">
            <article className="confirm-card">
              <div>
                <h1>Confirm Payment</h1>
                <p>Trip to Downtown Business District</p>
              </div>
              <strong>Rs842.00</strong>
              <div className="confirm-metrics">
                <span><img src={rideIcon} alt="" />Ride Type <b>Premium Sedan</b></span>
                <span><img src={hotelIcon} alt="" />Distance <b>14.2 km</b></span>
              </div>
            </article>

            <p className="payment-label">Choose Payment Method</p>
            <div className="payment-method is-active">
              <span className="method-icon">Card</span>
              <div><h2>Credit / Debit Card</h2><p>Ending in 4242 • Expires 12/26</p></div>
              <b>✓</b>
              <label>CVV<input type="password" placeholder="•••" /></label>
              <small>Verified by Visa & Mastercard SecureCode</small>
            </div>
            <button className="payment-method" type="button"><span className="method-icon">Wallet</span><div><h2>Digital Wallets</h2><p>Google Pay, PhonePe, Paytm</p></div><b>›</b></button>
            <button className="payment-method" type="button"><span className="method-icon">Bank</span><div><h2>Net Banking</h2><p>Choose from 40+ banks</p></div><b>›</b></button>
          </section>

          <aside className="payment-summary">
            <article className="payment-hero-card" style={{ '--payment-bg': `url(${heroImage})` }}>
              <h2>Arrive in Style</h2>
              <p>Your premium ride is just one tap away.</p>
            </article>
            <div className="payment-total">
              <p>Subtotal <strong>Rs780.00</strong></p>
              <p>Service Fee <strong>Rs45.00</strong></p>
              <p>Taxes (GST) <strong>Rs17.00</strong></p>
              <h2>Total Amount <strong>Rs842.00</strong></h2>
              <button type="button" onClick={() => onNavigate('success')}>Pay Now</button>
              <small>Secure SSL • PCI Compliant</small>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

function ProfileLayout({ active, title, subtitle, children, onNavigate }) {
  const menu = [
    ['Personal Info', 'profile'],
    ['Payment Methods', 'profile-payments'],
    ['Notifications', 'notifications'],
    ['Security', 'security'],
  ]

  return (
    <main className="jr-app-page">
      <AppHeader active="Profile" onNavigate={onNavigate} />
      <section className="profile-shell">
        <aside className="profile-sidebar">
          <nav aria-label="Profile settings">
            {menu.map(([label, route]) => (
              <button key={label} className={active === label ? 'is-active' : ''} type="button" onClick={() => onNavigate(route)}>
                {label}
              </button>
            ))}
          </nav>
          <article>
            <h2>Need help?</h2>
            <p>Our support team is available 24/7 for you.</p>
            <button type="button">Contact Support</button>
          </article>
        </aside>

        <div className="profile-main">
          <section className="profile-panel">
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
  const trips = [
    ['Business Class', 'Trip ID: #JR-8829', 'To: International Airport Terminal 3', 'Oct 24, 2023 • 08:30 AM', 'Confirmed'],
    ['Premium Eco', 'Trip ID: #JR-9012', 'To: Tech City Innovation Hub', 'Oct 26, 2023 • 09:15 AM', 'Scheduled'],
  ]

  return (
    <main className="jr-app-page">
      <AppHeader active="Bookings" onNavigate={onNavigate} />
      <section className="my-bookings-shell">
        <div className="bookings-head">
          <div><p className="eyebrow">Management Center</p><h1>My Bookings</h1><p>Manage your luxury commutes and historical travel data.</p></div>
          <div><input placeholder="Search trips..." /><button type="button" onClick={() => onNavigate('search')}>+ New Booking</button></div>
        </div>
        <nav className="booking-tabs"><button className="is-active">Upcoming Trips</button><button>Past History</button><button>Cancelled</button></nav>
        <div className="booking-list">
          {trips.map((trip) => (
            <article key={trip[1]}>
              <span className="trip-icon">Car</span>
              <div><small>{trip[0]}</small><p>{trip[1]}</p><h2>{trip[2]}</h2><p>{trip[3]} • Grand Plaza Towers, Zone 4</p></div>
              <strong>{trip[4]}</strong>
              <button type="button">{trip[4] === 'Confirmed' ? 'Modify' : 'Cancel'}</button>
              <button type="button" onClick={() => onNavigate('booking')}>{trip[4] === 'Confirmed' ? 'Track Live' : 'Edit Route'}</button>
            </article>
          ))}
        </div>
        <button className="load-history" type="button">Load Older History</button>
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
        <div className="profile-actions"><button type="button">Save Changes</button><button type="button">Discard Changes</button></div>
      </div>
      <div className="profile-info-cards">
        <article><h2>Ride Preferences</h2><p>Set your favorite vehicle types and silent ride options.</p><button>Configure -&gt;</button></article>
        <article><h2>Security Status</h2><p>Your account is protected by 2FA. Last login: 2 hours ago.</p><button>Manage Security</button></article>
      </div>
    </ProfileLayout>
  )
}

export function ProfilePaymentsPage({ onNavigate }) {
  return (
    <ProfileLayout active="Payment Methods" title="Payment Methods" subtitle="Securely manage your cards, wallets, and bank accounts for faster bookings." onNavigate={onNavigate}>
      <div className="saved-cards">
        <article className="primary"><span>Primary</span><h2>Visa Classic</h2><strong>•••• •••• •••• 4242</strong><small>Expiry 12/26</small></article>
        <article><h2>Mastercard Platinum</h2><strong>•••• •••• •••• 8899</strong><small>Expiry 05/28</small></article>
        <button type="button">+<span>Add New Method<br />Cards, UPI or Wallets</span></button>
      </div>
      <div className="wallet-bank-grid">
        <section><h2>Digital Wallets</h2><p>Apple Pay <button>Disconnect</button></p><p>Google Pay <button>Disconnect</button></p></section>
        <section><h2>Linked Bank Accounts</h2><p>Chase Manhattan Bank<br /><small>Savings Account ending in *9011</small></p><button>Manage Direct Debit</button></section>
      </div>
      <article className="security-strip"><h2>Bank-Grade Security</h2><p>All transactions are encrypted with 256-bit SSL and comply with PCI-DSS standards.</p></article>
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
        <h2>Password Management</h2>
        <label>Current Password<input type="password" defaultValue="password" /></label>
        <div><label>New Password<input placeholder="Enter new password" /></label><label>Confirm Password<input placeholder="Confirm new password" /></label></div>
        <button type="button">Update Password</button>
        <article><h2>Two-Factor Authentication</h2><p>Add an extra layer of security to your account by requiring a code from your phone in addition to your password.</p><span className="toggle is-on" /></article>
      </div>
      <article className="login-activity"><h2>Recent Login Activity</h2><p>MacBook Pro • Chrome <strong>Current</strong></p><p>iPhone 15 Pro • App <strong>Logout</strong></p></article>
    </ProfileLayout>
  )
}

export function SuccessPage({ onNavigate }) {
  return (
    <main className="success-page">
      <section className="success-card">

        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>

        <div className="confetti"></div>

        <div className="check-mark">
          ✓
        </div>

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
              JRC-9920-XLT
              <span className="copy-icon">📋</span>
            </strong>

          </div>

          <div className="divider"></div>

          <div className="meta-item">

            <span>SERVICE TYPE</span>

            <strong>
              🚌 Premium Electric
            </strong>

          </div>

        </div>

        <div className="success-actions">

          <button
            className="track-btn"
            onClick={() => onNavigate("booking")}
          >
            Track Journey 🗺️
          </button>

          <button
            className="home-btn"
            onClick={() => onNavigate("home")}
          >
            Return Home 🏠
          </button>

        </div>

        <div className="partner-section">

          <h5>PARTNER EXCELLENCE</h5>

          <div className="partner-users">

            <img
              src="https://i.pravatar.cc/40?img=11"
              alt=""
            />

            <img
              src="https://i.pravatar.cc/40?img=12"
              alt=""
            />

            <img
              src="https://i.pravatar.cc/40?img=13"
              alt=""
            />

            <span className="count">+15K</span>

          </div>

          <p className="trusted">
            Trusted by 15,000+ urban professionals
          </p>

        </div>

      </section>
    </main>
  );
}
const fs = require('fs');
let data = fs.readFileSync('src/pages/AppScreens.jsx', 'utf8');

data += `

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
`;

fs.writeFileSync('src/pages/AppScreens.jsx', data);

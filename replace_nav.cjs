const fs = require('fs');
let data = fs.readFileSync('src/pages/AppScreens.jsx', 'utf8');

const target = `<nav className="booking-topbar-links" aria-label="Main navigation">
          <button type="button" onClick={() => onNavigate('dashboard')}>Home</button>
          <button type="button" onClick={() => onNavigate('bookings')}>Bookings</button>
          <button type="button" onClick={() => onNavigate('rewards')}>Rewards</button>
        </nav>`;

const target2 = `<nav className="booking-topbar-links" aria-label="Main navigation">\r
          <button type="button" onClick={() => onNavigate('dashboard')}>Home</button>\r
          <button type="button" onClick={() => onNavigate('bookings')}>Bookings</button>\r
          <button type="button" onClick={() => onNavigate('rewards')}>Rewards</button>\r
        </nav>`;

const replacement = `<nav className="booking-topbar-links" aria-label="Main navigation">
          {(navItems || [['Home', 'dashboard'], ['Bookings', 'bookings'], ['Rewards', 'rewards']]).map(([label, page]) => (
            <button key={label} type="button" onClick={() => onNavigate(page)}>{label}</button>
          ))}
        </nav>`;

if (data.includes(target)) {
  data = data.replace(target, replacement);
  fs.writeFileSync('src/pages/AppScreens.jsx', data);
  console.log('Replaced successfully');
} else if (data.includes(target2)) {
  data = data.replace(target2, replacement);
  fs.writeFileSync('src/pages/AppScreens.jsx', data);
  console.log('Replaced successfully (CRLF)');
} else {
  console.log('Target not found');
}

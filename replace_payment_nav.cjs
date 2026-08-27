const fs = require('fs');
let data = fs.readFileSync('src/pages/AppScreens.jsx', 'utf8');

const target1 = `    <main className="jr-app-page payment-page booking-stage-page">\n      <BookingTopBar activeStep="payment" onNavigate={onNavigate} onBack={() => onNavigate('booking')} />`;
const target2 = `    <main className="jr-app-page payment-page booking-stage-page">\r\n      <BookingTopBar activeStep="payment" onNavigate={onNavigate} onBack={() => onNavigate('booking')} />`;

const replacement = `    <main className="jr-app-page payment-page booking-stage-page">
      <BookingTopBar 
        activeStep="payment" 
        onNavigate={onNavigate} 
        onBack={() => onNavigate('booking')}
        navItems={[
          ['Payment', 'payment'],
          ['Support', 'support']
        ]}
      />`;

if (data.includes(target1)) {
  data = data.replace(target1, replacement);
  fs.writeFileSync('src/pages/AppScreens.jsx', data);
  console.log('Replaced PaymentPage (LF)');
} else if (data.includes(target2)) {
  data = data.replace(target2, replacement);
  fs.writeFileSync('src/pages/AppScreens.jsx', data);
  console.log('Replaced PaymentPage (CRLF)');
} else {
  console.log('Target not found');
}

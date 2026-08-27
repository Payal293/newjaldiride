const fs = require('fs');
let data = fs.readFileSync('src/pages/AppScreens.jsx', 'utf8');

const targetLF = `export function PaymentPage({ onNavigate }) {
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
    <main className="jr-app-page payment-page booking-stage-page">
      <BookingTopBar 
        activeStep="payment" 
        onNavigate={onNavigate} 
        onBack={() => onNavigate('booking')}
        navItems={[
          ['Payment', 'payment'],
          ['Support', 'support']
        ]}
      />

      <div className="booking-page-layout">
        <BookingFlowSidebar activeStep="payment" onStepClick={(step) => {
          if (step === 'search') onNavigate('search-ride')
          if (step === 'select') onNavigate('ride-results')
          if (step === 'details') onNavigate('booking')
        }} />`;

const replacement = `export function PaymentPage({ onNavigate, service }) {
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

  const getRoutePrefix = () => {
    if (service === 'flights') return 'flight'
    if (service === 'bus') return 'bus'
    if (service === 'hotels') return 'hotel'
    return 'ride'
  }

  const handleStepClick = (step) => {
    const prefix = getRoutePrefix()
    if (step === 'search') onNavigate(\`search-\${prefix}\`)
    if (step === 'select') onNavigate(\`\${prefix}-results\`)
    if (step === 'details') onNavigate(\`\${prefix}-details\`)
  }

  return (
    <main className="jr-app-page payment-page booking-stage-page">
      <BookingTopBar 
        activeStep="payment" 
        onNavigate={onNavigate} 
        onBack={() => onNavigate(\`\${getRoutePrefix()}-details\`)}
        navItems={[
          ['Payment', 'payment'],
          ['Support', 'support']
        ]}
      />

      <div className="booking-page-layout">
        <BookingFlowSidebar activeStep="payment" onStepClick={handleStepClick} />`;

const escapedTarget = targetLF.replace(/\n/g, '\r?\n');
const regex = new RegExp(escapedTarget.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\r\\\?\\n/g, '\r?\n'));

if (regex.test(data)) {
  data = data.replace(regex, replacement);
  fs.writeFileSync('src/pages/AppScreens.jsx', data);
  console.log('Successfully replaced PaymentPage routing logic');
} else {
  console.log('Target not found in PaymentPage block');
}

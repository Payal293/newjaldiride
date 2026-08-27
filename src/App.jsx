import { useState } from 'react'
import Home from './pages/Home'
import {
  BookingDetailsPage,
  BusBookingPage,
  FlightBookingPage,
  HotelBookingPage,
  DashboardPage,
  LoginPage,
  MyBookingsPage,
  NotificationsPage,
  PaymentPage,
  ProfilePage,
  ProfilePaymentsPage,
  RewardsPage,
  RideDetailsPage,
  RideResultsPage,
  SearchRidePage,
  BusDetailsPage,
  BusResultsPage,
  SearchBusPage,
  SearchFlightPage,
  FlightResultsPage,
  FlightDetailsPage,
  SearchHotelPage,
  HotelResultsPage,
  HotelDetailsPage,
  SearchPage,
  SecurityPage,
  ServiceComingSoonPage,
  SupportPage,
  SuccessPage,
  ConciergePage,
} from './pages/AppScreens'

export default function App() {
  const [route, setRoute] = useState({ page: 'home', service: 'ride' })

  const navigate = (page, params = {}) => {
    let detectedService = params.service || route.service || 'ride'
    if (page.includes('bus')) detectedService = 'bus'
    else if (page.includes('flight')) detectedService = 'flights'
    else if (page.includes('hotel')) detectedService = 'hotels'
    else if (page.includes('ride')) detectedService = 'ride'

    setRoute({
      page,
      service: detectedService,
      tab: params.tab,
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (route.page === 'service') {
    return <Home initialMode={route.service} onNavigate={navigate} />
  }

  if (route.page === 'login') {
    return <LoginPage onNavigate={navigate} />
  }

  if (route.page === 'dashboard') {
    return <DashboardPage onNavigate={navigate} />
  }

  if (route.page === 'search') {
    return <SearchPage onNavigate={navigate} />
  }

  if (route.page === 'search-ride') {
    return <SearchRidePage onNavigate={navigate} />
  }

  if (route.page === 'ride-results') {
    return <RideResultsPage onNavigate={navigate} />
  }

  if (route.page === 'ride-details') {
    return <RideDetailsPage onNavigate={navigate} />
  }

  if (route.page === 'search-bus') {
    return <SearchBusPage onNavigate={navigate} />
  }

  if (route.page === 'bus-results') {
    return <BusResultsPage onNavigate={navigate} />
  }

  if (route.page === 'bus-details') {
    return <BusDetailsPage onNavigate={navigate} />
  }

  if (route.page === 'search-flight') {
    return <SearchFlightPage onNavigate={navigate} />
  }

  if (route.page === 'flight-results') {
    return <FlightResultsPage onNavigate={navigate} />
  }

  if (route.page === 'flight-details') {
    return <FlightDetailsPage onNavigate={navigate} />
  }

  if (route.page === 'search-hotel') {
    return <SearchHotelPage onNavigate={navigate} />
  }

  if (route.page === 'hotel-results') {
    return <HotelResultsPage onNavigate={navigate} />
  }

  if (route.page === 'hotel-details') {
    return <HotelDetailsPage onNavigate={navigate} />
  }

  if (route.page === 'booking') {
    if (route.service === 'bus') return <BusBookingPage onNavigate={navigate} />
    if (route.service === 'flights') return <FlightBookingPage onNavigate={navigate} />
    if (route.service === 'hotels') return <HotelBookingPage onNavigate={navigate} />
    return <BookingDetailsPage onNavigate={navigate} />
  }

  if (route.page === 'payment') {
    return <PaymentPage onNavigate={navigate} service={route.service} />
  }

  if (route.page === 'bookings') {
    return <MyBookingsPage onNavigate={navigate} initialTab={route.tab} />
  }

  if (route.page === 'rewards') {
    return <RewardsPage onNavigate={navigate} />
  }

  if (route.page === 'profile') {
    return <ProfilePage onNavigate={navigate} />
  }

  if (route.page === 'profile-payments') {
    return <ProfilePaymentsPage onNavigate={navigate} />
  }

  if (route.page === 'notifications') {
    return <NotificationsPage onNavigate={navigate} />
  }

  if (route.page === 'security') {
    return <SecurityPage onNavigate={navigate} />
  }

  if (route.page === 'support') {
    return <SupportPage onNavigate={navigate} />
  }

  if (route.page === 'success') {
    return <SuccessPage onNavigate={navigate} />
  }

  if (route.page === 'concierge') {
    return <ConciergePage onNavigate={navigate} />
  }

  return <Home onNavigate={navigate} />
}

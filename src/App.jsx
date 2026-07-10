import { useState } from 'react'
import Home from './pages/Home'
import {
  BookingDetailsPage,
  DashboardPage,
  LoginPage,
  MyBookingsPage,
  NotificationsPage,
  PaymentPage,
  ProfilePage,
  ProfilePaymentsPage,
  SearchPage,
  SecurityPage,
  ServiceComingSoonPage,
  SuccessPage,
} from './pages/AppScreens'

export default function App() {
  const [route, setRoute] = useState({ page: 'home', service: 'hotels' })

  const navigate = (page, params = {}) => {
    setRoute({ page, service: params.service || route.service || 'hotels' })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (route.page === 'service') {
    return <ServiceComingSoonPage service={route.service} onNavigate={navigate} />
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

  if (route.page === 'booking') {
    return <BookingDetailsPage onNavigate={navigate} />
  }

  if (route.page === 'payment') {
    return <PaymentPage onNavigate={navigate} />
  }

  if (route.page === 'bookings') {
    return <MyBookingsPage onNavigate={navigate} />
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

  if (route.page === 'success') {
    return <SuccessPage onNavigate={navigate} />
  }

  return <Home onNavigate={navigate} />
}

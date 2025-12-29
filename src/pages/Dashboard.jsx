import { Outlet, NavLink } from 'react-router-dom'
import '../assets/styles/pages/Dashboard.css'
import { prefetchRouteData } from '../services/prefetch.service'

export function Dashboard() {
  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <NavLink 
          to="orders" 
          className={({ isActive }) => isActive ? 'active' : ''}
          onMouseEnter={() => prefetchRouteData('/dashboard/orders')}
          onFocus={() => prefetchRouteData('/dashboard/orders')}
        >
          Reservations
        </NavLink>
        <NavLink 
          to="listing" 
          className={({ isActive }) => isActive ? 'active' : ''}
          onMouseEnter={() => prefetchRouteData('/dashboard/listing')}
          onFocus={() => prefetchRouteData('/dashboard/listing')}
        >
          Listings
        </NavLink>
        <NavLink to="analytics" className={({ isActive }) => isActive ? 'active' : ''}>
          Analytics
        </NavLink>
      </nav>
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  )
}
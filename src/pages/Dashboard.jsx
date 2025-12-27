import { Outlet, NavLink } from 'react-router-dom'

export function Dashboard() {
  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <NavLink to="orders" className={({ isActive }) => isActive ? 'active' : ''}>
          Orders
        </NavLink>
        <NavLink to="listing" className={({ isActive }) => isActive ? 'active' : ''}>
          Listings
        </NavLink>
      </nav>
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  )
}
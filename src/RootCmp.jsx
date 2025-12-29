import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { StayIndex } from './pages/StayIndex.jsx'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { UserMsg } from './cmps/UserMsg.jsx'
import { StayDetails } from './pages/StayDetails.jsx'
import { StayCheckout } from './pages/StayCheckout.jsx'
import { UserProfile } from './pages/UserProfile'
import { SearchResults } from './pages/SearchResults.jsx'
import { Login } from './pages/Login.jsx'
import { ListingForm } from './pages/ListingForm.jsx'
import ScrollToTop from './cmps/ScrollToTop.jsx'
import { WishList } from './pages/WishList.jsx'
import { UserTrips } from './pages/UserTrips.jsx'
import { PlatypusLoader } from './cmps/PlatypusLoader.jsx'
import { aggressivePrefetch } from './services/prefetch.service'

// Lazy load heavy components
const OrderList = lazy(() => import('./cmps/OrderList.jsx').then(m => ({ default: m.OrderList })))
const ListingList = lazy(() => import('./cmps/ListingList.jsx').then(m => ({ default: m.ListingList })))
const Dashboard = lazy(() => import('./pages/Dashboard.jsx').then(m => ({ default: m.Dashboard })))
const DashboardAnalytics = lazy(() => import('./cmps/DashboardAnalytics.jsx').then(m => ({ default: m.DashboardAnalytics })))

export function RootCmp() {
    // Aggressive prefetch after initial render
    useEffect(() => {
        aggressivePrefetch()
    }, [])

    return (
        <div className="main-container">
            <ScrollToTop />
            <AppHeader />
            <UserMsg />

            <main>
                <Routes>
                    <Route path="/" element={<StayIndex />} />
                    <Route path="/stay/:stayId/checkout" element={<StayCheckout />} />
                    <Route path="/stay/:stayId" element={<StayDetails />} />
                    <Route path="/stay" element={<SearchResults />} />
                    <Route path="/user/profile" element={<UserProfile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Suspense fallback={<PlatypusLoader />}><Dashboard /></Suspense>}>
                        <Route index element={<Navigate to="orders" replace />} />
                        <Route path="orders" element={<Suspense fallback={<PlatypusLoader />}><OrderList /></Suspense>} />
                        <Route path="listing" element={<Suspense fallback={<PlatypusLoader />}><ListingList /></Suspense>} />
                        <Route path="analytics" element={<Suspense fallback={<PlatypusLoader />}><DashboardAnalytics /></Suspense>} />
                    </Route>
                    <Route path="/trips" element={<UserTrips />} />
                    <Route path="/listings" element={<Suspense fallback={<PlatypusLoader />}><ListingList /></Suspense>} />
                    <Route path="/listings/create" element={<ListingForm />} />
                    <Route path="/listings/:stayId" element={<ListingForm />} />
                    <Route path="/wishlist" element={<WishList />} />
                </Routes>
            </main>
            <AppFooter />
        </div>
    )
}

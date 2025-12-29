import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { StayIndex } from './pages/StayIndex.jsx'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { UserMsg } from './cmps/UserMsg.jsx'
import { StayDetails } from './pages/StayDetails.jsx'
import { StayCheckout } from './pages/StayCheckout.jsx'
import { UserProfile } from './pages/UserProfile'
import { SearchResults } from './pages/SearchResults.jsx'
import { Login } from './pages/Login.jsx'
import { OrderList } from './cmps/OrderList.jsx'
import { ListingList } from './cmps/ListingList.jsx'
import { ListingForm } from './pages/ListingForm.jsx'
import ScrollToTop from './cmps/ScrollToTop.jsx'
import { WishList } from './pages/WishList.jsx'
import { UserTrips } from './pages/UserTrips.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { DashboardAnalytics } from './cmps/DashboardAnalytics.jsx'
import { socketService } from './services/socket.service.js'

export function RootCmp() {
    const user = useSelector(storeState => storeState.userModule.user)

    // Setup socket connection when user logs in
    useEffect(() => {
        if (user) {
            socketService.login(user._id)
        }
    }, [user])

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
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route index element={<Navigate to="orders" replace />} />
                        <Route path="orders" element={<OrderList />} />
                        <Route path="listing" element={<ListingList />} />
                        <Route path="analytics" element={<DashboardAnalytics />} />
                    </Route>
                    <Route path="/trips" element={<UserTrips />} />
                    <Route path="/listings" element={<ListingList />} />
                    <Route path="/listings/create" element={<ListingForm />} />
                    <Route path="/listings/:stayId" element={<ListingForm />} />
                    <Route path="/wishlist" element={<WishList />} />
                </Routes>
            </main>
            <AppFooter />
        </div>
    )
}

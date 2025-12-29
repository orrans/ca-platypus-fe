// Prefetch service for aggressive performance optimization
import { loadOrders } from '../store/actions/order.actions'
import { loadStays } from '../store/actions/stay.actions'
import { userService } from './user'

// Store lazy component references
const componentCache = new Map()

// Prefetch component chunks
export function prefetchComponent(importFn, key) {
    if (!componentCache.has(key)) {
        const promise = importFn()
        componentCache.set(key, promise)
        return promise
    }
    return componentCache.get(key)
}

// Prefetch critical data
export function prefetchCriticalData() {
    if (userService.getLoggedinUser()) {
        // Prefetch orders - user goes there a lot
        loadOrders()
    }
    // Prefetch stays if not already loaded
    loadStays()
}

// Prefetch on idle
export function prefetchOnIdle(callback) {
    if ('requestIdleCallback' in window) {
        requestIdleCallback(callback, { timeout: 2000 })
    } else {
        setTimeout(callback, 1)
    }
}

// Aggressive prefetch strategy - load everything after initial render
export function aggressivePrefetch() {
    prefetchOnIdle(() => {
        // Prefetch all critical data
        prefetchCriticalData()
        
        // Prefetch component chunks
        prefetchComponent(() => import('../cmps/OrderList.jsx'), 'OrderList')
        prefetchComponent(() => import('../cmps/ListingList.jsx'), 'ListingList')
        prefetchComponent(() => import('../cmps/StayList.jsx'), 'StayList')
        prefetchComponent(() => import('../pages/StayDetails.jsx'), 'StayDetails')
        prefetchComponent(() => import('../pages/Dashboard.jsx'), 'Dashboard')
    })
}

// Prefetch specific route data
export function prefetchRouteData(route) {
    switch (route) {
        case '/dashboard/orders':
        case '/dashboard':
            loadOrders()
            break
        case '/dashboard/listing':
        case '/listings':
            loadStays()
            break
        case '/stay':
            loadStays()
            break
        default:
            break
    }
}

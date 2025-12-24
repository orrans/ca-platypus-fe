import { httpService } from '../http.service'

export const orderService = {
    save,
    query,
    remove,
    getUserOrders,
    getHostOrders,
    updateStatus,
}

function query(filterBy = {}) {
    return httpService.get(`order`, filterBy)
}

async function save(order) {
    if (order._id) return httpService.put(`order/${order._id}`, order)
    return httpService.post('order', order)
}

function remove(orderId) {
    return httpService.delete(`order/${orderId}`)
}

function getHostOrders(hostId) {
    return httpService.get(`order/${hostId}/host-orders`)
}

function getUserOrders(userId) {
    return httpService.get(`order/${userId}/user-orders`)
}

function updateStatus(orderId, status) {
    return httpService.patch(`order/${orderId}/status`, { status })
}

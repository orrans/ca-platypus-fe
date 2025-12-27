import { httpService } from '../http.service'

export const orderService = {
    query,
    getById,
    save,
    remove,
    getUserOrders,
    getHostOrders,
    updateStatus
}

async function query(filterBy = {}) {
    return httpService.get('order', filterBy)
}

function getById(orderId) {
    return httpService.get(`order/${orderId}`)
}

async function remove(orderId) {
    return httpService.delete(`order/${orderId}`)
}

async function save(order) {
    var savedOrder
    if (order._id) {
        savedOrder = await httpService.put(`order/${order._id}`, order)
    } else {
        savedOrder = await httpService.post('order', order)
    }
    return savedOrder
}

async function getUserOrders(userId) {
    return query({ guestId: userId })
}

async function getHostOrders(hostId) {
    return query({ hostId })
}

async function updateStatus(orderId, status) {
    return save({ _id: orderId, status })
}
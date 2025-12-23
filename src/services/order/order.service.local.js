import { storageService } from '../async-storage.service'
import { data } from '../../assets/data/order.json'
const STORAGE_KEY = 'order'

createOrders()

export const orderServiceLocal = {
    saveOrder,
    query,
}
async function query(filterBy = {}) {
    let orders = await storageService.query(STORAGE_KEY)

    if (filterBy.hostId) {
        orders = orders.filter((order) => order.host._id === filterBy.hostId)
    }

    if (filterBy.guestId) {
        orders = orders.filter((order) => order.guest._id === filterBy.guestId)
    }

    if (filterBy.status) {
        orders = orders.filter((order) => order.status === filterBy.status)
    }

    if (filterBy.stayId) {
        orders = orders.filter((order) => order.stay._id === filterBy.stayId)
    }

    return orders
}

function saveOrder(order) {
    if (order._id) {
        return storageService.put(STORAGE_KEY, order)
    } else {
        return storageService.post(STORAGE_KEY, order)
    }
}

async function createOrders() {
    var orders = await storageService.query(STORAGE_KEY)
    if (!orders.length) {
        const orders = data.orders
        console.log(orders)
        storageService.save(STORAGE_KEY, orders)
    }
}

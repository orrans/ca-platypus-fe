import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { loadOrders } from '../store/actions/order.actions'
import { OrderPreview } from './OrderPreview'

export function OrderList({}) {
    const orders = useSelector((state) => state.orderModule.orders)

    useEffect(() => {
        loadOrders()
    }, [])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Guest</th>
                        <th>Check-In</th>
                        <th>Check-Out</th>
                        <th>Book date</th>
                        <th>Listing</th>
                        <th>Total price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <OrderPreview key={order._id} order={order} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

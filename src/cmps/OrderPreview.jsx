import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { updateOrderStatus } from '../store/actions/order.actions'

export function OrderPreview({ order }) {
    function HandelAccept() {
        updateOrderStatus(order._id, 'approved')
    }

    function HandelReject() {
        updateOrderStatus(order._id, 'rejected')
    }

    return (
        <tr>
            <td>{order.guest.fullname}</td>
            <td>{order.startDate}</td>
            <td>{order.endDate}</td>
            <td>{order.bookDate}</td>
            <td>{order.stay.name}</td>
            <td>{order.stay.price}</td>
            <td>{order.status}</td>
            <td>
                <button onClick={HandelAccept}>Accept</button>{' '}
                <button onClick={HandelReject}>Reject</button>
            </td>
        </tr>
    )
}

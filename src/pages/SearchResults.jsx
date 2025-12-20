import React, { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { GoogleMap } from '../cmps/GoogleMaps'
import { useSelector } from 'react-redux'
import { StayList } from '../cmps/StayList'
import { loadStays } from '../store/actions/stay.actions'

export function SearchResults({}) {
    const [searchParams, setSearchParams] = useSearchParams()
    const stays = useSelector((storeState) => storeState.stayModule.stays)
    console.log(stays)

    useEffect(() => {
        loadStays()
    }, [])

    return (
        <main className="stay-index">
            <StayList stays={stays} />
            <GoogleMap />
        </main>
    )
}

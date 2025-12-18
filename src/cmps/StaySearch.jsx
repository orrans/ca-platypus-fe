import { useState, useRef, useEffect } from 'react'
import { DatePicker } from './DatePicker.jsx'

export function StaySearch() {
    const [loc, setLoc] = useState('')
    const [dateRange, setDateRange] = useState({ start: null, end: null })
    const [guests, setGuests] = useState({ adults: 0, children: 0, infants: 0, pets: 0 })
    const [activeField, setActiveField] = useState(null) // 'loc', 'date', 'guests', or null

    const dropdownRef = useRef(null)

    // Calculate total guests for display
    const totalGuests = guests.adults + guests.children
    const guestLabel = totalGuests > 0
        ? `${totalGuests} guests${guests.infants ? ', ' + guests.infants + ' infants' : ''}`
        : 'Add guests'

    // Format date label for the single "Date" field
    let dateLabel = 'Any week'
    if (dateRange.start && dateRange.end) {
        dateLabel = `${formatDate(dateRange.start)} - ${formatDate(dateRange.end)}`
    } else if (dateRange.start) {
        dateLabel = `${formatDate(dateRange.start)} - Add dates`
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveField(null)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [dropdownRef])

    function handleGuestChange(type, operation) {
        setGuests(prev => {
            const newValue = operation === 'inc' ? prev[type] + 1 : prev[type] - 1
            if (newValue < 0) return prev
            return { ...prev, [type]: newValue }
        })
    }

    function formatDate(date) {
        if (!date) return ''
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }

    return (
        <div className="stay-search-container" ref={dropdownRef}>

            <div className="search-bar">

                {/* 1. Location Section */}
                <div
                    className={`search-item ${activeField === 'loc' ? 'active' : ''}`}
                    onClick={() => setActiveField('loc')}
                >
                    <label>Where</label>
                    <input
                        type="text"
                        placeholder="Search destinations"
                        value={loc}
                        onChange={(e) => setLoc(e.target.value)}
                        className="search-input-clean"
                    />
                </div>

                <span className="divider"></span>

                {/* 2. Date Section (Merged) */}
                <div
                    className={`search-item ${activeField === 'date' ? 'active' : ''}`}
                    onClick={() => setActiveField('date')}
                >
                    <label>When</label>
                    <div className={`placeholder ${dateRange.start ? 'bold' : ''}`}>{dateLabel}</div>
                </div>

                <span className="divider"></span>

                {/* 3. Who Section */}
                <div
                    className={`search-item who ${activeField === 'guests' ? 'active' : ''}`}
                    onClick={() => setActiveField('guests')}
                >
                    <div className="who-content">
                        <label>Who</label>
                        <div className={`placeholder ${totalGuests > 0 ? 'bold' : ''}`}>{guestLabel}</div>
                    </div>

                    <button className="search-btn-primary">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: '4', overflow: 'visible' }}><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
                    </button>
                </div>
            </div>

            {/* Floating Modals Area */}
            {activeField && (
                <div className="search-modal-dropdown">

                    {activeField === 'loc' && (
                        <div className="modal-content location-suggestions">
                            <div className="suggestion-title">Recent searches</div>
                            <div className="suggestion-item">
                                <div className="icon-box">📍</div>
                                <span>I'm flexible</span>
                            </div>
                        </div>
                    )}

                    {activeField === 'date' && (
                        <div className="modal-content date-picker-wrapper">
                            <DatePicker
                                isOpen={true}
                                dateRange={dateRange}
                                onSetDateRange={setDateRange}
                                onToggle={() => { }}
                            />
                        </div>
                    )}

                    {activeField === 'guests' && (
                        <div className="modal-content guest-picker">
                            <GuestCounterRow type="adults" label="Adults" sub="Ages 13 or above" value={guests.adults} onChange={handleGuestChange} />
                            <GuestCounterRow type="children" label="Children" sub="Ages 2–12" value={guests.children} onChange={handleGuestChange} />
                            <GuestCounterRow type="infants" label="Infants" sub="Under 2" value={guests.infants} onChange={handleGuestChange} />
                            <GuestCounterRow type="pets" label="Pets" sub="Bringing a service animal?" value={guests.pets} onChange={handleGuestChange} />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

function GuestCounterRow({ type, label, sub, value, onChange }) {
    return (
        <div className="guest-row">
            <div className="guest-info">
                <span className="guest-label">{label}</span>
                <span className="guest-sub">{sub}</span>
            </div>
            <div className="guest-actions">
                <button
                    disabled={value <= 0}
                    onClick={(e) => { e.stopPropagation(); onChange(type, 'dec') }}
                    className="counter-btn"
                >-</button>
                <span className="guest-value">{value}</span>
                <button
                    onClick={(e) => { e.stopPropagation(); onChange(type, 'inc') }}
                    className="counter-btn"
                >+</button>
            </div>
        </div>
    )
}
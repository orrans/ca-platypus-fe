import React, { useState, useEffect, useRef } from 'react'

export function Carousel({ imgs = [] }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [containerWidth, setContainerWidth] = useState(0)
    const containerRef = useRef(null)

    useEffect(() => {
        if (!containerRef.current) return

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const newWidth = entry.contentRect.width
                setContainerWidth(newWidth)
            }
        })

        observer.observe(containerRef.current)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (containerRef.current && containerWidth > 0) {
            containerRef.current.scrollLeft = currentImageIndex * containerWidth
        }
    }, [currentImageIndex, containerWidth])

    const handlePreviousClick = (ev) => {
        ev.stopPropagation()
        ev.preventDefault()
        setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev))
    }

    const handleNextClick = (ev) => {
        ev.stopPropagation()
        ev.preventDefault()
        setCurrentImageIndex((prev) => (prev < imgs.length - 1 ? prev + 1 : prev))
    }

    return (
        <div className="img-carousel" style={{ position: 'relative' }}>
            <div
                ref={containerRef}
                className="imgs-container"
                style={{ display: 'flex', overflow: 'hidden' }}>
                {imgs.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`Slide ${idx}`}
                        style={{
                            width: containerWidth ? `${containerWidth}px` : undefined,
                        }}
                    />
                ))}
            </div>

            {currentImageIndex > 0 && (
                <button className="nav-button left" onClick={handlePreviousClick}>
                    &lt;
                </button>
            )}

            {currentImageIndex < imgs.length - 1 && (
                <button className="nav-button right" onClick={handleNextClick}>
                    &gt;
                </button>
            )}
        </div>
    )
}

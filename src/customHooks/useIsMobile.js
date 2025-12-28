import { useEffect, useState } from 'react'

export function useIsMobile({ width = 768 } = {}) {
    const [currWidth, setCurrWidth] = useState(0)

    useEffect(() => {
        function handleResize() {
            setCurrWidth(window.innerWidth)
            console.log(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return currWidth <= width
}

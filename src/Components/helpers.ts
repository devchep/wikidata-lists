import { useEffect, useRef, useState } from 'react'

const useIntersectionObserver = (
    options: IntersectionObserverInit | undefined,
    callback: () => void
) => {
    const elementRef = useRef(null)
    const [isObserved, setIsObserved] = useState<boolean>(false)
    const [isReadyToFetch, setIsReadyToFetch] = useState<boolean>(true)

    useEffect(() => {
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach((each) => {
                if (each.isIntersecting) {
                    if (isReadyToFetch) {
                        callback()
                        setIsReadyToFetch(false)
                        setTimeout(() => {
                            setIsReadyToFetch(true)
                        }, 1000)
                    }
                }
            })
        }, options)

        if (elementRef.current) {
            if (isObserved) scrollObserver.observe(elementRef.current)
            else scrollObserver.unobserve(elementRef.current)
        }

        return () => {
            if (elementRef.current) scrollObserver.unobserve(elementRef.current)
        }
    }, [elementRef, options])

    return [elementRef, setIsObserved] as const
}

export default useIntersectionObserver

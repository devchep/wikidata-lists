import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './background.scss'
import BackgroundCanvas from '../../Services/background/BackgroundCanvas'

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (canvasRef.current) {
            const backgroundCanvas = new BackgroundCanvas({
                canvasElement: canvasRef.current,
            })

            canvasRef.current.addEventListener('click', (e: MouseEvent) => {
                let href = null
                href = backgroundCanvas.handleLinkClick(e)
                if (href) navigate(href)
            })
        }
    }, [])

    return <canvas className={styles.background} ref={canvasRef} id='canvas' />
}

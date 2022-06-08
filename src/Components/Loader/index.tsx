import React, { useEffect, useState } from 'react'
import styles from './loader.scss'

export default function Loader() {
    const [loaderText, setLoaderText] = useState<string>('Loading...')

    useEffect(() => {
        setTimeout(() => {
            setLoaderText('Query is quite heavy, please wait')
        }, 6000)
    }, [])
    return (
        <>
            <div className={styles.loader}>
                <div className={styles.loader__element} />
                <div className={styles.loader__element} />
                <div className={styles.loader__element} />
                <div className={styles.loader__element} />
                <div className={styles.loader__element} />
            </div>
            <p className={styles.loader__text}>{loaderText}</p>
        </>
    )
}

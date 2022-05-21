import React from 'react'
import styles from './loader.scss'

export default function Loader() {
    return (
        <>
            <div className={styles.loader}>
                <div className={styles.loader__element} />
                <div className={styles.loader__element} />
                <div className={styles.loader__element} />
                <div className={styles.loader__element} />
                <div className={styles.loader__element} />
            </div>
            <p className={styles.loader__text}>Loading...</p>
        </>
    )
}

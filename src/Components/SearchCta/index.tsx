import React from 'react'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import CtaCatImage from '../../Assets/CtaCatImage'
import Background from '../Background'
import styles from './search-cta.scss'

export default function SearchCta() {
    return (
        <>
            <div className={styles.cta}>
                <p className={styles.cta__text}>
                    You haven’t searched anything yet...
                    <br />
                    What about{' '}
                    <Link to='/cat' className={styles['cta__text-button']}>
                        Cats
                    </Link>
                    ?
                </p>
                <div className={styles['cta__image-wrapper']}>
                    <CtaCatImage />
                </div>
            </div>
            {isMobile ? null : <Background />}
        </>
    )
}

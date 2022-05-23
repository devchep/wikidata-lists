import React from 'react'
import { Link } from 'react-router-dom'
import CtaCatImage from '../../Assets/CtaCatImage'
import styles from './search-cta.scss'

export default function SearchCta() {
    return (
        <div className={styles.cta}>
            <p className={styles.cta__text}>
                You haven’t searched anything yet...
                <br />
                What about{' '}
                <Link to='/Cat' className={styles['cta__text-button']}>
                    Cats
                </Link>
                ?
            </p>
            <div className={styles['cta__image-wrapper']}>
                <CtaCatImage />
            </div>
        </div>
    )
}

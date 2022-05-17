import React from 'react'
import CtaCatImage from '../../Assets/CtaCatImage'
import SearchInput from '../../Components/SearchInput'
import styles from './main.scss'

export default function Main() {
    return (
        <main className={styles.main}>
            <SearchInput />
            <div className={styles.cta}>
                <p className={styles.cta__text}>
                    You haven’t searched anything yet...
                    <br />
                    What about{' '}
                    <a href='/' className={styles['cta__text-button']}>
                        Cats
                    </a>
                    ?
                </p>
                <div className={styles['cta__image-wrapper']}>
                    <CtaCatImage />
                </div>
            </div>
        </main>
    )
}

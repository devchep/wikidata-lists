import React from 'react'
import SearchInput from '../../Components/SearchInput'
import styles from './main.scss'

export default function Main() {
    return (
        <main className={styles.main}>
            <SearchInput />
            <div className={styles.cta}>
                You haven’t searched anything yet... What about{' '}
                <a href='/' className={styles['cta__text-button']}>
                    Cats
                </a>
                ?
            </div>
        </main>
    )
}

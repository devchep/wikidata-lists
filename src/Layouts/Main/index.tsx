import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styles from './main.scss'
import SearchInput from '../../Components/SearchInput'
import SearchCta from '../../Components/SearchCta'
import ItemGallery from '../../Components/ItemGallery'

export default function Main() {
    return (
        <main className={styles.main}>
            <SearchInput />
            <Routes>
                <Route path='/' element={<SearchCta />} />
                <Route path='/:instance' element={<ItemGallery />} />
            </Routes>
            <div className={styles.main__background} />
        </main>
    )
}

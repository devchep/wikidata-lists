import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { autorun } from 'mobx'
import SearchInput from '../../Components/SearchInput'
import styles from './main.scss'
import { GalleryContext } from '../../Services/gallery/GalleryContext'
import SearchCta from '../../Components/SearchCta'
import Loader from '../../Components/Loader'
import Gallery from '../../Components/Gallery'
import Empty from '../../Components/Empty'

const Main = observer(() => {
    const { gallery } = useContext(GalleryContext)
    const [content, setContent] = useState(<SearchCta />)

    useEffect(
        () =>
            autorun(() => {
                switch (gallery.fetchStatus) {
                    case 'pending':
                        setContent(<Loader />)
                        break
                    case 'done':
                        setContent(<Gallery cards={gallery.cards} />)
                        break
                    case 'empty':
                        setContent(<Empty />)
                        break
                    default:
                        setContent(<SearchCta />)
                }
            }),
        []
    )

    return (
        <main className={styles.main}>
            <SearchInput fetch={gallery.fetch} />
            {content}
        </main>
    )
})

export default Main

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { autorun } from 'mobx'
import ItemCard from '../ItemCard'
import styles from './gallery.scss'
import Gallery from '../../Services/gallery/Gallery'
import SearchCta from '../SearchCta'
import Empty from '../Empty'
import Loader from '../Loader'
import Error from '../Error'

type ItemGalleryParams = {
    instance: string
}

const ItemGallery = observer(() => {
    const { instance } = useParams<ItemGalleryParams>() as ItemGalleryParams
    const [content, setContent] = useState(<SearchCta />)
    const gallery = new Gallery()

    useEffect(() => {
        gallery.fetch(instance)
        autorun(() => {
            switch (gallery.fetchStatus) {
                case 'pending':
                    setContent(<Loader />)
                    break
                case 'empty':
                    setContent(<Empty />)
                    break
                case 'error':
                    setContent(<Error />)
                    break
                default:
                    setContent(
                        <div className={styles.gallery}>
                            {gallery.cards.map((item) => (
                                <ItemCard key={item.name} card={item} />
                            ))}
                        </div>
                    )
            }
        })
    }, [instance])

    return content
})

export default ItemGallery

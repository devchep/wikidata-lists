import React from 'react'
import { observer } from 'mobx-react-lite'
import { Card } from '../../Services/services'
import ItemCard from '../ItemCard'
import styles from './gallery.scss'

interface GalleryProps {
    cards: Card[]
}

const Gallery = observer(({ cards }: GalleryProps) => (
    <div className={styles.gallery}>
        {cards.map((item) => (
            <ItemCard key={item.name} card={item} />
        ))}
    </div>
))

export default Gallery

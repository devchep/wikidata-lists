import React from 'react'
import { observer } from 'mobx-react-lite'
import { Card } from '../../Services/services'

interface GalleryProps {
    cards: Card[]
}

const Gallery = observer(({ cards }: GalleryProps) => (
    <>
        {cards.map((item) => (
            <div key={item.name}>{item.name}</div>
        ))}
    </>
))

export default Gallery

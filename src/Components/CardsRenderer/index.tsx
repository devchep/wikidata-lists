import React, { useId } from 'react'
import { Card } from '../../types'
import ItemCard from '../ItemCard'
import styles from './cards-renderer.scss'

interface CardsRendererProps {
    cards: Card[]
}

export default function CardsRenderer({ cards }: CardsRendererProps) {
    return (
        <ul className={styles['cards-gallery']}>
            {cards.map((item) => (
                <ItemCard key={item.article} card={item} />
            ))}
        </ul>
    )
}

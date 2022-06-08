import React, { useState } from 'react'
import { Card } from '../../types'
import styles from './item-card.scss'

interface ItemCardProps {
    card: Card
}

export default function ItemCard({ card }: ItemCardProps) {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    return (
        <li>
            <figure className={styles.card}>
                <a
                    className={styles.card__link}
                    href={card.article}
                    target='_blank'
                    rel='noreferrer'
                >
                    <img
                        onLoad={() => setIsLoaded(true)}
                        className={`${styles.card__img} ${
                            isLoaded
                                ? styles['card__img--loaded']
                                : styles['card__img--fallback']
                        }`}
                        src={`${card.imageurl}?width=1024`}
                        alt={card.name}
                    />
                    <figcaption className={styles.card__name}>
                        {card.name}
                    </figcaption>
                </a>
            </figure>
        </li>
    )
}

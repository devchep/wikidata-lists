import { Card } from '../../Services/services'
import styles from './item-card.scss'

interface ItemCardProps {
    card: Card
}

export default function ItemCard({ card }: ItemCardProps) {
    return (
        <figure className={styles.card}>
            <a
                className={styles.card__link}
                href={card.instance}
                target='_blank'
                rel='noreferrer'
            >
                <img
                    className={styles.card__img}
                    src={card.imageurl}
                    alt={card.name}
                />
                <figcaption className={styles.card__name}>
                    {card.name}
                </figcaption>
            </a>
        </figure>
    )
}

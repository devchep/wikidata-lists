import styles from './header-pin.scss'

export default function HeaderPin() {
    return (
        <div className={styles['header-pin']}>
            <p className={styles['header-pin__text']}>
                Discover thing instances
            </p>
        </div>
    )
}

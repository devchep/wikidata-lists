import React from 'react'
import GitHubRef from '../../Components/GithubRef';
import WikidataRef from '../../Components/WikidataRef';
import styles from './footer.scss';

export default function Footer() {
    return (
        <footer className={styles['footer']}>
            <ul className={styles['footer__links']}>
                <li>
                    <GitHubRef/>
                </li>
                <li>
                    <WikidataRef/>
                </li>
            </ul>
        </footer>
    )
}
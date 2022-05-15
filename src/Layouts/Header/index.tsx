import React from 'react';
import HeaderPin from '../../Components/HeaderPin';
import Logo from '../../Components/Logo';
import styles from './header.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header__logo-wrapper']}>
        <Logo />
      </div>
      <HeaderPin />
    </header>
  );
}

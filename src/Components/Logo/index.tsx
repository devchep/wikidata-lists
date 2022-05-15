import React, { useState } from 'react';
import LogoImage from '../../Assets/LogoImage';
import styles from './logo.scss';

const hoverColor = '#28345F';
const color = '#FFFFFF';

export default function Logo() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className={styles.logo}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <LogoImage color={isHovered ? hoverColor : color} />
      <p className={
                `
                ${styles.logo__text} 
                ${isHovered && styles['logo__text--hovered']}
                `
            }
      >
        Wikilists
      </p>
    </div>
  );
}

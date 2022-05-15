import { useState } from 'react';
import styles from './github-ref.scss';

export default function GitHubRef() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      className={styles['github-link']}
      href="https://github.com/devchep/wikidata-lists"
      target="_blank"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      rel="noreferrer"
    >
      <img
        className={`
                ${styles['github-link__img']}
                ${isHovered && styles['github-link__img--hovered']}
                `}
        src="github-markup.png"
        alt="github repository"
      />
      <p
        className={`
            ${styles['github-link__text']}
            ${isHovered && styles['github-link__text--hovered']}
            `}
      >
        github/devchep
      </p>
    </a>
  );
}

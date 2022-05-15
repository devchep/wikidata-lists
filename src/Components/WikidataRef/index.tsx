import styles from './wikidata-ref.scss';

export default function WikidataRef() {
  return (
    <a
      className={styles['wikidata-link']}
      href="https://www.wikidata.org/wiki/Wikidata:Main_Page"
      target="_blank"
      rel="noreferrer"
    >
      <img
        className={styles['wikidata-link__img']}
        src="wikidata-logo.png"
        alt="wikidata home page"
      />
    </a>
  );
}

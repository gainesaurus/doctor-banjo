import styles from './Navbar.module.css';

function Navbar() {
  return (
      <header className={styles.container}>
        <a href="/#home" className={styles.links}>
          <h2 className={styles.siteName}>Doctor Banjo</h2>
        </a>
        <div className={styles.linkContainer}>
          <a href="/#compositions" className={styles.links}>Composition</a>
          <a href="/#arrangements" className={styles.links}>Arrangement</a>
          <a href="/#recordings" className={styles.links}>Recordings</a>
          <a href="/#contact" className={styles.links}>Contact</a>
        </div>
      </header>
  );
}

export default Navbar;
import styles from './Navbar.module.css';

function Navbar() {
  return (
      <header className={styles.container}>
        <a href="/#home" className={styles.links}>
          <h2>Doctor Banjo</h2>
        </a>
        <div className={styles.linkContainer}>
          <a href="/#compositions" className={styles.links}>Compositions</a>
          <a href="/#guitarcomp" className={styles.links}>Guitar Composition</a>
          <a href="/#arrangements" className={styles.links}>Arrangements</a>
          <a href="/#banjo" className={styles.links}>Banjo</a>
          <a href="/#guitar" className={styles.links}>Guitar</a>
          <a href="/#contact" className={styles.links}>Contact</a>
        </div>
      </header>
  );
}

export default Navbar;
import styles from './Navbar.module.css';

function Navbar() {
  return (
      <header className={styles.container}>
        <h2 className={styles.links}>Doctor Banjo</h2>
        <a href="#upcoming" className={styles.links}>Upcoming</a>
        <a href="#banjo" className={styles.links}>Banjo</a>
        <a href="#guitar" className={styles.links}>Guitar</a>
        <a href="#classical" className={styles.links}>Classical</a>
        <a href="#about" className={styles.links}>About</a>
        <a href="#booking" className={styles.links}>Booking</a>
        <a href="#patron" className={styles.links}>Become a Patron!</a>
      </header>
  );
}

export default Navbar;
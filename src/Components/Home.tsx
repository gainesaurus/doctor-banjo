import styles from './Home.module.css';

const Home = () => {

  return (
    <section className={styles.container} id='home'>
      <img src='/assets/images/Goldon.webp' className={styles.bgPic} alt='Homepage BG' />
      <div>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </section>
  )
}

export default Home;
import { useState } from 'react';
import styles from './Home.module.css';

const Home = () => {

  return (
    <section className={styles.container} id='home'>
      <div className={styles.main}>
        <img src='/assets/images/Goldon.webp' className={styles.bgPic} alt='Homepage BG' />
      </div>      
    </section>
  )
}

export default Home;
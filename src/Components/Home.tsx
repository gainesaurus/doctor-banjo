import { useState } from 'react';
import styles from './Home.module.css';

const Home = () => {

  return (
    <section className={styles.container}>
      <div className={styles.main}>
        <img src='/assets/images/Goldon.webp' className={styles.bgPic} alt='Homepage BG' />
        <p>  Welcome back, Doctor.</p>
      </div>      
    </section>
  )
}

export default Home;
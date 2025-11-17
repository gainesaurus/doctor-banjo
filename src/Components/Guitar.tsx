import { useState } from 'react';
import styles from './Guitar.module.css';

const Guitar = () => {

  return (
    <section className={styles.container} id="guitar">
        <div>
          <p> The Guitar Doctor.</p>
        </div>
        <img src='/assets/images/Rock_Star.webp' className={styles.bgPic} alt='Guitar Page BG' />   
    </section>
  )
}

export default Guitar;
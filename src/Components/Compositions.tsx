import { useState } from 'react';
import styles from './Compositions.module.css';

const Compositions = () => {

  return (
    <section className={styles.container}>
      <p>Compositions by the Doctor.</p>
      <div className={styles.compEntry}>
        <div className={styles.compTitle}>Title</div>
        <div className={styles.pdfLink}>pdf</div>
        <div className={styles.audioLink}>audio</div>
        <div className={styles.videoLink}>video</div>
      </div>      
    </section>
  )
}

export default Compositions;
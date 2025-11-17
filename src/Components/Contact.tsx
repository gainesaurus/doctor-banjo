import { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {

  return (
    <section className={styles.container} id="contact">
      <img src='/assets/images/Boa.webp' className={styles.bgPic} alt='Contact Page BG' />   
      <div>
        <p> Contact the Doctor.</p>
      </div>     
    </section>
  )
}

export default Contact;
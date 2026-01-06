import styles from './Contact.module.css';

const Contact = () => {

  return (
    <section className={styles.container} id="contact">
      <img src='/assets/images/Boa.webp' className={styles.bgPic} alt='Contact Page BG' />   
      <div>
        <h2> Contact the Doctor.</h2>
      </div>     
    </section>
  )
}

export default Contact;
import styles from './Contact.module.css';

const Contact = () => {

  return (
    <section className={styles.container} id="contact">
      <img src='/assets/images/Boa.webp' className={styles.bgPic} alt='Contact Page BG' />   
      <div>
        <h3> Contact the Doctor.</h3>
      </div>     
    </section>
  )
}

export default Contact;
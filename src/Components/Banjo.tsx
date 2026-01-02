import styles from './Banjo.module.css';

const Banjo = () => {

  return (
    <section className={styles.container} id="banjo">
      <div className={styles.main}>
         <img src='/assets/images/Sharky 2.webp' className={styles.bgPic} alt='Homepage BG' />
      </div>      
    </section>
  )
}

export default Banjo;
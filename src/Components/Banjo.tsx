import styles from './Banjo.module.css';

const Banjo = () => {

  return (
    <section className={styles.container} id="banjo">
      <img src='/assets/images/Sharky 2.webp' className={styles.bgPic} alt='Homepage BG' />
      <div className={styles.main}>
        <h3> The Banjo Doctor.</h3>
      </div> 
    </section>
  )
}

export default Banjo;
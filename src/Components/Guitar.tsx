import styles from './Guitar.module.css';

const Guitar = () => {

  return (
    <section className={styles.container} id="guitar">
        <div>
          <h3> The Guitar Doctor.</h3>
        </div>
        <img src='/assets/images/Rock_Star.webp' className={styles.bgPic} alt='Guitar Page BG' />   
    </section>
  )
}

export default Guitar;
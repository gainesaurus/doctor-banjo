import styles from './Banjo.module.css';
import { banjoSongs } from '../data';

const Banjo = () => {

  return (
    <section className={styles.container} id="banjo">
      <div className={styles.main}>
        <h3 className={styles.title}> The Banjo Doctor.</h3>
        <img src='/assets/images/Sharky 2.webp' className={styles.bgPic} alt='Homepage BG' />
      </div>
      <div className={styles.list}>
        {banjoSongs.map(banjoSong => 
          <div className={styles.audioList}>
            <h4>{banjoSong.title}</h4>
            <audio controls className={styles.audioLink}>
              <source src={banjoSong.audioLink} type="audio/mpeg"/ >
              Your browser does not support the audio tag.
            </audio>
          </div> 
        )}
      </div>
    </section>
  )
}

export default Banjo;
import styles from './Guitar.module.css';
import { guitarSongs } from '../data';

const Guitar = () => {

  return (
    <section className={styles.container} id="guitar">
      <div>
        {guitarSongs.map(guitarSong => 
          <div className={styles.audioList}>
            <h4 className={styles.title}>{guitarSong.title}</h4>
              <audio controls className={styles.audioLink}>
                <source src={guitarSong.audioLink} type="audio/mpeg"/ >
                Your browser does not support the audio tag.
              </audio>
          </div>
          )}
      </div>
        <div className={styles.main}>
          <h3> The Guitar Doctor.</h3>
          <img src='/assets/images/Rock_Star.webp' className={styles.bgPic} alt='Guitar Page BG' />   
        </div>  
    </section>
  )
}

export default Guitar;
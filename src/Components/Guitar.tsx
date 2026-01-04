import styles from './Guitar.module.css';
// import { guitarSongs } from '../data';

const Guitar = () => {

  return (
    <section className={styles.container} id="guitar">
        <div>
          <h3> The Guitar Doctor.</h3>
          {/* {guitarSongs.map(guitarSong => 
            <audio controls className={styles.audioLink}>
              <source src={guitarSong.audioLink} type="audio/mpeg"/ >
              Your browser does not support the audio tag.
            </audio>
          )} */}
        </div>
        <img src='/assets/images/Rock_Star.webp' className={styles.bgPic} alt='Guitar Page BG' />   
    </section>
  )
}

export default Guitar;
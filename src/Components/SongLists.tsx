import { songLists } from '../data';
import styles from './SongLists.module.css'

const SongLists = () => {

  return (
    <div className={styles.container}>
      {songLists.map((songList) =>
          <section id={songList.id} className={`${songList.id==='banjo' ? styles.banjoBox : styles.guitBox}`} >
            <div className={styles.titleBox}>
              <h2 className={styles.title}>{songList.sectionTitle}</h2>
              <img src={songList.bgImg} className={styles.bgPic}  alt='Homepage BG' />
            </div>
            <div className={styles.list}>
              {songList.songs.map((song:any) => 
                <ul className={styles.audioList}>
                  <h4>{song.title}</h4>
                  <audio controls className={styles.audioLink}>
                    <source src={song.audioLink} type="audio/mpeg"/ >
                    Your browser does not support the audio tag.
                  </audio>
                </ul> 
              )}
            </div>
          </section>
      )}
    </div>
  )
}

export default SongLists
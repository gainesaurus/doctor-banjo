import styles from './Arrangements.module.css';
import { arrangements } from '../data';

const Arrangements = () => {

  return (
    <section className={styles.container} id="arrangements">
      <h3> Arrangements by the Doctor.</h3>
      {arrangements.map(arrangement => 
        <div>
          <h3 className={styles.title}>{arrangement.title}</h3>
          <div className={styles.materials}>
            {arrangement.pdfLink.map(pdf => 
              <object className={styles.pdfLink} data={`${pdf}.pdf`} aria-label={`${arrangement.title} Composition`} role="document" />
            )}
          </div>
          <div className={styles.audioList}>
            {arrangement.audioLinks.map(audioLink => 
            <audio controls className={styles.audioLink}>
              <source src={audioLink} type="audio/mpeg" />
              Your browser does not support the audio tag.
           </audio>
            )}
          </div>
        </div>
      )}     
    </section>
  )
}

export default Arrangements;
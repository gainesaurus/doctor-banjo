import styles from './Compositions.module.css';
import { compositions } from '../data';

const Compositions = () => {

  return (
    <section className={styles.container} >
     {compositions.map(composition =>
        <section className={styles.list} id={composition.id}>
          <h3 className={styles.listTitle}>{composition.listTitle}</h3>
          {composition.samples.map(sample => 
            <div className={styles.compCard}>
              <h3 className={styles.compTitle}>{sample.title}</h3>
              <div className={styles.compMaterials}>
                <object className={styles.pdfLink} data={`${sample.pdfLink}.pdf#page=3`} aria-label={`${sample.title} Composition`} role="document" />
                <div className={styles.audioList}>
                  {sample.audioLinks.map(audioLink =>
                    <audio controls className={styles.audioLink}>
                      <source src={audioLink} type="audio/mpeg"/ >
                      Your browser does not support the audio tag.
                    </audio>
                  )}
                </div>

                {sample.videoLink ?
                  <div className={styles.videoLink}>video</div>
                  :
                  null
                }
                
              </div>
            </div>
          )}
        </section>
      )}
    </section>
  )
}

export default Compositions;
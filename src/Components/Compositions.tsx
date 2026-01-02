import { useState } from 'react';
import styles from './Compositions.module.css';
import { projects } from '../data';

const Compositions = () => {

  return (
    <section className={styles.container} id="compositions" >
     {projects.map(project =>
        <section className={styles.list}>
          <h3 className={styles.listTitle}>{project.listTitle}</h3>
          {project.samples.map(sample => 
            <div className={styles.compEntry}>
              <h3 className={styles.compTitle}>{sample.title}</h3>
              <div className={styles.compMaterials}>
                <object className={styles.pdfLink} data={`${sample.pdfLink}.pdf#page=3`} />
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
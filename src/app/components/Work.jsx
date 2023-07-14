import React from "react";
import styles from "../styles/work.module.scss";

const Work = () => {
  return (
    <div className={styles.work}>
      <div className={styles.container}>
        <h2 id="work">How Ott watch party works</h2>

        <div className={styles.content}>
          <div className={styles.timeline}>
            <div className={styles.item}>
              <div className={styles.first}></div>
              <div className={styles.second}>
                <img src="./semi-circle1.svg" alt="semi-circle" />
                <p>Install watch Ott party </p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.first}>
                <p>Pin watch Ott party</p>
                <img src="./semi-circle2.svg" alt="semi-circle" />
              </div>
              <div className={styles.second}></div>
            </div>
            <div className={styles.item}>
              <div className={styles.first}></div>
              <div className={styles.second}>
                <img src="./semi-circle1.svg" alt="semi-circle" />
                <p>Open a video</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.first}>
                <p>Create watch Ott party</p>
                <img src="./semi-circle2.svg" alt="semi-circle" />
              </div>
              <div className={styles.second}></div>
            </div>
            <div className={styles.item}>
              <div className={styles.first}></div>
              <div className={styles.second}>
                <img src="./semi-circle1.svg" alt="semi-circle" />
                <p>Join in watch Ott party</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

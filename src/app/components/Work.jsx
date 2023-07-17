import React from "react";
import styles from "../styles/work.module.scss";
import Image from "next/image";

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
                <div className="image-container" style={{ width: "10rem" }}>
                  <Image
                    fill={true}
                    className="image"
                    src="./semi-circle1.svg"
                    alt="semi-circle"
                  />
                </div>
                <p>Install watch Ott party </p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.first}>
                <p>Pin watch Ott party</p>
                <div
                  className="image-container"
                  style={{ width: "10rem", marginBottom: "-.2rem" }}
                >
                  <Image
                    fill={true}
                    className="image"
                    src="./semi-circle2.svg"
                    alt="semi-circle"
                  />
                </div>
              </div>
              <div className={styles.second}></div>
            </div>
            <div className={styles.item}>
              <div className={styles.first}></div>
              <div className={styles.second}>
                <div className="image-container" style={{ width: "10rem" }}>
                  <Image
                    fill={true}
                    className="image"
                    src="./semi-circle1.svg"
                    alt="semi-circle"
                  />
                </div>
                <p>Open a video</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.first}>
                <p>Create watch Ott party</p>
                <div
                  className="image-container"
                  style={{ width: "10rem", marginBottom: "-.2rem" }}
                >
                  <Image
                    fill={true}
                    className="image"
                    src="./semi-circle2.svg"
                    alt="semi-circle"
                  />
                </div>
              </div>
              <div className={styles.second}></div>
            </div>
            <div className={styles.item}>
              <div className={styles.first}></div>
              <div className={styles.second}>
                <div className="image-container" style={{ width: "10rem" }}>
                  <Image
                    fill={true}
                    className="image"
                    src="./semi-circle1.svg"
                    alt="semi-circle"
                  />
                </div>
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

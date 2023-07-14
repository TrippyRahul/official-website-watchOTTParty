import React from "react";
import styles from "../styles/Hero.module.scss";
import Button from "./Button";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles["inner-container"]}>
            <div className={styles.headings}>
              <h2>
                Enjoy movies together and create your own watching room at{" "}
              </h2>
              <h1>Watch Ott party</h1>
            </div>
            <div className={styles.text}>
              <p>
                Watch ottparty is a new way to watch movies and series together
                with friends.
              </p>
              <p>
                You can enjoy a virtual movie night with your long-distance
                special one and create your special memory with them. Plus, you
                can create your own watching room.
              </p>
            </div>
            <div className={styles.btn}>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

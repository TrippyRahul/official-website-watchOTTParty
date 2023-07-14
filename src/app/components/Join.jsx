import React from "react";
import styles from "../styles/join.module.scss";
import Button from "./Button";

const Join = () => {
  return (
    <div className={styles.join}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.card}>
            <h3>Install Watch ott party</h3>
            <p>
              To install Watch ott party, start off by clicking the
              <span>"Install Watch ott party"</span> button on this page.
            </p>
          </div>
          <div className={styles.arrow}>
            <img src="./arrow.svg" alt="arrow" />
          </div>
        </div>
        <div className={styles.right}>
          <h2>How to join watch Ott party</h2>
          <p>
            Click on the party URL that will take you to the Netflix watch party
            website where you can watch Netflix together with your buddy. When
            you go to the website, you can instantly join the party. To do this,
            click the "TP" icon next to the address bar.
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Join;

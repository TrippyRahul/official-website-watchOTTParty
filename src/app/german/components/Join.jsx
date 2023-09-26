import React from "react";
import styles from "@/app/styles/join.module.scss";
import Button from "./Button";
import Image from "next/image";

const Join = () => {
  return (
    <div className={styles.join}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.card}>
            <h3>Install Watch ott party</h3>
            <p>
              To install Watch ott party, start off by clicking the
              <span>&quot;Install Watch ott party&quot;</span> button on this
              page.
            </p>
          </div>
          <div className={styles.arrow}>
            <div className={styles[`arrow-container`]}>
              <div className={styles["image-container"]}>
                <Image
                  src="/arrow.svg"
                  alt="arrow"
                  fill={true}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
          <div className={styles.card2}>
            <h2>How to join watch Ott party</h2>
            <p>
              Click on the party URL that will take you to the{" "}
              <span> Netflix watch party website </span> where you can watch
              Netflix together with your buddy. When you go to the website, you
              can instantly join the party. To do this, click the &quot;TP&quot;
              icon next to the address bar.
            </p>
            <Button />
          </div>
        </div>
        <div className={styles.right}>
          <iframe
            // width="560"
            // height="315"
            className={styles.video}
            src="https://www.youtube.com/embed/rls9Cy2aGDQ?si=yYPXhQ2NN8NSF8L7"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Join;

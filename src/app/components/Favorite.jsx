import React from "react";
import styles from "../styles/favorite.module.scss";
import Image from "next/image";

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles["left-top"]}>
              <div className={styles.headings}>
                <h2>
                  Watch now your favorite streaming websites with watch OTT
                  party
                </h2>
              </div>
              <div className={styles.desc}>
                <p>
                  To enjoy millions of fantastic shows with friends, quickly
                  download watch OTT party on Netflix Teleparty, amazon,
                  YouTube, Hulu, Disney Plus, HBO,{" "}
                  <span>peacock watch party</span>, and Amazon Prime websites.
                  By creating your own<span> watching room</span>, you can share
                  your favorite show with your family and friends.
                </p>
              </div>
            </div>
            <div className={styles["left-bottom"]}>
              <div className={styles.headings}>
                <h2>Time Sync Ott watchparties in HD</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  If you are watching a movie with your loved one, it&apos;s just you
                  need to log in at the same time. So that you can take
                  advantage of fast buffering and HD video quality in all of
                  your watch Ott party on your desktop. Watch Ottparty is the
                  best extension as compared to the{" "}
                  <span>Teleparty extension </span>as it has the best features.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className="image-container">
              <Image
                src="./favorite.svg"
                alt="favorite"
                fill={true}
                className="image"
              />
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles["bottom-left"]}>
            <div className={styles.bg}>
              <div className={styles["bg-image-container"]}>
                <Image
                  src="./customize-bg.svg"
                  alt="customize-bg"
                  fill={true}
                  className={styles["bg-image"]}
                />
              </div>
            </div>
            <div className="image-container">
              <Image
                src="./customize.svg"
                alt="customize"
                fill={true}
                className="image"
              />
            </div>
          </div>
          <div className={styles["bottom-right"]}>
            <div className={styles.headings}>
              <h2>Customize your watch ott party</h2>
            </div>
            <div className={styles.desc}>
              <p>
                You can select a creative user icon and moniker to personalize
                your watch ott party to experience the most amazing features at
                the Watch Ott party.
              </p>
              <p>
                Compared to<span> the teleparty extension</span>, it will allow
                you to make your own watching room So that you can enjoy your
                best series at Amazon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;

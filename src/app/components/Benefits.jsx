import React from "react";
import styles from "../styles/benefits.module.scss";
import Button from "./Button";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles["image-container"]}>
            <Image
              src="./benefits.svg"
              alt="benefits"
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.headings}>
              <h2>
                A fresh way to watch movies and series with your family and
                friends.
              </h2>
            </div>
            <div className={styles.desc}>
              <p>
                Watch ottparty is a new way to watch movies and series together
                with your close ones.
              </p>
              <p>
                You can chat while enjoying the watch Ott party because it
                synchronizes the playback and features a chat option, where you
                have a chat with your mate without getting disturbed. It is
                compatible with well-known <span> party streaming </span> services
                including Netflix, <span> movies on paramount plus, </span>{" "}
                amazon, Disney Plus, Hulu, peacock, youtube, and{" "}
                <span> hbomax Party. </span>
                You can enjoy a virtual movie night with your long-distance
                special one. Plus, the best part is that you can create your own
                <span> watching room </span> without getting interrupted.
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

export default Benefits;

"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/Hero.module.scss";
import Button from "./Button";

const Hero = () => {
  const [bgClass, setBgClass] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBgClass(styles["hero-mobile"]);
      } else {
        setBgClass(styles["hero-large"]);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`${styles.hero} ${bgClass}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles["inner-container"]}>
            <div className={styles.headings}>
              <h2>Enjoy movies together and create your own watch party at</h2>
              <h1>Watch Ott party</h1>
            </div>
            <div className={styles.text}>
              <p>
                Have a blast watching movies and shows together with the Watch
                Ott party and create your own watch party to chat and enjoy the
                fun with friends in real-time.
              </p>
              {/* <p>
                You can enjoy a virtual movie night with your long-distance
                special one and create your special memory with them. Plus, you
                can create your own watching room.
              </p> */}
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

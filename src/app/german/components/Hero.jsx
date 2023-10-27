"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/styles/Hero.module.scss";
import Button from "@/app/components/Button";

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
              <h1>Dies ist eine neue Art, Filme und Serien anzusehen</h1>
            </div>
            <div className={styles.text}>
              <p>
                Es ist die einzigartigste Möglichkeit, Ihre Lieblingssendung mit
                einem zu streamen watch party. Wie in dieser Erweiterung
                erhalten Sie eine große Auswahl an Streaming-Plattformen wie
                Netflix watch party, amazon prime watch party, disney plus watch
                party, HBO Max, Hulu und viele mehr. Hier können Sie mit Ihren
                Lieben die neuesten Serien ansehen.
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

"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/work.module.scss";
import Image from "next/image";

const steps = [
  { id: 1, text: "Install watch Ott party" },
  {
    id: 2,
    text: "Pin watch Ott party",
  },
  {
    id: 3,
    text: "Open a video",
  },
  {
    id: 4,
    text: "Create watch Ott party ",
  },
  {
    id: 5,
    text: " Join in watch Ott party",
  },
  
];

const Work = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.work} id="how-it-works">
      <div className={styles.container}>
        <h2 id="work">How Ott watch party works</h2>

        {!isMobile && (
          <div className={styles.content}>
            <div className={styles.timeline}>
              <div className={styles.item}>
                <div className={styles.first}></div>
                <div className={styles.second}>
                  <div className={styles["image-container"]}>
                    <Image
                      fill={true}
                      className={styles.image}
                      src="/semi-circle1.svg"
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
                    className={styles["image-container"]}
                    style={{ marginBottom: "-.6rem" }}
                  >
                    <Image
                      fill={true}
                      className={styles.image}
                      src="/semi-circle2.svg"
                      alt="semi-circle"
                    />
                  </div>
                </div>
                <div className={styles.second}></div>
              </div>
              <div className={styles.item}>
                <div className={styles.first}></div>
                <div className={styles.second}>
                  <div className={styles["image-container"]}>
                    <Image
                      fill={true}
                      className={styles.image}
                      src="/semi-circle1.svg"
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
                    className={styles["image-container"]}
                    style={{ marginBottom: "-.6rem" }}
                  >
                    <Image
                      fill={true}
                      className={styles.image}
                      src="/semi-circle2.svg"
                      alt="semi-circle"
                    />
                  </div>
                </div>
                <div className={styles.second}></div>
              </div>
              <div className={styles.item}>
                <div className={styles.first}></div>
                <div className={styles.second}>
                  <div className={styles["image-container"]}>
                    <Image
                      fill={true}
                      className={styles.image}
                      src="/semi-circle1.svg"
                      alt="semi-circle"
                    />
                  </div>
                  <p>Join in watch Ott party</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {isMobile && (
          <ul className={styles.steps}>
            {steps.map((step) => (
              <li key={step.id}>{step.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Work;

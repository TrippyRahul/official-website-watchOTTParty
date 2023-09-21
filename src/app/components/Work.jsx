"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/work.module.scss";
import Image from "next/image";

const steps = [
  { id: 1, text: "Install the extension to your Firefox browser" },
  {
    id: 2,
    text: " Now go to any of your favorite streaming platforms like Netflix, Disney Plus, and many more to select the show which you want to watch.",
  },
  {
    id: 3,
    text: "Start playing the video and click on the teleparty icon",
  },
  {
    id: 4,
    text: " Generate a unique party link ",
  },
  {
    id: 5,
    text: " Share the link with your friends and family",
  },
  {
    id: 6,
    text: "Join the party",
  },
  {
    id: 7,
    text: "It has amazing features including chat, audio, and video calls ",
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

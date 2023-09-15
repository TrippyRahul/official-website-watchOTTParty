import React from "react";
import styles from "../styles/about.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.headings}>
              <h2>About watch Ott party</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Ott <span> watchparty </span>is a browser extension that allows
                users to enjoy movies and series simultaneously with their soul
                mates. Even if you are geographically separated, you can enjoy
                your favorite shows with watch ott a party. With the chat
                feature and synchronized playback on your desktop, you can
                chit-chat and share reactions in real time while taking in the
                same entertainment.
              </p>
              <p>
                Watch ott party is a useful tool for a
                <span> group watch Netflix</span>
                movies and series marathons because it supports a variety of
                streaming services, such as Netflix, youtube, peacock, Disney
                plus,<span>Hulu watch party, amazon watch party</span> , and HBO
                Max.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="/about.svg"
                alt="about"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>
            Don&apos;t worry if have a long-distance relationship, still,{" "}
            <span>your friends watch online Hindi movies on Hulu.</span> with
            its sense of closeness and shared experience among individuals, it
            brings people closer together. Here, you can also{" "}
            <span>watch parties on Netflix.</span>
            Compared to the <span>teleparty extension</span> watch Ottparty,
            there are numerous features and options to enjoy your best movie
            experience with your loved ones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

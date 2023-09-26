import React from "react";
import styles from "@/app/styles/platforms.module.scss";
import Image from "next/image";

const data = [
  {
    id: 1,
    img: "/netflix.svg",
  },
  {
    id: 2,
    img: "/hulu.svg",
  },
  {
    id: 3,
    img: "/hotstar.svg",
  },
  {
    id: 4,
    img: "/prime.svg",
  },
  {
    id: 5,
    img: "/youtube.svg",
  },
  {
    id: 5,
    img: "/hbo.svg",
  },
];

const Platforms = () => {
  return (
    <div className={styles.platforms}>
      <h2>Watch Ott Party is available on </h2>
      <div className={styles.container}>
        {data.map((platform) => (
          <div className={styles.card} key={platform.id}>
            <div className={styles["image-container"]}>
              <Image
                src={platform.img}
                alt={platform.img}
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Platforms;

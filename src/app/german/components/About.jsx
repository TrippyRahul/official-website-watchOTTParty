import React from "react";
import styles from "@/app/styles/about.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.headings}>
              <h2>Über uns</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Es ist die beliebteste Browsererweiterung, mit der Sie Filme und
                Serien gleichzeitig mit Ihren Liebsten genießen können. Es
                spielt keine Rolle, ob Sie physisch nicht zusammen sind, Sie
                können Ihren virtuellen Filmtermin trotzdem mit ihnen planen. Es
                verfügt über einige unglaubliche Chat-Funktionen und
                synchronisiert die Wiedergabe automatisch auf Ihrem Desktop. Das
                Beste daran ist, dass Sie jetzt während der Show in Echtzeit
                plaudern und Ihre Reaktionen teilen können. Sie können auch
                Ihren eigenen Raum erstellen, in dem Sie Emojis teilen und
                gleichzeitig Ihre Lieblingsinhalte genießen können. Es ist der
                beste Weg, Menschen einander näher zu bringen und ein
                unvergessliches Erlebnis mit Ihren Lieben zu erleben.
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
      </div>
    </div>
  );
};

export default About;

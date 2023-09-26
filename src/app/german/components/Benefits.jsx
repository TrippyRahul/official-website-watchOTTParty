import React from "react";
import styles from "@/app/styles/benefits.module.scss";
import Button from "./Button";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles["image-container"]}>
            <Image
              src="/benefits.svg"
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
                Streamen Sie Ihre Lieblingssendungen und schauen Sie gemeinsam
                mit einer Uhrenparty zu
              </h2>
            </div>
            <div className={styles.desc}>
              <p>
                Es gibt Millionen der neuesten Sendungen, die Sie mit Ihren
                Liebsten ansehen können. In dieser Erweiterung können Sie auch
                Ihren eigenen Beobachtungsraum erstellen, wo Sie können
                watch2gether netflix und viel Spaß beim Versenden von Emojis mit
                ihnen.
              </p>
              <p>
                In Teleparty Netflix können Sie und Ihre Freunde stream party
                Gleichzeitig wird die Wiedergabe automatisch synchronisiert.
                Durch das Herunterladen dieser Erweiterung profitieren Sie von
                vielen Vorteilen, da sie HD-Videoqualität und schnelle Pufferung
                auf Ihrem Desktop bietet. Es ist der beste Browser, den Sie
                finden können groupwatch disney plus.
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

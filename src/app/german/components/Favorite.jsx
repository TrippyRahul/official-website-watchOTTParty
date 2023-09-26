import React from "react";
import styles from "@/app/styles/favorite.module.scss";
import Image from "next/image";

const Favorite = () => {
  return (
    <div className={styles.favorite} id="features">
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles["left-top"]}>
              <div className={styles.headings}>
                <h2>So treten Sie der Party bei</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  Es ist ein sehr einfacher Vorgang. Gehen Sie zunächst zu Ihrem
                  Browser und laden Sie dann die Erweiterung herunter und
                  installieren Sie sie. Sie können Chrome auch auf Ihrem Desktop
                  hinzufügen. Hier können Sie den URL-Link erstellen, um Ihre
                  Freunde und Familie zur Teilnahme an der Party einzuladen,
                  oder Sie können auch den Einladungslink zur Teilnahme an der
                  Party erhalten. Nachdem Sie auf den URL-Link geklickt haben,
                  können Sie der Party beitreten und die beste Showzeit
                  genießen.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="/favorite.svg"
                alt="favorite"
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

export default Favorite;

import React from "react";
import styles from "@/app/styles/comments.module.scss";

const data = [
  {
    id: 1,
    text: "Dies ist die beste Erweiterung, mit der ich die neuesten Filme und Serien abrufen kann.",
  },
  {
    id: 2,
    text: "Wow!! Es gibt so viele Shows, dass Sie es sich nicht einmal entgehen lassen sollten, sie mit Ihren Freunden anzusehen.",
  },
  {
    id: 3,
    text: "Jetzt kann ich mit meinen Freunden chatten, Audio- und Videoanrufe tätigen, während ich mir einen Film ansehe. Macht das nicht Spaß!!",
  },
  {
    id: 4,
    text: "Mit diesem Tool können Sie jetzt Ihre Gesichtsausdrücke über Emojis teilen, während Sie Ihre Lieblingssendung streamen.",
  },
  {
    id: 5,
    text: "Dies ist die einzigartigste Möglichkeit, Ihre Lieblingsinhalte mit Ihren Liebsten zu genießen.",
  },
];

const Comments = () => {
  return (
    <div className={styles.comments}>
      <div className={styles.container}>
        <h2>Rezensionen</h2>
        <div className={styles.content}>
          {data.map((comment) => (
            <div className={styles.card} key={comment.id}>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;

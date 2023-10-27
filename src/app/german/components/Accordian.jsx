"use client";

import React, { useState } from "react";
import styles from "@/app/styles/accordian.module.scss";
import Button from "@/app/components/Button";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "Können Sie mit dieser Browsererweiterung Gruppenvideos ansehen?",
    ans: "Ja, Sie können mit dieser Browsererweiterung die Gruppenüberwachung nutzen. Sie können sogar Ihren Beobachtungsraum erstellen, in dem Sie beim Streamen alle Ihre Gedanken teilen können.",
  },
  {
    id: 2,
    ques: "Wie kann man Netflix gemeinsam schauen?",
    ans: "Öffnen Sie einfach die Erweiterung und suchen Sie darin nach Netflix. Um Sendungen auf Netflix anzusehen, benötigen Sie lediglich ein gültiges Konto und ein Abonnement für Netflix.",
  },
  {
    id: 3,
    ques: "Was können Sie auf HBO Max sehen?",
    ans: "Auf HBO Max können Sie die neuesten Shows, Serien und Filme ansehen.",
  },
  {
    id: 4,
    ques: "Kann ich mein Konto mit meinen Lieben teilen?",
    ans: "Ja, Sie können Ihr Konto mit Ihren Lieben teilen. ",
  },
  {
    id: 5,
    ques: "Wie kann man auf der Watch-Party seine Lieblingssendungen ansehen?",
    ans: "Es ist ganz einfach: Öffnen Sie einfach die Erweiterungs- und Suchplattform, auf der Sie über ein gültiges Konto und Abonnement verfügen, und schauen Sie sich Ihre Lieblingsserien an.",
  },
];

const Accordian = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (questionId) => {
    if (showAnswer === questionId) {
      setShowAnswer(null);
    } else {
      setShowAnswer(questionId);
    }
  };

  return (
    <div className={styles.accordian}>
      <div className={styles.container}>
        <h2>FAQ</h2>

        <ol>
          {questions.map((question) => (
            <li key={question.id} onClick={() => toggleAnswer(question.id)}>
              <div className={styles.question}>
                <p>{question.ques}</p>
                <div className={styles["image-container"]}>
                  <Image
                    src="/add-logo.svg"
                    alt="add-logo"
                    fill={true}
                    className={styles.image}
                  />
                </div>
              </div>
              {showAnswer === question.id && (
                <div
                  className={`${styles.answer} ${
                    showAnswer === question.id ? styles.active : ""
                  }`}
                >
                  <p>{question.ans}</p>
                </div>
              )}

              {/*
               */}
            </li>
          ))}
        </ol>
        <Button />
      </div>
    </div>
  );
};

export default Accordian;

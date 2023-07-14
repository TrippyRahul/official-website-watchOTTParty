"use client";

import React, { useState } from "react";
import styles from "../styles/accordian.module.scss";
import Button from "../components/Button";

const questions = [
  {
    id: 1,
    ques: "How to watch Netflix together on watch Ott party?",
    ans: "Install Ott watchparty browser extension and open Netflix. Now, Navigate to the Netflix content you want to watch and start playing the video. Then activate Ott and share the link to the Netflix party extension with your family and friends with whom you want to watch. Here you can watch movies together online along with other available content.",
  },
  {
    id: 2,
    ques: "How to watch HBO Max with friends on watch Ott party?",
    ans: "If you consider using the HBO Max watch Party browser extension or arranging a virtual meeting on a site like Zoom or Discord. Then you can share your  HBO Max screenshare with your relative.",
  },
  {
    id: 3,
    ques: "How to watch movies with friends online at watch Ott party?",
    ans: "Install the browser extension, pick a movie, and invite your friends to the watch ott party by sharing the generated link to watch movies with friends online with watch ott party. You can also Watch youtube together while it plays in time sync and group chat with each other. And you can also disney plus watch party with your loved ones.",
  },
  {
    id: 4,
    ques: "How to do Netflix party at watch Ott party?",
    ans: "You can install the browser extension and invite your dear ones to watch Netflix. You can also youtube watch together and Netflix shared screen with your buddy. So, don’t wait too much and download the watch ott party website. While using this browser extension you can Netflix share play and Netflix sharing screen with your family.",
  },
  {
    id: 5,
    ques: "Can you groupwatch on Netlfix at watch Ott party?",
    ans: "Yes, you can definitely groupwatch on Netflix. So hurry up and netflix download for the latest content.",
  },
  {
    id: 6,
    ques: "What to watch on Netflix at watch Ott party?",
    ans: "You can watch the multiple latest series and movies on Teleparty Netflix and you can also Netflix chat.",
  },
  {
    id: 7,
    ques: "How to watch Hulu with friends at watch Ott party?",
    ans: "You can watchparty Hulu and live start sports with your confident. There are a bunch of Indian movies on Hulu that you can share with your friends.",
  },
  {
    id: 8,
    ques: "Does HBO have watchparty at watch Ott party?",
    ans: "Yes, there is an HBO Max watch party on this website. Where you can watch party on HBO Max. There you can also have HBO group watch with your long-distance special one.",
  },
  {
    id: 9,
    ques: "Can I share my paramount plus account at watch Ott party?",
    ans: "Yes, you can definitely share your paramount plus account with your special one. There is a movies on paramount plus watch party where you can enjoy your favorite shows with them.",
  },
  {
    id: 10,
    ques: "What are the features of watch Ott party?",
    ans: "There are various features that your friends where to watch their favorite shows on Disney watchparty and in Primevideo watch party you can have multiple movies and shows where you can enjoy amazon prime video watch party with your friends.  For more entertaining shows and movies, you can watch movies on Hulu, paramount plus, youtube watch Party, and peacock.   You can create your own watching room and watchtogether your favorite shows on watchparty Disney plus and enjoy multiple shows on watch parties Disney Plus. You can also disneyplus chat at the same time with your comrade while watching a movie.    While watching your most loved shows, you can create your own chatting group,  so that you can have a group chat with your long-distance friends. ",
  },
  {
    id: 11,
    ques: "Does Netflix have watch party?",
    ans: "Yes, Netflix has a watch ott party, and with the help of a Netflix watch ott party, you can on your party mode and have the best movie nights streaming.",
  },
  {
    id: 12,
    ques: "How to watch a movie with friends online?",
    ans: "By installing Watch Ottparty, you can share your best series or movies with amazon prime watch party and watch them online with your companion and you can also chat with them while watching a movie. So, have the best movie party with Watch Ottparty.",
  },
  {
    id: 13,
    ques: "Can you watch Netflix with friends?",
    ans: "Yes, you can watch Netflix with your mate.",
  },
  {
    id: 14,
    ques: " What is a watch party?",
    ans: "It is a tool where a group of people gather together to watch a movie or show at the same time, usually using a streaming platform, and share their reactions and comments with each other. It's like having a movie night with friends, but everyone watches from their own location and interacts online.",
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
        <h2>FREQUENTLY ASKED QUESTION</h2>

        <ol>
          {questions.map((question) => (
            <li key={question.id} onClick={() => toggleAnswer(question.id)}>
              <div className={styles.question}>
                <p>{question.ques}</p>
                <div className={styles.img}>
                  <img src="./add-logo.svg" alt="add-logo" />
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

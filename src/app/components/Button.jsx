'use client'
import React from "react";
import styles from "../styles/button.module.scss";

const Button = () => {
  const handleClick = () => {
    window.location.href =
      "https://chrome.google.com/webstore/detail/watchottparty/akbbdmilignoplkhminiaecccigmpdmo?hl=en-US";
  };
  return (
    <button className={styles.btn} onClick={handleClick}>
      install Watch ott party
    </button>
  );
};

export default Button;

"use client";

import React from "react";
import styles from "@/app/styles/blog.module.scss";
import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";

const data = [];

const page = () => {
  return (
    <>
      <Header />
      {/* <head>
        <title> Teleparty extension Vs Scener Chrome extension</title>
        <meta
          name="description"
          content="STeleparty extension vs Scener Chrome
          extension is a browser extension where you can enjoy a vast variety of movies on one screen.."
        ></meta>
      </head>
      <Navbar />
      <div className={styles.blog}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>Teleparty extension Vs Scener Chrome extension</h1>
          </div>
          {data.map((article) => (
            <div className={styles.para} key={article.id}>
              {article.heading.length > 0 && <h4>{article.heading}</h4>}
              <p>{article.desc}</p>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default page;

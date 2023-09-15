import React from "react";
import styles from "@/app/styles/blogs.module.scss";
import Link from "next/link";
import Header from "../components/Header";

const blogsData = [
  {
    id: "1",
    title: "Teleparty extension Vs Scener Chrome extension",
    desc: "Planning to watch a movie with your family and friends, but somehow you can not make it due to some reasons. Worry not! You can still stream your favorite shows with them. As there are multiple Ott platforms that provide unlimited movies and shows. Scener and Teleparty extension are great options where you can plan your movie date with your special one. They both have great features and offer a vast variety of the latest TV shows, series, and movies. ",
    date: "Sep 13, 2023",
    slug: "teleparty-extension-vs-scener-chrome-extension",
  },
];

const page = () => {
  return (
    <>
      <Header />
      <div className={styles.blogs}>
        <div className={styles.container}>
          {blogsData.map((blog) => (
            <Link href={`/blogs/${blog.slug}`} key={blog.id}>
              <div className={styles.card}>
                <div className={styles[`card-title`]}>
                  <h3> {blog.title}</h3>
                  <p>{blog.desc}</p>
                </div>

                <div className={styles[`card-desc`]}>
                  <span>{blog.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;

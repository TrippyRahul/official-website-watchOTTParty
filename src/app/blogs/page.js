import React from "react";
import styles from "@/app/styles/blogs.module.scss";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const blogsData = [];

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
      <Footer />
    </>
  );
};

export default page;

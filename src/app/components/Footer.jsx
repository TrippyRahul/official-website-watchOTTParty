import React from "react";
import styles from "../styles/footer.module.scss";
import Button from "./Button";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <h2>Watch OTT Party</h2>
        <p>
          Watch ott party is a new way to watch movies and series together with
          friends.
        </p>

        <Button />

        <hr className={styles.line} style={{ color: "gray" }} />

        <div className={styles.content}>
          <div className={styles["popular-searches"]}>
            <p>
              <span>Popular searches:</span>{" "}
              <a href="https://www.hbomaxparty.net/" target="_blank">
                {" "}
                HBO Max watch party{" "}
              </a>
              ,{" "}
              <a href="https://www.disneyhotstarparty.com/" target="_blank">
                Disney Plus watch party
              </a>
              ,
              <a href="https://www.huluwatchparty.co/" target="_blank">
                {" "}
                Hulu watch party
              </a>
              ,{" "}
              <a href="https://www.amazonprimeparty.com/" target="_blank">
                {" "}
                amazon watch party
              </a>
              , movies on paramount plus,{" "}
              <a href="https://www.peacockparty.net/" target="_blank">
                peacock watch party
              </a>
              ,{" "}
              <a href="https://www.youtubeparty.com/" target="_blank">
                youtube watch party
              </a>
              , viewing party, Netflix share play, movie night streaming,
              watching room,{" "}
              <a href="https://www.teleparty.pro/" target="_blank">
                {" "}
                teleparty extension
              </a>
              , live star sports
            </p>
          </div>
          <ul>
            <li className="inline-block pl-4">
              <a href="/">
                <BsFacebook className={styles.icon} />
              </a>
            </li>
            <li className="inline-block pl-6">
              <a href="/">
                <AiFillTwitterCircle className={styles.icon} />
              </a>
            </li>
            <li className="inline-block pl-6">
              <a href="/">
                <AiFillLinkedin className={styles.icon} />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Disclaimer</Link>
            </li>
            <li>
              <Link href="/">Blogs</Link>
            </li>
            <li>
              <Link href="/">Terms & Condition</Link>
            </li>
          </ul>

          <div className={styles.copyright}>
            <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

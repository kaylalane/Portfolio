/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import { FaGithub, FaRegEnvelope, FaTwitter } from "react-icons/fa";
import styles from "../styles/animations.module.scss";

export default function Footer() {
  //small is for small print / terms and conditions
  return (
    <footer className="">
      <ul>
        <li>
          <Link
            href="https://twitter.com/thekaylalane"
            className={styles.raised_hover}
          >
            <FaTwitter className="fa-twitter" />
            <span className="sr-only">Kayla Lane&apos;s Twitter/X</span>
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/kaylalane"
            target="__blank"
            rel="noreferrer"
            className={styles.raised_hover}
          >
            <FaGithub className="fa-github" />
            <span className="sr-only">Kayla Lane&apos;s Github</span>
          </Link>
        </li>
        <li>
          <Link
            href="mailto:kaylalane188@icloud.com"
            target="__blank"
            rel="noreferrer"
            className={styles.raised_hover}
          >
            <FaRegEnvelope className="fa-email" />
            <span className="sr-only">Kayla Lane&apos;s Email</span>
          </Link>
        </li>
      </ul>

      <div>
        <p>
          <small>&copy; 2023 Kayla Lane</small>
        </p>
      </div>
    </footer>
  );
}

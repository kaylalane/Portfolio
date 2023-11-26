/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import { FaTwitter, FaGithub } from "react-icons/fa";
import Contact from "../components/contacts";
import Projects from "../components/projects";
import animations from "../styles/animations.module.scss";
import "../styles/home.scss";

export default async function Home() {
  return (
    <div className="">
      <article id="intro" className="intro min-h-screen">
        <p>Hi, my name is</p>
        <h2 className=" intro__name">Kayla Lane</h2>
        <p className="intro__title"> I&apos;m a Frontend Developer </p>
        <p>I specialize in React, Next.js and Node.js apps.</p>
        <ul className=" intro__icon-list">
          <li>
            <Link
              href="https://twitter.com/thekaylalane"
              aria-label="Kayla Lane's Twitter"
              className={animations.raised_hover}
            >
              <FaTwitter className="fa-twitter" />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/kaylalane"
              aria-label="Kayla Lane's Github"
              className={animations.raised_hover}
            >
              <FaGithub className="fa-github" />
            </Link>
          </li>
        </ul>
      </article>
      <Projects />
      <Contact />
    </div>
  );
}

/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import { FaTwitter, FaGithub } from "react-icons/fa";
import Contact from "../components/contacts";
import Projects from "../components/projects";
import animations from "../styles/animations.module.scss";

export default async function Home() {
  return (
    <div className="">
      <article id="intro" className=" min-h-screen">
        <div className="name">
          <p>Hi, my name is</p>
          <h1 className=" text-primary dark:text-darkaccent block text-3xl">
            Kayla Lane
          </h1>
        </div>
        <h2 className="text-3xl"> I&apos;m a Frontend Developer </h2>
        <p>I specialize in React, Next.js and Node.js apps.</p>
        <ul className="py-4 text-primary dark:text-darkaccent flexList">
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

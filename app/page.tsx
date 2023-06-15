/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Contact from "../components/contacts";
import Projects from "../components/projects";

export default async function Home() {
  return (
    <>
      <article id="intro" className=" min-h-screen">
        <div className="name">
          <p>Hi, my name is </p>
          <h1 className=" text-primary dark:text-darkaccent block text-5xl">
            Kayla Lane
          </h1>
        </div>
        <h2>I create accessible websites.</h2>
        <p>
          I&apos;m a front-end developer specializing in HTML, CSS, React.js and
          Next.js.
        </p>
        <ul className="py-4 text-primary dark:text-darkaccent">
          <li>
            <Link
              href="https://www.linkedin.com/in/kaylamarielane/"
              aria-label="Kayla Lane's LinkedIn"
            >
              <FaLinkedin className="fa-linkedin" />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/kaylalane"
              aria-label="Kayla Lane's Github"
            >
              <FaGithub className="fa-github" />
            </Link>
          </li>
        </ul>
      </article>
      <Projects />
      <Contact />
    </>
  );
}

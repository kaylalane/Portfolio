/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Contact from "@/components/contacts";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
        <article id="intro">
          <p className="name">
            Hi, my name is <span className=" block text-5xl text-accent">Kayla Lane</span>
          </p>
          <h2>I create accessible websites.</h2>
          <p>
            I&apos;m a front-end developer specializing in HTML, CSS, React.js
            and Next.js.
          </p>
          <ul>
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

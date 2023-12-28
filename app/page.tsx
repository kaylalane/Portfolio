"use client";
import Link from "next/link";
import { FaTwitter, FaGithub, FaRegEnvelope } from "react-icons/fa";
import Contact from "../components/contacts";
import Projects from "../components/projects";
import animations from "../styles/animations.module.scss";
import "../styles/home.scss";

export default function Home() {
  return (
    <div className="">
      <article id="intro" className=" min-h-screen ">
        <div className=" hero-section">
          <h1 className=" hero__name">Kayla Lane</h1>
          <p className="hero__title">
            {"//"} A frontend developer 
          </p>
          <ul >
            <li>
              <Link
                href="https://twitter.com/thekaylalane"
                className={animations.raised_hover}
              >
                <FaTwitter className="fa-twitter" size={40} />
                <span className="sr-only">Kayla Lane&apos;s Twitter/X</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/kaylalane"
                className={animations.raised_hover}
              >
                <FaGithub className="fa-github" size={40} />
                <span className="sr-only">Kayla Lane&apos;s Github</span>
              </Link>
            </li>
          </ul>
        </div>
      </article>
      <Projects />
      <Contact />
    </div>
  );
}

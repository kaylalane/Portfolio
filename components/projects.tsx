"use client";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import animations from "../styles/animations.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

export default function Projects() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const projects = gsap.utils.toArray(".project");
      projects.forEach((project) => {
        const image = project.querySelector(".project__image");
        const information = project.querySelector(".project__information");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: project,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        tl.to(image, {
          yPercent: 50,
          ease: "none",
        });
        tl.to(information, {
          yPercent: -70,
          ease: "none",
        });
      });
    },
    { scope: container }
  );
  return (
    <article id="projects" className="projects" ref={container}>
      <h2 className="text-3xl text-center p-5">Projects</h2>

      <section className="project">
        <div className="project__information">
          <div className="details-box">
            <h3 className="project__title">Fullstack MERN Blog</h3>
            <ul className="tech__list">
              <li>MongoDB</li>
              <li>Express</li>
              <li>React.js</li>
              <li>Node.js</li>
            </ul>
            A full-stack blog using Nginx as the web server, PM2 as the process
            manager and the frontend is served statically. Users can create an
            account, comment on posts, and like posts. This blog is mostly for
            show.
            <div className=" project-links">
              <Link
                href="https://kaylalane.me"
                aria-label={"Link to deployed website of "}
                className={animations.raised_hover}
                target="_blank"
                rel="noreferrer"
              >
                <FaLink size={30} />
              </Link>
            </div>
          </div>
        </div>

        <img src="/mern.png" className="project__image" />
      </section>

      <section className="project">
        <div className="project__information">
          <div className="details-box">
            <h3 className="project__title">Project Management</h3>
            <ul className="tech__list">
              <li>Next JS</li>
              <li>Next Auth</li>
              <li>Postgres SQL</li>
            </ul>
            A project management app that allows users to create an account,
            create projects, and add tasks to those projects.
            <div className="project-links flex gap-4 mt-4">
              <Link
                href="https://app-management-six.vercel.app"
                aria-label={"Link to deployed website of "}
                className={animations.raised_hover}
                target="_blank"
                rel="noreferrer"
              >
                <FaLink size={30} />
              </Link>
            </div>
          </div>
        </div>

        <img src="/projects.png" className="project__image" />
      </section>

      <section className="project">
        <div className="project__information">
          <div className="details-box">
            <h3 className="project__title">Netflix Clone</h3>

            <ul className="tech__list">
              <li>Next.js</li>
            </ul>
            <p>
              A Netflix clone that allows you to browse TV shows and movies.{" "}
            </p>
            <div className=" project-links">
              <Link
                href="https://github.com/kaylalane/netflix-clone"
                aria-label={"Github for Project Management"}
                className={animations.raised_hover}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={30} />
              </Link>
              <Link
                href="https://netflix-dusky-tau.vercel.app/"
                aria-label={"Link to deployed website of "}
                className={animations.raised_hover}
                target="_blank"
                rel="noreferrer"
              >
                <FaLink size={30} />
              </Link>
            </div>
          </div>
        </div>

        <img src="/netflix-clone.png" className="project__image" />
      </section>
    </article>
  );
}

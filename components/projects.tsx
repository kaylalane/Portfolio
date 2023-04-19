/* eslint-disable react/react-in-jsx-scope */
import styles from "../styles/projects.module.scss";
import { projects } from "./data";
import Link from "next/link";
import { FaAd, FaGithubSquare, FaArrowAltCircleUp } from "react-icons/fa";

export default function Projects() {
  return (
    <article id="projects" className="">
      <h2 className="text-3xl text-center p-5">Projects</h2>

      <div className="projects-container ">
        {projects.map((project) => (
          <section key={project.title} className="bg-black text-white">
            <h3 className="text-xl">{project.title}</h3>

            <p className="font-normal text-secondary dark:text-secondary leading-loose">
              {project.description}
            </p>
            
            <div className="flex gap-4 ">
              {project.technologies.map((tech) => (
                <p
                  key={tech}
                  className="font-normal text-secondary dark:text-secondary "
                >
                  {tech}
                </p>
              ))}
            </div>
            <div className="flex gap-2">
              <a
                href={project.github}
                className="flex w-12 h-12 py-4 my-2 bg-white rounded-lg justify-center items-center"
                target="_blank" rel="noreferrer"
              >
                <svg
                  width="30px"
                  height="30px"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                >
                  <path
                    d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
              <a
                href={project.link}
                className="flex w-12 h-12 py-4 my-2 bg-white rounded-lg justify-center items-center"
                target="_blank" rel="noreferrer"
              >
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                >
                  <path
                    d="M21 3h-6m6 0l-9 9m9-9v6"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </a>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import animations from "../styles/animations.module.scss";
import { projects } from "./data";

export default function Projects() {
  return (
    <article id="projects" className="projects">
      <h2 className="text-3xl text-center p-5 ">Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.title} className="project basis-1/4 rounded-xl">
            <div className="project__information">
              <div>
                <h3 className="align-text-bottom	text-2xl font-bold tracking-tight leading-loose">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-x-4">
                  {project.technologies.map((tech) => (
                    <p key={tech} className="font-normal ">
                      {tech}
                    </p>
                  ))}
                </div>
                <p className="font-normalleading-loose">
                  {project.description}
                </p>
              </div>

              <div className="project__links">
                {project.github !== null && (
                  <Link href={project.github} target="__blank" rel="noreferrer">
                    <FaGithub size={30} />
                  </Link>
                )}
                <Link href={project.link} target="__blank" rel="noreferrer">
                  <FaLink size={30} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

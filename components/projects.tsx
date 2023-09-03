import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";
import animations from "../styles/animations.module.scss";

export default function Projects() {
  return (
    <article id="projects" className="projects">
      <h2 className="text-3xl text-center p-5">Projects</h2>

      <section className="project reverse">
        <div className="text">
          <h3>Project Management</h3>

          <div className="details-box">
            A Next.js project management app.
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
          <h4>Technologies used:</h4>
          <ul className="technologies">
            <li>Next JS</li>
            <li>Next Auth</li>
            <li>Postgres SQL</li>
          </ul>
        </div>

        <img src="/projects.png" />
      </section>

      <section className="project">
        <div className="text">
          <h3>Do it!</h3>

          <div className="details-box">
            A Firebase todo list.
            <div className=" project-links">
              <Link
                href="https://github.com/kaylalane/todo"
                aria-label={"Github for Project Management"}
                className={animations.raised_hover}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={30} />
              </Link>
              <Link
                href="https://todo-list-9b6c5.web.app/"
                aria-label={"Link to deployed website of "}
                className={animations.raised_hover}
                target="_blank"
                rel="noreferrer"
              >
                <FaLink size={30} />
              </Link>
            </div>
          </div>

          <h4>Technologies used:</h4>

          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Tailwind</li>
            <li>Firebase</li>
          </ul>
        </div>

        <img src="/todo.png" />
      </section>

      <section className="project reverse">
        <div className="text">
          <h3>Language Resources</h3>

          <div className="details-box">
            A place to find language learning resources on various languages.
            <div className=" project-links">
              <Link
                href="https://github.com/kaylalane/language-learner"
                aria-label={"Github for Project Management"}
                className={animations.raised_hover}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={30} />
              </Link>
              <Link
                href="https://language-learner-ashy.vercel.app/"
                aria-label={"Link to deployed website of "}
                className={animations.raised_hover}
                target="_blank"
                rel="noreferrer"
              >
                <FaLink size={30} />
              </Link>
            </div>
          </div>

          <h4>Technologies used:</h4>
          <ul>
            <li>React Js</li>
            <li>Sass</li>
          </ul>
        </div>

        <img src="/language-resources.png" />
      </section>
    </article>
  );
}

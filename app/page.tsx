/* eslint-disable react/react-in-jsx-scope */
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Contact from "@/components/contacts";
import Projects from "@/components/projects";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: "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",
});

export default async function Home() {
  await octokit.request("GET /octocat", {
    headers: {
      "content-type": "text/plain",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  try {
    await octokit.request("GET /user", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
  } catch (error) {console.log("hey")}

  const user = await octokit.request("GET /users/{username}", {
    username: "kaylalane",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  const response = await user;

  console.log(response.data);
  return (
    <>
      <article id="intro" className=" min-h-screen">
        <p className="name">
          Hi, my name is <span className=" text-primary dark:text-darkaccent block text-5xl">Kayla Lane</span>
        </p>
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

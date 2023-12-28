import Image from "next/image";
import projects from "../../../public/projects.png";

export default function ProjectManagement() {
  return (
    <>
      <section className=" flex flex-row flex-wrap justify-between">
        <div className=" basis-1/2">
          <h1 className=" text-2xl mb-4">Project Management</h1>
          <p>
            A project management app. It allows you to create projects, add
            tasks to those projects, and track your progress.
          </p>
          <p>
            This app is still in development. I&apos;m currently working on
            adding user authentication and authorization.
          </p>

          <div className=" py-4">
            <h2 className=" text-xl text-darkaccent">Technologies</h2>
            <ul className=" flex gap-4">
              <li>Next.js</li>
              <li>Typescript</li>
              <li>SCSS</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
        <Image
          width={400}
          height={200}
          src={projects}
          alt=""
          className="  rounded-md "
        />
      </section>
      <section>
        <h2 className=" text-xl mb-4 text-darkaccent">What Does it Do?</h2>
        <Image
          width={500}
          height={300}
          src={"/dashboard.png"}
          alt=""
          className=" basis-1/2 rounded-md"
        />
      </section>
    </>
  );
}

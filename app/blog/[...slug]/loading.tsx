import "../../../styles/blogs.scss";

export default function Loading() {
  return (
    <div className="blog-page">
      <article className=" max-w-2xl w-screen prose prose-quoteless prose-neutral dark:prose-invert dark:prose-p:text-white">
        <div className="blog__description">
          <div className="mb-2 w-3/4 h-8 rounded bg-darkbg"></div>
          <div className="mb-4 w-2/3 h-8 rounded bg-darkbg"></div>
          <div className=" mb-2 w-20 h-6 rounded bg-darkbg"></div>
          <div className=" w-20 h-6 rounded bg-darkbg"></div>
        </div>
        <hr className="my-4" />
        <div className="mb-4 rounded h-20 bg-darkbg"></div>
        <div className=" mb-4  rounded w-2/3 h-20 bg-darkbg"></div>
        <div className=" mb-4 ml-12 rounded w-4/5 h-40 bg-darkbg"></div>
        <div className="mb-4 rounded h-20 bg-darkbg"></div>
        <div className=" mb-4 rounded w-2/3 h-20 bg-darkbg"></div>
      </article>
    </div>
  );
}

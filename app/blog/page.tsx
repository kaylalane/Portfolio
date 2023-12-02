import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import "../../styles/blogs.scss";

export default async function Blog() {
  return (
    <div className="">
      <h1 className=" title">Another Dev Who Writes</h1>
      <div className="blogs-container">
        {allBlogs.map((post) => (
          <Link
            key={post.url}
            className="blog__link"
            href={`/blog/${post.url}`}
          >
            <h2 className="blog__link-title">{post.title}</h2>
            <p className="blog__date">{post.publishedAt.substring(0, 10)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

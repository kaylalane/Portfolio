import Link from "next/link";
import { allBlogs } from "contentlayer/generated";

export default async function Blog() {
  return (
    <article>
      {allBlogs.map((post) => (
        <Link
          key={post.url}
          className="flex flex-col space-y-1 mb-4 text-xl"
          href={`/blog/${post.url}`}
        >
          <div className="w-full flex flex-col">
            <h2>{post.title}</h2>
            <p className="text-sm">{post.publishedAt.substring(0, 10)}</p>
          </div>
        </Link>
      ))}
    </article>
  );
}

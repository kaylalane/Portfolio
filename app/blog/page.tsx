import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import { getViewsCount } from "@/lib/metrics";
import ViewCounter from "./[...slug]/view-counter";
import { Suspense } from "react";
import "../../styles/blogs.scss";

export default async function Blog() {
  return (
    <div className="">
      <h1 className=" title">Another Dev Who Writes</h1>
      <div className="blogs-container">
        {allBlogs.map((post) => (
          <Link key={post.url} className="blog__link" href={`/blog/${post.url}`}>
            <h2 className="blog__link-title">{post.title}</h2>
            <p className="blog__date">{post.publishedAt.substring(0, 10)}</p>
            <Suspense fallback={<p className="h-5" />}>
              {/* @ts-expect-error Server Component */}
              <Views slug={post.url} />
            </Suspense>
          </Link>
        ))}
      </div>
    </div>
  );
}

async function Views({ slug }: { slug: string }) {
  const views = await getViewsCount();

  return <ViewCounter allViews={views} slug={slug} trackView />;
}

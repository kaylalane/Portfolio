import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import { getViewsCount } from "@/lib/metrics";
import ViewCounter from "./[...slug]/view-counter";
import { Suspense } from "react";

export default async function Blog() {
  return (
    <article>
      <h1 className=" text-2xl pb-4">Another Dev Who Writes</h1>
      {allBlogs.map((post) => (
        <Link
          key={post.url}
          className="flex flex-col space-y-1 mb-4 text-xl"
          href={`/blog/${post.url}`}
        >
          <div className="w-full flex flex-col">
            <h2>{post.title}</h2>
            <p className="text-sm">{post.publishedAt.substring(0, 10)}</p>
            <Suspense fallback={<p className="h-5" />}>
              {/* @ts-expect-error Server Component */}
              <Views slug={post.url} />
            </Suspense>
          </div>
        </Link>
      ))}
    </article>
  );
}

async function Views({ slug }: { slug: string }) {
  const views = await getViewsCount();

  return <ViewCounter allViews={views} slug={slug} trackView />;
}

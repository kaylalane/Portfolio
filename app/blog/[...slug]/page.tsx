import { Mdx } from "@/components/mdx-components";
import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface PostProps {
  params: {
    slug: string[];
  };
}
async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allBlogs.find((post) => post.urlAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allBlogs.map((post) => ({
    slug: post.urlAsParams.split("/"),
  }));
}

async function getStaticParams({ params }: PostProps) {
  const slug = params?.slug?.join("/");
  const post = allBlogs.find((post) => post.url === slug);

  return { props: { post } };
}

export default async function BlogPost({ params }: PostProps) {
  const post = await getPostFromParams(params);
  if (!post) {
    notFound();
  }

  return (
    <div className=" flex justify-center">
      <article className=" max-w-2xl  prose prose-quoteless prose-neutral dark:prose-invert dark:prose-p:text-white">
        <h1 className="mb-2 dark:text-white">{post.title}</h1>
        {post.description && (
          <p className="text-xl mt-0 text-slate-700 dark:text-white">
            {post.description}
          </p>
        )}
        <hr className="my-4" />
        <Mdx code={post.body.code} />
      </article>
    </div>
  );
}

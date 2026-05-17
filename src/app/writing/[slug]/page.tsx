import { evaluate } from "@mdx-js/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import * as runtime from "react/jsx-runtime";

import { Prose } from "@/components/Prose";
import { getPostBySlug, getPostSlugs } from "@/lib/writing";

type WritingPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function findPost(slug: string) {
  try {
    return getPostBySlug(slug);
  } catch {
    return null;
  }
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WritingPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    return {
      title: "Writing",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function WritingPostPage({ params }: WritingPostPageProps) {
  const { slug } = await params;
  const post = findPost(slug);

  if (!post) {
    notFound();
  }

  const { default: MDXContent } = await evaluate(post.content, runtime);

  return (
    <article>
      <header className="page-intro">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <time dateTime={post.published}>{post.published}</time>
      </header>
      <Prose>
        <MDXContent />
      </Prose>
    </article>
  );
}

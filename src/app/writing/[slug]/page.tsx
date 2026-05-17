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

function postExists(slug: string) {
  return getPostSlugs().includes(slug);
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WritingPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!postExists(slug)) {
    return {
      title: "Writing",
    };
  }

  const post = getPostBySlug(slug);

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function WritingPostPage({ params }: WritingPostPageProps) {
  const { slug } = await params;

  if (!postExists(slug)) {
    notFound();
  }

  const post = getPostBySlug(slug);
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

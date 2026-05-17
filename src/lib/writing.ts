import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

const writingDirectory = path.join(process.cwd(), "content", "writing");

export type WritingPost = {
  slug: string;
  title: string;
  description: string;
  published: string;
  tags: string[];
  featured: boolean;
  content: string;
};

type Frontmatter = Omit<WritingPost, "slug" | "content">;

function postPathForSlug(slug: string): string {
  return path.join(writingDirectory, `${slug}.mdx`);
}

function assertString(
  value: unknown,
  fieldName: keyof Frontmatter,
  slug: string,
): asserts value is string {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Post "${slug}" is missing required "${fieldName}" metadata.`);
  }
}

function assertBoolean(
  value: unknown,
  fieldName: keyof Frontmatter,
  slug: string,
): asserts value is boolean {
  if (typeof value !== "boolean") {
    throw new Error(`Post "${slug}" is missing required "${fieldName}" metadata.`);
  }
}

function assertTags(value: unknown, slug: string): asserts value is string[] {
  if (
    !Array.isArray(value) ||
    value.length === 0 ||
    value.some((tag) => typeof tag !== "string" || tag.length === 0)
  ) {
    throw new Error(`Post "${slug}" is missing required "tags" metadata.`);
  }
}

function validateFrontmatter(data: Record<string, unknown>, slug: string): Frontmatter {
  assertString(data.title, "title", slug);
  assertString(data.description, "description", slug);
  assertString(data.published, "published", slug);
  assertTags(data.tags, slug);
  assertBoolean(data.featured, "featured", slug);

  return {
    title: data.title,
    description: data.description,
    published: data.published,
    tags: data.tags,
    featured: data.featured,
  };
}

function readPost(slug: string): WritingPost {
  const filePath = postPathForSlug(slug);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Writing post "${slug}" was not found.`);
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);
  const frontmatter = validateFrontmatter(data, slug);

  return {
    slug,
    ...frontmatter,
    content,
  };
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(writingDirectory)) {
    return [];
  }

  return fs
    .readdirSync(writingDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""))
    .sort((a, b) => a.localeCompare(b));
}

export function getAllPosts(): WritingPost[] {
  return getPostSlugs()
    .map((slug) => readPost(slug))
    .sort((a, b) => b.published.localeCompare(a.published));
}

export function getFeaturedPosts(): WritingPost[] {
  return getAllPosts().filter((post) => post.featured);
}

export function getPostBySlug(slug: string): WritingPost {
  return readPost(slug);
}

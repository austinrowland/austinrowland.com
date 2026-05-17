import { describe, expect, it } from "vitest";

import {
  getAllPosts,
  getFeaturedPosts,
  getPostBySlug,
} from "./writing";

describe("writing content helpers", () => {
  it("loads MDX posts with frontmatter and slugs", () => {
    const posts = getAllPosts();

    expect(posts).toHaveLength(2);
    expect(posts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          slug: "first-principles",
          title: "First Principles",
          description:
            "A short note on using writing to clarify ideas from the ground up.",
          published: "2026-05-10",
          tags: ["thinking", "writing"],
          featured: true,
        }),
        expect.objectContaining({
          slug: "building-in-public",
          title: "Building in Public",
          description:
            "A brief reflection on sharing work while it is still taking shape.",
          published: "2026-04-22",
          tags: ["process", "reflection"],
          featured: false,
        }),
      ]),
    );
  });

  it("sorts posts newest to earliest by published date", () => {
    const posts = getAllPosts();

    expect(posts.map((post) => post.published)).toEqual([
      "2026-05-10",
      "2026-04-22",
    ]);
  });

  it('returns the "first-principles" post with content', () => {
    const post = getPostBySlug("first-principles");

    expect(post.slug).toBe("first-principles");
    expect(post.content).toContain("Writing is where");
  });

  it("returns only featured posts", () => {
    const posts = getFeaturedPosts();

    expect(posts).toHaveLength(1);
    expect(posts.every((post) => post.featured)).toBe(true);
    expect(posts.map((post) => post.slug)).toEqual(["first-principles"]);
  });
});

import { describe, expect, it } from "vitest";

import {
  getAllPosts,
  getFeaturedPosts,
  getPostBySlug,
} from "./writing";

describe("writing content helpers", () => {
  it("loads the 2026 builder landscape post with frontmatter and slug", () => {
    const posts = getAllPosts();

    expect(posts).toHaveLength(1);
    expect(posts[0]).toEqual(
      expect.objectContaining({
        slug: "lens-on-the-2026-builder-landscape",
        title: "Lens on the 2026 Builder Landscape",
        featured: true,
      }),
    );
  });

  it("returns the builder landscape post with non-placeholder content", () => {
    const post = getPostBySlug("lens-on-the-2026-builder-landscape");

    expect(post.content).toContain("This piece is in progress.");
    expect(post.content).not.toContain("Lorem ipsum");
  });

  it("returns only featured posts", () => {
    const posts = getFeaturedPosts();

    expect(posts).toHaveLength(1);
    expect(posts.every((post) => post.featured)).toBe(true);
  });
});

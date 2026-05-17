import { describe, expect, it } from "vitest";

import { aboutGallery, aboutStory } from "./about";

describe("about content", () => {
  it("contains exactly the approved story arcs", () => {
    expect(aboutStory.map((entry) => entry.arc)).toEqual([
      "Builder origin",
      "Useful products",
      "Georgia Tech and community",
      "Health and accessibility",
      "Platforms at scale",
      "Relationships, growth, and adventure",
    ]);
  });

  it("keeps every story image empty and gallery empty until real photos are selected", () => {
    expect(aboutStory.every((entry) => entry.image === null)).toBe(true);
    expect(aboutGallery).toEqual([]);
  });

  it("requires accessible gallery content when photos are selected", () => {
    expect(
      aboutGallery.every(
        (entry) => entry.src.length > 0 && entry.alt.length > 0,
      ),
    ).toBe(true);
  });

  it("includes caption and story text for each story entry", () => {
    expect(aboutStory.every((entry) => entry.caption.length > 0)).toBe(true);
    expect(aboutStory.every((entry) => entry.story.length > 0)).toBe(true);
  });

  it('mentions "real photos" in story copy while images are pending', () => {
    expect(aboutStory.some((entry) => entry.story.includes("real photos"))).toBe(
      true,
    );
  });
});

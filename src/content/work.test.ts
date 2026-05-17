import { describe, expect, it } from "vitest";

import {
  getFeaturedWork,
  getSortedWorkEntries,
  workEntries,
} from "./work";

describe("work content helpers", () => {
  it("sorts entries newest to earliest by startDate", () => {
    const sortedEntries = getSortedWorkEntries();

    expect(sortedEntries.map((entry) => entry.startDate)).toEqual(
      [...workEntries]
        .sort((a, b) => b.startDate.localeCompare(a.startDate))
        .map((entry) => entry.startDate),
    );
  });

  it("returns only featured entries in newest-first order", () => {
    const featuredEntries = getFeaturedWork();

    expect(featuredEntries.every((entry) => entry.featured)).toBe(true);
    expect(featuredEntries.map((entry) => entry.startDate)).toEqual(
      featuredEntries
        .map((entry) => entry.startDate)
        .toSorted((a, b) => b.localeCompare(a)),
    );
  });

  it("retains internal kind values on work entries", () => {
    const allowedKinds = ["role", "project", "milestone", "venture"];

    expect(workEntries.length).toBeGreaterThan(0);
    expect(workEntries.every((entry) => allowedKinds.includes(entry.kind))).toBe(
      true,
    );
  });
});

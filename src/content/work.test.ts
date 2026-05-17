import { describe, expect, it } from "vitest";

import {
  getFeaturedWork,
  getSortedWorkEntries,
  workEntries,
} from "./work";

describe("work content", () => {
  it("sorts entries newest to earliest by startDate", () => {
    const sortedEntries = getSortedWorkEntries();

    expect(sortedEntries.map((entry) => entry.startDate)).toEqual(
      [...workEntries]
        .sort(
          (a, b) =>
            new Date(`${b.startDate}-01`).getTime() -
            new Date(`${a.startDate}-01`).getTime(),
        )
        .map((entry) => entry.startDate),
    );
  });

  it("contains exactly the requested organizations", () => {
    expect(workEntries.map((entry) => entry.organization)).toEqual([
      "Postman",
      "Palo Alto Networks",
      "Avova Health",
      "Tikkun Olam Makers",
      "Cisco Systems",
      "Passive Haptic Rehab Gloves Research Lab",
    ]);
  });

  it("uses the approved Postman framing and impact", () => {
    const postman = workEntries.find(
      (entry) => entry.organization === "Postman",
    );

    expect(postman?.question).toBe(
      "How do we help builders and enterprises ship next generation of software through better API infrastructure and agentic workflows?",
    );
    expect(postman?.impact.some((impact) =>
      impact.includes("40M+ developers worldwide"),
    )).toBe(true);
  });

  it("includes the approved Avova impact detail", () => {
    const avova = workEntries.find(
      (entry) => entry.organization === "Avova Health",
    );

    expect(avova?.impact.some((impact) =>
      impact.includes("Interviewed 100+ patients"),
    )).toBe(true);
  });

  it("keeps kind as an internal taxonomy", () => {
    const allowedKinds = ["role", "project", "milestone", "venture"];

    expect(workEntries.every((entry) => allowedKinds.includes(entry.kind))).toBe(
      true,
    );
  });

  it("returns featured entries newest first", () => {
    const featuredEntries = getFeaturedWork();

    expect(featuredEntries.every((entry) => entry.featured)).toBe(true);
    expect(featuredEntries.map((entry) => entry.organization)).toEqual([
      "Postman",
      "Palo Alto Networks",
      "Avova Health",
      "Tikkun Olam Makers",
    ]);
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { WorkCard } from "./WorkCard";
import type { WorkEntry } from "@/content/work";

const baseEntry: WorkEntry = {
  title: "Founding Forward Deployed Engineer",
  organization: "Postman",
  kind: "role",
  startDate: "2025-10",
  question:
    "How do we help builders and enterprises ship next generation of software through better API infrastructure and agentic workflows?",
  summary: "Builds with enterprise teams around API infrastructure.",
  impact: ["Supports API infrastructure used by 40M+ developers worldwide."],
  technologies: ["APIs"],
  featured: true,
};

describe("WorkCard", () => {
  it("formats current roles with readable month and year dates", () => {
    render(<WorkCard entry={baseEntry} />);

    expect(screen.getByText("Oct 2025 - Present")).toBeInTheDocument();
  });

  it("formats completed roles with readable month and year dates", () => {
    render(
      <WorkCard
        entry={{
          ...baseEntry,
          startDate: "2024-08",
          endDate: "2025-10",
        }}
      />,
    );

    expect(screen.getByText("Aug 2024 - Oct 2025")).toBeInTheDocument();
  });
});

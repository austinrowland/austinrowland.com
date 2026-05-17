export type WorkKind = "role" | "project" | "milestone" | "venture";

export type WorkEntry = {
  title: string;
  kind: WorkKind;
  startDate: string;
  endDate?: string;
  summary: string;
  featured: boolean;
};

export const workEntries: WorkEntry[] = [
  {
    title: "Personal website content foundation",
    kind: "milestone",
    startDate: "2026-04",
    summary:
      "Early scaffold content for Austin Rowland's personal website, focused on durable profile and navigation data.",
    featured: false,
  },
  {
    title: "Narrative portfolio scaffold",
    kind: "project",
    startDate: "2026-05",
    summary:
      "Starter portfolio content model for Austin Rowland's personal website.",
    featured: true,
  },
];

export function getSortedWorkEntries(): WorkEntry[] {
  return [...workEntries].sort((a, b) => b.startDate.localeCompare(a.startDate));
}

export function getFeaturedWork(): WorkEntry[] {
  return getSortedWorkEntries().filter((entry) => entry.featured);
}

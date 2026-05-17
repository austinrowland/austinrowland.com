import type { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { WorkList } from "@/components/WorkList";
import { getSortedWorkEntries } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work, projects, and milestones from Austin Rowland.",
};

export default function WorkPage() {
  const entries = getSortedWorkEntries();

  return (
    <>
      <PageIntro
        title="Work"
        intro="A structured record of projects, roles, and milestones as the portfolio takes shape."
      />
      <WorkList entries={entries} />
    </>
  );
}

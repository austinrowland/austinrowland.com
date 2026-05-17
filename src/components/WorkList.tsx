import type { WorkEntry } from "@/content/work";

import { WorkCard } from "./WorkCard";

type WorkListProps = {
  entries: WorkEntry[];
};

export function WorkList({ entries }: WorkListProps) {
  return (
    <div className="work-list">
      {entries.map((entry) => (
        <WorkCard entry={entry} key={`${entry.title}-${entry.startDate}`} />
      ))}
    </div>
  );
}

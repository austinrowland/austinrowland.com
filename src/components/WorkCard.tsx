import type { WorkEntry } from "@/content/work";

type WorkCardProps = {
  entry: WorkEntry;
};

function formatDateRange(entry: WorkEntry): string {
  return entry.endDate
    ? `${entry.startDate} - ${entry.endDate}`
    : `${entry.startDate} - Present`;
}

export function WorkCard({ entry }: WorkCardProps) {
  return (
    <article className="work-card">
      <header>
        <p>{entry.question}</p>
        <h2>{entry.title}</h2>
        <p>{entry.organization}</p>
        <p>{formatDateRange(entry)}</p>
      </header>
      <p>{entry.summary}</p>
      {entry.impact.length > 0 ? (
        <ul>
          {entry.impact.map((impact) => (
            <li key={impact}>{impact}</li>
          ))}
        </ul>
      ) : null}
      {entry.technologies.length > 0 ? (
        <ul>
          {entry.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

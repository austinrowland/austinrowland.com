import type { WorkEntry } from "@/content/work";

type WorkCardProps = {
  entry: WorkEntry;
};

function formatDateRange(entry: WorkEntry): string {
  const formatDate = (value: string) =>
    new Intl.DateTimeFormat("en", {
      month: "short",
      timeZone: "UTC",
      year: "numeric",
    }).format(new Date(`${value}-01T00:00:00.000Z`));

  return entry.endDate
    ? `${formatDate(entry.startDate)} - ${formatDate(entry.endDate)}`
    : `${formatDate(entry.startDate)} - Present`;
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

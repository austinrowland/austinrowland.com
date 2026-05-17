import type { WorkEntry } from "@/content/work";

type WorkCardEntry = WorkEntry & {
  context?: string;
  organization?: string;
  outcomes?: string[];
  url?: string;
};

type WorkCardProps = {
  entry: WorkCardEntry;
};

function formatDateRange(entry: WorkEntry): string {
  return entry.endDate ? `${entry.startDate} - ${entry.endDate}` : `${entry.startDate} - Present`;
}

export function WorkCard({ entry }: WorkCardProps) {
  const context = entry.organization ?? entry.context;

  return (
    <article className="work-card">
      <header>
        <h2>
          {entry.url ? (
            <a href={entry.url} rel="noreferrer" target="_blank">
              {entry.title}
            </a>
          ) : (
            entry.title
          )}
        </h2>
        <p>{formatDateRange(entry)}</p>
        {context ? <p>{context}</p> : null}
      </header>
      <p>{entry.summary}</p>
      {entry.outcomes && entry.outcomes.length > 0 ? (
        <ul>
          {entry.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

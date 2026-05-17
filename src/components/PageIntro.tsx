type PageIntroProps = {
  title: string;
  intro: string;
};

export function PageIntro({ title, intro }: PageIntroProps) {
  return (
    <section className="page-intro">
      <h1>{title}</h1>
      <p>{intro}</p>
    </section>
  );
}

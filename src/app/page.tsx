import { profile } from "@/content/profile";

export default function HomePage() {
  return (
    <main>
      <section className="page-intro">
        <h1>{profile.homeIntro.heading}</h1>
        {profile.homeIntro.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </main>
  );
}

import { profile } from "@/content/profile";

export default function HomePage() {
  return (
    <section className="home-intro" aria-labelledby="home-intro-title">
      <div className="home-intro__marker">Austin Rowland</div>
      <h1 id="home-intro-title">{profile.homeIntro.heading}</h1>
      <div className="home-intro__copy">
        {profile.homeIntro.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

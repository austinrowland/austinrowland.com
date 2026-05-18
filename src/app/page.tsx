import { profile } from "@/content/profile";

export default function HomePage() {
  return (
    <section className="home-intro" aria-labelledby="home-intro-title">
      <figure className="home-intro__visual">
        <img
          alt="Yosemite mountain banner with the words living for today, building for tomorrow."
          src="/home/live-for-today-build-for-tomorrow.png"
        />
      </figure>
      <h1 id="home-intro-title">{profile.homeIntro.heading}</h1>
      <div className="home-intro__copy">
        {profile.homeIntro.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

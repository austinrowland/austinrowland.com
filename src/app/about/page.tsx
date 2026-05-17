import type { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { aboutGallery, aboutStory } from "@/content/about";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title={`About ${profile.name}`}
        intro="I am an engineer and builder shaped by useful products, close communities, health and accessibility work, and platform problems that compound what ambitious people can do."
      />

      <div className="about-story">
        {aboutStory.map((entry) => (
          <section className="about-story__item" key={entry.arc}>
            <div className="about-story__media">
              {entry.image ? (
                <img src={entry.image} alt={entry.caption} />
              ) : (
                <p className="about-story__empty">Photo to add</p>
              )}
            </div>
            <div className="prose">
              <p>{entry.yearOrPlace}</p>
              <h2>{entry.arc}</h2>
              <p>{entry.story}</p>
              <p>{entry.caption}</p>
            </div>
          </section>
        ))}
      </div>

      <section className="about-gallery">
        <div className="section-header">
          <h2>Gallery</h2>
          {aboutGallery.length === 0 ? (
            <p>Gallery photos will be added here once selected.</p>
          ) : (
            <p>A small collection of photos from the story above.</p>
          )}
        </div>
        {aboutGallery.length > 0 ? (
          <div className="card-grid">
            {aboutGallery.map((image) => (
              <figure className="card" key={image.src}>
                <img src={image.src} alt={image.alt} />
                {image.caption ? <figcaption>{image.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        ) : null}
      </section>
    </>
  );
}

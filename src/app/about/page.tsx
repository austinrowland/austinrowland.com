import type { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name}.`,
};

const storySections = [
  {
    title: "Background",
    body: "This section is ready for the longer version of the story: where the work started, what shaped it, and what still matters.",
  },
  {
    title: "Current focus",
    body: "Use this space for the projects, questions, and life rhythms that define the present season.",
  },
  {
    title: "Elsewhere",
    body: "Add the communities, collaborations, and places on the web that make the rest of the profile easier to follow.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title={`About ${profile.name}`}
        intro="A placeholder structure for the personal context behind the work and writing."
      />
      <div className="prose">
        {storySections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>
    </>
  );
}

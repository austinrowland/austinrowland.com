export type AboutStoryEntry = {
  arc: string;
  image: string | null;
  caption: string;
  yearOrPlace: string;
  story: string;
};

export type AboutGalleryEntry = {
  src: string;
  alt: string;
  caption?: string;
};

export const aboutStory: AboutStoryEntry[] = [
  {
    arc: "Builder origin",
    image: null,
    caption: "Early builder instincts",
    yearOrPlace: "Georgia",
    story:
      "I have always been pulled toward building things that make a real situation easier to understand or act on. This space is reserved for real photos from that origin story once the right ones are selected.",
  },
  {
    arc: "Useful products",
    image: null,
    caption: "Products close to real needs",
    yearOrPlace: "Student projects and early ventures",
    story:
      "The work that stuck with me most was practical: software, hardware, and product ideas shaped by direct constraints instead of abstract novelty. I learned to care less about demos and more about whether something was useful.",
  },
  {
    arc: "Georgia Tech and community",
    image: null,
    caption: "A community for ambitious making",
    yearOrPlace: "Georgia Tech",
    story:
      "Georgia Tech gave me a dense community of engineers, designers, founders, and friends who wanted to build in public and learn by doing. It made the work feel social, rigorous, and bigger than any one project.",
  },
  {
    arc: "Health and accessibility",
    image: null,
    caption: "Building with people, not around them",
    yearOrPlace: "Avova Health and Tikkun Olam Makers",
    story:
      "Health and accessibility projects taught me that the most important product requirements often come from listening carefully. Patient interviews, assistive technology programs, and rehab research all pushed me to keep human outcomes at the center.",
  },
  {
    arc: "Platforms at scale",
    image: null,
    caption: "Infrastructure for builders and enterprises",
    yearOrPlace: "Cisco, Palo Alto Networks, and Postman",
    story:
      "My platform work moved the same builder instinct into larger systems: securing enterprise cloud workloads, building security software, and helping teams use API infrastructure and agentic workflows to ship better software.",
  },
  {
    arc: "Relationships, growth, and adventure",
    image: null,
    caption: "Life around the work",
    yearOrPlace: "Everywhere else",
    story:
      "The longer story is also about the people, places, routines, and adventures that make the work sustainable. This section will stay honest about what is known now and use real photos when the gallery is ready.",
  },
];

export const aboutGallery: AboutGalleryEntry[] = [];

export type NavigationItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const profile = {
  name: "Austin Rowland",
  siteTitle: "Austin Rowland",
  description:
    "Austin Rowland is an engineer and builder focused on technology, systems, and impact.",
  homeIntro: {
    heading: "hi, i’m austin rowland.",
    paragraphs: [
      "i’m an engineer and builder focused on turning complex systems into tools that help people move faster, stay safer, and live better.",
      "i started by building products with a direct human edge: avova health for preventative care, rehab software for stroke recovery research, and assistive technology with tikkun olam makers at georgia tech. those projects taught me that useful technology starts close to real people and real constraints.",
      "now, i work on enterprise platforms that help builders operate at much larger scale. at postman, i work on api infrastructure and agentic developer experiences for teams shaping the future of software. before that, i built security infrastructure at palo alto networks and cloud security automation at cisco. i’m rationally optimistic about technology because the best systems don’t replace human ambition; they compound it.",
    ],
  },
};

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
];

export const socials: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/austinrowland/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/austinrowland/" },
  { label: "GitHub", href: "https://github.com/austinrowland" },
  { label: "X", href: "https://x.com/austinrowland02" },
];

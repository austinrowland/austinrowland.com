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
  description: "Personal website for Austin Rowland.",
};

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
];

export const socials: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/austinrowland" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/austinrowland/" },
  { label: "X", href: "https://x.com/austinrowland" },
  { label: "GitHub", href: "https://github.com/austinrowland" },
];

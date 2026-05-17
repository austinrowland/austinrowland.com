import Link from "next/link";

import { navigation, profile, socials } from "@/content/profile";

const socialLogos: Record<string, string> = {
  GitHub: "/social/github-logo.png",
  Instagram: "/social/instagram-logo.webp",
  LinkedIn: "/social/linkedin-logo.webp",
  X: "/social/x-icon.webp",
};

export function Header() {
  return (
    <header className="site-header">
      <Link className="site-header__brand" href="/">
        {profile.name}
      </Link>
      <nav aria-label="Primary navigation" className="site-header__nav">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <nav aria-label="Social links" className="site-header__social">
        {socials.map((social) => (
          <a
            aria-label={social.label}
            href={social.href}
            key={social.href}
            rel="noreferrer"
            target="_blank"
          >
            <img alt="" src={socialLogos[social.label]} />
          </a>
        ))}
      </nav>
    </header>
  );
}

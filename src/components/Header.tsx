import Link from "next/link";
import {
  AtSign,
  BriefcaseBusiness,
  Camera,
  Code2,
  type LucideIcon,
  X,
} from "lucide-react";

import { navigation, profile, socials } from "@/content/profile";

const socialIcons: Record<string, LucideIcon> = {
  Instagram: Camera,
  LinkedIn: BriefcaseBusiness,
  X,
  GitHub: Code2,
};

function SocialIcon({ label }: { label: string }) {
  const Icon = socialIcons[label] ?? AtSign;

  return <Icon aria-hidden="true" focusable="false" size={18} strokeWidth={1.8} />;
}

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
            <SocialIcon label={social.label} />
          </a>
        ))}
      </nav>
    </header>
  );
}

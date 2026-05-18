"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation, socials } from "@/content/profile";

const socialLogos: Record<string, string> = {
  GitHub: "/social/github-logo.png",
  Instagram: "/social/instagram-logo.webp",
  LinkedIn: "/social/linkedin-logo.webp",
  X: "/social/x-icon.webp",
};

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header__left">
        <nav aria-label="Primary navigation" className="site-header__nav">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <nav aria-label="Social links" className="site-header__social">
        {socials.map((social) => (
          <a
            aria-label={social.label}
            href={social.href}
            key={social.href}
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt=""
              className={`site-header__social-logo site-header__social-logo--${social.label.toLowerCase()}`}
              src={socialLogos[social.label]}
            />
          </a>
        ))}
      </nav>
    </header>
  );
}

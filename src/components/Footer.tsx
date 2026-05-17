import Link from "next/link";

import { navigation, profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} {profile.name}</p>
      <nav aria-label="Footer navigation" className="site-footer__nav">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}

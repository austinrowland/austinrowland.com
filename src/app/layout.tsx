import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { profile } from "@/content/profile";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: profile.siteTitle,
    template: `%s | ${profile.siteTitle}`,
  },
  description: profile.description,
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

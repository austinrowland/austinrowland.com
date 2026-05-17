import type { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { WritingList } from "@/components/WritingList";
import { getAllPosts } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and notes from Austin Rowland.",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageIntro
        title="Writing"
        intro="Notes and essays for making ideas more legible while they are still forming."
      />
      <WritingList posts={posts} />
    </>
  );
}

import Link from "next/link";

import { WorkList } from "@/components/WorkList";
import { WritingList } from "@/components/WritingList";
import { profile } from "@/content/profile";
import { getFeaturedWork } from "@/content/work";
import { getFeaturedPosts } from "@/lib/writing";

export default function HomePage() {
  const featuredWork = getFeaturedWork();
  const featuredPosts = getFeaturedPosts();

  return (
    <>
      <section className="page-intro">
        <h1>{profile.name}</h1>
        <p>
          A personal site for the work, writing, and life details that are still
          taking shape.
        </p>
      </section>

      <section>
        <div className="section-header">
          <h2>Now</h2>
          <p>
            Building a structure for durable notes, selected projects, and a
            clearer public record.
          </p>
        </div>
      </section>

      <section>
        <div className="section-header">
          <h2>Featured work</h2>
          <p>A short path into the projects and milestones worth expanding.</p>
        </div>
        <WorkList entries={featuredWork} />
        <p>
          <Link href="/work">View all work</Link>
        </p>
      </section>

      <section>
        <div className="section-header">
          <h2>Featured writing</h2>
          <p>Notes that frame the questions behind the work.</p>
        </div>
        <WritingList posts={featuredPosts} />
        <p>
          <Link href="/writing">View all writing</Link>
        </p>
      </section>
    </>
  );
}

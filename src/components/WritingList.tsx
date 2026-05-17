import Link from "next/link";

export type WritingListPost = {
  slug: string;
  title: string;
  description: string;
  published: string;
  tags: string[];
};

type WritingListProps = {
  posts: WritingListPost[];
};

export function WritingList({ posts }: WritingListProps) {
  return (
    <div className="writing-list">
      {posts.map((post) => (
        <article className="writing-list__post" key={post.slug}>
          <h2>
            <Link href={`/writing/${post.slug}`}>{post.title}</Link>
          </h2>
          <p>{post.description}</p>
          <time dateTime={post.published}>{post.published}</time>
          <ul aria-label={`${post.title} tags`}>
            {post.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

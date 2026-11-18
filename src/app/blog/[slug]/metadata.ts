// app/blog/[slug]/metadata.ts
import { fetchPostBySlug } from "@/util/postDetails";

export async function generatePostMetadata(slug: string) {
  const post = await fetchPostBySlug(slug).catch(() => null);
  
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found",
    };
  }

  return {
    title: post.title,
    description: post.brief,
    openGraph: {
      title: post.title,
      description: post.brief,
      images: post.coverImage ? [{ url: post.coverImage.url }] : [],
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}
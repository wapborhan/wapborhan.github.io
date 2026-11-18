import { getHashnodePosts } from "./blog";
import { BlogPost } from "@/types/blog";

export const fetchPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const posts = await getHashnodePosts();
    const decodedSlug = decodeURIComponent(slug);
    const post = posts.find(
      (p) => p.slug === slug || p.slug === decodedSlug || decodeURIComponent(p.slug) === decodedSlug
    );
    return post || null;
  } catch (error) {
    console.error(`Failed to fetch post for slug [${slug}]:`, error);
    return null;
  }
};

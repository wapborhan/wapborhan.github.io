import { fetchPostBySlug } from "@/util/postDetails";
import { getHashnodePosts } from "@/util/blog";
import { generatePostMetadata } from "./metadata";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaExternalLinkAlt,
} from "react-icons/fa";

export async function generateStaticParams() {
  const posts = await getHashnodePosts();
  return (posts || []).map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const resolved = await params;
  return generatePostMetadata(resolved.slug);
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const { slug } = await params;

  const post = await fetchPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const imageUrl =
    typeof post.coverImage === "string"
      ? post.coverImage
      : post.coverImage?.url;

  const hashnodeUrl = `https://blog.wapborhan.com/${post.slug}`;

  // Estimate read time based on word count (~200 words per minute)
  const plainText = (post.content?.html || post.brief || "")
    .replace(/<[^>]+>/g, " ")
    .trim();
  const wordCount = plainText.split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div className="pt--30 pb--60 min-h-screen">
      <div className="container sr-content mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="sect-main">
          {/* Top Navigation Bar */}
          <div className="rn-portfolio-area">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-once="true"
              className="section-title text-center"
            >
              <span className="subtitle">
                {formattedDate && (
                  <span>
                    Published on{" "}
                    <time dateTime={post.publishedAt}>{formattedDate}</time>
                  </span>
                )}
                <span aria-hidden="true" className="text-gray-600">
                  ·
                </span>
                <span>{readTime} min read</span>
              </span>
              <h2 className="title"> {post.title}</h2>
            </div>
          </div>
          <div className="flex  items-center justify-between pb-6 mb-8 border-b border-white/10">
            <Link
              href="/blog"
              className="rn-btn btn-brd inline-flex items-center gap-2 py-2 px-5 text-sm font-semibold"
            >
              <span>&larr; Back to Blog</span>
            </Link>

            <a
              href={hashnodeUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-1.5"
            >
              <span>View on Hashnode</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>

          {/* Article Header (matches blog.wapborhan.com header style) */}
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.25] mb-6"></h1>

            {/* Metadata Row: Date · Read time · Domain */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-400 pb-6 border-b border-white/10 mb-8"></div>

            {/* Author Byline & Social Links */}
            <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-white/10">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#ff014f] flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
                  {post.author?.name ? post.author.name.charAt(0) : "B"}
                </div>
                <div>
                  <h2 className="text-base font-semibold text-white leading-tight">
                    {post.author?.name || "Borhan Uddin"}
                  </h2>
                  <span className="text-xs text-gray-400">
                    Full Stack Developer
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <a
                  href="https://twitter.com/wapborhan"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="p-2 rounded-full hover:text-[var(--color-primary)] transition-colors"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/wapborhan"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-full hover:text-[var(--color-primary)] transition-colors"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://github.com/wapborhan"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-full hover:text-[var(--color-primary)] transition-colors"
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </div>
          </header>

          {/* Hero Cover Image */}
          {imageUrl && (
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 mb-12">
              <Image
                src={imageUrl}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
          )}

          {/* Article Body Content */}
          <article
            className="blog-article-content prose prose-invert max-w-none text-lg leading-relaxed text-gray-200"
            dangerouslySetInnerHTML={{ __html: post.content?.html || "" }}
          />

          {/* Bottom Back Button */}
          <div className="pt-6 border-t border-white/10 flex justify-between items-center">
            <Link
              href="/blog"
              className="rn-btn btn-brd inline-flex items-center gap-2 py-2 px-5 text-sm"
            >
              <span>&larr; Back to all articles</span>
            </Link>

            <a
              href="https://blog.wapborhan.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 hover:text-[var(--color-primary)] transition-colors"
            >
              Visit WapBorhan Publication &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

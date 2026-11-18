import { BlogPost } from "@/types/blog";

const RSS_FEEDS = [
  "https://blog.wapborhan.com/rss.xml",
  "https://wapborhan.hashnode.dev/rss.xml",
];

function parseRss(xmlText: string): BlogPost[] {
  const items = xmlText.split("<item>");
  items.shift(); // remove channel header
  return items.map((itemStr) => {
    const getTag = (tag: string): string => {
      const match = itemStr.match(
        new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${tag}>`, "i")
      );
      return match ? match[1].trim() : "";
    };

    const link = getTag("link");
    const rawSlug = link.replace(/\/$/, "").split("/").pop() || "";
    const slug = decodeURIComponent(rawSlug);
    const title = getTag("title");
    const brief = getTag("description");
    const publishedAt = getTag("pubDate");
    const author = getTag("dc:creator");
    const contentHtml = getTag("content:encoded");

    const enclosureMatch = itemStr.match(/<enclosure[^>]*url=["']([^"']+)["']/i);
    const coverImageUrl = enclosureMatch ? enclosureMatch[1] : undefined;

    return {
      id: slug,
      slug,
      title,
      brief,
      publishedAt,
      author: {
        name: author,
      },
      coverImage: coverImageUrl ? { url: coverImageUrl } : null,
      content: {
        html: contentHtml,
      },
    };
  });
}

export async function getHashnodePosts(): Promise<BlogPost[]> {
  for (const feedUrl of RSS_FEEDS) {
    try {
      const response = await fetch(feedUrl, {
        method: "GET",
        headers: {
          Accept: "application/xml, text/xml, */*",
        },
        next: { revalidate: 60 },
      });

      if (!response.ok) {
        continue;
      }

      const xmlText = await response.text();
      if (!xmlText || !xmlText.includes("<rss")) {
        continue;
      }

      const posts = parseRss(xmlText);
      if (posts.length > 0) {
        return posts;
      }
    } catch (err) {
      console.warn(`Failed to fetch Hashnode RSS from ${feedUrl}:`, err);
    }
  }

  return [];
}

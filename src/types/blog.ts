export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  brief?: string;
  publishedAt?: string;
  content?: {
    html?: string;
    markdown?: string;
  };
  coverImage?: {
    url: string;
    attribution?: string;
  } | null;
  author?: {
    name?: string;
    profilePicture?: string;
    socialMediaLinks?: {
      facebook?: string;
      twitter?: string;
      github?: string;
      instagram?: string;
      website?: string;
    };
  };
}

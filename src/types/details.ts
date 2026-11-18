export interface HashnodePost {
  id: string;
  title: string;
  slug: string;
  url: string;
  publishedAt: string;
  content: {
    html: string;
    markdown: string;
  };
  coverImage?: {
    url: string;
  };
  brief: string;
  readTimeInMinutes: number;
  tags: {
    name: string;
    slug: string;
  }[];
  author: {
    name: string;
    username: string;
    photo: string;
  };
}

export interface HashnodePostResponse {
  data: {
    publication: {
      post: HashnodePost;
    };
  };
}
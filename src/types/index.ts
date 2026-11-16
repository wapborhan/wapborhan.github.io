export interface Profile {
  login?: string;
  id?: number;
  avatar_url?: string;
  html_url?: string;
  name?: string;
  company?: string | null;
  blog?: string;
  location?: string | null;
  email?: string | null;
  bio?: string | null;
  twitter_username?: string | null;
  public_repos?: number;
  public_gists?: number;
  followers?: number;
  following?: number;
  created_at?: string;
  updated_at?: string;
}

export interface RepoOwner {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export interface Repo {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: RepoOwner;
  html_url: string;
  description: string | null;
  fork: boolean;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  forks_count: number;
  created_at: string;
  updated_at: string;
  pushed_at?: string;
}

export interface Follower {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export type StarredItem = Repo;

export interface PortfolioContextType {
  username: string;
  profile: Profile;
  repos: Repo[] | null;
  starred: StarredItem[] | null;
  followers: Follower[] | null;
  following: Follower[] | null;
  overview: string;
  isPageLoading: boolean;
  setIsPageLoading: (loading: boolean) => void;
}

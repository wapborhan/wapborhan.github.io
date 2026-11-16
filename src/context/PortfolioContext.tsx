"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
} from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { axiosInstance } from "../util/axiosInstance";
import {
  Profile,
  Repo,
  Follower,
  StarredItem,
  PortfolioContextType,
} from "../types";

const PortfolioContext = createContext<PortfolioContextType | undefined>(
  undefined
);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const username = "wapborhan";
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isPageLoading, setIsPageLoading] = useState(true);
  const prevRoute = useRef<string>("");

  const [overview, setOverview] = useState<string>(() => {
    if (typeof window === "undefined") return "TG9hZGluZy4uLg==";
    try {
      return sessionStorage.getItem("wapborhan_overview") || "TG9hZGluZy4uLg==";
    } catch {
      return "TG9hZGluZy4uLg==";
    }
  });

  const [profile, setProfile] = useState<Profile>(() => {
    if (typeof window === "undefined") return {};
    try {
      const stored = sessionStorage.getItem("wapborhan_profile");
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  const [repos, setRepos] = useState<Repo[] | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const stored = sessionStorage.getItem("wapborhan_repos");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [followers, setFollowers] = useState<Follower[] | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const stored = sessionStorage.getItem("wapborhan_followers");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [following, setFollowing] = useState<Follower[] | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const stored = sessionStorage.getItem("wapborhan_following");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [starred, setStarred] = useState<StarredItem[] | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const stored = sessionStorage.getItem("wapborhan_starred");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  // Preloader on initial mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Preloader on route / page query change
  useEffect(() => {
    const currentRoute = `${pathname || ""}?${searchParams?.toString() || ""}`;
    if (prevRoute.current && prevRoute.current !== currentRoute) {
      setIsPageLoading(true);
      const timer = setTimeout(() => {
        setIsPageLoading(false);
      }, 450);
      prevRoute.current = currentRoute;
      return () => clearTimeout(timer);
    }
    prevRoute.current = currentRoute;
  }, [pathname, searchParams]);

  // Data fetching
  useEffect(() => {
    // 1. Overview Data
    axiosInstance
      .get(`/repos/${username}/${username}/contents/README.md`)
      .then((res) => {
        const content = res?.data?.content || "";
        setOverview(content);
        try {
          sessionStorage.setItem("wapborhan_overview", content);
        } catch {}
      })
      .catch(() => {
        setOverview((prev) => (prev && prev !== "TG9hZGluZy4uLg==" ? prev : ""));
      });

    // 2. Profile Data
    axiosInstance
      .get(`/users/${username}`)
      .then((res) => {
        const data = res?.data || {};
        setProfile(data);
        try {
          sessionStorage.setItem("wapborhan_profile", JSON.stringify(data));
        } catch {}
      })
      .catch(() => {
        setProfile((prev) => prev || {});
      });

    // 3. Repos Data (3 pages merged)
    const getRepos = async () => {
      try {
        const [res1, res2, res3] = await Promise.all([
          axiosInstance
            .get(`/users/${username}/repos?page=1&per_page=100&sort=created&type=owner`)
            .catch(() => ({ data: [] })),
          axiosInstance
            .get(`/users/${username}/repos?page=2&per_page=100&sort=created&type=owner`)
            .catch(() => ({ data: [] })),
          axiosInstance
            .get(`/users/${username}/repos?page=3&per_page=100&sort=created&type=owner`)
            .catch(() => ({ data: [] })),
        ]);

        const allRepos: Repo[] = [
          ...(Array.isArray(res1?.data) ? res1.data : []),
          ...(Array.isArray(res2?.data) ? res2.data : []),
          ...(Array.isArray(res3?.data) ? res3.data : []),
        ];

        setRepos(allRepos);
        try {
          sessionStorage.setItem("wapborhan_repos", JSON.stringify(allRepos));
        } catch {}
      } catch {
        setRepos((prev) => (prev !== null ? prev : []));
      }
    };
    getRepos();

    // 4. Followers Data
    axiosInstance
      .get(`/users/${username}/followers?page=1&per_page=100`)
      .then((res) => {
        const data = Array.isArray(res?.data) ? res.data : [];
        setFollowers(data);
        try {
          sessionStorage.setItem("wapborhan_followers", JSON.stringify(data));
        } catch {}
      })
      .catch(() => {
        setFollowers((prev) => (prev !== null ? prev : []));
      });

    // 5. Following Data
    axiosInstance
      .get(`/users/${username}/following?page=1&per_page=100`)
      .then((res) => {
        const data = Array.isArray(res?.data) ? res.data : [];
        setFollowing(data);
        try {
          sessionStorage.setItem("wapborhan_following", JSON.stringify(data));
        } catch {}
      })
      .catch(() => {
        setFollowing((prev) => (prev !== null ? prev : []));
      });

    // 6. Starred Data (3 pages merged)
    const getStarred = async () => {
      try {
        const [res1, res2, res3] = await Promise.all([
          axiosInstance
            .get(`/users/${username}/starred?page=1&per_page=100`)
            .catch(() => ({ data: [] })),
          axiosInstance
            .get(`/users/${username}/starred?page=2&per_page=100`)
            .catch(() => ({ data: [] })),
          axiosInstance
            .get(`/users/${username}/starred?page=3&per_page=100`)
            .catch(() => ({ data: [] })),
        ]);

        const allStarred: StarredItem[] = [
          ...(Array.isArray(res1?.data) ? res1.data : []),
          ...(Array.isArray(res2?.data) ? res2.data : []),
          ...(Array.isArray(res3?.data) ? res3.data : []),
        ];

        setStarred(allStarred);
        try {
          sessionStorage.setItem(
            "wapborhan_starred",
            JSON.stringify(allStarred)
          );
        } catch {}
      } catch {
        setStarred((prev) => (prev !== null ? prev : []));
      }
    };
    getStarred();
  }, [username]);

  return (
    <PortfolioContext.Provider
      value={{
        username,
        profile,
        repos,
        starred,
        followers,
        following,
        overview,
        isPageLoading,
        setIsPageLoading,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}

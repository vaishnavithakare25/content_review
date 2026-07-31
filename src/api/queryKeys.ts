// src/api/queryKeys.ts

export const QUERY_KEYS = {
  AUTH: {
    CURRENT_USER: ["auth", "current-user"] as const,
  },

  POSTS: {
    ALL: ["posts"] as const,

    LIST: <T>(params?: T) =>
      ["posts", "list", params] as const,

    DETAIL: (id: number | string) =>
      ["posts", id] as const,

    SEARCH: (query: string) =>
      ["posts", "search", query] as const,

    TAGS: ["posts", "tags"] as const,

    BY_TAG: (tag: string) =>
      ["posts", "tag", tag] as const,
  },

  COMMENTS: {
    ALL: ["comments"] as const,

    BY_POST: (postId: number | string) =>
      ["comments", "post", postId] as const,
  },
} as const;
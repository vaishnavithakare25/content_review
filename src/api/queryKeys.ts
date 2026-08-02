import type { GetPostsParamsDto } from "@/features/posts/dto";

export const QUERY_KEYS = {
  AUTH: {
    CURRENT_USER: ["auth", "current-user"] as const,
  },

  POSTS: {
    ALL: ["posts"] as const,

    LIST: (params?: GetPostsParamsDto) =>
      ["posts", "list", params] as const,

    DETAIL: (id: number) =>
      ["posts", "detail", id] as const,

    SEARCH: (query: string) =>
      ["posts", "search", query] as const,

    TAGS: ["posts", "tags"] as const,

    BY_TAG: (tag: string) =>
      ["posts", "tag", tag] as const,
  },

  COMMENTS: {
    ALL: ["comments"] as const,

    BY_POST: (postId: number) =>
      ["comments", "post", postId] as const,
  },
} as const;
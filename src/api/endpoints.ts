export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
  },

  POSTS: {
    LIST: "/posts",
    DETAILS: (id: number | string) => `/posts/${id}`,
    SEARCH: "/posts/search",
    ADD: "/posts/add",
    UPDATE: (id: number | string) => `/posts/${id}`,
    DELETE: (id: number | string) => `/posts/${id}`,
    TAGS: "/posts/tags",
    BY_TAG: (tag: string) => `/posts/tag/${tag}`,
  },

  COMMENTS: {
    LIST: "/comments",
    BY_POST: (postId: number | string) => `/posts/${postId}/comments`,
    ADD: "/comments/add",
    UPDATE: (id: number | string) => `/comments/${id}`,
    DELETE: (id: number | string) => `/comments/${id}`,
  },
} as const;
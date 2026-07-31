export const ROUTE_PATHS = {
  ROOT: "/",
  LOGIN: "/login",

  POSTS: "/posts",
  CREATE_POST: "/posts/create",
  POST_DETAILS: "/posts/:id",
  EDIT_POST: "/posts/:id/edit",

  NOT_FOUND: "*",
} as const;

export const buildRoute = {
  postDetails: (id: number | string) => `/posts/${id}`,
  editPost: (id: number | string) => `/posts/${id}/edit`,
} as const;
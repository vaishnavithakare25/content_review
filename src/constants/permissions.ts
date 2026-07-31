
export const PERMISSIONS = {
  POSTS_VIEW: "posts:view",

  POSTS_CREATE: "posts:create",

  POSTS_EDIT: "posts:edit",

  POSTS_DELETE: "posts:delete",

  COMMENTS_ADD: "comments:add",
} as const;

export type Permission =
  (typeof PERMISSIONS)[keyof typeof PERMISSIONS];
  
  
  
  
  
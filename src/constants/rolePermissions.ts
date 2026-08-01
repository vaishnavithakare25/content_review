// import { PERMISSIONS, ROLES } from "@/constants";
// import type { Permission, Role } from "@/constants";

import { PERMISSIONS } from "./permissions";
import { ROLES } from "./roles";
import type { Permission } from "./permissions";
import type { Role } from "./roles";


export const ROLE_PERMISSIONS: Record<Role, readonly Permission[]> = {
  [ROLES.CONTENT_MANAGER]: [
    PERMISSIONS.POSTS_VIEW,
    PERMISSIONS.POSTS_CREATE,
    PERMISSIONS.POSTS_EDIT,
    PERMISSIONS.POSTS_DELETE,
    PERMISSIONS.COMMENTS_ADD,
  ],

  [ROLES.REVIEWER]: [
    PERMISSIONS.POSTS_VIEW,
    PERMISSIONS.COMMENTS_ADD,
  ],

  [ROLES.READER]: [
    PERMISSIONS.POSTS_VIEW,
  ],
} as const;
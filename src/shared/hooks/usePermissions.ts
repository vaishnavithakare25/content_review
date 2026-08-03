import { useMemo } from "react";

import {
  PERMISSIONS,
  ROLE_PERMISSIONS,
} from "@/constants";

import type { Permission } from "@/constants";

import { useAuthStore } from "../../store/auth.store";

export const usePermissions = () => {
  const user = useAuthStore(
    (state) => state.user
  );

  const permissions = useMemo(() => {
    if (!user) {
      return [] as readonly Permission[];
    }

    return ROLE_PERMISSIONS[user.role];
  }, [user]);

  const hasPermission = (
    permission: Permission
  ) => {
    return permissions.includes(permission);
  };

  return {
    hasPermission,

    canViewPosts: hasPermission(
      PERMISSIONS.POSTS_VIEW
    ),

    canCreatePost: hasPermission(
      PERMISSIONS.POSTS_CREATE
    ),

    canEditPost: hasPermission(
      PERMISSIONS.POSTS_EDIT
    ),

    canDeletePost: hasPermission(
      PERMISSIONS.POSTS_DELETE
    ),

    canAddComment: hasPermission(
      PERMISSIONS.COMMENTS_ADD
    ),
  };
};
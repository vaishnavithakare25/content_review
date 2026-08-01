import type { AppRoute } from "./route.type";
import { Navigate } from "react-router-dom";

import { ROUTE_PATHS, PERMISSIONS } from "@/constants";
import  LoginPage  from "@/features/auth/pages/LoginPage";
import {
  ForbiddenPage,
  NotFoundPage,
} from "@/shared/pages";
import {
  CreatePostPage,
  EditPostPage,
  PostDetailsPage,
  PostsPage,
} from "@/features/posts/pages";
import { AppLayout, PublicLayout } from "@/layouts";
import {
  PermissionGuard,
  ProtectedRoute,
  PublicRoute,
} from "@/routes";

export const ROUTES: AppRoute[] = [
  {
    path:"/",
    element: <Navigate to={ROUTE_PATHS.LOGIN} replace/>

  },
  {
    element: <PublicRoute />,
    children: [
      {
        element: <PublicLayout />,
        children: [
           
          {
            path: ROUTE_PATHS.LOGIN,
            element: <LoginPage/>,
          },
        ],
      },
    ],
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: ROUTE_PATHS.POSTS,
            element: <PostsPage />,
          },

          {
            element: (
              <PermissionGuard
                requiredPermissions={[PERMISSIONS.POSTS_CREATE]}
              />
            ),
            children: [
              {
                path: ROUTE_PATHS.CREATE_POST,
                element: <CreatePostPage />,
              },
            ],
          },

          {
            path: ROUTE_PATHS.POST_DETAILS,
            element: <PostDetailsPage />,
          },

          {
            element: (
              <PermissionGuard
                requiredPermissions={[PERMISSIONS.POSTS_EDIT]}
              />
            ),
            children: [
              {
                path: ROUTE_PATHS.EDIT_POST,
                element: <EditPostPage />,
              },
            ],
          },

          {
            path: ROUTE_PATHS.FORBIDDEN,
            element: <ForbiddenPage />,
          },
        ],
      },
    ],
  },

  {
    path: ROUTE_PATHS.NOT_FOUND,
    element: <NotFoundPage />,
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
];
import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/api/queryKeys";

import { getPostByIdService } from "../services/post.service";

export const usePostQuery = (
  postId: number
) => {
  return useQuery({
    queryKey: QUERY_KEYS.POSTS.DETAIL(postId),

    queryFn: () => getPostByIdService(postId),

    enabled: postId > 0,
  });
};
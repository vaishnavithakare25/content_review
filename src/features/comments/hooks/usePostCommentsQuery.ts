import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/api/queryKeys";

import { getPostCommentsService } from "../services/comment.service";

export const usePostCommentsQuery = (
  postId: number
) => {
  return useQuery({
    queryKey: QUERY_KEYS.COMMENTS.BY_POST(postId),

    queryFn: () =>
      getPostCommentsService(postId),

    enabled: postId > 0,
  });
};
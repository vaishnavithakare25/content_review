import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/api/queryKeys";

import { getPostsService } from "../services/post.service";
import type { GetPostsParamsDto } from "../dto";

export const usePostsQuery = (
  params: GetPostsParamsDto
) => {
  return useQuery({
    queryKey: QUERY_KEYS.POSTS.LIST(params),
    queryFn: () => getPostsService(params),
  });
};
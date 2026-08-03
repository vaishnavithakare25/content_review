import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/api/queryKeys";

import { getTagsService } from "../services/post.service";

export const useTagsQuery = () => {
  return useQuery({
    queryKey: QUERY_KEYS.POSTS.TAGS,
    queryFn: getTagsService,
  });
};
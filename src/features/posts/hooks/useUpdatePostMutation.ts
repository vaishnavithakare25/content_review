import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/api/queryKeys";

import { updatePostService } from "../services/post.service";

import type { UpdatePostDto } from "../dto";

interface UpdatePostVariables {
  postId: number;
  payload: UpdatePostDto;
}

export const useUpdatePostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      payload,
    }: UpdatePostVariables) =>
      updatePostService(postId, payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.POSTS.ALL,
      });

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.POSTS.DETAIL(
          variables.postId
        ),
      });
    },
  });
};
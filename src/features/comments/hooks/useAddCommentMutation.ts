import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/api/queryKeys";

import { addCommentService } from "../services/comment.service";

import type { CreateCommentDto } from "../dto";

export const useAddCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      payload: CreateCommentDto
    ) => addCommentService(payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.COMMENTS.BY_POST(
          variables.postId
        ),
      });
    },
  });
};
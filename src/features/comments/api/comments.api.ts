import { apiClient } from "@/api/client";
import { ENDPOINTS } from "@/api/endpoints";

import type {
  CommentDto,
  CommentsResponseDto,
  CreateCommentDto,
} from "../dto";

export const getPostComments = async (
  postId: number
): Promise<CommentsResponseDto> => {
  const { data } = await apiClient.get<CommentsResponseDto>(
    ENDPOINTS.COMMENTS.BY_POST(postId)
  );

  return data;
};

export const addComment = async (
  payload: CreateCommentDto
): Promise<CommentDto> => {
  const { data } = await apiClient.post<CommentDto>(
    ENDPOINTS.COMMENTS.ADD,
    payload
  );

  return data;
};
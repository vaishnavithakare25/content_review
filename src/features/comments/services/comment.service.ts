import {
  addComment,
  getPostComments,
} from "../api/comments.api";

import {
  mapCommentDtoToComment,
  mapCommentsResponseDtoToCommentsResponse,
} from "../mapper/comment.mapper";

import type { CreateCommentDto } from "../dto";

import type {
  Comment,
  CommentsResponse,
} from "../types";

export const getPostCommentsService = async (
  postId: number
): Promise<CommentsResponse> => {
  const response = await getPostComments(postId);

  return mapCommentsResponseDtoToCommentsResponse(
    response
  );
};

export const addCommentService = async (
  payload: CreateCommentDto
): Promise<Comment> => {
  const response = await addComment(payload);

  return mapCommentDtoToComment(response);
};
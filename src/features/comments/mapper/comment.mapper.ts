import type {
  CommentDto,
  CommentsResponseDto,
} from "../dto";

import type {
  Comment,
  CommentsResponse,
} from "../types";

export const mapCommentDtoToComment = (
  dto: CommentDto
): Comment => ({
  id: dto.id,
  body: dto.body,
  postId: dto.postId,
  likes: dto.likes,
  user: {
    id: dto.user.id,
    username: dto.user.username,
  },
});

export const mapCommentDtoToComments = (
  dtos: CommentDto[]
): Comment[] => {
  return dtos.map(mapCommentDtoToComment);
};

export const mapCommentsResponseDtoToCommentsResponse = (
  dto: CommentsResponseDto
): CommentsResponse => ({
  comments: mapCommentDtoToComments(dto.comments),
  total: dto.total,
  skip: dto.skip,
  limit: dto.limit,
});
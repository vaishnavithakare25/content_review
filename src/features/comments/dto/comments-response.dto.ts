import type { CommentDto } from "./comment.dto";

export interface CommentsResponseDto {
  comments: CommentDto[];
  total: number;
  skip: number;
  limit: number;
}
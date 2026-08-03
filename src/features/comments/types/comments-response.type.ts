import type { Comment } from "./comment.type";

export interface CommentsResponse {
  comments: Comment[];
  total: number;
  skip: number;
  limit: number;
}
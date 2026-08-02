import type { Post } from "./post.types";

export interface PostsResponse{
    posts:Post[];
    total: number;
    skip: number;
    limit: number;
}
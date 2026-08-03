import type { PostDto } from "./post.dto";

export interface PostsResponseDto{
    posts: PostDto[];
    total: number;
    skip: number;
    limit: number;
}
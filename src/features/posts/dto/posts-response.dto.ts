import type { PostDto } from "./post.dto";

export interface PostResponseDto{
    posts: PostDto[];
    total: number;
    skip: number;
    limit: number;
}
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost, 
  getTags 
  
} from "../api/posts.api";

import {
  mapPostDtoToPost,
  mapPostDtoToPosts,
} from "../mapper/post.mapper";

import type {
  CreatePostDto,
  GetPostsParamsDto,
  UpdatePostDto,
} from "../dto";

import type {
  Post,
  PostsResponse,
} from "../types";

import { mapTagDtoToOptions } from "../mapper/tag.mapper";
import type { SelectOption } from "@/shared/components";

export const getPostsService = async (
  params?: GetPostsParamsDto
): Promise<PostsResponse> => {
  const response = await getPosts(params);

  return {
    posts: mapPostDtoToPosts(response.posts),
    total: response.total,
    skip: response.skip,
    limit: response.limit,
  };
};

export const getPostByIdService = async (
  postId: number
): Promise<Post> => {
  const response = await getPostById(postId);

  return mapPostDtoToPost(response);
};

export const createPostService = async (
  payload: CreatePostDto
): Promise<Post> => {
  const response = await createPost(payload);

  return mapPostDtoToPost(response);
};

export const updatePostService = async (
  postId: number,
  payload: UpdatePostDto
): Promise<Post> => {
  const response = await updatePost(postId, payload);

  return mapPostDtoToPost(response);
};

export const deletePostService = async (
  postId: number
): Promise<void> => {
  await deletePost(postId);
};

export const getTagsService = async (): Promise<SelectOption[]> => {
  const response = await getTags();

  return mapTagDtoToOptions(response);
};
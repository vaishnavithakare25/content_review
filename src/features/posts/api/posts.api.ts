import { apiClient } from "@/api/client";
import { ENDPOINTS } from "@/api/endpoints";

import type {
  CreatePostDto,
  GetPostsParamsDto,
  PostDto,
  PostResponseDto,
  UpdatePostDto,
} from "../dto";

export const getPosts = async (
  params?: GetPostsParamsDto
): Promise<PostResponseDto> => {
  const { data } = await apiClient.get(ENDPOINTS.POSTS.LIST, {
    params,
  });

  return data;
};

export const getPostById = async (
  postId: number
): Promise<PostDto> => {
  const { data } = await apiClient.get(
    ENDPOINTS.POSTS.DETAILS(postId)
  );

  return data;
};

export const createPost = async (
  payload: CreatePostDto
): Promise<PostDto> => {
  const { data } = await apiClient.post(
    ENDPOINTS.POSTS.ADD,
    payload
  );

  return data;
};

export const updatePost = async (
  postId: number,
  payload: UpdatePostDto
): Promise<PostDto> => {
  const { data } = await apiClient.put(
    ENDPOINTS.POSTS.UPDATE(postId),
    payload
  );

  return data;
};

export const deletePost = async (
  postId: number
): Promise<void> => {
  await apiClient.delete(
    ENDPOINTS.POSTS.DELETE(postId)
  );
};
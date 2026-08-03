import { useNavigate } from "react-router-dom";

import { ROUTE_PATHS } from "@/constants";

import  PostForm  from "../components/PostForm";
import { useCreatePostMutation, useTagsQuery } from "../hooks";
import type { PostFormData } from "../validation/post.schema";
import type { CreatePostDto } from "../dto";
import {
  showErrorToast,
  showSuccessToast,
} from "@/shared/utils/toast";

const CreatePostPage = () => {
  const navigate = useNavigate();

  const { data: tags = [] } = useTagsQuery();

  const { mutateAsync, isPending } =
    useCreatePostMutation();

  const handleSubmit = async (
  values: PostFormData,
) => {
  const payload: CreatePostDto = {
    title: values.title,
    body: values.body,
    userId: 1,
  };

  if (values.tags?.length) {
    payload.tags = values.tags;
  }

  try {
    await mutateAsync(payload);

    showSuccessToast(
      "Post created successfully.",
    );

    navigate(ROUTE_PATHS.POSTS);
  } catch {
    showErrorToast(
      "Failed to create post.",
    );
  }
};
  return (
    <PostForm
      tags={tags}
      submitLabel="Create Post"
      isSubmitting={isPending}
      onSubmit={handleSubmit}
    />
  );
};

export default CreatePostPage;
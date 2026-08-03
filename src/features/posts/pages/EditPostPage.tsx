import { useNavigate, useParams } from "react-router-dom";

import {
  EmptyState,
  ErrorState,
  Loader,
} from "@/shared/components";

import { ROUTE_PATHS } from "@/constants";

import PostForm  from "../components/PostForm";
import {
  usePostQuery,
  useTagsQuery,
  useUpdatePostMutation,
} from "../hooks";

import type {
  PostFormData,
} from "../validation/post.schema";

import type { UpdatePostDto } from "../dto";

import {
  showErrorToast,
  showSuccessToast,
} from "@/shared/utils/toast";


const EditPostPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const postId = Number(id);

  const {
    data: post,
    isPending,
    isError,
  } = usePostQuery(postId);

  const {
    data: tags = [],
  } = useTagsQuery();

  const {
    mutateAsync,
    isPending: isUpdating,
  } = useUpdatePostMutation();

  const handleSubmit = async (
  values: PostFormData
) => {
  const payload: UpdatePostDto = {
    title: values.title,
    body: values.body,
    tags: values.tags,
  };

  try {
    await mutateAsync({
      postId,
      payload,
    });

    showSuccessToast(
      "Post updated successfully."
    );

    navigate(ROUTE_PATHS.POSTS);
  } catch {
    showErrorToast(
      "Failed to update post."
    );
  }
};

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return (
      <ErrorState
        title="Unable to load post"
        description="Something went wrong while loading the post."
      />
    );
  }

  if (!post) {
    return (
      <EmptyState
        title="Post not found"
        description="The requested post does not exist."
      />
    );
  }

  return (
    <PostForm
      defaultValues={{
        title: post.title,
        body: post.body,
        tags: post.tags,
      }}
      tags={tags}
      submitLabel="Update Post"
      isSubmitting={isUpdating}
      onSubmit={handleSubmit}
    />
  );
};

export default EditPostPage;
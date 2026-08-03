import { useNavigate } from "react-router-dom";

import { ROUTE_PATHS } from "@/constants";

import  PostForm  from "../components/PostForm";
import { useCreatePostMutation, useTagsQuery } from "../hooks";
import type { PostFormData } from "../validation/post.schema";
import type { CreatePostDto } from "../dto";

const CreatePostPage = () => {
  const navigate = useNavigate();

  const { data: tags = [] } = useTagsQuery();

  const { mutateAsync, isPending } =
    useCreatePostMutation();

  const handleSubmit = async (
  values: PostFormData
) => {
  const payload: CreatePostDto = {
    title: values.title,
    body: values.body,
    userId: 1,
    tags: values.tags,
  };

 

  await mutateAsync(payload);

  navigate(ROUTE_PATHS.POSTS);
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
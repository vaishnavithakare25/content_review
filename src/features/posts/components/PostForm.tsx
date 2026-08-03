import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  type SubmitHandler,
} from "react-hook-form";

import {
  Button,
  Input,
  Textarea,
  type SelectOption,
} from "@/shared/components";

import {
  postSchema,
  type PostFormData,
} from "../validation/post.schema";

import PostTagField from "./PostTagField";


interface PostFormProps {
  defaultValues?: Partial<PostFormData>;
  submitLabel: string;
  isSubmitting?: boolean;
   tags: SelectOption[];
  onSubmit: (
    values: PostFormData
  ) => void | Promise<void>;
}

const PostForm = ({
  defaultValues,
  submitLabel,
  isSubmitting = false,
  tags,
  onSubmit,
}: PostFormProps) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const submitHandler: SubmitHandler<PostFormData> =
    async (values) => {
      await onSubmit(values);
    };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="space-y-6"
    >
      <Input
        id="title"
        label="Title"
        placeholder="Enter post title"
        error={errors.title?.message}
        {...register("title")}
      />

      <Textarea
        id="body"
        label="Body"
        rows={6}
        placeholder="Enter post description"
        error={errors.body?.message}
        {...register("body")}
      />

      <PostTagField
  control={control}
  tags={tags}
/>

      <Button
        type="submit"
        loading={isSubmitting}
      >
        {submitLabel}
      </Button>
    </form>
  );
};

export default PostForm;
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  type SubmitHandler,
} from "react-hook-form";

import {
  Button,
  Textarea,
} from "@/shared/components";

import {
  commentSchema,
  type CommentFormData,
} from "../validation/comment.schema";

interface CommentFormProps {
  isSubmitting?: boolean;
  onSubmit: (
    values: CommentFormData
  ) => void | Promise<void>;
}

const CommentForm = ({
  isSubmitting = false,
  onSubmit,
}: CommentFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
  });

  const submitHandler: SubmitHandler<CommentFormData> =
    async (values) => {
      await onSubmit(values);
      reset();
    };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="space-y-4"
    >
      <Textarea
        id="body"
        label="Review Comment"
        rows={4}
        placeholder="Write your review..."
        error={errors.body?.message}
        {...register("body")}
      />

      <Button
        type="submit"
        loading={isSubmitting}
      >
        Add Comment
      </Button>
    </form>
  );
};

export default CommentForm;
import { EmptyState,ErrorState, Loader } from "@/shared/components";
import { usePermissions } from "@/shared/hooks/usePermissions";

import { useAuthStore } from "@/store/auth.store";

import {
  useAddCommentMutation,
  usePostCommentsQuery,
} from "../hooks";

import type { CommentFormData } from "../validation/comment.schema";

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

interface CommentsSectionProps {
  postId: number;
}

const CommentsSection = ({
  postId,
}: CommentsSectionProps) => {
  const { user } = useAuthStore();

  const { canAddComment } = usePermissions();

  const {
    data,
    isPending,
    isError,
  } = usePostCommentsQuery(postId);

  const {
    mutateAsync,
    isPending: isAddingComment,
  } = useAddCommentMutation();

  const handleSubmit = async (
    values: CommentFormData
  ) => {
    if (!user) {
      return;
    }

    await mutateAsync({
      body: values.body,
      postId,
      userId: user.id,
    });
  };

 return (
  <section className="space-y-6 border-t pt-6">
    <h2 className="text-xl font-semibold">
      Review Comments
    </h2>

    {isPending ? (
      <Loader />
    ) : isError ? (
      <ErrorState
        title="Unable to load comments"
        description="Something went wrong while loading the comments. Please try again."
      />
    ) : !data || data.comments.length === 0 ? (
      <EmptyState
        title="No comments yet"
        description="There are no review comments for this post."
      />
    ) : (
      <CommentList
        comments={data.comments}
      />
    )}

    {canAddComment && (
      <CommentForm
        isSubmitting={isAddingComment}
        onSubmit={handleSubmit}
      />
    )}
  </section>
);
};

export default CommentsSection;
import { useNavigate, useParams } from "react-router-dom";

import { buildRoute, ROUTE_PATHS } from "@/constants";
import {
  Button,
  Card,
  EmptyState,
  ErrorState,
  Loader,
} from "@/shared/components";

import { usePostQuery } from "../hooks";



import { usePermissions } from "@/shared/hooks/usePermissions";

import { CommentsSection } from "@/features/comments/components";

const PostDetailsPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const postId = Number(id);

  const {
    data: post,
    isPending,
    isError,
  } = usePostQuery(postId);

  const { canEditPost } = usePermissions();

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
    <Card title={post.title}>
      <div className="space-y-6">
        <p>{post.body}</p>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-gray-100 px-2 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-6 text-sm text-gray-600">
          <span>👍 {post.likes}</span>
          <span>👎 {post.dislikes}</span>
          <span>👁 {post.views}</span>
          <span>User: {post.userId}</span>
        </div>

        <div className="flex gap-3">
          {canEditPost && (
  <Button
    variant="secondary"
    onClick={() =>
      navigate(buildRoute.editPost(post.id))
    }
  >
    Edit
  </Button>
)}

          <Button
            variant="outline"
            onClick={() =>
              navigate(ROUTE_PATHS.POSTS)
            }
          >
            Back
          </Button>
        </div>

        <CommentsSection postId={post.id} />
      </div>
    </Card>
  );
};

export default PostDetailsPage;
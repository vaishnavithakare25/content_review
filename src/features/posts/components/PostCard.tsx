import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { buildRoute, } from "@/constants";
import {
  Button,
  Card,
} from "@/shared/components";

import type { Post } from "../types";
import DeletePostDialog from "./DeletePostDialog";
import { usePermissions } from "@/shared/hooks/usePermissions";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate();
  const {
  canEditPost,
  canDeletePost,
} = usePermissions();

  const [isDeleteOpen, setIsDeleteOpen] =
  useState(false);

  return (
    <>
      <Card
        title={post.title}
        className="space-y-4"
      >
        <p className="text-gray-600">
          {post.body}
        </p>

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

        <div className="flex gap-4 text-sm text-gray-600">
          <span>👍 {post.likes}</span>

          <span>👎 {post.dislikes}</span>

          <span>👁 {post.views}</span>
        </div>

        <div className="flex gap-2">
          <Button
  onClick={() =>
    navigate(buildRoute.postDetails(post.id))
  }
>
  View
</Button>

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

         {canDeletePost && (
  <Button
    variant="danger"
    onClick={() => setIsDeleteOpen(true)}
  >
    Delete
  </Button>
)}
        </div>
      </Card>

      <DeletePostDialog
        postId={post.id}
        open={isDeleteOpen}
        onClose={() =>
          setIsDeleteOpen(false)
        }
      />
    </>
  );
};

export default PostCard;
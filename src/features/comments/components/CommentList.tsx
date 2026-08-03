import CommentCard from "./CommentCard";

import type { Comment } from "../types";

interface CommentListProps {
  comments: Comment[];
}

const CommentList = ({
  comments,
}: CommentListProps) => {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  );
};

export default CommentList;
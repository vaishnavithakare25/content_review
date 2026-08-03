import { Card } from "@/shared/components";

import type { Comment } from "../types";

interface CommentCardProps {
  comment: Comment;
}

const CommentCard = ({
  comment,
}: CommentCardProps) => {
  return (
    <Card>
      <div className="space-y-3">
        <p className="text-gray-700">
          {comment.body}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>
            {comment.user.username}
          </span>

          <span>
            👍 {comment.likes}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default CommentCard;
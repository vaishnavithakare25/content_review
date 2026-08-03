import { useEffect } from "react";

import { ConfirmationDialog } from "@/shared/components/ConfirmationDialog";

import { useDeletePostMutation } from "../hooks";

interface DeletePostDialogProps {
  postId: number;
  open: boolean;
  onClose: () => void;
}

const DeletePostDialog = ({
  postId,
  open,
  onClose,
}: DeletePostDialogProps) => {
  const {
    mutate,
    isPending,
    isSuccess,
  } = useDeletePostMutation();

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess, onClose]);

  const handleDelete = () => {
    mutate(postId);
  };

  return (
    <ConfirmationDialog
      open={open}
      title="Delete Post"
      description="Are you sure you want to delete this post?"
      confirmLabel="Delete"
      cancelLabel="Cancel"
      isLoading={isPending}
      onConfirm={handleDelete}
      onCancel={onClose}
    />
  );
};

export default DeletePostDialog;
import { Button } from "@/shared/components";

import type { ConfirmationDialogProps } from "./confirmationDialog.type";

const ConfirmationDialog = ({
  open,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  isLoading = false,
  onConfirm,
  onCancel,
  children,
}: ConfirmationDialogProps) => {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold">
            {title}
          </h2>
        </div>

        <div className="space-y-4 p-6">
          <p className="text-gray-600">
            {description}
          </p>

          {children}

          <div className="flex justify-end gap-3">
            <Button
              variant="secondary"
              onClick={onCancel}
              disabled={isLoading}
            >
              {cancelLabel}
            </Button>

            <Button
              variant="danger"
              loading={isLoading}
              onClick={onConfirm}
            >
              {confirmLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
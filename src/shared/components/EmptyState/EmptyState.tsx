import type { EmptyStateProps } from "./emptystate.type";

const EmptyState = ({
  title,
  description,
  action,
}: EmptyStateProps) => {
  return (
    <div className="rounded-lg border border-dashed p-8 text-center">
      <h2 className="text-lg font-semibold">
        {title}
      </h2>

      {description && (
        <p className="mt-2 text-gray-500">
          {description}
        </p>
      )}

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}
    </div>
  );
};

export default EmptyState;
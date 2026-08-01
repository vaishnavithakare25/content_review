import type { ErrorStateProps } from "./errorState.type";

const ErrorState = ({
  title,
  description,
  action,
}: ErrorStateProps) => {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-8 text-center">
      <h2 className="text-lg font-semibold text-red-700">
        {title}
      </h2>

      {description && (
        <p className="mt-2 text-red-600">
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

export default ErrorState;
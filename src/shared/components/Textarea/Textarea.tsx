import type { TextareaProps } from "./textarea.type";

const Textarea = ({
  label,
  error,
  helperText,
  fullWidth = true,
  className = "",
  id,
  ...props
}: TextareaProps) => {
  return (
    <div className={fullWidth ? "w-full" : ""}>
      {label && (
        <label
          htmlFor={id}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <textarea
        id={id}
        className={`
          w-full rounded-md border px-3 py-2
          outline-none
          transition-colors
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
          resize-y
          ${
            error
              ? "border-red-500"
              : "border-gray-300"
          }
          ${className}
        `}
        {...props}
      />

      {error ? (
        <p className="mt-1 text-sm text-red-600">
          {error}
        </p>
      ) : helperText ? (
        <p className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      ) : null}
    </div>
  );
};

export default Textarea;
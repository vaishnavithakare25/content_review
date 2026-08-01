import type { SelectProps } from "./select.type";

const Select = ({
  label,
  error,
  helperText,
  options,
  placeholder,
  fullWidth = true,
  className = "",
  id,
  ...props
}: SelectProps) => {
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

      <select
        id={id}
        className={`
          w-full rounded-md border px-3 py-2
          outline-none transition-colors
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
          ${
            error
              ? "border-red-500"
              : "border-gray-300"
          }
          ${className}
        `}
        {...props}
      >
        {placeholder && (
          <option value="">
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

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

export default Select;

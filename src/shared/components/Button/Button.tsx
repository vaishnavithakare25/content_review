import type { ButtonProps } from "./button.types";

const variantClasses = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700",

  secondary:
    "bg-gray-600 text-white hover:bg-gray-700",

  outline:
    "border border-gray-300 bg-white hover:bg-gray-100",

  danger:
    "bg-red-600 text-white hover:bg-red-700",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2",
  lg: "px-6 py-3 text-lg",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2 rounded-md
        font-medium transition-colors duration-200
        disabled:cursor-not-allowed disabled:opacity-50
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      disabled={loading || disabled}
      {...props}
    >
      {!loading && leftIcon}

      {loading ? "Loading..." : children}

      {!loading && rightIcon}
    </button>
  );
};

export default Button;
import type { LoaderProps } from "./loader.types";

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12",
};

const Loader = ({
  size = "md",
}: LoaderProps) => {
  return (
    <div className="flex justify-center py-6">
      <div
        className={`
          animate-spin rounded-full
          border-4 border-gray-300
          border-t-blue-600
          ${sizeClasses[size]}
        `}
      />
    </div>
  );
};

export default Loader;

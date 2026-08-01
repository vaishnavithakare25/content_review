import type { CardProps } from "./card.type";

const Card = ({
  title,
  subtitle,
  footer,
  children,
  className = "",
  ...props
}: CardProps) => {
  return (
    <div
      className={`
        rounded-lg border border-gray-200
        bg-white shadow-sm
        ${className}
      `}
      {...props}
    >
      {(title || subtitle) && (
        <div className="border-b border-gray-200 px-6 py-4">
          {title && (
            <h2 className="text-lg font-semibold text-gray-900">
              {title}
            </h2>
          )}

          {subtitle && (
            <p className="mt-1 text-sm text-gray-500">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="p-6">
        {children}
      </div>

      {footer && (
        <div className="border-t border-gray-200 px-6 py-4">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
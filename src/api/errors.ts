

export class AppError extends Error {
  public readonly status?: number;

  constructor(message: string, status?: number) {
    super(message);

    this.name = "AppError";
    this.status = status;

    Object.setPrototypeOf(this, AppError.prototype);
  }
}

export const ERROR_MESSAGES = {
  DEFAULT: "Something went wrong. Please try again.",
  NETWORK: "Network error. Please check your internet connection.",
  UNAUTHORIZED: "Invalid username or password.",
  FORBIDDEN: "You don't have permission to perform this action.",
  NOT_FOUND: "Requested resource was not found.",
  SERVER_ERROR: "Server error. Please try again later.",
} as const;


import type { AxiosError, InternalAxiosRequestConfig } from "axios";

import { AppError, ERROR_MESSAGES } from "./errors";

/**
 * Adds request configuration before every API call.
 */
export const onRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  return config;
};

/**
 * Handles request errors.
 */
export const onRequestError = (error: AxiosError) => {
  return Promise.reject(error);
};

/**
 * Returns successful responses.
 */
export const onResponse = <T>(response: T): T => {
  return response;
};

/**
 * Converts Axios errors into AppError.
 */
export const onResponseError = (error: AxiosError) => {
  const status = error.response?.status;

  const message =
    (error.response?.data as { message?: string })?.message ??
    ERROR_MESSAGES.DEFAULT;

  return Promise.reject(
    new AppError(message, status),
  );
};
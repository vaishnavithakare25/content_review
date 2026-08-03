// src/api/response.ts

/**
 * Common pagination metadata returned by DummyJSON.
 */
export interface PaginationResponse {
  total: number;
  skip: number;
  limit: number;
}

export type ListResponse<
  TKey extends string,
  TItem,
> = PaginationResponse & {
  [K in TKey]: TItem[];
};

/**
 * Common query params.
 */
export interface PaginationParams {
  limit?: number;
  skip?: number;
}

/**
 * Search params.
 */
export interface SearchParams extends PaginationParams {
  q?: string;
}

/**
 * Sorting params.
 */
export interface SortParams {
  sortBy?: string;
  order?: "asc" | "desc";
}
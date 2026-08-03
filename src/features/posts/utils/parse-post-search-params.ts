import type { GetPostsParamsDto } from "../dto";

export const parsePostSearchParams = (
  searchParams: URLSearchParams
): GetPostsParamsDto => {
  // const page = Number(searchParams.get("page") ?? "1");
  const limit = Number(searchParams.get("limit") ?? "10");

  const skip = Number(searchParams.get("skip") ?? "0");

  // const skip = (page - 1) * limit;

  const order = searchParams.get("order");
  const sortBy = searchParams.get("sortBy");

  return {
    q: searchParams.get("search") ?? undefined,
    tag: searchParams.get("tag") ?? undefined,

    sortBy:
      sortBy === "title" || sortBy === "views"
        ? sortBy
        : undefined,

    order:
      order === "asc" || order === "desc"
        ? order
        : undefined,

    limit,
    skip,
  };
};
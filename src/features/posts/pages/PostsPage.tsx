import { useSearchParams } from "react-router-dom";

import {
  EmptyState,
  ErrorState,
  Loader,
  Pagination,
  Button,
} from "@/shared/components";

import { useNavigate } from "react-router-dom";

import {  ROUTE_PATHS } from "@/constants";


import PostList from "../components/PostList";
import PostSearch from "../components/PostSearch";
import PostSort from "../components/PostSort";
import TagFilter from "../components/TagFilter";  

import { usePostsQuery, useTagsQuery } from "../hooks";
import { parsePostSearchParams } from "../utils/parse-post-search-params";
import { usePermissions } from "@/shared/hooks/usePermissions";

const PostsPage = () => {
  const { data: tags = [] } = useTagsQuery();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] =
    useSearchParams();

  const params =
    parsePostSearchParams(searchParams);

    const { canCreatePost } = usePermissions();

  const {
    data,
    isPending,
    isError,
  } = usePostsQuery(params);

  const currentPage =
    Math.floor((params.skip ?? 0) / (params.limit ?? 10)) +
    1;

  const handlePageChange = (page: number) => {
    const updatedParams =
      new URLSearchParams(searchParams);

    // updatedParams.set("page", page.toString());

    const limit = params.limit ?? 10;

    updatedParams.set(
      "skip", String((page -1) * limit )
    );

    updatedParams.set("limit", String(limit));

    setSearchParams(updatedParams);
  };

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return (
     <ErrorState
  title="Failed to load posts"
  description="Something went wrong while fetching posts. Please try again."
/>
    );
  }

  if (
    !data ||
    data.posts.length === 0
  ) {
    return (
      <EmptyState
  title="No posts found"
  description="There are no posts matching your search."
/>
    );
  }



  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        Posts
      </h1>

      {canCreatePost && (
  <Button
    onClick={() =>
      navigate(ROUTE_PATHS.CREATE_POST)
    }
  >
    Create Post
  </Button>
)}
    </div>
      <div className="grid gap-4 md:grid-cols-3">
        <PostSearch />

        <TagFilter tags={tags} />

        <PostSort />
      </div>

      <PostList posts={data.posts} />

      <Pagination
        currentPage={currentPage}
        pageSize={params.limit ?? 10}
        totalItems={data.total}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PostsPage;
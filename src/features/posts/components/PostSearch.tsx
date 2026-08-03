import { useSearchParams } from "react-router-dom";

import { Input } from "@/shared/components";

const PostSearch = () => {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const search =
    searchParams.get("search") ?? "";

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    const params = new URLSearchParams(
      searchParams
    );

    if (value.trim()) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    params.set("page", "1");

    setSearchParams(params);
  };

  return (
    <Input
      id="search"
      label="Search Posts"
      placeholder="Search by title..."
      value={search}
      onChange={handleSearchChange}
    />
  );
};

export default PostSearch;
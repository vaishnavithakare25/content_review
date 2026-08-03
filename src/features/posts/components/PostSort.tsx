import { useSearchParams } from "react-router-dom";

import { Select } from "@/shared/components";

const sortOptions = [
  {
    label: "Title (A-Z)",
    value: "title-asc",
  },
  {
    label: "Title (Z-A)",
    value: "title-desc",
  },
  {
    label: "Views (Low-High)",
    value: "views-asc",
  },
  {
    label: "Views (High-Low)",
    value: "views-desc",
  },
];

const PostSort = () => {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const sortBy =
    searchParams.get("sortBy") ?? "title";

  const order =
    searchParams.get("order") ?? "asc";

  const selectedValue = `${sortBy}-${order}`;

  const handleSortChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;

    const [sortBy, order] = value.split("-");

    const params = new URLSearchParams(
      searchParams
    );

    params.set("sortBy", sortBy);
    params.set("order", order);
    params.set("page", "1");

    setSearchParams(params);
  };

  return (
    <Select
      id="sort"
      label="Sort By"
      value={selectedValue}
      options={sortOptions}
      onChange={handleSortChange}
    />
  );
};

export default PostSort;
import { useSearchParams } from "react-router-dom";

import { Select } from "@/shared/components";

import type { SelectOption } from "@/shared/components";

interface TagFilterProps {
  tags: SelectOption[];
}

const TagFilter = ({
  tags,
}: TagFilterProps) => {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const selectedTag =
    searchParams.get("tag") ?? "";

  const handleTagChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;

    const params = new URLSearchParams(
      searchParams
    );

    if (value) {
      params.set("tag", value);
    } else {
      params.delete("tag");
    }

    params.set("page", "1");

    setSearchParams(params);
  };

  const options = [
  {
    label: "All Tags",
    value: "",
  },
  ...tags,
];

  return (
    <Select
      id="tag"
      label="Filter by Tag"
      value={selectedTag}
      options={options}
      onChange={handleTagChange}
    />
  );
};

export default TagFilter;
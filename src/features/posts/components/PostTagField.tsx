import { Controller, type Control } from "react-hook-form";

import { Select, type SelectOption } from "@/shared/components";

import type { PostFormData } from "../validation/post.schema";

interface PostTagFieldProps {
  control: Control<PostFormData>;
  tags: SelectOption[];
}

const PostTagField = ({
  control,
  tags,
}: PostTagFieldProps) => {
  return (
    <Controller
      name="tags"
      control={control}
      render={({
        field,
        fieldState,
      }) => (
        <Select
          id="tags"
          label="Tags"
          multiple
          value={field.value ?? []}
          options={tags}
          error={fieldState.error?.message}
          onChange={(event) => {
            const values = Array.from(
              event.target.selectedOptions,
              (option) => option.value
            );

            field.onChange(values);
          }}
        />
      )}
    />
  );
};

export default PostTagField;
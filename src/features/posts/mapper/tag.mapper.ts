import type { SelectOption } from "@/shared/components";

import type { TagDto } from "../dto/tag.dto";

export const mapTagDtoToOption = (
  dto: TagDto
): SelectOption => ({
  label: dto.name,
  value: dto.slug,
});

export const mapTagDtoToOptions = (
  dtos: TagDto[]
): SelectOption[] =>
  dtos.map(mapTagDtoToOption);
import type { PostDto } from "../dto";
import type { Post } from "../types";

export const mapPostDtoToPost = (dto: PostDto): Post => ({
   id: dto.id,
   title: dto.title,
   body: dto.body,
   tags: dto.tags,
   likes: dto.reactions?.likes ?? 0,
   dislikes: dto.reactions?.dislikes ?? 0,
   views: dto.views ?? 0,
   userId: dto.userId,

});

export const mapPostDtoToPosts = (dtos: PostDto[]): Post[] => {
    return  dtos.map(mapPostDtoToPost);
}
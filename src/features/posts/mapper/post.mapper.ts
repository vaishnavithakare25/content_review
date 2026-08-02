import type { PostDto } from "../dto";
import type { Post } from "../types";

export const mapPostDtoToPost = (dto: PostDto): Post => ({
   id: dto.id,
   title: dto.title,
   body: dto.body,
   tags: dto.tags,
   likes: dto.reactions.likes,
   dislikes: dto.reactions.dislikes,
   views: dto.views,
   userId: dto.userId,

});

export const mapPostDtoToPosts = (dtos: PostDto[]): Post[] => {
    return  dtos.map(mapPostDtoToPost);
}
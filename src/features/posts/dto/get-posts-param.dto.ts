export interface GetPostsParamsDto{
    limit?: number;
    skip?: number;
    sortBy?: "title" | "views";
    order?: "asc" | "desc";
    q?: string;
    tag?:string;
}
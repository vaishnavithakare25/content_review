export interface GetPostsParamsDto{
    limit?: number;
    skip?: number;
    sortBy?:string;
    order?: "asc" | "desc";
    q?: string;
    tag?:string;
}
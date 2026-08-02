export interface PostFilters {
    search: string;
    tag: string;
    sortBy: string;
    order: "asc" | "desc";
    page: number;
    pageSize: number;
}
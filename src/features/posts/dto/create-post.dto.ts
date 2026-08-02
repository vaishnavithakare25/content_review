export interface CreatePostDto{
    title: string;
    body: string;
    userId: number;
    tags?:string[];
}
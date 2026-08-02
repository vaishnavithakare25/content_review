export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    likes: number;
    dislikes: number;
    views: number;
    userId: number;
}
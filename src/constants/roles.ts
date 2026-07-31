export const ROLES = {
    CONTENT_MANAGER: "Content Manager",
    REVIEWER :"Reviewer",
    READER: "Reader",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES]
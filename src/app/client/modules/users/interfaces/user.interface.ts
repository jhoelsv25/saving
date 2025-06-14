export interface UserCreate {
    email: string;
    document: string;
    name: string;
    role: string;
}

export interface User {
    id: string;
    email: string;
    document: string;
    name: string;
    role: string;
    created_at: Date;
    updated_at: Date;
}

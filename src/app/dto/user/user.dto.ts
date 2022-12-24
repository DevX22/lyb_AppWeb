export interface User {
    id: number;
    nombreApellido: string;
    usser: string;
    email: string;
    avatar: string;
    rolUser?: any;
    estado: boolean;
}

export interface UserResponse {
    token: string;
    user: User;
}
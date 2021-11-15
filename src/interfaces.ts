export interface IAPIResponse {
    status: number;
    error?: any; 
    json: any;
}

export interface IAuth {
    token?: string;
    role?: string;
    setAuth?: (token: string, role: string) => void;
    removeAuth?: () => void;
}

export interface IReview {
    id?: number;
    userId?: number;
    gameId: number;
    title: string;
    text: string;
}

export interface IReport {
    id?: number;
    userId?: number;
    reviewId: number;
    reason: string;
    status?: string;
    handledBy?: number;
}
export interface IGame {
    id?: number;
    title: string;
    platform: string;
    genre: string;
    releaseDate: Date;
    rating?: number
}

export interface IUser {
    username: string;
    password: string;
    email?: string;
}
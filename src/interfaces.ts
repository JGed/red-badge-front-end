export interface IAPIResponse {
    status: number;
    json: Object;
}

export interface IAuth {
    token?: string;
    role?: string;
}

export interface IReview {
    id?: number;
    userId?: number;
    gameId: number;
    title: string;
    text: string;
}

export interface IGame {
    id?: number;
    title: string;
    platform: string;
    genre: string;
    releaseDate: Date;
    rating?: number
}
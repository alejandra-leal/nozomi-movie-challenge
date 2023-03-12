export interface IMovie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
}

export interface IAddMoviePayload {
    movie: IMovie
    shouldRemove: boolean
}
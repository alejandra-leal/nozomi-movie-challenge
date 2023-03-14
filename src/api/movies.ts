import { IMovieServiceResponse, IMovieServiceVideoResponse } from "models/movies-service-response";
import { API_KEY, ENDPOINT, ENDPOINT_DISCOVER, ENDPOINT_SEARCH } from "../constants";

export async function getMovies(searchQuery: string, pagNum?: number, signal?: any): Promise<IMovieServiceResponse> {
    if(searchQuery){
        return searchMovie(searchQuery, pagNum, signal);
    }
    return fetchMovies(pagNum, signal);
    
}

async function fetchMovies(pagNum?: number, signal?: any): Promise<IMovieServiceResponse> {
    const response = await fetch(`${ENDPOINT_DISCOVER}&page=${pagNum}`);
    return response.json();
}

async function searchMovie(searchQuery: string, pagNum?: number, signal?: any): Promise<IMovieServiceResponse> {
    const url = `${ENDPOINT_SEARCH}&query=${searchQuery}&page=${pagNum}`;
    const response = await fetch(url);
    return response.json();

}

export async function getMovieTrailer(movieId: number): Promise<IMovieServiceVideoResponse> {
    const url = `${ENDPOINT}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await fetch(url);
    return response.json();
}
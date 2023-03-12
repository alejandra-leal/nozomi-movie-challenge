import { API_KEY, ENDPOINT, ENDPOINT_DISCOVER, ENDPOINT_SEARCH } from "../constants";

// TODO. add types
export async function getMovies() {
    const response = await fetch(ENDPOINT_DISCOVER);
    return response.json();
}

export async function searchMovie(searchQuery: string) {
    const url = `${ENDPOINT_SEARCH}&query=${searchQuery}&page=1`;
    const response = await fetch(url);
    return response.json();

}

export async function getMovieTrailer(movieId: number) {
    const url = `${ENDPOINT}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await fetch(url);
    return response.json();
}
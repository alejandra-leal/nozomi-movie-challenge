export const API_KEY = process.env.REACT_APP_API_KEY as string;
export const ENDPOINT = "https://api.themoviedb.org/3";
export const ENDPOINT_DISCOVER =
  ENDPOINT + "/discover/movie?api_key=" + API_KEY + "&sort_by=vote_count.desc";
export const ENDPOINT_SEARCH = ENDPOINT + "/search/movie?api_key=" + API_KEY;
export const ENDPOINT_MOVIE =
  ENDPOINT + "/movie/507086?api_key=" + API_KEY + "&append_to_response=videos";
export const IMG_URL_BASE = "https://image.tmdb.org/t/p/w500/";
export const DEFAULT_MOVIE_POSTER = "https://via.placeholder.com/400";
export const ENDPOINT_MOVIE_TRAILER = `${ENDPOINT}/movie/?api_key=${API_KEY}&append_to_response=videos`;
export const EMPTY_DEFAULT_MESSAGE =
  "Don't be shy, add a movie to your %LIST_NAME% list!";

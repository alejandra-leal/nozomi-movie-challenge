import { IMovie } from "./movie";

export interface IMovieServiceResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IMovieServiceVideoResponse {
  page: number;
  videos: IVideoResults;
  total_pages: number;
  total_results: number;
}

interface IVideoResults {
  results: IVideoResult[];
}
interface IVideoResult {
  id: string;
  name: string;
  key: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}

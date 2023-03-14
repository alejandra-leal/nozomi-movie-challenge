import { getMovies } from 'api/movies';
import { IMovie } from 'models/movie';
import { useState, useEffect} from 'react';

export const useMovies = (searchQuery:string, pageNum =1): IUseMoviesResponse => {
    const [movieResults, setMovieResults] = useState<IMovie[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState({});
    const [hasNextPage, setHasNextPage] = useState(false);

    useEffect(() => {
        // Reset values
        setIsLoading(true);
        setIsError(false);
        setError({});

        const controller = new AbortController();
        const {signal} = controller;
        getMovies(searchQuery, pageNum, {signal}).then(response => {
            // pageNum 1 means new search
            if (pageNum === 1) {
                setMovieResults(response.results);

            } else {
                setMovieResults(prev => [...prev, ...response.results]);
            }
            setHasNextPage(Boolean(response.results.length));
            setIsLoading(false);
        })
        .catch(e => {
            setIsLoading(false);
            // Aborted errors can be ignored, as it was created on purpose.
            if(signal.aborted) return;
            
            setIsError(true);
            setError({message: e.message});
        });

        // cleanup
        return () => controller.abort()
    }, [pageNum, searchQuery]);

    return {
        isLoading,
        isError,
        error,
        movieResults,
        hasNextPage
    }

}

export interface IUseMoviesResponse {
        isLoading: boolean,
        isError: boolean
        error: {}
        movieResults: IMovie[]
        hasNextPage: boolean
}
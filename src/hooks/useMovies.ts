import { getMovies } from 'api/movies';
import { IMovie } from 'data/store';
import { useState, useEffect} from 'react';

const useMovies = (searchQuery:string, pageNum =1) => {
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

        // abort controller will cancel the request when the componen unmounts
        const controller = new AbortController();
        const {signal} = controller;
        getMovies(searchQuery, pageNum, {signal}).then(response => {
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

export default useMovies;

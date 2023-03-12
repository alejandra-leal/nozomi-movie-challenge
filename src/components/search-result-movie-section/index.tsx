import { AdditionalSearchFilter, Context, IMovie } from "data/store";
import { useContext, useEffect, useState } from "react";
import { MovieListSection } from "components/movie-list";
import { ENDPOINT_DISCOVER, ENDPOINT_SEARCH } from "../../constants";

export const SearchResultMovieSection = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const { state } = useContext(Context);

  useEffect(() => {
    if (
      !state.searchQuery &&
      state.additionalSearchFilter === AdditionalSearchFilter.None
    ) {
    
      fetchMovies(ENDPOINT_DISCOVER).then((response) => {
        setMovies(response.results);
      });
      return;
    }
    const url = `${ENDPOINT_SEARCH}&query=${state.searchQuery}&page=1`;
    fetchMovies(url).then((response) => {
      setMovies(response.results);
    });
  }, [state.searchQuery, state.additionalSearchFilter]);

  return <MovieListSection movies={movies} />;
};

export const fetchMovies = async (apiUrl: string) => {
  const response = await fetch(apiUrl);
  return response.json();
};

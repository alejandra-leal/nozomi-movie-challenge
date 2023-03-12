import { AdditionalSearchFilter, Context, IMovie } from "data/store";
import { useContext, useEffect, useState } from "react";
import { MovieListSection } from "components/movie-list";
import { getMovies, searchMovie } from "../../api/movies";

export const SearchResultMovieSection = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const { state } = useContext(Context);

  useEffect(() => {
    if (
      !state.searchQuery &&
      state.additionalSearchFilter === AdditionalSearchFilter.None
    ) {
      getMovies().then((response) => {
        setMovies(response.results);
      });
      
      return;
    }

    searchMovie(state.searchQuery).then((response) => {
      setMovies(response.results);
    });
  }, [state.searchQuery, state.additionalSearchFilter]);

  return <MovieListSection movies={movies} />;
};

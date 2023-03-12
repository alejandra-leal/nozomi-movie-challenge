import { useEffect, useState } from "react";
import { ENDPOINT_DISCOVER, ENDPOINT_SEARCH } from "../../constants";
import { AdditionalSearchFilter, IMovie } from "data/store";
import { Context } from "data/store";
import { useContext } from "react";
import { MovieListSection } from "components/movie-list-section";

export const MovieGrid = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const { state } = useContext(Context);

  useEffect(() => {
    if (
      !state.searchQuery ||
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

  return (
    <>
      {state.additionalSearchFilter === AdditionalSearchFilter.Starred && (
        <MovieListSection
          movies={Array.from(state.favoriteMovies.values())}
          sectionName="favorites"
        />
      )}
      {state.additionalSearchFilter === AdditionalSearchFilter.WatchLater && (
        <MovieListSection
          movies={Array.from(state.watchLaterMovies.values())}
          sectionName="watch later"
        />
      )}
      {state.additionalSearchFilter === AdditionalSearchFilter.None && (
        <MovieListSection movies={movies} />
      )}
    </>
  );
};

export const fetchMovies = async (apiUrl: string) => {
  const response = await fetch(apiUrl);
  return response.json();
};

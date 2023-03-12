import { Context } from "data/store";
import { useContext } from "react";
import { MovieListSection } from "components/movie-list";

export const WatchLaterMovieSection = () => {
  const { state } = useContext(Context);

  return (
    <MovieListSection
        movies={Array.from(state.watchLaterMovies.values())}
        sectionName="watch later"
      />
  );
};


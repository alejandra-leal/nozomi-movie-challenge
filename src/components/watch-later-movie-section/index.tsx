import { AppContext } from "data/store";
import { useContext } from "react";
import { MovieListGrid } from "components/movie-list-grid";

export const WatchLaterMovieSection = () => {
  const { state } = useContext(AppContext);

  return (
    <section data-testid="watch-later-movie-grid">
    <MovieListGrid
        movies={Array.from(state.watchLaterMovies.values())}
        sectionName="watch later"
      />
      </section>
  );
};


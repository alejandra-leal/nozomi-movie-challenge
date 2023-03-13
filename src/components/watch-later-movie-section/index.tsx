import { AppContext } from "context/store";
import { useContext } from "react";
import { CustomGrid } from "common/custom-grid";
import { MovieCard } from "components/movie-card";

export const WatchLaterMovieSection = () => {
  const { state } = useContext(AppContext);
  const watchLaterMovies = Array.from(state.watchLaterMovies.values()).map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ))

  return (
    <section data-testid="watch-later-movie-grid">
    <CustomGrid
        emptyMessage="Don't be shy, add a movie to your watch later list!"
      >
        {watchLaterMovies}
      </CustomGrid>
      </section>
  );
};


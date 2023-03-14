import { AppContext } from "context/store";
import { useContext } from "react";
import { MovieCard } from "components/movie-card";
import { CustomGrid } from "common/custom-grid";
import { EMPTY_DEFAULT_MESSAGE } from "../../constants";

export const WatchLaterMovieSection = () => {
  const { state } = useContext(AppContext);
  const watchLaterMovies = Array.from(state.watchLaterMovies.values()).map(
    (movie) => <MovieCard key={movie.id} movie={movie} />
  );

  return (
    <section data-testid="watch-later-movie-grid">
      <CustomGrid
        emptyMessage={EMPTY_DEFAULT_MESSAGE.replace(
          "%LIST_NAME%",
          "watch later"
        )}
      >
        {watchLaterMovies}
      </CustomGrid>
    </section>
  );
};

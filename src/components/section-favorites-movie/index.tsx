import { AppContext } from "context/store";
import { useContext } from "react";
import { MovieCard } from "components/movie-card";
import { CustomGrid } from "common/custom-grid";
import { EMPTY_DEFAULT_MESSAGE } from "../../constants";

export const FavoritesMovieSection = () => {
  const { state } = useContext(AppContext);
  const favoriteMovies = Array.from(state.favoriteMovies.values()).map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ))

  return (
    <section data-testid="favorites-movie-grid">
    <CustomGrid
        emptyMessage={EMPTY_DEFAULT_MESSAGE.replace("%LIST_NAME%","favorites")}
      >
        {favoriteMovies}
      </CustomGrid>
      </section>
  );
};


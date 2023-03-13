import { AppContext } from "context/store";
import { useContext } from "react";
import { CustomGrid } from "common/custom-grid";
import { MovieCard } from "components/movie-card";

export const FavoritesMovieSection = () => {
  const { state } = useContext(AppContext);
  const favoriteMovies = Array.from(state.favoriteMovies.values()).map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ))

  return (
    <section data-testid="favorites-movie-grid">
    <CustomGrid
        emptyMessage="Don't be shy, add a movie to your favorites list!"
      >
        {favoriteMovies}
      </CustomGrid>
      </section>
  );
};


import { AppContext } from "data/store";
import { useContext } from "react";
import { MovieListGrid } from "components/movie-list-grid";

export const FavoritesMovieSection = () => {
  const { state } = useContext(AppContext);

  return (
    <MovieListGrid
        movies={Array.from(state.favoriteMovies.values())}
        sectionName="favorites"
      />
  );
};


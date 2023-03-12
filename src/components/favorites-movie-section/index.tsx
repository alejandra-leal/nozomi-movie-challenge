import { Context } from "data/store";
import { useContext } from "react";
import { MovieListSection } from "components/movie-list";

export const FavoritesMovieSection = () => {
  const { state } = useContext(Context);

  return (
    <MovieListSection
        movies={Array.from(state.favoriteMovies.values())}
        sectionName="favorites"
      />
  );
};


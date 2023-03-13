import { AppContext } from "context/store";
import { useContext } from "react";
import { FavoritesMovieSection } from "components/favorites-movie-section";
import { WatchLaterMovieSection } from "components/watch-later-movie-section";
import { AdditionalSearchFilter } from "models/additional-search-filter";
import { SearchMovieSection } from "components/search-movie-section";

export const MovieSectionPicker = () => {
  const { state } = useContext(AppContext);

  return (() => {
    switch (state.additionalSearchFilter) {
      case AdditionalSearchFilter.Starred:
        return <FavoritesMovieSection />;
      case AdditionalSearchFilter.WatchLater:
        return <WatchLaterMovieSection />;
      case AdditionalSearchFilter.None:
        return <SearchMovieSection />;
    }
  })();
};

import { AdditionalSearchFilter } from "data/store";
import { Context } from "data/store";
import { useContext } from "react";
import { FavoritesMovieSection } from "components/favorites-movie-section";
import { WatchLaterMovieSection } from "components/watch-later-movie-section";
import { SearchResultMovieSection } from "components/search-result-movie-section";

export const MovieSectionPicker = () => {
  const { state } = useContext(Context);

  return (() => {
    switch (state.additionalSearchFilter) {
      case AdditionalSearchFilter.Starred:
        return <FavoritesMovieSection />;
      case AdditionalSearchFilter.WatchLater:
        return <WatchLaterMovieSection />;
      case AdditionalSearchFilter.None:
        return <SearchResultMovieSection />;
    }
  })();
};

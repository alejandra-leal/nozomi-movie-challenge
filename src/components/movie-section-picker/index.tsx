import { FavoritesMovieSection } from "components/section-favorites-movie";
import { SearchMovieSection } from "components/section-search-movie";
import { WatchLaterMovieSection } from "components/section-watch-later-movie";
import { AppContext } from "context/store";
import { AdditionalSearchFilter } from "models/additional-search-filter";
import { useContext } from "react";

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

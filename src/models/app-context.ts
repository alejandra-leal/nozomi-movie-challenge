import { AdditionalSearchFilter } from "./additional-search-filter";
import { IMovie } from "./movie";

export interface IAppContext {
  additionalSearchFilter: AdditionalSearchFilter;
  searchQuery: string;
  favoriteMovies: Map<Number, IMovie>;
  watchLaterMovies: Map<Number, IMovie>;
  movieModal: IMovie | null;
}

import React, { Dispatch } from "react";

export enum AdditionalSearchFilter {
  None = "NONE",
  Starred = "STARRED",
  WatchLater = "WATCH_LATER",
}

export interface IState {
  additionalSearchFilter: AdditionalSearchFilter;
  searchQuery: string;
  favoriteMovies: Map<Number, IMovie>;
  watchLaterMovies: Map<Number, IMovie>;
  movieModal: IMovie | null;
}

export const initialState: IState = {
  additionalSearchFilter: AdditionalSearchFilter.None,
  searchQuery: "",
  favoriteMovies: new Map(),
  watchLaterMovies: new Map(),
  movieModal: null
};

export interface IMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export interface IAddMoviePayload {
  movie: IMovie
  shouldRemove: boolean
}

export enum ActionTypes {
  SET_ADDITIONAL_FILTER = "SET_ADDITIONAL_FILTER",
  SET_SEARCH_QUERY = "SET_SEARCH_QUERY",
  HANDLE_FAVORITES = "HANDLE_FAVORITES",
  HANDLE_WATCH_LATER = "HANDLE_WATCH_LATER",
  SET_MOVIE_MODAL = "SET_MOVIE_MODAL",
}

type Actions =
  | {
      type: ActionTypes.SET_ADDITIONAL_FILTER;
      payload: AdditionalSearchFilter;
    }
  | { type: ActionTypes.SET_SEARCH_QUERY; payload: string }
  | { type: ActionTypes.HANDLE_FAVORITES; payload: IAddMoviePayload }
  | { type: ActionTypes.HANDLE_WATCH_LATER; payload: IAddMoviePayload }
  | { type: ActionTypes.SET_MOVIE_MODAL; payload: IMovie | null }

export const Context = React.createContext<{
  state: IState;
  dispatch: Dispatch<Actions>;
}>({ state: initialState, dispatch: () => null });

export const stateReducer = (state: IState, action: Actions): IState => {
  switch (action.type) {
    case ActionTypes.SET_ADDITIONAL_FILTER: {
      return {
        ...state,
        additionalSearchFilter: action.payload,
        searchQuery: ""
      };
    }
    case ActionTypes.SET_SEARCH_QUERY: {
      return {
        ...state,
        searchQuery: action.payload,
      };
    }
    case ActionTypes.HANDLE_FAVORITES: {
      const movieId = action.payload.movie.id;
      if(action.payload.shouldRemove) {
        state.favoriteMovies.delete(movieId);
      } else {
        state.favoriteMovies.set(movieId, action.payload.movie);
      }
      return {
        ...state,
      };
    }
    case ActionTypes.HANDLE_WATCH_LATER: {
      const movieId = action.payload.movie.id;
      if(action.payload.shouldRemove) {
        state.watchLaterMovies.delete(movieId);
      } else {
        state.watchLaterMovies.set(movieId, action.payload.movie);
      }
      return {
        ...state,
      };
    }
    case ActionTypes.SET_MOVIE_MODAL: {
      return {
        ...state,
        movieModal: action.payload,
      };
    }
    default:
      return state;
  }
};

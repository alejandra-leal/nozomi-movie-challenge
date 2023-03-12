import { AdditionalSearchFilter } from "models/additional-search-filter";
import { IState } from "models/app-state";
import { IAddMoviePayload, IMovie } from "models/movie";
import React, { Dispatch } from "react";

export const initialState: IState = {
  additionalSearchFilter: AdditionalSearchFilter.None,
  searchQuery: "",
  favoriteMovies: new Map(),
  watchLaterMovies: new Map(),
  movieModal: null
};

export enum ActionType {
  SET_ADDITIONAL_FILTER = "SET_ADDITIONAL_FILTER",
  SET_SEARCH_QUERY = "SET_SEARCH_QUERY",
  HANDLE_FAVORITES = "HANDLE_FAVORITES",
  HANDLE_WATCH_LATER = "HANDLE_WATCH_LATER",
  SET_MOVIE_MODAL = "SET_MOVIE_MODAL",
}

type Actions =
  | {
      type: ActionType.SET_ADDITIONAL_FILTER;
      payload: AdditionalSearchFilter;
    }
  | { type: ActionType.SET_SEARCH_QUERY; payload: string }
  | { type: ActionType.HANDLE_FAVORITES; payload: IAddMoviePayload }
  | { type: ActionType.HANDLE_WATCH_LATER; payload: IAddMoviePayload }
  | { type: ActionType.SET_MOVIE_MODAL; payload: IMovie | null }

export const Context = React.createContext<{
  state: IState;
  dispatch: Dispatch<Actions>;
}>({ state: initialState, dispatch: () => null });

export const stateReducer = (state: IState, action: Actions): IState => {
  switch (action.type) {
    case ActionType.SET_ADDITIONAL_FILTER: {
      return {
        ...state,
        additionalSearchFilter: action.payload,
        searchQuery: ""
      };
    }
    case ActionType.SET_SEARCH_QUERY: {
      return {
        ...state,
        searchQuery: action.payload,
      };
    }
    case ActionType.HANDLE_FAVORITES: {
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
    case ActionType.HANDLE_WATCH_LATER: {
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
    case ActionType.SET_MOVIE_MODAL: {
      return {
        ...state,
        movieModal: action.payload,
      };
    }
    default:
      return state;
  }
};

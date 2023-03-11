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
}

export const initialState: IState = {
  additionalSearchFilter: AdditionalSearchFilter.None,
  searchQuery: "",
  favoriteMovies: new Map(),
  watchLaterMovies: new Map(),
};

export interface IMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export enum ActionTypes {
  SET_ADDITIONAL_FILTER = "SET_ADDITIONAL_FILTER",
  SET_SEARCH_QUERY = "SET_SEARCH_QUERY",
  ADD_TO_FAVORITES = "ADD_TO_FAVORITES",
  ADD_TO_WATCH_LATER = "ADD_TO_WATCH_LATER",
  REMOVE_FAVORITES = "REMOVE_FAVORITES",
  REMOVE_WATCH_LATER = "REMOVE_WATCH_LATER",
}

type Actions =
  | {
      type: ActionTypes.SET_ADDITIONAL_FILTER;
      payload: AdditionalSearchFilter;
    }
  | { type: ActionTypes.SET_SEARCH_QUERY; payload: string }
  | { type: ActionTypes.ADD_TO_FAVORITES; payload: IMovie }
  | { type: ActionTypes.ADD_TO_WATCH_LATER; payload: IMovie }
  | { type: ActionTypes.REMOVE_FAVORITES; payload: Number }
  | { type: ActionTypes.REMOVE_WATCH_LATER; payload: Number };

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
      };
    }
    case ActionTypes.SET_SEARCH_QUERY: {
      return {
        ...state,
        searchQuery: action.payload,
      };
    }
    case ActionTypes.ADD_TO_FAVORITES: {
      state.favoriteMovies.set(action.payload.id, action.payload);
      return {
        ...state,
      };
    }
    case ActionTypes.REMOVE_FAVORITES: {
      state.favoriteMovies.delete(action.payload);
      return {
        ...state,
      };
    }
    case ActionTypes.ADD_TO_WATCH_LATER: {
      state.watchLaterMovies.set(action.payload.id, action.payload);
      return {
        ...state,
      };
    }
    case ActionTypes.REMOVE_WATCH_LATER: {
      state.watchLaterMovies.delete(action.payload);
      return {
        ...state,
      };
    }
    default:
      console.log("leal here at default return of reducer!!!", action);
      return state;
  }
};

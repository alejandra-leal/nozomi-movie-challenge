import React, { Dispatch } from "react";

export enum AdditionalSearchFilter {
    None = "NONE",
    Starred = "STARRED",
    WatchLater = "WATCH_LATER"
}

export interface IState {
    additionalSearchFilter: AdditionalSearchFilter;
    searchQuery: string;
    favoriteMovies: Map<Number, IMovie>,
    watchLaterMovies: Map<Number, IMovie>
}

export const initialState: IState = {
    additionalSearchFilter: AdditionalSearchFilter.None,
    searchQuery: "",
    favoriteMovies: new Map(),
    watchLaterMovies: new Map(),
};

export interface IMovie {
    id: Number,
    title: string,
    overview: string,
    poster_path: string
}

export enum ActionTypes {
    SET_ADDITIONAL_FILTER = "SET_ADDITIONAL_FILTER",
    SET_SEARCH_QUERY = "SET_SEARCH_QUERY"
}

type Actions =
  | {
      type: ActionTypes.SET_ADDITIONAL_FILTER;
      payload: AdditionalSearchFilter;
    }
 |  { type: ActionTypes.SET_SEARCH_QUERY;
      payload: string 
    }

export const Context = React.createContext<{
        state: IState;
        dispatch: Dispatch<Actions>;
    }>({state: initialState, dispatch: () => null});

export const stateReducer = (
    state: IState,
    action: Actions
): IState => {
    switch(action.type) {
        case ActionTypes.SET_ADDITIONAL_FILTER: {
            console.log("LEAL HERE AT SET_ADDITIONAL_FILTER", action);
            return {
                ...state,
                additionalSearchFilter: action.payload,
              };
        }
        case ActionTypes.SET_SEARCH_QUERY: {
            console.log("LEAL HERE AT SET_SEARCH_QUERY", action);
            return {
                ...state,
                searchQuery: action.payload,
              };
        }
        default:
            console.log("leal here at default return of reducer!!!", action);
            return state;
    }
}
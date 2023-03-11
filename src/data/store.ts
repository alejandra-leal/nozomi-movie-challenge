import React, { Dispatch } from "react";

export enum AdditionalSearchFilter {
    None = "NONE",
    Starred = "STARRED",
    WatchLater = "WATCH_LATER"
}

export interface IState {
    additionalSearchFilter: AdditionalSearchFilter;
    searchQuery: string;
    favoriteMovies: Set<string>,
    watchLaterMovies: Set<string>
}

export const initialState: IState = {
    additionalSearchFilter: AdditionalSearchFilter.None,
    searchQuery: "",
    favoriteMovies: new Set(),
    watchLaterMovies: new Set(),
};

export interface IMovie {
    id: Number,
    title: String,
    description: String,
    imgPath: String
}

export enum ActionTypes {
    SET_ADDITIONAL_FILTER = "SET_ADDITIONAL_FILTER",
    ANOTHER_ONE = "ANOTHER_ONE"
}

type Actions =
  | {
      type: ActionTypes.SET_ADDITIONAL_FILTER;
      payload: AdditionalSearchFilter;
    }
 |  { type: ActionTypes.ANOTHER_ONE;
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
        default:
            console.log("leal here at default return of reducer!!!", action);
            return state;
    }
}
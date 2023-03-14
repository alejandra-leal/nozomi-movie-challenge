import { AdditionalSearchFilter } from "models/additional-search-filter";
import { IMovie } from "models/movie";
import { stateReducer, initialState, ActionType } from "./store";

describe("contextReducer", () => {
  const dummyMovie: IMovie = {
    id: 1,
    title: "Title 1",
    overview: "Description",
    poster_path: "/img/path",
    release_date: "",
  };
  it("should return the updated context when SET_ACTIVE_SECTION is dispatched", () => {
    const expectedAdditionalFilter = AdditionalSearchFilter.Starred;

    const updatedState = stateReducer(initialState, {
      type: ActionType.SET_ADDITIONAL_FILTER,
      payload: expectedAdditionalFilter,
    });

    expect(updatedState.additionalSearchFilter).toBe(expectedAdditionalFilter);
  });
  it("should reset search query when SET_ACTIVE_SECTION is dispatched", () => {
    const expectedAdditionalFilter = AdditionalSearchFilter.None;

    const updatedState = stateReducer(
      { ...initialState, searchQuery: "Search query" },
      {
        type: ActionType.SET_ADDITIONAL_FILTER,
        payload: expectedAdditionalFilter,
      }
    );

    expect(updatedState.searchQuery).toBe("");
  });
  it("should update search query when SET_SEARCH_QUERY is dispatched", () => {
    const expectedSearchQuery = "My new search query";

    const updatedState = stateReducer(initialState, {
      type: ActionType.SET_SEARCH_QUERY,
      payload: expectedSearchQuery,
    });

    expect(updatedState.searchQuery).toBe(expectedSearchQuery);
  });
  it("should add movie to favorites map when HANDLE_FAVORITES is dispatched and shouldRemove is false", () => {
    const updatedState = stateReducer(initialState, {
      type: ActionType.HANDLE_FAVORITES,
      payload: {
        movie: dummyMovie,
        shouldRemove: false,
      },
    });

    expect(updatedState.favoriteMovies.has(dummyMovie.id)).toBe(true);
  });
  it("should remove movie to favorites map when HANDLE_FAVORITES is dispatched and shouldRemove is true", () => {
    const updatedState = stateReducer(
      {
        ...initialState,
        favoriteMovies: new Map([[dummyMovie.id, dummyMovie]]),
      },
      {
        type: ActionType.HANDLE_FAVORITES,
        payload: {
          movie: dummyMovie,
          shouldRemove: true,
        },
      }
    );

    expect(updatedState.favoriteMovies.has(dummyMovie.id)).toBe(false);
  });
  it("should add movie to watchLater map when HANDLE_WATCH_LATER is dispatched and shouldRemove is false", () => {
    const updatedState = stateReducer(initialState, {
      type: ActionType.HANDLE_WATCH_LATER,
      payload: {
        movie: dummyMovie,
        shouldRemove: false,
      },
    });

    expect(updatedState.watchLaterMovies.has(dummyMovie.id)).toBe(true);
  });
  it("should remove movie to watchLater map when HANDLE_WATCH_LATER is dispatched and shouldRemove is true", () => {
    const updatedState = stateReducer(
      {
        ...initialState,
        watchLaterMovies: new Map([[dummyMovie.id, dummyMovie]]),
      },
      {
        type: ActionType.HANDLE_WATCH_LATER,
        payload: {
          movie: dummyMovie,
          shouldRemove: true,
        },
      }
    );

    expect(updatedState.watchLaterMovies.has(dummyMovie.id)).toBe(false);
  });
  it("should set movieModal when SET_MOVIE_MODAL is dispatched", () => {
    const updatedState = stateReducer(initialState, {
      type: ActionType.SET_MOVIE_MODAL,
      payload: dummyMovie,
    });

    expect(updatedState.movieModal).toBe(dummyMovie);
  });
});

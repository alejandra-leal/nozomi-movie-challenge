import React from "react";
import { AppContext, ActionType } from "data/store";
import { useContext } from "react";
import styles from "./index.module.css";
import { AdditionalSearchFilter } from "models/additional-search-filter";

export const NavigationBar = () => {
  const { state, dispatch } = useContext(AppContext);

  const setAdditionalFilter = (additionalFilter: AdditionalSearchFilter) => {
    if (state.additionalSearchFilter === additionalFilter) {
      dispatch({
        type: ActionType.SET_ADDITIONAL_FILTER,
        payload: AdditionalSearchFilter.None,
      });
    } else {
      dispatch({
        type: ActionType.SET_ADDITIONAL_FILTER,
        payload: additionalFilter,
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.navItemsContainer}>
        <button
          className={`${styles.navItem} ${
            state.additionalSearchFilter === AdditionalSearchFilter.Starred
              ? styles.selected
              : ""
          }`}
          onClick={() => {
            setAdditionalFilter(AdditionalSearchFilter.Starred);
          }}
        >
          {state.favoriteMovies.size > 0 && <span className={styles.counter}>{state.favoriteMovies.size}</span>}
          favorites
        </button>

        <span className={styles.navItem}>|</span>

        <button
          className={`${styles.navItem} ${
            state.additionalSearchFilter === AdditionalSearchFilter.WatchLater
              ? styles.selected
              : ""
          }`}
          onClick={() => {
            setAdditionalFilter(AdditionalSearchFilter.WatchLater);
          }}
        >
          watch later
          {state.watchLaterMovies.size > 0 && <span className={styles.counter}>{state.watchLaterMovies.size}</span>}
        </button>
      </div>
    </div>
  );
};

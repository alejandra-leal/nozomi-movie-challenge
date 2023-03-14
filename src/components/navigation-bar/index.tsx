import React from "react";
import { AppContext, ActionType } from "context/store";
import { useContext } from "react";
import styles from "./index.module.css";
import { AdditionalSearchFilter } from "models/additional-search-filter";
import { NavigationLink } from "common/navigation-link";

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
  const navigationLinks = [
    {
      onClick: () => {
        setAdditionalFilter(AdditionalSearchFilter.Starred);
      },
      isSelected:
        state.additionalSearchFilter === AdditionalSearchFilter.Starred,
      text: "favorites",
      children: state.favoriteMovies.size > 0 && (
        <span className={styles.counter}>{state.favoriteMovies.size}</span>
      ),
    },
    {
      onClick: () => {
        setAdditionalFilter(AdditionalSearchFilter.WatchLater);
      },
      isSelected:
        state.additionalSearchFilter === AdditionalSearchFilter.WatchLater,
      text: "watch later",
      children: state.watchLaterMovies.size > 0 && (
        <span className={styles.counter}>{state.watchLaterMovies.size}</span>
      ),
    },
  ];

  return (
    <div data-testid="nav-bar" className={styles.container}>
      <div className={styles.navItemsContainer}>
        {navigationLinks.map((navLink, index) => {
          return (
            <NavigationLink
              key={index}
              onClick={navLink.onClick}
              isSelected={navLink.isSelected}
              text={navLink.text}
            >
              {navLink.children}
            </NavigationLink>
          );
        })}
      </div>
    </div>
  );
};

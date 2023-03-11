import React, { useEffect, useState, useContext } from "react";
import { SearchIcon } from "../search-icon";
import styles from "./index.module.css";
import { Context, ActionTypes, AdditionalSearchFilter } from "data/store";

export const SearchBar = () => {
  const { state, dispatch } = useContext(Context);
  const [searchQuery, setSearchQuery] = useState(state.searchQuery);
  useEffect(() => {
    setSearchQuery(state.searchQuery);
  }, [state.searchQuery]);

  const handleSearch = (searchQuery: string) => {
    dispatch({
      type: ActionTypes.SET_SEARCH_QUERY,
      payload: searchQuery,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          placeholder="Search for movies"
          className={styles.searchInput}
          onChange={(e) => setSearchQuery(e.target.value)}
          disabled = {state.additionalSearchFilter !== AdditionalSearchFilter.None}
        />
        <button
          className={styles.searchButton}
          onClick={() => handleSearch(searchQuery)}
          disabled={state.additionalSearchFilter !== AdditionalSearchFilter.None}
        >
          <SearchIcon color="gray" />
        </button>
      </div>
    </div>
  );
};

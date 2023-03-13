import React, { useEffect, useState, useContext } from "react";
import { SearchIcon } from "../../common/search-icon";
import styles from "./index.module.css";
import { AppContext, ActionType } from "context/store";
import { AdditionalSearchFilter } from "models/additional-search-filter";

export const SearchBar = () => {
  const { state, dispatch } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState(state.searchQuery);
  useEffect(() => {
    setSearchQuery(state.searchQuery);
  }, [state.searchQuery]);

  const handleSearch = (searchQuery: string) => {
    dispatch({
      type: ActionType.SET_SEARCH_QUERY,
      payload: searchQuery,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          placeholder="Search for movies"
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          disabled = {state.additionalSearchFilter !== AdditionalSearchFilter.None}
        />
        <button
          className={styles.searchButton}
          onClick={() => handleSearch(searchQuery)}
          disabled={state.additionalSearchFilter !== AdditionalSearchFilter.None}
        >
          <SearchIcon color="#A8534B" />
        </button>
      </div>
    </div>
  );
};

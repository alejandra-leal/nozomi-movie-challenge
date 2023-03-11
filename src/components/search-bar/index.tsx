import React from "react";
import { SearchIcon } from "../search-icon";
import styles from "./index.module.css";

export const SearchBar = () => {
    return (
    <div className={styles.container}>
        <div className={styles.searchContainer}>
            <input 
              placeholder="Search for movies"
              className={styles.searchInput}
              />
              <SearchIcon color="gray"/>
        </div>
        
    </div>
    )
}

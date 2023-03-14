import React, { useContext } from "react";
import styles from "./index.module.css";
import { ActionType, AppContext } from "context/store";
import { AdditionalSearchFilter } from "models/additional-search-filter";

export const AppHeader = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <div className={styles.container}>
      <span
        role="dialog"
        className={styles.title}
        onClick={() => {
          dispatch({
            type: ActionType.SET_ADDITIONAL_FILTER,
            payload: AdditionalSearchFilter.None,
          });
        }}
      >
        nozimi.
      </span>
    </div>
  );
};

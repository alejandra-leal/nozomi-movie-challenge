import React from "react";
import { Context, ActionTypes, AdditionalSearchFilter } from "data/store";
import { useContext } from "react";
import styles from "./index.module.css";

export const NavigationBar = () => {
    const { state, dispatch } = useContext(Context);

    const setAdditionalFilter = (additionalFilter: AdditionalSearchFilter) => {
        if (state.additionalSearchFilter === additionalFilter) {
            dispatch({ type: ActionTypes.SET_ADDITIONAL_FILTER, payload: AdditionalSearchFilter.None });

        } else {
            dispatch({ type: ActionTypes.SET_ADDITIONAL_FILTER, payload: additionalFilter });
        }
    };

    return (
    <div className={styles.container}>
        <div className={styles.navItemsContainer}>
            <button 
            className={`${styles.navItem} ${state.additionalSearchFilter === AdditionalSearchFilter.Starred  ? styles.selected : ""}`}
            onClick={()=>{
                setAdditionalFilter(AdditionalSearchFilter.Starred)
            }}
            >favorites</button>
            <span className={styles.navItem}>|</span>
            <button 
            className={`${styles.navItem} ${state.additionalSearchFilter === AdditionalSearchFilter.WatchLater  ? styles.selected : ""}`}
            
            onClick={()=>{
                setAdditionalFilter(AdditionalSearchFilter.WatchLater)
            }}
            >watch later</button>
        </div>
    </div>
    )
}

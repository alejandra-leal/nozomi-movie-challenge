import React from "react";
import { AddIcon } from "../add-icon";
import { FavoriteIcon } from "../favorite-icon";
import styles from "./index.module.css";

export const MovieCard = () => {
    return (
    <div className={styles.movie}>
        <div className={styles.iconContainer}>
            <button className={styles.iconButton}
            onClick={()=>{console.log("LEAL FAV CLICK!")}}>
                <FavoriteIcon color="gray"/>
            </button>
            <button className={styles.iconButton} 
            onClick={()=>{console.log("LEAL ADD CLICK!")}}>
                <AddIcon color="gray"/>
            </button>

        </div>
        <div className={styles.movieImg}>
            <img src="https://via.placeholder.com/400" alt="Movie Title Here" />
        </div>
        <div className={styles.movieInfo}>
            <span className={styles.movieType}>Film Type</span>
            <h3 className={styles.movieTitle}>Movie Title</h3>
        </div>
    </div>
    )
}

import React from "react";
import styles from "./index.module.css";

export const NavigationBar = () => {
    return (
    <div className={styles.container}>
        <div className={styles.navItemsContainer}>
            <a href="#" className={styles.navItem}>favorites</a>
            <span className={styles.navItem}>|</span>
            <a href="#" className={styles.navItem}>watch later</a>
        </div>
    </div>
    )
}

import React from "react";
import { MovieCard } from "../movie-card";
import styles from "./index.module.css";

interface IProps {
  movieList?: any[];
}

export const MovieGrid: React.FC<IProps> = ({ movieList }) => {
  return (
    <section role="grid">
      <ul className={styles.list}>
      {movieList?.map((movie) => (
        <MovieCard/>
      ))}
    </ul>
    </section>
  );
};

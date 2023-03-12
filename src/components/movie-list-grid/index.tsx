import { IMovie } from "models/movie";
import React from "react";
import { MovieCard } from "../movie-card";
import styles from "./index.module.css";

export const MovieListGrid: React.FC<IMovieSearchSectionProps> = ({movies, sectionName}) => {
  return (
    <>
    {movies.length ? (
      <section role="grid" id="movie-search-list">
      <ul className={styles.list}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </section>
    ) :
    (
      <div data-testid="empty-movie-list-msg" className={styles.emptyListMessage}>
        <h3>Nothing to see here.</h3>
         {sectionName && <p>Don't be shy, add a movie to your {sectionName} list!</p>}
        </div>
    )
   }
  </>
    
  );
};

interface IMovieSearchSectionProps {
  movies: IMovie[],
  sectionName?: string
}
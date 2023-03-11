import React, { useEffect, useState } from "react";
import { MovieCard } from "../movie-card";
import styles from "./index.module.css";
import { ENDPOINT_DISCOVER } from "../../constants";
import { IMovie } from "data/store";

interface IProps {
  movieList?: any[];
}

export const MovieGrid: React.FC<IProps> = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    fetchMovies(ENDPOINT_DISCOVER).then((response) => {
      setMovies(response.results);
    });
  },
  []);
  
  return (
    <section role="grid">
      <ul className={styles.list}>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </ul>
    </section>
  );
};

export const fetchMovies =  async (apiUrl: string) => {
  const response = await fetch(apiUrl)
  return response.json()
}

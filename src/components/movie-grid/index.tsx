import React, { useEffect, useState } from "react";
import { MovieCard } from "../movie-card";
import styles from "./index.module.css";
import { ENDPOINT_DISCOVER } from "../../constants";
import { AdditionalSearchFilter, IMovie } from "data/store";
import { Context } from "data/store";
import { useContext } from "react";

interface IProps {
  movieList?: any[];
}

export const MovieGrid: React.FC<IProps> = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const { state } = useContext(Context);

  useEffect(() => {
    const filter = state.additionalSearchFilter;
    let moviesToShow = movies;
    switch(filter) {
      case(AdditionalSearchFilter.Starred): {
        moviesToShow = Array.from(state.favoriteMovies.values());
        break;
      }
      case(AdditionalSearchFilter.WatchLater): {
        moviesToShow = Array.from(state.watchLaterMovies.values());
        break;
      }
      default:
        fetchMovies(ENDPOINT_DISCOVER).then((response) => {
          setMovies(response.results);
        });
        break;

    }
    setMovies(moviesToShow);
  }, [state.additionalSearchFilter])

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

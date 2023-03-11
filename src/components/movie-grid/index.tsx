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
    switch (state.additionalSearchFilter) {
      case AdditionalSearchFilter.Starred: {
        setMovies(Array.from(state.favoriteMovies.values()));
        break;
      }
      case AdditionalSearchFilter.WatchLater: {
        setMovies(Array.from(state.watchLaterMovies.values()));
        break;
      }
      default:
        fetchMovies(ENDPOINT_DISCOVER).then((response) => {
          setMovies(response.results);
        });
        break;
    }
  }, [state.additionalSearchFilter, state.favoriteMovies, state.watchLaterMovies]);

  useEffect(() => {
    fetchMovies(ENDPOINT_DISCOVER).then((response) => {
      setMovies(response.results);
    });
  }, []);

  return (
    <>
      {movies && movies.length ? (
        <section role="grid">
          <ul className={styles.list}>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </ul>
        </section>
      ) : (
        <div className={styles.emptyListMessage}>
        <h3>Nothing to see here.</h3>
        <p>Don't be shy, add a movie to your {state.additionalSearchFilter === AdditionalSearchFilter.Starred ? "Favorites" : "Watch Later"} list!</p>

        </div>
      )}
    </>
  );
};

export const fetchMovies = async (apiUrl: string) => {
  const response = await fetch(apiUrl);
  return response.json();
};

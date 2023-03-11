import React, { useEffect, useLayoutEffect, useState } from "react";
import { MovieCard } from "../movie-card";
import styles from "./index.module.css";
import { ENDPOINT_DISCOVER, ENDPOINT_SEARCH } from "../../constants";
import { AdditionalSearchFilter, IMovie } from "data/store";
import { Context } from "data/store";
import { useContext } from "react";

interface IProps {
  movieList?: any[];
}

export const MovieGrid: React.FC<IProps> = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const { state } = useContext(Context);

  // Initialize movies
  useEffect(() => {
    fetchMovies(ENDPOINT_DISCOVER).then((response) => {
      setMovies(response.results);
    });
  }, []);

  // Apply selected filter
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

  // Perform search stuff
  useLayoutEffect(() => {
    if (!state.searchQuery) {
      return;
    }
    const url = `${ENDPOINT_SEARCH}&query=${state.searchQuery}&page=1`;
    fetchMovies(url).then((response) => {
      setMovies(response.results);
    });

  }, [state.searchQuery]);

  

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

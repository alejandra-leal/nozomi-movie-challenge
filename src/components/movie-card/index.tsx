import { IMG_URL_BASE } from "../../constants";
import { IMovie } from "data/store";
import React from "react";
import { AddIcon } from "../add-icon";
import { FavoriteIcon } from "../favorite-icon";
import { Context, ActionTypes } from "data/store";
import { useContext } from "react";
import styles from "./index.module.css";
import { CheckIcon } from "components/check-icon";

interface IMovieCardPops {
  movie: IMovie;
}

export const MovieCard: React.FC<IMovieCardPops> = ({ movie }) => {
  const { state, dispatch } = useContext(Context);
  const isFavorite = state.favoriteMovies.get(movie.id);
  const isWatchLater = state.watchLaterMovies.get(movie.id);

  const handleFavClick = () => {
    if (
      isFavorite
    ) {
      dispatch({
        type: ActionTypes.REMOVE_FAVORITES,
        payload: movie.id,
      });
    }else {
        dispatch({
            type: ActionTypes.ADD_TO_FAVORITES,
            payload: movie,
          });
    }
  };

  const handleWatchLaterClick = () => {
    if (
        isWatchLater
    ) {
      dispatch({
        type: ActionTypes.REMOVE_WATCH_LATER,
        payload: movie.id,
      });
    }else {
        dispatch({
            type: ActionTypes.ADD_TO_WATCH_LATER,
            payload: movie,
          });
    }
  };

  return (
    <div className={styles.movie}>
      <div className={styles.descriptionContainer}>
        <div className={styles.description}>
          <span>{movie.overview}</span>
        </div>
        <button className={styles.watchTrailerBtn}> Watch trailer!</button>
      </div>
      <div className={styles.movieImg}>
        <img
          src={
            movie.poster_path
              ? `${IMG_URL_BASE}${movie.poster_path}`
              : "https://via.placeholder.com/400"
          }
          alt={movie.title}
        />
      </div>
      <div className={styles.movieInfo}>
        <span className={styles.movieType}>Film Type</span>
        <h3 className={styles.movieTitle}>{movie.title}</h3>
      </div>
      <div className={styles.iconContainer}>
        <button
          className={styles.iconButton}
          onClick={() => {
            handleFavClick();
          }}
        >
          <FavoriteIcon color={isFavorite ? "red" : "gray"} />
        </button>
        <button
          className={styles.iconButton}
          onClick={() => {
            handleWatchLaterClick();
          }}
        >
          {isWatchLater ? (
            <CheckIcon color="green" />
          ) : (
            <AddIcon color="gray" />
          )}
        </button>
      </div>
    </div>
  );
};

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

export const MovieCard = React.forwardRef<any, IMovieCardPops>(({movie}, ref) => {
  const { state, dispatch } = useContext(Context);
  const isFavorite = state.favoriteMovies.get(movie.id);
  const isWatchLater = state.watchLaterMovies.get(movie.id);
  const iconColor = "gray";
  const favSelectedIconColor = "red";
  const watchLaterSelectedIconColor = "green";

  const handleClick = (action: ActionTypes.HANDLE_FAVORITES | ActionTypes.HANDLE_WATCH_LATER, shouldRemove: boolean) => {
    dispatch({
            type: action,
            payload: {
                movie,
                shouldRemove
            },
          });
  };
  const handleOpenModal = () => {
    dispatch({
      type: ActionTypes.SET_MOVIE_MODAL,
      payload: movie
    });
  }
  return (
    <article className={styles.movie} ref={ref}>
      <div className={styles.descriptionContainer}>
        <div className={styles.description}>
          <span>{movie.overview}</span>
        </div>
        <button className={styles.watchTrailerBtn} onClick={() => {handleOpenModal()}}> Watch trailer!</button>
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
            handleClick(ActionTypes.HANDLE_FAVORITES, !!isFavorite);
          }}
        >
          <FavoriteIcon color={isFavorite ? favSelectedIconColor : iconColor} />
        </button>
        <button
          className={styles.iconButton}
          onClick={() => {
            handleClick(ActionTypes.HANDLE_WATCH_LATER, !!isWatchLater);
          }}
        >
          {isWatchLater ? (
            <CheckIcon color={watchLaterSelectedIconColor} />
          ) : (
            <AddIcon color={iconColor} />
          )}
        </button>
      </div>
    </article>
  );
})

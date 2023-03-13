import { DEFAULT_MOVIE_POSTER, IMG_URL_BASE } from "../../constants";
import React from "react";
import { AppContext, ActionType } from "context/store";
import { useContext } from "react";
import styles from "./index.module.css";
import { IMovie } from "models/movie";
import { AddIcon } from "common/add-icon";
import { CheckIcon } from "common/check-icon";
import { FavoriteIcon } from "common/favorite-icon";

export const MovieCard = React.forwardRef<any, IMovieCardPops>(
  ({ movie }, ref) => {
    const { state, dispatch } = useContext(AppContext);
    const isFavorite = state.favoriteMovies.get(movie.id);
    const isWatchLater = state.watchLaterMovies.get(movie.id);
    const iconColor = "#A8534B";
    const favSelectedIconColor = "red";
    const watchLaterSelectedIconColor = "green";

    const handleClick = (
      action: ActionType.HANDLE_FAVORITES | ActionType.HANDLE_WATCH_LATER,
      shouldRemove: boolean
    ) => {
      dispatch({
        type: action,
        payload: {
          movie,
          shouldRemove,
        },
      });
    };
    const handleOpenModal = () => {
      dispatch({
        type: ActionType.SET_MOVIE_MODAL,
        payload: movie,
      });
    };
    return (
      <article className={styles.movie} ref={ref}>
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            <span>{movie.overview}</span>
          </div>
          <button
            className={styles.watchTrailerBtn}
            onClick={() => {
              handleOpenModal();
            }}
          >
            {" "}
            Watch trailer!
          </button>
        </div>
        <div className={styles.movieImg}>
          <img
            data-testid="posterImg"
            src={
              movie.poster_path
                ? `${IMG_URL_BASE}${movie.poster_path}`
                : DEFAULT_MOVIE_POSTER
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
            data-testid="favoriteBtn"
            className={styles.iconButton}
            onClick={() => {
              handleClick(ActionType.HANDLE_FAVORITES, !!isFavorite);
            }}
          >
            <FavoriteIcon
              color={isFavorite ? favSelectedIconColor : iconColor}
            />
          </button>
          <button
            data-testid="watchLaterBtn"
            className={styles.iconButton}
            onClick={() => {
              handleClick(ActionType.HANDLE_WATCH_LATER, !!isWatchLater);
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
  }
);

interface IMovieCardPops {
  movie: IMovie;
}

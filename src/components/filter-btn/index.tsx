import { FavoriteIcon } from "common/favorite-icon";
import { AppContext, ActionType } from "context/store";
import { IMovie } from "models/movie";
import styles from "./index.module.css";
import React, { useContext } from "react";
import { CheckIcon } from "common/check-icon";
import { AddIcon } from "common/add-icon";

export const FilterButton: React.FC<IButtonProps> = ({
  movie,
  selectedColor,
  defaultColor,
  isSelected,
  action,
  id,
}) => {
  const { dispatch } = useContext(AppContext);

  const handleClick = (shouldRemove: boolean) => {
    dispatch({
      type: action,
      payload: {
        movie,
        shouldRemove,
      },
    });
  };
  return (
    <button
      data-testid={id}
      className={styles.iconButton}
      onClick={() => {
        handleClick(!!isSelected);
      }}
    >
      {action === ActionType.HANDLE_FAVORITES && (
        <FavoriteIcon color={isSelected ? selectedColor : defaultColor} />
      )}
      {action === ActionType.HANDLE_WATCH_LATER && isSelected && (
        <CheckIcon color={selectedColor} />
      )}
      {action === ActionType.HANDLE_WATCH_LATER && !isSelected && (
        <AddIcon color={defaultColor} />
      )}
    </button>
  );
};

interface IButtonProps {
  id: string;
  movie: IMovie;
  isSelected: boolean;
  defaultColor: string;
  selectedColor: string;
  action: ActionType.HANDLE_FAVORITES | ActionType.HANDLE_WATCH_LATER;
}

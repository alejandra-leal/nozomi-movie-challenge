import React from "react";
import styles from "./index.module.css";

export const NavigationLink: React.FC<IProps> = ({
  onClick,
  isSelected,
  children,
  text,
}) => {
  return (
    <button
      data-testid={text}
      className={`${styles.navItem} 
          ${isSelected ? styles.selected : ""}`}
      onClick={() => {
        onClick();
      }}
    >
      {children}
      {text}
    </button>
  );
};

interface IProps {
  onClick: () => void;
  isSelected: boolean;
  children?: React.ReactNode;
  text: string;
}

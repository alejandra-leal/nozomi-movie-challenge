import React from "react";
import styles from "./index.module.css";

export const CustomGrid: React.FC<ICustomGridProps> = ({children, emptyMessage}) => {
  return (
    <>
    { children &&
      <section role="grid" id="custom-grid">
      <ul className={styles.list}>
        {children}
      </ul>
    </section>
    }
    { ((!children || (Array.isArray(children) && !children.length)) && emptyMessage) &&
      <div data-testid="empty-custom-grid-message" className={styles.emptyListMessage}>
      <h3>Nothing to see here.</h3>
       <p>{emptyMessage}</p>
      </div>
    }
  </>
    
  );
};
interface ICustomGridProps {
  children?: JSX.Element|JSX.Element[];
  emptyMessage?: string;
}

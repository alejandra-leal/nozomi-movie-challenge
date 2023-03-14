import { UpArrowIcon } from "common/up-arrow-icon";
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

export const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          className={styles.backToTopBtn}
          onClick={() => {
            scrollUp();
          }}
        >
          <UpArrowIcon color="#a8534b" />
        </button>
      )}
    </>
  );
};

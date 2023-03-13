import { useState, useRef, useCallback, useContext, useEffect } from "react";
import {useMovies} from "../../hooks/useMovies";
import { MovieCard } from "components/movie-card";
import { AppContext } from "context/store";
import styles from "./index.module.css";
import { CustomGrid } from "common/custom-grid";

export const SearchMovieSection = () => {
  const [pageNum, setPageNum] = useState(1);
  const { state } = useContext(AppContext);

  const { isLoading, isError, movieResults, hasNextPage } = useMovies(
    state.searchQuery,
    pageNum
  );

  // Reset pageNum when searchQuery is changed
  useEffect(() => {
    setPageNum(1);
  }, [state.searchQuery]);

  const interceptionObserver = useRef<IntersectionObserver>();
  const lastMovieRef = useCallback<(movie: Element) => void>(
    (movie) => {
      if (isLoading) return;

      if (interceptionObserver.current) {
        interceptionObserver.current.disconnect();
      } else {
        interceptionObserver.current = new IntersectionObserver((movies) => {
          if (movies[0].isIntersecting && hasNextPage) {
            // We are near the last post!!
            setPageNum((prev) => prev + 1);
          }
        });
      }

      if (movie) {
        interceptionObserver.current.observe(movie);
      }
    },
    [isLoading, hasNextPage]
  );

  if (isError)
    return (
      <p>
        Something went wrong when trying to retrieve movies, please try again.
      </p>
    );

  const content = movieResults.map((movie, index) => {
    // If is last element, send ref
    return (
      <MovieCard
        ref={movieResults.length === index + 1 ? lastMovieRef : null}
        key={index}
        movie={movie}
      />
    );
  });

  return (
    <section data-testid="search-movie-grid">
    <CustomGrid>
      <>
        {content}
        {isLoading && hasNextPage && (
          <div className={styles.loading}>
            <p> Loading more posts..</p>
          </div>
        )}
      </>
    </CustomGrid>
    </section>
  );
};

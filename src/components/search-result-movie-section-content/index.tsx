import { useState, useRef, useCallback } from "react";
import useMovies from '../../hooks/useMovies';
import { MovieCard } from "components/movie-card";

export const SearchResultMovieSectionContent = () => {
  const [pageNum, setPageNum] = useState(1);

  const {
    isLoading,
    isError,
    movieResults,
    hasNextPage 
  } = useMovies(pageNum);

  const interceptionObserver = useRef<IntersectionObserver>(); // is better to use the interception Observer than the scroll events
  const lastMovieRef = useCallback<(movie:Element) => void>(movie => {
    if(isLoading) return;

    if(interceptionObserver.current) {
      interceptionObserver.current.disconnect();
    } else {
      interceptionObserver.current = new IntersectionObserver(movies => {
        if (movies[0].isIntersecting && hasNextPage) {
          console.log("We are near the last post!!");
          setPageNum(prev => prev + 1);
        }
      })
    }

    if(movie) {
      interceptionObserver.current.observe(movie);
    }
  }, [isLoading, hasNextPage])

  if(isError) return <p>Something went wrong when trying to retrieve movies, please try again.</p>

  const content = movieResults.map((movie, index) => {
    // If is last element, send ref
    return <MovieCard ref={movieResults.length === index + 1 ? lastMovieRef : null} key={index} movie={movie} />
   

  })

  return (
    <>
      {content}
      {isLoading && <p> Loading more posts!!</p>}
    </>
  )
};

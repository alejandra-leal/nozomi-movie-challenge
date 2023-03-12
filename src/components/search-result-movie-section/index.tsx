import styles from "./index.module.css";
import { SearchResultMovieSectionContent } from "components/search-result-movie-section-content";

export const SearchResultMovieSection = () => {
  return (
    <>
      <section role="grid" id="movie-search-list">
      <ul className={styles.list}>
        <SearchResultMovieSectionContent/>
      </ul>
    </section>
    </>
  )
};

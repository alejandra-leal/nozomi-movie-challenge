import React from "react";
import { FavoritesMovieSection } from ".";
import { render, screen } from "../../utils/test-helper";
import { initialState } from "context/store";
import { IMovie } from "models/movie";

describe("FavoritesMovieSection", () => {
  it("shows emptyListMessage when movie list array is empty", async () => {
    render(<FavoritesMovieSection />);

    expect(screen.getByTestId("empty-custom-grid-message")).toBeInTheDocument();
  });
  it("shows favorite movies", async () => {
    const movieId = 1;
    const favoriteMovies = new Map<Number, IMovie>();
    favoriteMovies.set(movieId, {
      id: movieId,
      title: "Title 1",
      overview: "Description 1",
      poster_path: "/path/to/video",
      release_date: ""
    });
    render(<FavoritesMovieSection />, {
      ...initialState,
      favoriteMovies,
    });

    expect(screen.getByRole("grid")).toBeInTheDocument();
  });
});

import React from "react";
import { WatchLaterMovieSection } from ".";
import { render, screen } from "../../utils/test-helper";
import { initialState } from "context/store";
import { IMovie } from "models/movie";

describe("WatchLaterMovieSection", () => {
  it("shows emptyListMessage when movie list array is empty", async () => {
    render(<WatchLaterMovieSection />);

    expect(screen.getByTestId("empty-custom-grid-message")).toBeInTheDocument();
  });
  it("shows watch later movies", async () => {
    const movieId = 1;
    const watchLaterMovies = new Map<Number, IMovie>();
    watchLaterMovies.set(movieId, {
      id: movieId,
      title: "Title 1",
      overview: "Description 1",
      poster_path: "/path/to/video",
      release_date: ""
    });
    render(<WatchLaterMovieSection />, {
      ...initialState,
      watchLaterMovies,
    });

    expect(screen.getByRole("grid")).toBeInTheDocument();
  });
});

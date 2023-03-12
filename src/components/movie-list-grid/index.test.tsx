import React from "react";
import { MovieListGrid } from ".";
import { render, screen } from "../../utils/test-helper";
import { initialState } from "data/store";
import { IMovie } from "models/movie";

describe("MovieListGrid", () => {
  it("shows movie grid", async () => {
    const movies: IMovie[] = [
      {
        id: 1,
        title: "Title 1",
        overview: "Description 1",
        poster_path: "/path/to/video",
      }
    ];
    render(<>
        <MovieListGrid movies={movies}/>
    </>, initialState);

    expect(screen.getByRole("grid")).toBeInTheDocument();
  });
  it("shows empty message when movies array is empty", async () => {
    const movies: IMovie[] = [];
    render(<>
        <MovieListGrid movies={movies}/>
    </>, initialState);

    expect(screen.getByTestId("empty-movie-list-msg")).toBeInTheDocument();
  });
});

import React from "react";
import { SearchMovieSection } from ".";
import { render, screen } from "../../utils/test-helper";
import * as useMovies from "../../hooks/useMovies";
import { initialState } from "context/store";
import { IMovie } from "models/movie";

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});
describe("SearchResultMovieSectionContent", () => {
  const movies: IMovie[] = [
    {
      id: 1,
      title: "Title 1",
      overview: "Description",
      poster_path: "/img/path",
      release_date: "",
    },
    {
      id: 1,
      title: "Title 2",
      overview: "Description 2",
      poster_path: "/img/path",
      release_date: "",
    },
  ];
  it("renders section", async () => {
    render(<SearchMovieSection />, initialState);
    expect(screen.getByTestId("search-movie-grid")).toBeInTheDocument();
  });
  it("shows search movie grid", async () => {
    jest.spyOn(useMovies, "useMovies").mockReturnValue({
      isLoading: false,
      isError: false,
      error: {},
      movieResults: movies,
      hasNextPage: false,
    });
    render(<SearchMovieSection />, initialState);
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });
});

import React from "react";
import { MovieCard } from ".";
import { render, screen } from "../../utils/test-helper";
import { initialState } from "context/store";
import { IMovie } from "models/movie";
import { DEFAULT_MOVIE_POSTER, IMG_URL_BASE } from "../../constants";
import userEvent from "@testing-library/user-event";

describe("MovieCard", () => {
  it("shows movie title", async () => {
    const dummyMovie: IMovie = {
      id: 1,
      title: "Title 1",
      overview: "Description",
      poster_path: "/img/path",
      release_date: "",
    };
    render(<MovieCard movie={dummyMovie} />, initialState);

    expect(screen.getByRole("heading")).toHaveTextContent(dummyMovie.title);
  });
  it("shows default img when poster is empty", async () => {
    const dummyMovie: IMovie = {
      id: 1,
      title: "Title 1",
      overview: "Description",
      poster_path: "",
      release_date: "",
    };
    render(<MovieCard movie={dummyMovie} />, initialState);
    expect(screen.getByTestId("posterImg")).toHaveProperty(
      "src",
      DEFAULT_MOVIE_POSTER
    );
  });
  it("shows poster image when path is present", async () => {
    const dummyMovie: IMovie = {
      id: 1,
      title: "Title 1",
      overview: "Description",
      poster_path: "path/img",
      release_date: "",
    };
    render(<MovieCard movie={dummyMovie} />, initialState);
    expect(screen.getByTestId("posterImg")).toHaveProperty(
      "src",
      `${IMG_URL_BASE}path/img`
    );
  });
  it("dispatches open modal action when watch trailer button is clicked", async () => {
    const user = userEvent.setup();
    const dispatchMock = jest.fn();
    const dummyMovie: IMovie = {
      id: 1,
      title: "Title 1",
      overview: "Description",
      poster_path: "path/img",
      release_date: "",
    };
    render(<MovieCard movie={dummyMovie} />, initialState, dispatchMock);

    await user.click(screen.getByTestId("watch-trailer"));
    expect(dispatchMock).toBeCalledWith({
      type: "SET_MOVIE_MODAL",
      payload: dummyMovie,
    });
  });
});

import React from "react";
import { FilterButton } from ".";
import { render, screen } from "../../utils/test-helper";
import "@testing-library/jest-dom";
import { ActionType, initialState } from "context/store";
import { IMovie } from "models/movie";
import userEvent from "@testing-library/user-event";

describe("FilterButton", () => {
  const dummyMovie: IMovie = {
    id: 1,
    title: "Title 1",
    overview: "Description",
    poster_path: "/img/path",
    release_date: "",
  };
  it("shows favorite button when action is handle favorites", async () => {
    const testId = "watch-later-button";

    render(
      <FilterButton
        movie={dummyMovie}
        selectedColor="red"
        defaultColor="grey"
        isSelected={false}
        action={ActionType.HANDLE_FAVORITES}
        id={testId}
      />
    );

    expect(screen.getByTestId("favorite-icon")).toBeInTheDocument();
  });
  it("shows add icon button when action is handle watch later and its not selected", async () => {
    const testId = "watch-later-button";

    render(
      <FilterButton
        movie={dummyMovie}
        selectedColor="red"
        defaultColor="grey"
        isSelected={false}
        action={ActionType.HANDLE_WATCH_LATER}
        id={testId}
      />
    );

    expect(screen.getByTestId("add-icon")).toBeInTheDocument();
  });
  it("shows check icon button when action is handle watch later and its selected", async () => {
    const testId = "watch-later-button";

    render(
      <FilterButton
        movie={dummyMovie}
        selectedColor="red"
        defaultColor="grey"
        isSelected={true}
        action={ActionType.HANDLE_WATCH_LATER}
        id={testId}
      />
    );

    expect(screen.getByTestId("check-icon")).toBeInTheDocument();
  });
  it("dispatches should remove true action on click when filter was already selected", async () => {
    const user = userEvent.setup();
    const testId = "watch-later-button";
    const dispatchMock = jest.fn();
    render(
      <FilterButton
        movie={dummyMovie}
        selectedColor="red"
        defaultColor="grey"
        isSelected={true}
        action={ActionType.HANDLE_WATCH_LATER}
        id={testId}
      />,
      initialState,
      dispatchMock
    );

    await user.click(screen.getByRole("button"));

    expect(dispatchMock).toBeCalledWith({
      type: "HANDLE_WATCH_LATER",
      payload: {
        movie: dummyMovie,
        shouldRemove: true,
      },
    });
  });
  it("dispatches should remove false action on click when filter was not selected", async () => {
    const user = userEvent.setup();
    const testId = "watch-later-button";
    const dispatchMock = jest.fn();
    render(
      <FilterButton
        movie={dummyMovie}
        selectedColor="red"
        defaultColor="grey"
        isSelected={false}
        action={ActionType.HANDLE_WATCH_LATER}
        id={testId}
      />,
      initialState,
      dispatchMock
    );

    await user.click(screen.getByRole("button"));

    expect(dispatchMock).toBeCalledWith({
      type: "HANDLE_WATCH_LATER",
      payload: {
        movie: dummyMovie,
        shouldRemove: false,
      },
    });
  });
});

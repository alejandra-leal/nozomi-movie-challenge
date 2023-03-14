import React from "react";
import { NavigationBar } from ".";
import { render, screen } from "../../utils/test-helper";
import { ActionType, initialState } from "context/store";
import userEvent from "@testing-library/user-event";
import { AdditionalSearchFilter } from "models/additional-search-filter";

describe("NavigationBar", () => {
  it("shows navigation links", async () => {
    render(<NavigationBar/>, initialState);

    expect(screen.getAllByRole("button")).toHaveLength(2);
  });
  it("dispatches Starred additional filter action when favorites nav link is clicked", async () => {
    const user = userEvent.setup();
    const dispatchMock = jest.fn();
    render(<NavigationBar/>, initialState, dispatchMock);

    await user.click(screen.getByTestId("favorites"));

    expect(dispatchMock).toBeCalledWith({
      type: ActionType.SET_ADDITIONAL_FILTER,
      payload: AdditionalSearchFilter.Starred,
    });
  });
  it("dispatches WatchLater additional filter action when watch later nav link is clicked", async () => {
    const user = userEvent.setup();
    const dispatchMock = jest.fn();
    render(<NavigationBar/>, initialState, dispatchMock);

    await user.click(screen.getByTestId("watch later"));

    expect(dispatchMock).toBeCalledWith({
      type: ActionType.SET_ADDITIONAL_FILTER,
      payload: AdditionalSearchFilter.WatchLater,
    });
  });
  it("dispatches None additional filter action when filter was already selected", async () => {
    const user = userEvent.setup();
    const dispatchMock = jest.fn();
    render(<NavigationBar/>, {...initialState, additionalSearchFilter: AdditionalSearchFilter.Starred}, dispatchMock);

    await user.click(screen.getByTestId("favorites"));

    expect(dispatchMock).toBeCalledWith({
      type: ActionType.SET_ADDITIONAL_FILTER,
      payload: AdditionalSearchFilter.None,
    });
  });
});

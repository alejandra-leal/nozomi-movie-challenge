import React from "react";
import { SearchBar } from ".";
import { render, screen } from "../../utils/test-helper";
import { initialState } from "context/store";
import userEvent from "@testing-library/user-event";

describe("SearchBar", () => {
  it("shows search input and button", async () => {
    render(<SearchBar/>, initialState);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("dispatches searchquery on button click", async () => {
    const user = userEvent.setup();
    const searchQuery = "My search query"
    const dispatchMock = jest.fn();
    render(<SearchBar/>, initialState, dispatchMock);

    await user.type(screen.getByRole("textbox"),searchQuery);
    await user.click(screen.getByRole("button"));

    expect(dispatchMock).toBeCalledWith({
      type: "SET_SEARCH_QUERY",
      payload: searchQuery,
    });
  });
});

import React from "react";
import { SearchBar } from ".";
import { render, screen } from "../../utils/test-helper";
import { initialState } from "data/store";

describe("SearchBar", () => {
  it("shows search input", async () => {
    render(<SearchBar/>, initialState);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});

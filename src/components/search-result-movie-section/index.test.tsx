import React from "react";
import { SearchResultMovieSection } from ".";
import { render, screen } from "../../utils/test-helper";
import { initialState } from "data/store";

describe("SearchResultMovieSection", () => {
  it("shows search movie grid", async () => {
    render(<SearchResultMovieSection/>, initialState);

    expect(screen.getByRole("grid")).toBeInTheDocument();
  });
});

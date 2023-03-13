import React from "react";
import { SearchMovieSection } from ".";
import { render, screen } from "../../utils/test-helper";
import { initialState } from "context/store";

describe("SearchResultMovieSectionContent", () => {
  it("shows search movie grid", async () => {
    render(<SearchMovieSection/>, initialState);
    // TODO: finish test.
  });
});

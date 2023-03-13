import React from "react";
import { SearchResultMovieSection } from ".";
import { render, screen } from "../../utils/test-helper";
import { initialState } from "context/store";

describe("SearchResultMovieSectionContent", () => {
  it("shows search movie grid", async () => {
    render(<SearchResultMovieSection/>, initialState);
    // TODO: finish test.
  });
});

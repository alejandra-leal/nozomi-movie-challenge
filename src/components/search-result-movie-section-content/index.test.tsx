import React from "react";
import { SearchResultMovieSectionContent } from ".";
import { render, screen } from "../../utils/test-helper";
import { initialState } from "context/store";

describe("SearchResultMovieSectionContent", () => {
  it("shows search movie grid", async () => {
    render(<SearchResultMovieSectionContent/>, initialState);
    // TODO: finish test.
  });
});

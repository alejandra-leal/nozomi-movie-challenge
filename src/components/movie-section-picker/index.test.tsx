import React from "react";
import { MovieSectionPicker } from ".";
import { render, screen } from "../../utils/test-helper";
import { initialState } from "data/store";
import { AdditionalSearchFilter } from "models/additional-search-filter";

describe("MovieSectionPicker", () => {
  it("shows search grid when additional filter is None", async () => {
    render(<>
        <MovieSectionPicker/>
    </>, {
      ...initialState,
      additionalSearchFilter: AdditionalSearchFilter.None
    });

    expect(screen.getByTestId("search-movie-grid")).toBeInTheDocument();
  });
  it("shows favorites grid when additional filter is Starred", async () => {
    render(<>
        <MovieSectionPicker/>
    </>, {
      ...initialState,
      additionalSearchFilter: AdditionalSearchFilter.Starred
    });

    expect(screen.getByTestId("favorites-movie-grid")).toBeInTheDocument();
  });
  it("shows watch later grid when additional filter is WatchLater", async () => {
    render(<>
        <MovieSectionPicker/>
    </>, {
      ...initialState,
      additionalSearchFilter: AdditionalSearchFilter.WatchLater
    });

    expect(screen.getByTestId("watch-later-movie-grid")).toBeInTheDocument();
  });

});

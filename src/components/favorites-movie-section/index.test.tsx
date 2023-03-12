import React from "react";
import { FavoritesMovieSection } from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("FavoritesMovieSection", () => {
  it("shows emptyListMessage when movie list array is empty", async () => {
    render(<FavoritesMovieSection />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});

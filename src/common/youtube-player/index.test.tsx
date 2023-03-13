import React from "react";
import { YoutubePlayer } from ".";
import { render, screen } from "../../utils/test-helper";

describe("YoutubePlayer", () => {
  it("shows emptyListMessage when movie list array is empty", async () => {
    render(<YoutubePlayer videoKey=""/>);

    expect(screen.getByTestId("movie-trailer-player")).toBeInTheDocument();
  });
});

import React from "react";
import { TrailerModal } from ".";
import { render, screen } from "../../utils/test-helper";
import { IMovie } from "models/movie";

describe("TrailerModal", () => {
 it("shows youtube player for movie trailer", async () => {
   const movie: IMovie = {
     id: 1,
     title: "Title 1",
     overview: "Description 1",
     poster_path: "/path/to/video",
     release_date: "2023-03-03"
   }
   render(<TrailerModal movie={movie} closeModal={()=>{}}/>);

   expect(screen.getByTestId("movie-trailer-player")).toBeInTheDocument();
 });
});

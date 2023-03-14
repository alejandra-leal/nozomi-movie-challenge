import React from "react";
import { App } from "./App";
import { render, screen } from "utils/test-helper";
import { initialState } from "context/store";

describe("App", () => {
  it("renders and shows app main components", async () => {
    render(<App />, initialState);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByTestId("nav-bar")).toBeInTheDocument();
    expect(screen.getByTestId("search-bar")).toBeInTheDocument();
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });
});

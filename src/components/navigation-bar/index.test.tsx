import React from "react";
import { NavigationBar } from ".";
import { render, screen } from "../../utils/test-helper";
import { initialState } from "context/store";

describe("NavigationBar", () => {
  it("shows navigation links", async () => {
    render(<NavigationBar/>, initialState);

    expect(screen.getAllByRole("button")).toHaveLength(2);
  });
});

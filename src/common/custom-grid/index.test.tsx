import React from "react";
import { CustomGrid } from ".";
import { render, screen } from "../../utils/test-helper";
import { initialState } from "context/store";

describe("CustomGrid", () => {
  it("shows grid with content", async () => {
    render(<>
        <CustomGrid> 
          <h1>Hello</h1>
        </CustomGrid>
    </>, initialState);

    expect(screen.getByRole("grid")).toBeInTheDocument();
  });
  it("shows empty message when no children is provided", async () => {
    render(<CustomGrid emptyMessage="Hello there"/>, initialState);

    expect(screen.getByTestId("empty-custom-grid-message")).toBeInTheDocument();
  });
});

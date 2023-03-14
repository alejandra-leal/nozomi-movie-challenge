import React from "react";
import { UpArrowIcon } from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("UpArrowIcon", () => {
  test("loads and displays add icon", async () => {
    render(<UpArrowIcon color="#A8534B" />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});

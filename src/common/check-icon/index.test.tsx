import React from "react";
import { CheckIcon } from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CheckIcon", () => {
  test("loads and displays check icon", async () => {
    render(<CheckIcon color="#A8534B" />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});

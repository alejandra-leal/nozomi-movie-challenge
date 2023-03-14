import React from "react";
import { BackToTop } from ".";
import { render, screen } from "../../utils/test-helper";
import "@testing-library/jest-dom";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("BackToTop", () => {
  test("loads and displays back to top button when showButton is true", async () => {
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => [true, () => null]);

    render(<BackToTop />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  test("does not display back to top button when showButton is false", async () => {
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => [false, () => null]);
    render(<BackToTop />);
    const submitButton = screen.queryByRole("button");

    expect(submitButton).toBeNull();
  });
});

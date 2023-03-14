import React from "react";
import { NavigationLink } from ".";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("NavigationLink", () => {
  it("shows navigation link", async () => {
    render(
      <NavigationLink onClick={jest.fn} isSelected={false} text="NavLinkText" />
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("shows navigation link and children", async () => {
    render(
      <NavigationLink onClick={jest.fn} isSelected={false} text="NavLinkText">
        <span role="dialog">Hello There</span>
      </NavigationLink>
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
  it("should trigger onClick when button is clicked", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(
      <NavigationLink onClick={onClick} isSelected={false} text="NavLinkText" />
    );

    await user.click(screen.getByRole("button"));

    expect(onClick).toBeCalledTimes(1);
  });
});

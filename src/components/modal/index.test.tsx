import React from "react";
import { Modal } from ".";
import { render, screen } from "../../utils/test-helper";
import userEvent from "@testing-library/user-event";
import { initialState } from "data/store";

describe("Modal", () => {
  it("shows modal with custom body", async () => {
    render(<>
        <Modal closeModal={() => {}} title="Modal Title">
            <h3 role="dialog">This is the modal content</h3>
        </Modal>
    </>, initialState);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
  it("should trigger the closeModal function when close button is clicked", async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    render(<>
        <Modal closeModal={onClose} title="Modal Title">
            <h3 role="dialog">This is the modal content</h3>
        </Modal>
    </>, initialState);

    await user.click(screen.getByRole("button"));

    expect(onClose).toBeCalledTimes(1);
  });
});

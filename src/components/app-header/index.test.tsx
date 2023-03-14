import React from "react";
import { AppHeader } from ".";
import { render, screen } from "../../utils/test-helper";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import { initialState } from "context/store";
import { AdditionalSearchFilter } from "models/additional-search-filter";

describe('AppHeader', ()=>{
  it('loads and displays AppHeader', async () => {
    render(<AppHeader/>)
  
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
  it("dispatches additional filter with None on click", async () => {
    const user = userEvent.setup();
    const dispatchMock = jest.fn();
    render(<AppHeader/>, initialState, dispatchMock);

    await user.click(screen.getByRole("dialog"));

    expect(dispatchMock).toBeCalledWith({
      type: "SET_ADDITIONAL_FILTER",
      payload: AdditionalSearchFilter.None,
    });
  });
})

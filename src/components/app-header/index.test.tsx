import React from "react";
import { AppHeader } from ".";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

test('loads and displays AppHeader', async () => {
  render(<AppHeader/>)

  expect(screen.getByRole("dialog")).toBeInTheDocument();
})
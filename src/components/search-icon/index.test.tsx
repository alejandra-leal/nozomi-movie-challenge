import React from "react";
import { SearchIcon } from ".";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

test('loads and displays search icon', async () => {
  render(<SearchIcon color="#A8534B" />)

  expect(screen.getByRole("img")).toBeInTheDocument();
})
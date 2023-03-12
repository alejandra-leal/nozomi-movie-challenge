import React from "react";
import { FavoriteIcon } from ".";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

test('loads and displays favorite icon', async () => {
  render(<FavoriteIcon color="#A8534B" />)

  expect(screen.getByRole("img")).toBeInTheDocument();
})
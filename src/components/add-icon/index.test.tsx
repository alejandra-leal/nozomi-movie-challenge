import React from "react";
import { AddIcon } from ".";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

test('loads and displays add icon', async () => {
  render(<AddIcon color="gray" />)

  expect(screen.getByRole("img")).toBeInTheDocument();
})
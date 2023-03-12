import React from "react";
import { CheckIcon } from ".";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

test('loads and displays check icon', async () => {
  render(<CheckIcon color="gray" />)

  expect(screen.getByRole("img")).toBeInTheDocument();
})
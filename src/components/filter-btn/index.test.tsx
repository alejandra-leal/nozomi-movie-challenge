import React from "react";
import { FilterButton } from ".";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { ActionType } from "context/store";
import { IMovie } from "models/movie";

describe('FilterButton', ()=>{
    const dummyMovie: IMovie = {
        id: 1,
        title: "Title 1",
        overview: "Description",
        poster_path: "/img/path",
        release_date: ""
      }
  it('shows favorite button when action is handle favorites', async () => {
    const testId =  "watch-later-button"
    
    render(<FilterButton
        movie={dummyMovie}
        selectedColor="red"
        defaultColor="grey"
        isSelected={false}
        action={ActionType.HANDLE_FAVORITES}
        id={testId}
    />)
  
    expect(screen.getByTestId("favorite-icon")).toBeInTheDocument();
  });
  it('shows add icon button when action is handle watch later and its not selected', async () => {
    const testId = "watch-later-button"
    
    render(<FilterButton
        movie={dummyMovie}
        selectedColor="red"
        defaultColor="grey"
        isSelected={false}
        action={ActionType.HANDLE_WATCH_LATER}
        id={testId}
    />)
  
    expect(screen.getByTestId("add-icon")).toBeInTheDocument();
  });
  it('shows check icon button when action is handle watch later and its selected', async () => {
    const testId =  "watch-later-button"
    
    render(<FilterButton
        movie={dummyMovie}
        selectedColor="red"
        defaultColor="grey"
        isSelected={true}
        action={ActionType.HANDLE_WATCH_LATER}
        id={testId}
    />)
  
    expect(screen.getByTestId("check-icon")).toBeInTheDocument();
  });
})
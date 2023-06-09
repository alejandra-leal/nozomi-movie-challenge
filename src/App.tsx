import { useEffect, useReducer, useState } from "react";
import { AppHeader } from "./components/app-header";
import { NavigationBar } from "./components/navigation-bar";
import { SearchBar } from "./components/search-bar";
import {
  stateReducer,
  initialState,
  AppContext,
  ActionType,
} from "./context/store";
import { MovieSectionPicker } from "components/movie-section-picker";
import { TrailerModal } from "components/trailer-modal";
import { BackToTop } from "components/back-to-top";

export function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    dispatch({
      type: ActionType.SET_MOVIE_MODAL,
      payload: null,
    });
  };
  useEffect(() => {
    setOpenModal(!!state.movieModal);
  }, [state.movieModal]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {openModal && state.movieModal && (
        <TrailerModal movie={state.movieModal} closeModal={closeModal} />
      )}
      <AppHeader />
      <NavigationBar />
      <SearchBar />
      <MovieSectionPicker />
      <BackToTop />
    </AppContext.Provider>
  );
}

export default App;

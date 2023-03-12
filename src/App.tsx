import { useEffect, useReducer, useState } from "react";
import { Header } from "./components/header";
import { NavigationBar } from "./components/navigation-bar";
import { SearchBar } from "./components/search-bar";
import { stateReducer, initialState, Context, ActionTypes } from "./data/store";
import { MovieGrid } from "components/movie-grid";
import { TrailerModal } from "components/trailer-modal";

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    dispatch({
      type: ActionTypes.SET_MOVIE_MODAL,
      payload: null,
    });
  };
  useEffect(() => {
    setOpenModal(!!state.movieModal);
  }, [state.movieModal]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {openModal && state.movieModal && (
        <TrailerModal movie={state.movieModal} closeModal={closeModal}/>
      )}
      <Header />
      <NavigationBar />
      <SearchBar />
      <MovieGrid />
    </Context.Provider>
  );
}

export default App;

import { useReducer } from "react";
import { Header } from './components/header';
import { NavigationBar } from './components/navigation-bar';
import { SearchBar } from './components/search-bar';
import { stateReducer, initialState, Context } from "./data/store";
import { MovieGrid } from "components/movie-grid";

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  

  return (
    <Context.Provider
    value={{ state, dispatch }}
    >
      <Header/>
      <NavigationBar/>
      <SearchBar/>
      <MovieGrid movieList={[1,2,3,4,5,6,7,8,9]}/>
    </Context.Provider>
  );
}

export default App;

import './App.css';
import { useDispatch } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ListPokemons from "./components/ListPokemon's";
import SelectedPokemon from './components/SelectedPokemon';
import { getAllPokemons } from './components/useAxios';

function App() {
  const dispatch = useDispatch();
  dispatch(getAllPokemons());
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPokemons />} />
          <Route path="/selected-pokemon" element={<SelectedPokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

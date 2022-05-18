import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ListPokemons from './components/ListPokemons';
import SelectedPokemon from './components/SelectedPokemon';

function App() {
  return (
    <div>
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

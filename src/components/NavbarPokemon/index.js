import React from 'react';
import { Navbar } from 'react-bootstrap';
import SearchPokemon from '../SearchPokemon';
import SortPokemonsByTypes from '../SortPokemonsByTypes';
const NavbarPokemon = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <SortPokemonsByTypes />
      <SearchPokemon />
    </Navbar>
  );
};
export default NavbarPokemon;

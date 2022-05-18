import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectedPokemon } from './selectors';
import { Card } from 'react-bootstrap';
import SkillsPokemon from './SkillsPokemon';
import StatsPokemon from './StatsPokemon';
import style from './SelectedPokemon.module.scss';

const SelectedPokemon = () => {
  const pokemon = useSelector(getSelectedPokemon);
  const { status } = pokemon;
  const { moves, stats } = pokemon.data;
  const { name } = pokemon.data;
  const { front_default } = pokemon.data.sprites.other.dream_world;

  return (
    <Card>
      {status === 200 ? (
        <div className="container">
          <img
            className={style.img}
            src={pokemon.data.species ? front_default : ''}
            alt={name ? name : null}
          />
          <Card.Title className={style.title}>{name ? name : null}</Card.Title>
          <div className={style.paramsPokemont}>
            <StatsPokemon stats={stats} />
            <SkillsPokemon moves={moves} />
          </div>
        </div>
      ) : (
        <div>Pokemon not found</div>
      )}
    </Card>
  );
};
export default SelectedPokemon;

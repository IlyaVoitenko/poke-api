import { useSelector } from 'react-redux';
import { getSelectedPokemon } from './selectors';
import SkillsPokemon from './SkillsPokemon';
import StatsPokemon from './StatsPokemon';
import style from './SelectedPokemon.module.css';

const SelectedPokemon = () => {
  const pokemon = useSelector(getSelectedPokemon);
  const { status } = pokemon;
  const { moves, stats } = pokemon.data;
  const { name } = pokemon.data;
  const { front_default } = pokemon.data.sprites.other.dream_world;

  return (
    <div>
      {status === 200 ? (
        <div className="container">
          <img
            src={pokemon.data.species ? front_default : ''}
            alt={name ? name : null}
          />
          <p>{name ? name : null}</p>
          <div className={style.paramsPokemont}>
            <StatsPokemon stats={stats} />
            <SkillsPokemon moves={moves} />
          </div>
        </div>
      ) : (
        <div>Pokemon not found</div>
      )}
    </div>
  );
};
export default SelectedPokemon;

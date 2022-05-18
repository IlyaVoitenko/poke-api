import { useSelector } from 'react-redux';
import { getSelectedPokemon } from './selectors';
import SkillsPokemon from './SkillsPokemon';
import StatsPokemon from './StatsPokemon';
import style from './SelectedPokemon.module.css';

const SelectedPokemon = () => {
  const dataPokemon = useSelector(getSelectedPokemon);

  const { moves, stats } = dataPokemon;
  const { name } = dataPokemon.species || {};

  return (
    <div className="container">
      <img
        src={
          dataPokemon.species
            ? dataPokemon.sprites.other.dream_world.front_default
            : ''
        }
        alt={name ? name : null}
      />
      <p>{name ? name : null}</p>
      <div className={style.paramsPokemont}>
        <StatsPokemon stats={stats} />
        <SkillsPokemon moves={moves} />
      </div>
    </div>
  );
};
export default SelectedPokemon;

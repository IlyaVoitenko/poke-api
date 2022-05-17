import { useSelector } from 'react-redux';
import { getSelectedPokemon } from './selectors';
import SkillsPokemon from './SkillsPokemon';
import StatsPokemon from './StatsPokemon';
import style from './SelectedPokemon.module.css';

const SelectedPokemon = () => {
  const dataPokemon = useSelector(getSelectedPokemon);
  const { moves, stats } = dataPokemon;
  const { name } = dataPokemon.species;

  return (
    <div className="container">
      <img
        src={dataPokemon.sprites.other.dream_world.front_default}
        alt={name}
      />
      <p>{name}</p>
      <div className={style.paramsPokemont}>
        <SkillsPokemon moves={moves} />
        <StatsPokemon stats={stats} />
      </div>
    </div>
  );
};
export default SelectedPokemon;

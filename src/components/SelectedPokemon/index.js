import { useSelector } from 'react-redux';
import { getSelectedPokemon } from './selectors';
import SkillsPokemon from './SkillsPokemon';
import StatsPokemon from './StatsPokemon';
import style from './SelectedPokemon.module.css';

const SelectedPokemon = () => {
  const dataPokemon = useSelector(getSelectedPokemon);
  const { status } = dataPokemon;
  const { moves, stats } = dataPokemon.data || {};
  const { name } = dataPokemon.data.species || {};
  const { front_default } = dataPokemon.data.sprites.other.dream_world || {};

  return (
    <div>
      {status === 200 ? (
        <div className="container">
          <img
            src={dataPokemon.data.species ? front_default : ''}
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

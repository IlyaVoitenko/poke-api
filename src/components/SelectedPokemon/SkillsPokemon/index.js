import { useEffect, useState } from 'react';

const SkillsPokemon = ({ moves }) => {
  const [movesLength, setMovesLength] = useState(0);

  useEffect(() => {
    setMovesLength(moves);
  }, [moves, movesLength]);

  return (
    <ul>
      <p>Moves :</p>
      {moves
        ? moves.map((move, index) => <li key={index}>{move.move.name}</li>)
        : null}
    </ul>
  );
};
export default SkillsPokemon;

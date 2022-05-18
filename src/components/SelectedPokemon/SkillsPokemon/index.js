import { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import style from './SkillsPokemon.module.scss';

const SkillsPokemon = ({ moves }) => {
  const [movesLength, setMovesLength] = useState(0);

  useEffect(() => {
    setMovesLength(moves);
  }, [moves, movesLength]);

  return (
    <div className={style.listMoves}>
      <ListGroup>
        <ListGroup.Item>Moves :</ListGroup.Item>
        {moves
          ? moves.map((move, index) => (
              <ListGroup.Item key={index}>{move.move.name}</ListGroup.Item>
            ))
          : null}
      </ListGroup>
    </div>
  );
};
export default SkillsPokemon;

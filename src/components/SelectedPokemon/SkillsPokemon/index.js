const SkillsPokemon = ({ moves }) => {
  return (
    <ul>
      <p>moves :</p>
      {moves.map((move, index) => (
        <li key={index}>{move.move.name}</li>
      ))}
    </ul>
  );
};
export default SkillsPokemon;

const StatsPokemon = ({ stats }) => {
  return (
    <ul>
      <p>stats :</p>
      {stats.map((stat, index) => (
        <li key={index}>
          {stat.base_stat} {stat.stat.name}
        </li>
      ))}
    </ul>
  );
};
export default StatsPokemon;

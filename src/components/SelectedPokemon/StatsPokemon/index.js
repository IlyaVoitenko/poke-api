const StatsPokemon = ({ stats }) => {
  return (
    <ul>
      <p>stats :</p>
      {stats
        ? stats.map((stat, index) => (
            <li key={index}>
              {stat.base_stat} {stat.stat.name}
            </li>
          ))
        : null}
    </ul>
  );
};

export default StatsPokemon;

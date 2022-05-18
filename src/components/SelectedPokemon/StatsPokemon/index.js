import React from 'react';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

StatsPokemon.propTypes = {
  stats: PropTypes.array,
};

function StatsPokemon({ stats }) {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item>stats :</ListGroup.Item>
        {stats
          ? stats.map((stat, index) => (
              <ListGroup.Item key={index}>
                {stat.base_stat} {stat.stat.name}
              </ListGroup.Item>
            ))
          : null}
      </ListGroup>
    </div>
  );
}

export default StatsPokemon;

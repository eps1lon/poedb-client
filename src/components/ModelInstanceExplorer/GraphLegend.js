import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  entities: PropTypes.object.isRequired,
  nodeFill: PropTypes.func.isRequired,
};

const GraphLegend = ({ entities, nodeFill }) => {
  return (
    <ul>
      {Object.keys(entities).map(collection => {
        return (
          <li key={collection} className="node-legend">
            <span
              className="node-fill-color"
              style={{ backgroundColor: nodeFill(collection) }}
            />
            {collection}
          </li>
        );
      })}
    </ul>
  );
};

GraphLegend.propTypes = propTypes;

export default GraphLegend;

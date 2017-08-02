import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  node: PropTypes.object,
};

const NodeTooltip = ({ node: { collection, props } }) => {
  if (!props) {
    return null;
  }

  return (
    <div className="model-instance-explorer-node-tooltip">
      <strong>
        {String(collection)}
      </strong>
      <ul>
        {Object.entries(props).map(([attribute, value]) => {
          return (
            <li key={attribute}>
              <em>{attribute}:</em> {String(value)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

NodeTooltip.propTypes = propTypes;

export default NodeTooltip;

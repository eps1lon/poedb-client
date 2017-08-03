import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  node: PropTypes.object,
};

const defaultProps = {
  node: {},
};

const NodeTooltip = ({ node }) => {
  const { collection, props } = node;
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
NodeTooltip.defaultProps = defaultProps;

export default NodeTooltip;

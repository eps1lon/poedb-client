import React from 'react';
import PropTypes from 'prop-types';
import { ForceGraphNode } from 'react-vis-force';

const propTypes = {
  collection: PropTypes.string.isRequired,
  fill: PropTypes.func,
  onNodeHover: PropTypes.func,
  props: PropTypes.object.isRequired,
};

export const nodeId = ({ collection, props }) => {
  const { row } = props;

  return `${collection}-${row}`;
};

const InstanceNode = ({ collection, fill, onNodeHover, props }) => {
  const { row } = props;

  const fill_color = fill ? fill(collection) : undefined;
  const id = nodeId({ collection, props });
  const label = `${collection}(row=${row})`;

  return (
    <ForceGraphNode
      key={id}
      node={{ id, label, radius: 10 }}
      className={`entity entity-of-${collection}`}
      fill={fill_color}
      // TODO this is potentially bad for performance, rather create
      // one listener with target select
      onMouseOver={() => onNodeHover(collection, props)}
    />
  );
};

InstanceNode.propTypes = propTypes;

export default InstanceNode;

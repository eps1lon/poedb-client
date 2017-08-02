import React from 'react';
import PropTypes from 'prop-types';
import { ForceGraphNode } from 'react-vis-force';

const propTypes = {
  collection: PropTypes.string.isRequired,
  fill: PropTypes.func,
  props: PropTypes.object.isRequired,
};

export const nodeId = ({ collection, props }) => {
  const { row } = props;

  return `${collection}-${row}`;
};

const InstanceNode = ({ collection, fill, props }) => {
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
    />
  );
};

InstanceNode.propTypes = propTypes;

export default InstanceNode;

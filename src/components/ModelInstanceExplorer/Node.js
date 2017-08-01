import React from 'react';
import PropTypes from 'prop-types';
import { ForceGraphNode } from 'react-vis-force';

const propTypes = {
  collection: PropTypes.string.isRequired,
  props: PropTypes.object.isRequired,
};

export const nodeId = ({ collection, props }) => {
  const { row } = props;

  return `${collection}-${row}`;
};

const InstanceNode = ({ collection, props }) => {
  const { row } = props;

  const id = nodeId({ collection, props });
  const label = `${collection}(row=${row})`;

  return (
    <ForceGraphNode
      key={id}
      node={{ id, label, radius: 10 }}
      className="instance"
    />
  );
};

InstanceNode.propTypes = propTypes;

export default InstanceNode;

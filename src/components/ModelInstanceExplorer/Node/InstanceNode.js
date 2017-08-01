import React from 'react';
import PropTypes from 'prop-types';
import { ForceGraphNode } from 'react-vis-force';

import { MODEL_NAME } from '../../../api';

const propTypes = {
  props: PropTypes.object.isRequired,
};

export const isInstanceNode = props => {
  return props && props[MODEL_NAME];
};

export const nodeId = ({ props }) => {
  const { row } = props;
  const model_name = String(props[MODEL_NAME]);

  return `${model_name}${row}`;
};

const InstanceNode = ({ props }) => {
  const { row } = props;
  const model_name = String(props[MODEL_NAME]);

  const id = nodeId({ props });
  const label = `${model_name}(row=${row})`;

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

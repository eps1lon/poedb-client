import React from 'react';
import PropTypes from 'prop-types';
import { ForceGraphNode } from 'react-vis-force';

import { nodeId as instanceNodeId } from './InstanceNode';

const propTypes = {
  attribute: PropTypes.string.isRequired,
  root: PropTypes.object.isRequired,
  value: PropTypes.any,
};

export const nodeId = ({ attribute, root }) => {
  return `${instanceNodeId({ props: root })}${attribute}`;
};

const AttributeNode = ({ attribute, root, value }) => {
  return (
    <ForceGraphNode
      key={attribute}
      node={{
        id: nodeId({ attribute, root }),
        label: String(value),
        radius: 5,
      }}
      className="attribute"
    />
  );
};

AttributeNode.propTypes = propTypes;

export default AttributeNode;

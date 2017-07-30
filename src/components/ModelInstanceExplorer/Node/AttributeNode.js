import React from 'react';
import PropTypes from 'prop-types';
import { ForceGraphNode } from 'react-vis-force';

const propTypes = {
  attribute: PropTypes.string.isRequired,
  value: PropTypes.any,
};

const AttributeNode = ({ attribute, value }) => {
  return (
    <ForceGraphNode
      key={attribute}
      node={{ id: attribute, label: String(value) }}
      className="attribute"
    />
  );
};

AttributeNode.propTypes = propTypes;

export default AttributeNode;

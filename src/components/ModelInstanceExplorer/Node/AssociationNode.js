import React from 'react';
import PropTypes from 'prop-types';
import { ForceGraphNode } from 'react-vis-force';

const propTypes = {
  attribute: PropTypes.string.isRequired,
  value: PropTypes.any,
};

const AssociationNode = ({ attribute, association }) => {
  return (
    <ForceGraphNode
      key={attribute}
      node={{ id: attribute, label: String(association) }}
      className="association"
    />
  );
};

AssociationNode.propTypes = propTypes;

export default AssociationNode;

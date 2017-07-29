import React from 'react';
import PropTypes from 'prop-types';
import { ForceGraphNode } from 'react-vis-force';

import { MODEL_NAME } from '../../api';

const propTypes = {
  attribute: PropTypes.string.isRequired,
  props: PropTypes.any,
};

const Node = ({ attribute, props }) => {
  const label =
    props && props[MODEL_NAME] ? props[MODEL_NAME] : props.toString();

  return (
    <ForceGraphNode key={attribute} node={{ id: attribute, label: label }} />
  );
};

Node.propTypes = propTypes;

export default Node;

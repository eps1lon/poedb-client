import PropTypes from 'prop-types';

import { MODEL_NAME } from '../../../api';

import AssociationNode from './AssociationNode';
import AttributeNode from './AttributeNode';

const propTypes = {
  attribute: PropTypes.string.isRequired,
  props: PropTypes.any,
};

const isAssocNode = props => props && props[MODEL_NAME];

// dont nest nodes, immediate child of ForceGraphChildren needs to be ForceGraphNode
const Node = ({ attribute, props }) => {
  if (isAssocNode(props)) {
    return AssociationNode({ association: props[MODEL_NAME], attribute });
  } else {
    return AttributeNode({ attribute, value: props });
  }
};

Node.propTypes = propTypes;

export default Node;

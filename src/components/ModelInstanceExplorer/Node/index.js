import PropTypes from 'prop-types';

import AttributeNode, { nodeId as attributeNodeId } from './AttributeNode';
import InstanceNode, {
  nodeId as instanceNodeId,
  isInstanceNode,
} from './InstanceNode';

const propTypes = {
  attribute: PropTypes.string.isRequired,
  props: PropTypes.any,
};

export const nodeId = ({ attribute, props, root }) => {
  if (isInstanceNode(props)) {
    return instanceNodeId({ props });
  } else {
    return attributeNodeId({ attribute, root });
  }
};

// dont nest nodes, immediate child of ForceGraphChildren needs to be ForceGraphNode
const Node = ({ attribute, props, root }) => {
  if (isInstanceNode(props)) {
    return InstanceNode({ props });
  } else {
    return AttributeNode({ attribute, value: props, root });
  }
};

Node.propTypes = propTypes;

export default Node;

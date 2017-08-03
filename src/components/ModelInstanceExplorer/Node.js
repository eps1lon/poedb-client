import React from 'react';
import PropTypes from 'prop-types';
import { ForceGraphNode } from 'react-vis-force';

const propTypes = {
  collection: PropTypes.string.isRequired,
  fill: PropTypes.func,
  onNodeHover: PropTypes.func,
  onNodeOut: PropTypes.func,
  props: PropTypes.object.isRequired,
};

const defaultProps = {
  // nops
  onNodeHover: () => undefined,
  onNodeOut: () => undefined,
};

export const nodeId = ({ collection, props }) => {
  const { row } = props;

  return `${collection}-${row}`;
};

/*
 * not an actual react component since react-force-vis needs its nodes
 * to be immediate children
 */
const InstanceNode = ({
  collection,
  fill,
  onNodeHover = defaultProps.onNodeHover,
  onNodeOut = defaultProps.onNodeOut,
  props,
}) => {
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
      onMouseOut={() => onNodeOut(collection, props)}
    />
  );
};

InstanceNode.propTypes = propTypes;
InstanceNode.defaultProps = defaultProps;

export default InstanceNode;

import React from 'react';
import PropTypes from 'prop-types';
import { ForceGraphArrowLink } from 'react-vis-force';
import _ from 'lodash';

import { links as buildLinks } from '../../util/normalizr';
import Node, { nodeId } from './Node';

const propTypes = {
  entities: PropTypes.object.isRequired,
  onNodeHover: PropTypes.func,
  onNodeOut: PropTypes.func,
  schemas: PropTypes.object.isRequired,
  nodeFill: PropTypes.func,
};

// TODO this is not an actual component because components cant
// return collections. Once react 16 (fiber) is used we can use it as one
const ForceGraphChildren = ({
  entities,
  nodeFill,
  onNodeHover,
  onNodeOut,
  schemas,
}) => {
  if (Object.keys(entities).length === 0) {
    return null;
  }

  const nodes = _.flatten(
    Object.entries(entities).map(([collection, entries]) => {
      return Object.values(entries).map(entry => {
        return Node({
          collection,
          fill: nodeFill,
          onNodeHover,
          onNodeOut,
          props: entry,
        });
      });
    }),
  );

  const links = buildLinks(entities, schemas)
    .filter(({ target }) => target.id !== undefined && target.id !== null)
    .map(({ source, target }) => {
      const source_id = nodeId({
        collection: source.key,
        props: { row: source.id },
      });
      const target_id = nodeId({
        collection: target.key,
        props: { row: target.id },
      });

      return (
        <ForceGraphArrowLink
          key={`${source_id}_${target_id}`}
          link={{ source: source_id, target: target_id }}
          targetRadius={2}
        />
      );
    });

  return [...nodes, ...links];
};

ForceGraphChildren.propTypes = propTypes;

export default ForceGraphChildren;

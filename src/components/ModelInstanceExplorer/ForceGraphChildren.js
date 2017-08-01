import React from 'react';
import PropTypes from 'prop-types';
import { ForceGraphLink } from 'react-vis-force';
import _ from 'lodash';

import { links } from '../../util/normalizr';
import Node, { nodeId } from './Node';

const propTypes = {
  entities: PropTypes.object.isRequired,
  schemas: PropTypes.object.isRequired,
};

// TODO this is not an actual component because components cant
// return collections. Once react 16 (fiber) is used we can use it as one
const ForceGraphChildren = ({ entities, schemas }) => {
  if (Object.keys(entities).length === 0) {
    return null;
  }
  return _.flatten([
    ...Object.entries(entities).map(([collection, entries]) => {
      return Object.values(entries).map(entry => {
        return Node({ collection, props: entry });
      });
    }),
    ...links(entities, schemas).map(({ source, target }) => {
      const source_id = nodeId({
        collection: source.key,
        props: { row: source.id },
      });
      const target_id = nodeId({
        collection: target.key,
        props: { row: target.id },
      });

      return (
        <ForceGraphLink
          key={`${source_id}_${target_id}`}
          link={{ source: source_id, target: target_id }}
        />
      );
    }),
  ]);
};

ForceGraphChildren.propTypes = propTypes;

export default ForceGraphChildren;

import React from 'react';
import PropTypes from 'prop-types';
import { ForceGraphLink } from 'react-vis-force';
import _ from 'lodash';

import Node, { nodeId } from './Node/';

const propTypes = {
  data: PropTypes.object.isRequired,
};

// TODO this is not an actual component because components cant
// return collections. Once react 16 (fiber) is used we can use it as one
const ForceGraphChildren = ({ root }) => {
  if (Object.keys(root).length === 0) {
    return null;
  }

  const root_id = nodeId({ attribute: 'root', props: root, root: null });

  return _.flatten([
    Node({ attribute: 'root', props: root }),
    ...Object.entries(root).map(([attribute, props]) => {
      const id = nodeId({ attribute, props, root });

      return [
        Node({ attribute, props, root }),
        <ForceGraphLink
          key={attribute}
          link={{ source: root_id, target: id }}
        />,
      ];
    }),
  ]);
};

ForceGraphChildren.propTypes = propTypes;

export default ForceGraphChildren;

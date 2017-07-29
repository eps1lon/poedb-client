import React from 'react';
import PropTypes from 'prop-types';
import { ForceGraphLink } from 'react-vis-force';
import _ from 'lodash';

import Node from './Node';

const propTypes = {
  data: PropTypes.object.isRequired,
};

// TODO this is not an actual component because components cant
// return collections. Once react 16 (fiber) is used we can use it as one
const ForceGraphChildren = ({ root }) => {
  if (Object.keys(root).length === 0) {
    return null;
  }

  return _.flatten([
    Node({ attribute: 'root', props: root }),
    ...Object.entries(root).map(([attribute, props]) => {
      return [
        Node({ attribute, props }),
        <ForceGraphLink
          key={attribute}
          link={{ source: 'root', target: attribute }}
        />,
      ];
    }),
  ]);
};

ForceGraphChildren.propTypes = propTypes;

export default ForceGraphChildren;

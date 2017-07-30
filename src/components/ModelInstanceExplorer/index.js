import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InteractiveForceGraph } from 'react-vis-force';

import ForceGraphChildren from './ForceGraphChildren';
import { isAssocNode } from './Node/';
import toggleAble from '../ToggleAble';

import './index.css';

const propTypes = {
  root: PropTypes.object,
};

const findAttribute = (attributes, id) => attributes[id];

class ModelInstanceExplorer extends Component {
  simulationOptions() {
    return {
      strength: {
        charge: node => {
          const attribute = findAttribute(this.props.root, node.id);

          if (isAssocNode(attribute)) {
            return -1000;
          } else {
            return -100;
          }
        },
      },
    };
  }

  render() {
    const { root } = this.props;

    if (Object.keys(root).length === 0) {
      return null;
    }

    return (
      <div className="model-instance-explorer">
        <InteractiveForceGraph
          labelAttr="label"
          simulationOptions={this.simulationOptions()}
        >
          {ForceGraphChildren({ root })}
        </InteractiveForceGraph>
      </div>
    );
  }
}

ModelInstanceExplorer.propTypes = propTypes;

export default toggleAble(ModelInstanceExplorer);

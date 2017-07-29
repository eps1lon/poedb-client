import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InteractiveForceGraph } from 'react-vis-force';

import ForceGraphChildren from './ForceGraphChildren';
import toggleAble from '../ToggleAble';

import './index.css';

const propTypes = {
  root: PropTypes.object,
};

class ModelInstanceExplorer extends Component {
  render() {
    const { root } = this.props;

    if (Object.keys(root).length === 0) {
      return null;
    }

    return (
      <div className="model-instance-explorer">
        <InteractiveForceGraph
          labelAttr="label"
          simulationOptions={{
            strength: { charge: -1000 },
          }}
        >
          {ForceGraphChildren({ root })}
        </InteractiveForceGraph>
      </div>
    );
  }
}

ModelInstanceExplorer.propTypes = propTypes;

export default toggleAble(ModelInstanceExplorer);

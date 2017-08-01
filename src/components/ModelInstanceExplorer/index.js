import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InteractiveForceGraph } from 'react-vis-force';

import ForceGraphChildren from './ForceGraphChildren';
import toggleAble from '../ToggleAble';

import './index.css';

const propTypes = {
  entities: PropTypes.object,
};

class ModelInstanceExplorer extends Component {
  simulationOptions() {
    return {
      strength: {
        charge: -1000,
      },
    };
  }

  render() {
    const { entities } = this.props;

    if (!entities || Object.keys(entities).length === 0) {
      return null;
    }

    return (
      <div className="model-instance-explorer">
        <InteractiveForceGraph
          labelAttr="label"
          simulationOptions={this.simulationOptions()}
        >
          {ForceGraphChildren({ entities })}
        </InteractiveForceGraph>
      </div>
    );
  }
}

ModelInstanceExplorer.propTypes = propTypes;

export default toggleAble(ModelInstanceExplorer);

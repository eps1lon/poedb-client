import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ExpandableInteractiveForceGraph } from './expandable';
import ForceGraphChildren from './ForceGraphChildren';
import toggleAble from '../ToggleAble';

import './index.css';

const propTypes = {
  entities: PropTypes.object,
  onSelectNode: PropTypes.func,
  schemas: PropTypes.object,
};

class ModelInstanceExplorer extends Component {
  handleSelect(event, node) {
    const { onSelectNode, schemas } = this.props;

    if (onSelectNode) {
      const [key, id] = node.id.split('-');
      const [model, schema] = Object.entries(schemas).find(
        ([model, schema]) => schema.key === key,
      );

      onSelectNode({ id, model, schema });
    }
  }

  simulationOptions() {
    return {
      strength: {
        charge: -1000,
      },
    };
  }

  render() {
    const { entities, schemas } = this.props;
    const handleSelect = this.handleSelect.bind(this);

    if (!entities || Object.keys(entities).length === 0) {
      return null;
    }

    return (
      <div className="model-instance-explorer">
        <ExpandableInteractiveForceGraph
          labelAttr="label"
          simulationOptions={this.simulationOptions()}
          onSelectNode={handleSelect}
        >
          {ForceGraphChildren({ entities, schemas })}
        </ExpandableInteractiveForceGraph>
      </div>
    );
  }
}

ModelInstanceExplorer.propTypes = propTypes;

export default toggleAble(ModelInstanceExplorer);

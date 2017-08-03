import { schemeCategory20c, scaleOrdinal } from 'd3-scale';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ExpandableInteractiveForceGraph } from './expandable';
import ForceGraphChildren from './ForceGraphChildren';
import GraphLegend from './GraphLegend';
import NodeTooltip from './NodeTooltip';
import toggleAble from '../ToggleAble';

import './index.css';

const propTypes = {
  defaultFillColor: PropTypes.string,
  entities: PropTypes.object,
  onNodeHover: PropTypes.func,
  onNodeSelect: PropTypes.func,
  onNodeOut: PropTypes.func,
  schemas: PropTypes.object,
};

const defaultProps = {
  defaultFillColor: 'red',
  onNodeSelect: () => undefined,
};

class ModelInstanceExplorer extends Component {
  constructor(props) {
    super(props);

    this.updateColors();
  }

  componentDidUpdate() {
    this.updateColors();
  }

  handleSelect(event, node) {
    const { onNodeSelect, schemas } = this.props;

    const [key, id] = node.id.split('-');
    const [model, schema] = Object.entries(schemas).find(
      ([model, schema]) => schema.key === key,
    );

    onNodeSelect({ id, model, schema });
  }

  simulationOptions() {
    return {
      strength: {
        charge: -1000,
      },
      width: 1200,
      height: 800,
    };
  }

  updateColors() {
    const { defaultFillColor, schemas } = this.props;
    this.fillColor = scaleOrdinal(schemeCategory20c)
      .domain(Object.values(schemas).map(schema => schema.key))
      .unknown(defaultFillColor);
  }

  render() {
    const { entities, hovered, onNodeHover, onNodeOut, schemas } = this.props;
    const handleSelect = this.handleSelect.bind(this);

    if (!entities || Object.keys(entities).length === 0) {
      return null;
    }

    return (
      <div className="model-instance-explorer">
        <GraphLegend entities={entities} nodeFill={this.fillColor} />
        <div className="model-instance-explorer-graph-group">
          <NodeTooltip node={hovered} />
          <ExpandableInteractiveForceGraph
            className="model-instance-explorer-graph"
            labelAttr="label"
            simulationOptions={this.simulationOptions()}
            onSelectNode={handleSelect}
            zoom={true}
          >
            {ForceGraphChildren({
              entities,
              nodeFill: this.fillColor,
              onNodeHover,
              onNodeOut,
              schemas,
            })}
          </ExpandableInteractiveForceGraph>
        </div>
      </div>
    );
  }
}

ModelInstanceExplorer.propTypes = propTypes;
ModelInstanceExplorer.defaultProps = defaultProps;

export default toggleAble(ModelInstanceExplorer);

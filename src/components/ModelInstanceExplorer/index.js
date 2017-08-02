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
  onSelectNode: PropTypes.func,
  schemas: PropTypes.object,
};

const defaultProps = {
  defaultFillColor: 'red',
};

class ModelInstanceExplorer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: { collection: undefined, props: undefined },
    };

    this.updateColors();
  }

  componentDidUpdate() {
    this.updateColors();
  }

  handleNodeHover(collection, node_props) {
    this.setState({ hovered: { collection, props: node_props } });
  }

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
    const { entities, schemas } = this.props;
    const { hovered } = this.state;

    const handleNodeHover = this.handleNodeHover.bind(this);
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
              onNodeHover: handleNodeHover,
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

import React, { Component } from 'react';
import { ForceGraph, InteractiveForceGraph } from 'react-vis-force';

// see uber/react-vis-force#46
const expandable = Graph => {
  return class extends Component {
    render() {
      const { simulationOptions } = this.props;
      return (
        <Graph
          {...this.props}
          simulationOptions={{ ...simulationOptions, alpha: 1 }}
        />
      );
    }
  };
};

export const ExpandableForceGraph = expandable(ForceGraph);
export const ExpandableInteractiveForceGraph = expandable(
  InteractiveForceGraph,
);

export default expandable;

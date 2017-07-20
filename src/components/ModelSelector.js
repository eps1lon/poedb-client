import React, { Component } from 'react';

class ModelSelector extends Component {
  render() {
    const { models } = this.props;
    return (
      <ul>
        {models.map(name =>
          <li key={name}>
            {name}
          </li>,
        )}
      </ul>
    );
  }
}

export default ModelSelector;

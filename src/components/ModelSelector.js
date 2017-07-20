import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

// static class properties not working with the eslint version used from cra
ModelSelector.propTypes = {
  models: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ModelSelector;

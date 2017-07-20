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
// fixed in cra 1.0.11, see facebookincubator/create-react-app#2735
ModelSelector.propTypes = {
  models: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ModelSelector;

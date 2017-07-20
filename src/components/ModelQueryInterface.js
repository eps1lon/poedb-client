import React, { Component } from 'react';
import PropTypes from 'prop-types';

import QueryInterface from './QueryInterface';

class ModelQueryInterface extends Component {
  handleSubmit(form) {
    const { onSubmit } = this.props;
    if (onSubmit) {
      onSubmit(form);
    }
  }

  render() {
    const { loading, model } = this.props;
    const handleSubmit = this.handleSubmit.bind(this);

    if (loading || !model) {
      return <div>loading...</div>;
    }

    return (
      <fieldset>
        <legend>Search</legend>
        <QueryInterface attributes={model.attributes} onSubmit={handleSubmit} />
      </fieldset>
    );
  }
}

ModelQueryInterface.propTypes = {
  onSubmit: PropTypes.func,
  loading: PropTypes.bool,
  model: PropTypes.object,
};

export default ModelQueryInterface;

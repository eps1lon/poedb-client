import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Control } from 'react-redux-form';

class ModelSelector extends Component {
  render() {
    const { handleChange, models } = this.props;

    return (
      <Form model="model_selector" onChange={handleChange}>
        <label>model:</label>
        <Control.select model=".model">
          {models.map(name =>
            <option key={name} value={name}>
              {name}
            </option>,
          )}
        </Control.select>
      </Form>
    );
  }
}

// static class properties not working with the eslint version used from cra
// fixed in cra 1.0.11, see facebookincubator/create-react-app#2735
ModelSelector.propTypes = {
  models: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ModelSelector;

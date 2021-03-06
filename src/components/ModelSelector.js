import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Control } from 'react-redux-form';

class ModelSelector extends Component {
  defaultValue() {
    return this.props.models[0];
  }

  componentDidMount() {
    const { onMount } = this.props;
    if (onMount) {
      onMount();
    }
  }

  componentDidUpdate() {
    const { newModels } = this.props;
    // explicitly call change here because setting a defaultValue or value
    // in render will not fire a change event.
    // it just looks weird if there is an option displayed in the select
    // but not actually selected. visually there is not difference between
    // the initial display and the first selected value
    if (newModels) {
      newModels(this.defaultValue());
    }
  }

  render() {
    const { models } = this.props;

    return (
      <Form className="model-selector" model="model_selector">
        <label>model:</label>
        <Control.select model=".model" defaultValue={this.defaultValue()}>
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
  newModels: PropTypes.func,
  onMount: PropTypes.func,
};

export default ModelSelector;

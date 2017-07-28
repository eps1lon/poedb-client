import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-redux-form';

import Field from './Field';

import './index.css';

/**
 * TODO since these are dynamic forms their values start off as undefined
 * which causes react to initialize them as uncontrolled components
 * by assigning a value they switch to controlled components which issues a 
 * warning.
 * try initializing the model in the store with some placeholder values
 */
class QueryInterface extends Component {
  render() {
    const { attributes, onSubmit } = this.props;

    return (
      <Form model="query_interface.attributes" onSubmit={onSubmit}>
        <ul>
          {Object.entries(attributes).map(([name, { type }]) => {
            return (
              <Field
                key={name}
                name={name}
                model={`.${name}`}
                Label={`${name}: `}
                type={type}
              />
            );
          })}
        </ul>
      </Form>
    );
  }
}

QueryInterface.propTypes = {
  attributes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
};

export default QueryInterface;

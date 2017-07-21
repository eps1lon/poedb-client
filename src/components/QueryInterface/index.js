import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-redux-form';

import Field from './Field';

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
      <Form model="query_interface" onSubmit={onSubmit}>
        <ul>
          {Object.entries(attributes).map(([name, type]) => {
            return (
              <Field key={name} name={name} Label={`${name}: `} type={type} />
            );
          })}
        </ul>

        <button type="search">search</button>
      </Form>
    );
  }
}

QueryInterface.propTypes = {
  attributes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default QueryInterface;

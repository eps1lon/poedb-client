import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-redux-form';

class QueryInterface extends Component {
  render() {
    const { attributes } = this.props;
    return (
      <Form model="query_interface">
        <ul>
          {Object.entries(attributes).map(([name, type]) => {
            return (
              <li key={name}>
                {name}: {type}
              </li>
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

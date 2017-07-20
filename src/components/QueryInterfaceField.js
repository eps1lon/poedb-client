import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Control } from 'react-redux-form';

import QueryInterfaceControl from './QueryInterfaceControl';

class QueryInterfaceField extends Component {
  render() {
    const { label, name, type } = this.props;
    const model = `.${name}`;
    const id = `query-interface-field-${name}`;

    return (
      <div className="query-interface-field">
        <Control.checkbox model={`${model}.enabled`} />
        <label htmlFor={id}>
          {label}({type})
        </label>
        <QueryInterfaceControl type={type} model={`${model}.value`} id={id} />
      </div>
    );
  }
}

QueryInterfaceField.propTypes = {
  label: PropTypes.string.isRequired, // TODO allow elements
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default QueryInterfaceField;

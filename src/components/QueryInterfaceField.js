import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Control } from 'react-redux-form';

import QueryInterfaceControl from './QueryInterfaceControl';

class QueryInterfaceField extends Component {
  render() {
    const { Label, name, type } = this.props;
    const model = `.${name}`;
    const id = `query-interface-field-${name}`;

    return (
      <div className="query-interface-field">
        <Control.checkbox model={`${model}.enabled`} />
        <label htmlFor={id}>
          {Label}
        </label>
        <QueryInterfaceControl type={type} model={`${model}.value`} id={id} />
      </div>
    );
  }
}

QueryInterfaceField.propTypes = {
  Label: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default QueryInterfaceField;

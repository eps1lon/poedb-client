import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Control } from 'react-redux-form';

const propTypes = {
  show_columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

class TableOptions extends Component {
  render() {
    const { show_columns } = this.props;
    return (
      <Form model="show_columns">
        <em>Show columns:</em>
        <ul>
          {show_columns.map(({ show, label }, i) => {
            const id = `show_columns_${i}`;
            return (
              <li key={i}>
                <label htmlFor={id}>
                  {label}
                </label>
                <Control.checkbox id={id} model={`[${i}]`} value={show} />
              </li>
            );
          })}
        </ul>
      </Form>
    );
  }
}

TableOptions.propTypes = propTypes;

export default TableOptions;

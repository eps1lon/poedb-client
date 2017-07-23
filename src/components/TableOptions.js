import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Control } from 'react-redux-form';

const propTypes = {
  show_columns: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

class TableOptions extends Component {
  render() {
    const { show_columns } = this.props;
    return (
      <Form model="show_columns">
        {show_columns.map((show, i) => {
          return <Control.checkbox key={i} model={`[${i}]`} value={show} />;
        })}
      </Form>
    );
  }
}

TableOptions.propTypes = propTypes;

export default TableOptions;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';

import 'react-table/react-table.css';

class Records extends Component {
  render() {
    const { header, records, loading_records } = this.props;

    return (
      <ReactTable data={loading_records ? [] : records} columns={header} />
    );
  }
}

Records.propTypes = {
  header: PropTypes.arrayOf(PropTypes.object),
  records: PropTypes.arrayOf(PropTypes.object),
};

export default Records;

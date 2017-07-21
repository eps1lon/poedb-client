import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';

import 'react-table/react-table.css';

class Records extends Component {
  render() {
    const { header, loading, records } = this.props;

    return <ReactTable data={records} loading={loading} columns={header} />;
  }
}

Records.propTypes = {
  header: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  records: PropTypes.arrayOf(PropTypes.object),
};

export default Records;

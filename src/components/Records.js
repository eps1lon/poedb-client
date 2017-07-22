import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';

import recordsHeader from './recordsHeader';

import 'react-table/react-table.css';

class Records extends Component {
  handleFetch({ pageSize, page }, instance) {
    // ReactTable starts with 0 but since pagination is all about
    // making it more human readable we will go with actual page values
    this.props.onFetchData({ page: page + 1, page_size: pageSize });
  }

  render() {
    const { loading, model, pages, records } = this.props;
    const onFetchData = this.handleFetch.bind(this);

    return (
      <ReactTable
        data={records}
        loading={loading}
        columns={recordsHeader(model)}
        manual
        onFetchData={onFetchData}
        defaultPageSize={20}
        pages={pages}
        sortable={false}
      />
    );
  }
}

Records.propTypes = {
  model: PropTypes.object,
  loading: PropTypes.bool,
  onFetchData: PropTypes.func.isRequired,
  pages: PropTypes.number,
  records: PropTypes.arrayOf(PropTypes.object),
};

export default Records;

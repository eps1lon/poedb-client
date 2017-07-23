import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';

import 'react-table/react-table.css';

import { isUnknown } from '../util/recordsHeader';

class Records extends Component {
  handleFetch({ pageSize, page }, instance) {
    // ReactTable starts with 0 but since pagination is all about
    // making it more human readable we will go with actual page values
    this.props.onFetchData({ page: page + 1, page_size: pageSize });
  }

  render() {
    const { columns, loading, pages, records } = this.props;
    const onFetchData = this.handleFetch.bind(this);

    return (
      <ReactTable
        data={records}
        loading={loading}
        columns={columns.map(column => {
          return {
            ...column,
            minWidth: isUnknown(column.accessor) ? 20 : 100,
          };
        })}
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
  columns: PropTypes.array,
  loading: PropTypes.bool,
  onFetchData: PropTypes.func.isRequired,
  pages: PropTypes.number,
  records: PropTypes.arrayOf(PropTypes.object),
};

export default Records;

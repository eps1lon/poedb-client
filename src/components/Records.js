import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';

import 'react-table/react-table.css';

import { isUnknown } from '../util/recordsHeader';

class Records extends Component {
  handleExpander(new_expanded, index) {
    const { onExpandedChange } = this.props;

    if (onExpandedChange) {
      // only keep one row expanded at a time
      this.refs.table.setState({
        expanded: { [index]: new_expanded[index] },
      });

      onExpandedChange({
        show: Boolean(new_expanded[index]),
        record: this.props.records[index],
      });
    }
  }

  handleFetch({ pageSize, page, sorted }, instance) {
    // ReactTable starts with 0 but since pagination is all about
    // making it more human readable we will go with actual page values
    this.props.onFetchData({
      page: page + 1,
      page_size: pageSize,
      order: sorted,
    });
  }

  render() {
    const { columns, loading, pages, records } = this.props;
    const onExpandedChange = this.handleExpander.bind(this);
    const onFetchData = this.handleFetch.bind(this);

    return (
      <ReactTable
        ref="table"
        data={records}
        loading={loading}
        columns={[
          {
            expander: true,
            Header: () => <strong>More</strong>,
            width: 65,
            Expander: ({ isExpanded, ...rest }) =>
              <div>
                {isExpanded ? <span>&#x2299;</span> : <span>&#x2295;</span>}
              </div>,
            style: {
              cursor: 'pointer',
              fontSize: 25,
              padding: '0',
              textAlign: 'center',
              userSelect: 'none',
            },
          },
          ...columns.map(column => {
            return {
              ...column,
              minWidth: isUnknown(column.accessor) ? 20 : 100,
            };
          }),
        ]}
        manual
        onExpandedChange={onExpandedChange}
        onFetchData={onFetchData}
        defaultPageSize={20}
        pages={pages}
        sortable={true}
      />
    );
  }
}

Records.propTypes = {
  columns: PropTypes.array,
  loading: PropTypes.bool,
  onExpandedChange: PropTypes.func,
  onFetchData: PropTypes.func.isRequired,
  pages: PropTypes.number,
  records: PropTypes.arrayOf(PropTypes.object),
};

export default Records;

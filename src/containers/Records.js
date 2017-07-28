import { connect } from 'react-redux';

import { fetchData } from '../actions/table';
import Records from '../components/Records';

// format the state shape to a digestible format for react-table
const mapColumns = (columns, show) => {
  return columns.map(({ label, accessor, id }, index) => {
    return {
      Header: label,
      accessor,
      id,
      show: show[index],
    };
  });
};

const mapStateToProps = state => {
  const {
    header: { columns, dirty },
    records: { data: { result, pages }, loading },
    show_columns,
  } = state;
  return {
    columns: mapColumns(columns, show_columns),
    loading,
    pages,
    records: dirty ? [] : result,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onExpandedChange: ({ show, record }) => {
      console.log(show, record);
    },
    onFetchData: ({ page, page_size, order }) =>
      dispatch(
        fetchData({
          page,
          page_size,
          order: order.map(order => [order.id, order.desc ? 'DESC' : 'ASC']),
        }),
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Records);

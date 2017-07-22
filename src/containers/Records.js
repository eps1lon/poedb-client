import { connect } from 'react-redux';

import { setPagination } from '../actions/table';
import Records from '../components/Records';

const mapStateToProps = state => {
  const {
    records: { data: { result, pages }, loading },
    model: { data },
    table: { show_columns },
  } = state;
  return {
    loading,
    model: data,
    pages,
    records: result,
    show_columns,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchData: ({ page, page_size }) =>
      dispatch(setPagination({ page, page_size })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Records);

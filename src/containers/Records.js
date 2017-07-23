import { connect } from 'react-redux';

import { setPagination } from '../actions/table';
import Records from '../components/Records';

const mapStateToProps = state => {
  const {
    header: { model, dirty },
    records: { data: { result, pages }, loading },
    table: { show_columns },
  } = state;
  return {
    loading,
    model,
    pages,
    records: dirty ? [] : result,
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

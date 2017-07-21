import { connect } from 'react-redux';

import { setPagination } from '../actions/table';
import Records from '../components/Records';

const mapStateToProps = state => {
  const {
    records: { data: { result, pages }, loading },
    header: { columns },
  } = state;
  return {
    header: columns,
    loading,
    pages,
    records: result,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchData: ({ page, page_size }) =>
      dispatch(setPagination({ page, page_size })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Records);

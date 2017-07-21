import { connect } from 'react-redux';

import { findAll } from '../actions/records';
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
      dispatch(findAll({ page, page_size })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Records);

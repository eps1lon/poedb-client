import { connect } from 'react-redux';

import Records from '../components/Records';
import { buildHeader } from '../selectors/model';

const mapStateToProps = state => {
  const { records: { data, loading } } = state;
  return {
    header: buildHeader(state),
    records: data,
    loading_records: loading,
  };
};

export default connect(mapStateToProps)(Records);

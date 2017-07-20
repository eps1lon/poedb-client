import { connect } from 'react-redux';

import Records from '../components/Records';
import { buildHeader } from '../selectors/model';

const mapStateToProps = state => {
  const { records } = state;
  return { header: buildHeader(state), records: records.data };
};

export default connect(mapStateToProps)(Records);

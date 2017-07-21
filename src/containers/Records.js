import { connect } from 'react-redux';

import Records from '../components/Records';

const mapStateToProps = state => {
  const { records: { data }, header: { columns } } = state;
  return {
    header: columns,
    records: data,
  };
};

export default connect(mapStateToProps)(Records);

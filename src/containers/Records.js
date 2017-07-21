import { connect } from 'react-redux';

import Records from '../components/Records';

const mapStateToProps = state => {
  const { records: { data, loading }, header: { columns } } = state;
  return {
    header: columns,
    loading,
    records: data,
  };
};

export default connect(mapStateToProps)(Records);

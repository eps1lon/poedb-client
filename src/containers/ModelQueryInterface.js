import { connect } from 'react-redux';

import { querySubmit } from '../actions/table';
import ModelQueryInterface from '../components/ModelQueryInterface';

const mapStateToProps = ({ model: { loading }, query_interface }) => {
  return { query_interface, loading };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: () => {
      dispatch(querySubmit());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ModelQueryInterface,
);

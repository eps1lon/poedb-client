import { connect } from 'react-redux';

import { querySubmit } from '../actions/table';
import ModelQueryInterface from '../components/ModelQueryInterface';

const mapStateToProps = ({ model: { data, loading } }) => {
  return { model: data, loading };
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

import { connect } from 'react-redux';

import { findAll } from '../actions/records';
import ModelQueryInterface from '../components/ModelQueryInterface';
import { whereObjectBuilder } from '../util/form';

const mapStateToProps = ({ model: { data: { description }, loading } }) => {
  return { model: description, loading };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: form => {
      dispatch(findAll({ where: whereObjectBuilder(form) }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ModelQueryInterface,
);

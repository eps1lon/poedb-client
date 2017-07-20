import { connect } from 'react-redux';

import ModelQueryInterface from '../components/ModelQueryInterface';

const mapStateToProps = ({ model: { data: { description }, loading } }) => {
  return { model: description, loading };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: form => {
      console.log('submit');
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ModelQueryInterface,
);

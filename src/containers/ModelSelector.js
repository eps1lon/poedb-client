import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

import api from '../api';
import ModelSelector from '../components/ModelSelector';

const mapStateToProps = ({ models: { data } }) => {
  return { models: data };
};

const mapDispatchToProps = dispatch => {
  return {
    newModels: value => {
      dispatch(actions.change('model_selector.model', value));
    },
    init: dispatch(api.actions.models()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelSelector);

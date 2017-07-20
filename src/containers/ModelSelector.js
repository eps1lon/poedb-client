import { connect } from 'react-redux';

import api from '../api';
import ModelSelector from '../components/ModelSelector';

const mapStateToProps = ({ models: { data } }) => {
  return { models: data };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: model => {
      console.log('change', model);
    },
    init: dispatch(api.actions.models()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelSelector);

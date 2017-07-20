import { connect } from 'react-redux';

import ModelSelector from '../components/ModelSelector';

const mapStateToProps = ({ models: { data } }) => {
  return { models: data };
};

export default connect(mapStateToProps)(ModelSelector);

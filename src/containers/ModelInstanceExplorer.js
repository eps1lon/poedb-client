import { connect } from 'react-redux';

import ModelInstanceExplorer from '../components/ModelInstanceExplorer';

const mapStateToProps = ({ explorer: { show } }) => {
  return {
    show,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ModelInstanceExplorer,
);

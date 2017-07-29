import { connect } from 'react-redux';

import ModelInstanceExplorer from '../components/ModelInstanceExplorer';

const mapStateToProps = ({ explorer: { show, data }, record: { loading } }) => {
  return {
    root: data,
    loading,
    show,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ModelInstanceExplorer,
);

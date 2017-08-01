import { connect } from 'react-redux';

import ModelInstanceExplorer from '../components/ModelInstanceExplorer';

const mapStateToProps = ({
  explorer: { entities, root, show },
  record: { loading },
}) => {
  return {
    entities,
    root,
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

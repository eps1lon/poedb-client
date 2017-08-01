import { connect } from 'react-redux';

import { nodeSelected } from '../actions/explorer';
import ModelInstanceExplorer from '../components/ModelInstanceExplorer';
import * as schemas from '../schema/generated';

const mapStateToProps = ({
  explorer: { entities, root, show },
  record: { loading },
}) => {
  return {
    entities,
    root,
    loading,
    show,
    schemas,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectNode: node => dispatch(nodeSelected(node)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ModelInstanceExplorer,
);

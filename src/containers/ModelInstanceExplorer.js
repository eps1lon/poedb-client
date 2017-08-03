import { connect } from 'react-redux';

import { nodeSelected, nodeHovered, nodeOut } from '../actions/explorer';
import ModelInstanceExplorer from '../components/ModelInstanceExplorer';
import * as schemas from '../schema/generated';

const mapStateToProps = ({
  explorer: { entities, hover, root, show },
  record: { loading },
}) => {
  return {
    entities,
    hovered: hover,
    root,
    loading,
    show,
    schemas,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectNode: node => dispatch(nodeSelected(node)),
    onHoverNode: (collection, props) =>
      dispatch(nodeHovered({ collection, props })),
    onOutNode: (collection, props) => dispatch(nodeOut({ collection, props })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ModelInstanceExplorer,
);

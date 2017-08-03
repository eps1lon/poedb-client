import { connect } from 'react-redux';

import { nodeSelected, nodeHovered, nodeOut } from '../actions/explorer';
import ModelInstanceExplorer from '../components/ModelInstanceExplorer';
import * as schemas from '../schema/generated';
import { visibleTooltipAttributes } from '../selectors/explorer';

const mapStateToProps = ({
  explorer: { entities, hover, root, show },
  record: { loading },
}) => {
  return {
    entities,
    hovered: visibleTooltipAttributes(hover),
    root,
    loading,
    show,
    schemas,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNodeHover: (collection, props) =>
      dispatch(nodeHovered({ collection, props })),
    onNodeSelect: node => dispatch(nodeSelected(node)),
    onNodeOut: (collection, props) => dispatch(nodeOut({ collection, props })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ModelInstanceExplorer,
);

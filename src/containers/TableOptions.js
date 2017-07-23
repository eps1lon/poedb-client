import { connect } from 'react-redux';

import TableOptions from '../components/TableOptions';

const mapStateToProps = state => {
  return {
    show_columns: state.show_columns,
  };
};

export default connect(mapStateToProps)(TableOptions);

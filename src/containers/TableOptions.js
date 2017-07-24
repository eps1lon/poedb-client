import { connect } from 'react-redux';

import TableOptions from '../components/TableOptions';

const mapStateToProps = state => {
  return {
    show_columns: state.show_columns.map((show, i) => {
      return {
        label: state.header.columns[i].label,
        show,
      };
    }),
  };
};

export default connect(mapStateToProps)(TableOptions);

import { DISPLAY_HEADER } from '../actions/header';

const forms = {
  model_selector: { model: '' },
  query_interface: {
    attributes: {},
  },
  show_columns: (state = [], action) => {
    if (action.type === DISPLAY_HEADER) {
      return Array(action.payload.columns.length).fill(true);
    } else {
      return state;
    }
  },
};

export default forms;

import { DISPLAY_HEADER } from '../actions/header';
import api from '../api';

/**
 * this is just a cached copy of state.model
 * we only want to update the header once the user presses search because
 * otherwise header and body of the table will have the same underlying model.
 * But the model is updated once we select another one. 
 */

const initial = {
  columns: [],
  dirty: false,
};

const header = (state = initial, action) => {
  const { type, payload } = action;
  switch (type) {
    // new records should trigger the write through of the header
    // we could skip this dirty bit and just have inconsistent records-header
    // for a couple of ms but we keep it clean and wait for the display header
    case api.events.records.actionSuccess:
      return {
        ...state,
        dirty: true,
      };
    case DISPLAY_HEADER:
      return {
        ...state,
        columns: payload.columns,
        dirty: false,
      };
    default:
      return state;
  }
};

export default header;

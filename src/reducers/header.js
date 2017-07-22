import { DISPLAY_HEADER } from '../actions/header';

/**
 * this is just a cached copy of state.model
 * we only want to update the header once the user presses search because
 * otherwise header and body of the table will have the same underlying model.
 * But the model is updated once we select another one. 
 */

const initial = {
  model: {},
};

const header = (state = initial, { type, payload }) => {
  switch (type) {
    case DISPLAY_HEADER:
      return {
        ...state,
        model: payload.model,
      };
    default:
      return state;
  }
};

export default header;

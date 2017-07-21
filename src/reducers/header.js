import { DISPLAY_HEADER } from '../actions/header';

const initial = {
  columns: [],
};

const header = (state = initial, { type, payload }) => {
  switch (type) {
    case DISPLAY_HEADER:
      return {
        ...state,
        columns: payload.columns,
      };
    default:
      return state;
  }
};

export default header;

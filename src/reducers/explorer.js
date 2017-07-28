import { HIDE_EXPLORER, SHOW_EXPLORER } from '../actions/explorer';

const initial = {
  loading: false,
  data: {},
  show: false,
};

const explorer = (state = initial, action) => {
  switch (action.type) {
    case SHOW_EXPLORER:
      return {
        ...state,
        show: true,
      };
    case HIDE_EXPLORER:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

export default explorer;

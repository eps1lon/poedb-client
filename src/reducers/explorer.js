import { HIDE_EXPLORER, SHOW_EXPLORER } from '../actions/explorer';
import api from '../api';

const initial = {
  data: {},
  show: false,
};

const explorer = (state = initial, action) => {
  switch (action.type) {
    case api.events.record.actionSuccess:
      return {
        ...state,
        data: action.data,
      };
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

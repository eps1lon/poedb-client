import { SET_PAGINATION } from '../actions/table';

const initial = {
  page: 1,
  page_size: 20,
};

const table = (state = initial, action) => {
  switch (action.type) {
    case SET_PAGINATION:
      const { page, page_size } = action.payload;
      return {
        ...state,
        page,
        page_size,
      };
    default:
      return state;
  }
};

export default table;

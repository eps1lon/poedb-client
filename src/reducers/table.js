import { SET_COLUMN_VISIBILITIES, SET_PAGINATION } from '../actions/table';

const initial = {
  page: 1,
  page_size: 20,
  // [show?,...]
  show_columns: [],
};

const table = (state = initial, action) => {
  switch (action.type) {
    case SET_COLUMN_VISIBILITIES:
      return {
        ...state,
        show_columns: action.payload.show_columns,
      };
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

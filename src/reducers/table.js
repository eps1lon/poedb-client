import { FETCH_DATA } from '../actions/table';

const initial = {
  page: 1,
  page_size: 20,
  order: ['row', 'ASC'],
};

const table = (state = initial, action) => {
  switch (action.type) {
    case FETCH_DATA:
      const { page, page_size, order } = action.payload;
      return {
        ...state,
        page,
        page_size,
        order,
      };
    default:
      return state;
  }
};

export default table;

export const SET_PAGINATION = 'FILTER/PAGINATE';
export const QUERY_SUBMIT = 'TABLE/QUERY_SUBMIT';

export const querySubmit = () => {
  return { type: QUERY_SUBMIT };
};

export const setPagination = ({ page, page_size }) => {
  return {
    type: SET_PAGINATION,
    payload: { page, page_size },
  };
};

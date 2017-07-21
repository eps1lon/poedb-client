export const SET_PAGINATION = 'FILTER/PAGINATE';

export const setPagination = ({ page, page_size }) => {
  return {
    type: SET_PAGINATION,
    payload: { page, page_size },
  };
};

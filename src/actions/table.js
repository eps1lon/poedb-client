import { actions } from 'react-redux-form';

export const SET_COLUMN_VISIBILITIES = 'TABLE/SET_COLUM_VISIBILITIES';
export const SET_PAGINATION = 'FILTER/PAGINATE';
export const QUERY_SUBMIT = 'TABLE/QUERY_SUBMIT';

export const setColumnVisibilities = (...show_columns) => {
  return actions.change('show_columns', show_columns);
};

export const querySubmit = () => {
  return { type: QUERY_SUBMIT };
};

export const setPagination = ({ page, page_size }) => {
  return {
    type: SET_PAGINATION,
    payload: { page, page_size },
  };
};

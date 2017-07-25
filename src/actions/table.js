export const SET_COLUMN_VISIBILITIES = 'TABLE/SET_COLUM_VISIBILITIES';
export const FETCH_DATA = 'TABLE/FETCH_DATA';
export const QUERY_SUBMIT = 'TABLE/QUERY_SUBMIT';

export const querySubmit = () => {
  return { type: QUERY_SUBMIT };
};

export const fetchData = ({ page, page_size, order }) => {
  return {
    type: FETCH_DATA,
    payload: { page, page_size, order },
  };
};

export const SET_COLUMN_VISIBILITIES = 'TABLE/SET_COLUM_VISIBILITIES';
export const FETCH_DATA = 'TABLE/FETCH_DATA';
export const QUERY_SUBMIT = 'TABLE/QUERY_SUBMIT';

export type Ordering = [string, string][];

export const querySubmit = () => {
  return { type: QUERY_SUBMIT };
};

export const fetchData = (props: {
  page: number,
  page_size: number,
  order: Ordering,
}) => {
  const { page, page_size, order } = props;
  return {
    type: FETCH_DATA,
    payload: { page, page_size, order },
  };
};

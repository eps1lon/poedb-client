// @flow
import recordsHeader from '../util/recordsHeader';

export const DISPLAY_HEADER = 'DISPLAY_HEADER';

export type Action = {
  type: 'DISPLAY_HEADER',
  payload: { columns: boolean[] },
};

export const displayHeader = (model: Object): Action => {
  return {
    type: DISPLAY_HEADER,
    payload: { columns: recordsHeader(model) },
  };
};

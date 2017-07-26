// @flow
import recordsHeader from '../util/recordsHeader';
import type { ColumnForHeader, ModelDescription } from '../util/recordsHeader';

export const DISPLAY_HEADER = 'DISPLAY_HEADER';

export type Action = {
  type: 'DISPLAY_HEADER',
  payload: { columns: ColumnForHeader[] },
};

export const displayHeader = (model: ModelDescription): Action => {
  return {
    type: DISPLAY_HEADER,
    payload: { columns: recordsHeader(model) },
  };
};

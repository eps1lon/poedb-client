// @flow
import recordsHeader from '../util/recordsHeader';
import type { ModelDescription } from '../api';

export const DISPLAY_HEADER = 'DISPLAY_HEADER';

export const displayHeader = (model: ModelDescription) => {
  return {
    type: DISPLAY_HEADER,
    payload: { columns: recordsHeader(model) },
  };
};

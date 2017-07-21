import { pluralize } from 'inflection';

import api from '../api';
import { selectedModelName } from '../selectors/model';

export const findAll = ({ where }) => (dispatch, getState) => {
  const model = selectedModelName(getState());

  if (typeof model === 'string') {
    dispatch(api.actions.records({ model: pluralize(model), where }));
  }
};

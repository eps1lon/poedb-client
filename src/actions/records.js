import { pluralize } from 'inflection';

import api from '../api';
import { selectedModelName } from '../selectors/model';

export const findAll = form => (dispatch, getState) => {
  const model = selectedModelName(getState());

  if (typeof model === 'string') {
    dispatch(
      // TODO actually consider form in where
      api.actions.records({ model: pluralize(model), where: { row: 1 } }),
    );
  }
};

import { pluralize } from 'inflection';

import api from '../api';
import { selectedModelName } from '../selectors/model';

export const findAll = ({ where, page = 1, page_size = 20 }) => (
  dispatch,
  getState,
) => {
  const model = selectedModelName(getState());

  if (typeof model === 'string') {
    dispatch(
      api.actions.records({ model: pluralize(model), where, page, page_size }),
    );
  }
};

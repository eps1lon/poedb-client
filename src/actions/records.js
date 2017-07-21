import { pluralize } from 'inflection';

import api from '../api';

export const findAll = ({ model, where = {}, page = 1, page_size = 20 }) => {
  return api.actions.records({
    model: pluralize(model),
    where,
    page,
    page_size,
  });
};

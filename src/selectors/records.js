import { singularize } from 'inflection';

import { MODEL_NAME } from '../api';

export const modelOfRecords = state =>
  singularize(state.records.data.result[0][MODEL_NAME]);
